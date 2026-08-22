import React from 'react';
import { NavLink } from 'react-router';

const Steps = () => {
  const formSteps = [
    {name:'Step 1 ', path:'personal'},
    {name:'Step 2 ', path:'personal'},
    {name:'Step 3 ', path:'personal'},

]
  return (
    <div className='text-lg text-bold flex justify-center gap-20  '>
      {
        formSteps.map((step)=>(
      <NavLink className='border p-2 rounded-full bg-green-500' to={step.path}>{step.name}</NavLink>
        ))
      }
    </div>
  );
}

export default Steps;
