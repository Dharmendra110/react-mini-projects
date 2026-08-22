import React, { useEffect, useRef, useState } from 'react';

const InfiniteScroll = () => {
  const  [items,setItems] = useState([]);
  const [page,setPage] = useState(1);
  const [loading,setLoading] = useState(false);
  const loaderRef = useRef(null)

  // 1. Data Fetching Logic
  useEffect(()=>{
    const fetchData = async()=>{
      setLoading(true);
      await new Promise((res)=>setTimeout(res,1000)); // Fake Delay

      const newData = Array.from({length:10},(_,i)=>`Item ${(page-1)*10+i+1}`);
      setItems((prev)=>[...prev,...newData])
      setLoading(false);
    };
    fetchData();
  },[page])

  // 2. Observer Logic
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      if(entries[0].isIntersecting && !loading){
        setPage((prev)=>prev+1);
      }
    });

    if(loaderRef.current) observer.observe(loaderRef.current);
    return ()=> observer.disconnect();
  },[loading])
  return (
    <div>
      <h1 className="text-3xl text-purple-600 font-extrabold ">Infinite Scrolling</h1>
     {items.map((item, i) => (
        <p key={i}>{item}</p>
     ))}
      <div className="text-2xl font-bold text-yellow-500 mt-5" ref={loaderRef}>
      {loading ? "Loading..." : ""}
      </div>
    </div>
  );
}

export default InfiniteScroll;







