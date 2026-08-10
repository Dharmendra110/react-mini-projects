import { useThrottleFn } from "ahooks";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const Debouce = () => {
  const [search, setSearch] = useState("");
  const [data,setData] = useState('')
  // Custom Debouce
  useEffect(()=>{
    const delayFn = setTimeout(() => {
   if(search){
    console.log('React API Call:',search)
    setData(search)
   }
    },2000);

    return ()=>  clearTimeout(delayFn)
  },[search])

  // use-debounce Library
  // const [value] = useDebounce(search,2000)

  // ahooks Library for throttling

//   const {run} = useThrottleFn(()=>{
//     console.log('Throttled function executed')
//   },
// {
//   wait:2000
// })

  return (
    <div>
      <h1 className="text-2xl text-purple-500 font-bold p-3">Debouced Search</h1>
      <h1 className="text-xl text-yellow-400">{data}</h1>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="border"
        type="text"
        placeholder="enter something"
      />
      {/* <button className="m-2 bg-amber-500 p-1 rounded" onClick={run}>Click</button> */}
    </div>
  );
};

export default Debouce;

