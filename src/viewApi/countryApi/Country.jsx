import React, { useState } from 'react';
import CountryForm from './CountryForm';
import CountryList from './CountryList';

function Country() {
  const [showForm, setShowForm] = useState(false);
  const [countryEdit, setCountryEdit] = useState({
    countryId: '',
    countryName: '',
    regionId: 0,
  });

  return (
    <div className='mt-5 w-3/5 mx-auto'>
      <button
        onClick={() => {
          setCountryEdit({}), setShowForm(!showForm);
        }}
        className='py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold outline-none rounded shadow-sm duration-300'
      >
        {showForm ? 'List Countries' : 'Add Country'}
      </button>
      {showForm ? (
        countryEdit.countryId ? (
          <CountryForm edit={countryEdit} />
        ) : (
          <CountryForm />
        )
      ) : (
        <CountryList editCountry={setCountryEdit} editForm={setShowForm} />
      )}
    </div>
  );
}

export default Country;
