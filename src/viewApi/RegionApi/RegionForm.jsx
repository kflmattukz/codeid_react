import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  checkFileSize,
  checkFileType,
} from '../../helper/fileUploadValidation';
import { addRegion } from '../../redux/actions/region';
// import regionApi from '../../api/regionApi';

function RegionForm({ edit }) {
  const dispatch = useDispatch();

  const FILE_SIZE = 1 * 1024 * 1024;
  const SUPPORTED_FORMATS = [
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/png',
  ];

  const formik = useFormik({
    initialValues: {
      regionId: edit ? edit.regionId : '',
      regionName: edit ? edit.regionName : '',
      regionFile: edit ? edit.regionFile : '',
      regionPhoto: edit ? edit.regionPhoto : '',
    },
    validationSchema: Yup.object().shape({
      regionName: Yup.string()
        .min(3, 'Region Name at least have 3 characters')
        .max(25, 'Region Name max 25 characters')
        .required("Region name couln'd empty"),
      regionFile: Yup.mixed()
        .required('You must upload region file')
        .test(
          'FILE TYPE IS CORRECT',
          'File format not match',
          (value) => value && SUPPORTED_FORMATS.includes(value.type)
        )
        .test(
          'FILE SIZE IS NOT TOO BIG',
          'File Size too big',
          (value) => value && value.size <= FILE_SIZE
        ),
      regionPhoto: Yup.mixed()
        .required('You must upload region Photo')
        .test(
          'FILE TYPE IS CORRECT',
          'File format not match',
          (value) => value && SUPPORTED_FORMATS.includes(value.type)
        )
        .test(
          'FILE SIZE IS NOT TOO BIG',
          'File size too big',
          (value) => value && value.size <= FILE_SIZE
        ),
    }),
    onSubmit: (values) => {
      dispatch(addRegion(values));
    },
  });

  console.log(formik.values);

  const [notif, setNotif] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  if (notif) {
    setTimeout(() => {
      setNotif(!notif);
    }, 2000);
  }

  return (
    <div className='mt-5'>
      <form
        onSubmit={formik.handleSubmit}
        encType='multipart/form-data'
        className='flex flex-col w-1/2 gap-3 text-gray-700'
      >
        {edit?.regionId ? (
          <>
            <label htmlFor='regionId'></label>
            <input
              className='px-2 py-1 rounded bg-white ring-blue-400'
              type='text'
              disabled={true}
              name='regionId'
              value={formik.values.regionId}
            />
            <label htmlFor='regionName' className='font-semibold'>
              Region Name
            </label>
            <input
              value={formik.values.regionName}
              className='px-2 py-1 rounded focus:outline-none focus:ring ring-blue-400'
              onChange={formik.handleChange}
              type='text'
              name='regionName'
              id='regionName'
            />
            <label htmlFor='regionFile' className='font-semibold'>
              Region File
            </label>
            <input
              value={formik.values.regionFile.filename}
              onChange={(e) =>
                formik.setFieldValue('regionFile', e.target.files[0])
              }
              type='file'
              name='regionFile'
              id='regionFile'
            />
            <label htmlFor='regionPhoto' className='font-semibold'>
              Region Photo
            </label>
            <input
              value={formik.values.regionPhoto.filename}
              onChange={(e) =>
                formik.setFieldValue('regionPhoto', e.target.files[0])
              }
              type='file'
              name='regionPhoto'
              id='regionPhoto'
            />
            <button
              type='submit'
              className='text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 font-semibold rounded-md hover:shadow-md duration-300'
            >
              Update Region
            </button>
          </>
        ) : (
          <>
            <label htmlFor='regionName' className='font-semibold'>
              Region Name
            </label>
            <input
              value={formik.values.regionName}
              className='px-2 py-1 rounded focus:outline-none focus:ring ring-blue-400'
              onChange={formik.handleChange}
              type='text'
              name='regionName'
              id='regionName'
            />
            {formik.errors ? <p>{formik.errors.regionName}</p> : ''}
            <label htmlFor='regionFile' className='font-semibold'>
              Region File
            </label>
            <input
              value={formik.values.regionFile.filename}
              onChange={(e) =>
                formik.setFieldValue('regionFile', e.target.files[0])
              }
              type='file'
              name='regionFile'
              id='regionFile'
            />
            {formik.errors ? <p>{formik.errors.regionFile}</p> : ''}
            <label htmlFor='regionPhoto' className='font-semibold'>
              Region Photo
            </label>
            <input
              value={formik.values.regionPhoto.filename}
              onChange={(e) =>
                formik.setFieldValue('regionPhoto', e.target.files[0])
              }
              type='file'
              name='regionPhoto'
              id='regionPhoto'
            />
            {formik.errors ? <p>{formik.errors.regionPhoto}</p> : ''}
            <button
              type='submit'
              className='text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 font-semibold rounded-md hover:shadow-md duration-300'
            >
              Input Region
            </button>
          </>
        )}
      </form>
      <p className='mt-5 text-gray-700 font-semibold text-lg'>
        {notif
          ? edit.regionId
            ? 'Update Region Success'
            : 'Add Region Success'
          : ''}
      </p>
    </div>
  );
}

export default RegionForm;
