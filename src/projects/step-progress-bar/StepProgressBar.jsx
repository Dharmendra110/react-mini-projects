import React, { useState } from 'react';

const StepProgressBar = () => {
  const [progress,setProgress] = useState(1);

  const steps = ['step 1','step 2','step 3','step 4','step 5']

    function handleNext(){
      if(steps.length-1>=progress){
        setProgress(progress+1)

      }
    }

   function hanndlePrevious(){
    if(progress>1){
      setProgress(progress-1)
    }
   }


  return (
    <div className='border-t  m-5'>
      <h1 className='m-5 text-4xl font-bold'>Step Progress Bar</h1>
      <div className='flex justify-center gap-10 '>
        {
          steps.map((step,index)=>(
            <h1 className={`p-2 rounded-full ${progress<=index?'bg-pink-500':'bg-green-600'}`} key={index}>{step}</h1>
          ))
        }
      </div>
      <div className='flex justify-center gap-10 m-10'>
        <button onClick={hanndlePrevious} className='border rounded p-2 bg-sky-600'>Previous</button>
        <button onClick={handleNext} className='border rounded p-2 bg-sky-600'>Next</button>
      </div>
    </div>
  );
}

export default StepProgressBar;
