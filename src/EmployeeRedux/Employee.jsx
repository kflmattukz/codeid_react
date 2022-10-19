import React, { useState } from 'react'
import FromInput from './FromInput';
import ListEmployee from './ListEmployee';

function Employee() {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className='w-3/5 mx-auto mt-5'>
      <button
        className='py-2 px-3 rounded-sm shadow-md bg-green-600 hover:bg-green-700 focus:outline-none font-semibold text-gray-50'
        onClick={() => setShowForm(!showForm)}
      >
        { showForm ? 'List Employee' : 'Add Employee' }
      </button>
      { showForm ? <FromInput/> : <ListEmployee /> }
    </div>
  )
}

export default Employee