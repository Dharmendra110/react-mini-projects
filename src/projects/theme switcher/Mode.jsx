import React, { useEffect, useState } from 'react';

const Mode = () => {
  const [mode,setMode]= useState(()=>localStorage.getItem('theme')||'dark')

  useEffect(()=>{
    localStorage.setItem('theme',mode)
  },[mode])
  
   function toggle(){
    setMode((prev)=>prev==='dark'?'light':'dark')
   }
  
  return (
    <div className={`h-[50rem]  ${mode==='dark'?'bg-gray-900 text-white':'bg-white text-black'}`}>
      <h1 className='text-4xl font-bold text-purple-500 '>Theme Swithcer</h1>
      <h1 className='text-2xl p-5'>{mode} </h1>

      <button onClick={toggle} className={` p-2 font-bold rounded ${mode==='dark'? 'bg-white text-black':'bg-black text-white'}`}>{mode==='dark'?'Light':'Dark'}</button>

  
    </div>
  );
}

export default Mode;
