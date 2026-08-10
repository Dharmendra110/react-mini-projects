import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,reset } from "./counterSlice";
const Counter = () => {
  // const [count, setCount] = useState(0);
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
      <h1 className="text-4xl font-black">Counter</h1>
      <h1 className="text-3xl">{count}</h1>
      <button  onClick={()=>dispatch(decrement())} className="bg-green-600 border p-1 rounded">Decrement</button>
      <button onClick={()=>dispatch(increment())}  className="bg-blue-600 border p-1 rounded">Increment</button>
      <button  onClick={()=>dispatch(reset())} className="bg-amber-600 border p-1 rounded">Reset</button>
    </div>
  );
};

export default Counter;
