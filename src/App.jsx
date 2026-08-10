import React, { useEffect, useRef, useState } from "react";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [count, setCount] = useState(0);
  const lastVal = useRef(0);

  useEffect(() => {
    lastVal.current = count;
  }, [count]);

  function handleClick() {
    setCount(Math.floor(Math.random() * 10));
  }

  return (
    <div className="text-center">
      {/* <h1>Current {count}</h1>
      <h1> Last {lastVal.current}</h1>
      <button onClick={handleClick}>Click</button> */}

      <AppRoutes />
    



      {/* <Routes>
        <Route path='/' element={ <Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
       </Routes> */}

      {/* <Routes>
        <Route path='/' element=}/>
        <Route path='/about' element={}/>
        <Route path='/contact' element={}/>
      </Routes>   */}
    </div>
  );
};

export default App;
