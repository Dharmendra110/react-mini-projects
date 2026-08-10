import React, { useEffect, useState } from 'react';

const ColorMixer = () => {

  let colors = JSON.parse(localStorage.getItem('color'))
  const [r,setR] = useState(colors?colors.r:0 )
  const [g,setG] = useState(colors?colors.g:0)
  const [b,setB] = useState(colors?colors.b:0)

  
  useEffect(()=>{
    localStorage.setItem('color',JSON.stringify({r,g,b}))
  },[r,g,b])


  return (
    <div className='border-t m-5'>
      <h1 className='text-3xl font-bold m-5'>Color Mixer</h1>

      <div className='flex justify-center'>
      <div className='h-50 w-50' style={{backgroundColor:`rgb(${r},${g},${b})`}}>
      </div>
      </div>
        <span className='m-2'>R: {r}</span>
        <span className='m-2'>G: {g}</span>
        <span className='m-2'>B: {b}</span> <br /> <br />

      <label className='m-1' htmlFor="red">Red</label>
      <input onChange={(e)=>setR(e.target.value)} id='red' type="range" min={0} max={255} /> <br /> <br />

      <label  className='m-1' htmlFor="green">Blue</label>
      <input onChange={(e)=>setG(e.target.value)}  id='green' type="range" min={0} max={255} /> <br /> <br />

      <label className='m-1' htmlFor="blue">Blue</label>
      <input onChange={(e)=>setB(e.target.value)}  id='blue' type="range" min={0} max={255} /> <br /> <br />

   

   
    </div>
  );
}

export default ColorMixer;
