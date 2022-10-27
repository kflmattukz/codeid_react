import React, { useState } from 'react'
import JhList from './JhList'
import JhForm from './JhForm'

function Jh() {

  const [showForm, setShowForm] = useState(false)
  const [jhEdit, setJhEdit] = useState({})

  return (
    <div className='w-4/5 mx-auto mt-5'>
      <button 
        className='py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold outline-none rounded shadow-sm duration-300'
        onClick={ () => {setJhEdit({}) ,setShowForm(!showForm)} }
      >
        { showForm ? 'List Job Histories' : 'Add Job History'}
      </button>
      { showForm ? jhEdit.jobId ? <JhForm edit={jhEdit} /> : <JhForm/> : <JhList editJh={setJhEdit} editForm={setShowForm} /> }
    </div>
  )
}

export default Jh