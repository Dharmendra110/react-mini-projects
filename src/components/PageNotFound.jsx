import React from 'react';
import { Link } from 'react-router';

const PageNotFound = () => {
  return (
    <div className='  mt-20 mb-'>
      <Link className='text-4xl font-bold bg-purple-800 rounded p-2' to={'/'}>Back</Link>
      <h1 className='text-4xl m-5 text-green-400'>Page Not Found</h1>
      <div className='flex justify-center items-center m-15 '>
      <img className='w-[80vh]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrGYbficho29D3Nx_DKEyvJ_0ES8YpkzU8u47p_dXCQ&s=10" alt="404" /> 
      </div>
    </div>
  );
}

export default PageNotFound;
