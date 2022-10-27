import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='w-3/5 mx-auto mt-5'>
      <div className='border border-gray-300 p-5 rounded-md shadow-md text-gray-700'>
        <h2 className="text-4xl text-center font-bold">404 Page Not Found</h2>
      </div>
      <Link to={'/'}>
        <button className='mt-5 bg-blue-600 px-3 py-2 rounded-md shadow-md text-white font-semibold'>
          Back to Home
        </button>
      </Link>
    </div>
  )
}

export default NotFound