import React from 'react';

const PersonalDetails = () => {
  return (
    <div className='m-5'>
      <h1 className='text-lg font-bold text-blue-500'>Personal Details</h1>
      <form >
        <label htmlFor="name">Name</label>
        <input type="text" id='name' placeholder='Enter your name' />
        <label htmlFor="email">Email</label>
      </form>
    </div>
  );
}

export default PersonalDetails;
