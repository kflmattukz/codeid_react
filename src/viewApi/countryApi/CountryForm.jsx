import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import countryApi from '../../api/countryApi';
import regionApi from '../../api/regionApi';

function CountryForm({ edit }) {
  const [regions, setRegions] = useState([]);
  const formik = useFormik({
    initialValues: {
      countryId: edit ? edit.countryId : '',
      countryName: edit ? edit.countryName : '',
      regionId: edit ? edit.regionId : '',
    },
    validationSchema: Yup.object().shape({
      countryId: Yup.string().required('You Must Provite an ID for Country'),
      countryName: Yup.string().required('Country Name must be inserted'),
      regionId: Yup.number().required('You must choose region'),
    }),
    onSubmit: (values) => {
      values.regionId = Number(values.regionId);
      countryApi.addCountry(values).then((res) => {
        if (res) {
          setNotif(!notif);
          window.location = '/country';
        }
      });
    },
  });

  useEffect(() => {
    regionApi.getAll().then((data) => setRegions(data));
  }, []);
  const [notif, setNotif] = useState(false);

  if (notif) {
    setTimeout(() => {
      setNotif(!notif);
    }, 2000);
  }

  return (
    <form
      className='mt-5 flex flex-col w-3/5 gap-3 text-gray-700'
      onSubmit={formik.handleSubmit}
    >
      {edit ? (
        <>
          <label htmlFor='countryId'>Country Id</label>
          <input
            value={formik.values.countryId}
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm'
            onChange={formik.handleChange}
            type='text'
            name='countryId'
            id='countryId'
            // placeholder='ex. ID for Indonesia'
            disabled={true}
          />
          <label htmlFor='countryName'>Country Name</label>
          <input
            value={formik.values.countryName}
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm'
            onChange={formik.handleChange}
            type='text'
            name='countryName'
            id='countryName'
            placeholder='Indonesia'
          />
          <label htmlFor='regionId'>Region</label>
          <select
            value={formik.values.regionId}
            className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full'
            name='regionId'
            id='regionId'
            onChange={(e) => formik.setFieldValue('regionId', e.target.value)}
          >
            <option value=''> -- Choose Region -- </option>
            {regions?.map((region) => {
              return (
                <option key={region.regionId} value={region.regionId}>
                  {region.regionName}
                </option>
              );
            })}
          </select>

          <button
            className='bg-blue-500 text-white py-1 px-2 rounded'
            type='submit'
          >
            Update Country
          </button>
        </>
      ) : (
        <>
          <label htmlFor='countryId'>Country Id</label>
          <input
            value={formik.values.countryId}
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm'
            onChange={formik.handleChange}
            type='text'
            name='countryId'
            id='countryId'
            placeholder='ex. ID for Indonesia'
          />
          {formik.errors ? <p>{formik.errors.countryId}</p> : ''}
          <label htmlFor='countryName'>Country Name</label>
          <input
            value={formik.values.countryName}
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm'
            onChange={formik.handleChange}
            type='text'
            name='countryName'
            id='countryName'
            placeholder='Indonesia'
          />
          {formik.errors ? <p>{formik.errors.countryName}</p> : ''}
          <label htmlFor='regionId'>Region</label>
          <select
            value={formik.values.regionId}
            className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full'
            name='regionId'
            id='regionId'
            onChange={(e) => formik.setFieldValue('regionId', e.target.value)}
          >
            <option value=''> -- Choose Region -- </option>
            {regions?.map((region) => {
              return (
                <option key={region.regionId} value={region.regionId}>
                  {region.regionName}
                </option>
              );
            })}
          </select>
          {formik.errors ? <p>{formik.errors.regionId}</p> : ''}
          <button
            className='bg-blue-500 text-white py-1 px-2 rounded'
            type='submit'
          >
            Add Country
          </button>
        </>
      )}

      <p>
        {notif
          ? edit
            ? 'Update Country Success'
            : 'Add Country Success !'
          : ''}
      </p>
    </form>
  );
}

export default CountryForm;
