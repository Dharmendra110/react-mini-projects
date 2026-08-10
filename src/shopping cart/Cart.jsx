import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clear, remove, updateQuantity } from './store/ProductSlice';
import { useNavigate } from 'react-router';

const Cart = () => {
  const cartSelector = useSelector((state)=>state.products.cart)
  const dispatch = useDispatch()
  const navigate =useNavigate()

  function handleRemove(id){
    dispatch(remove(id))
    if(cartSelector.length===1){
      navigate('/')
    }
  }

  function clearData(){
    dispatch(clear())
    navigate('/')
  }

  function manageQuantity(id,q){
    const quantity = Number(q)?Number(q):1
    dispatch(updateQuantity({id,quantity}))
  }
  return (
    <div >
      
      <h1 className='text-2xl font-bold text-orange-300'>Cart Products</h1>
    {
      cartSelector.map((item)=>(
        <div key={item.id} className='flex justify-around items-center border-b'>
          <div className='flex items-center'>
          <img className='w-48' src={item.thumbnail} />
          <div className='w-64'>
          <h1>{item.title}</h1>
          <h1>{item.rating}</h1>
          </div>
          </div>
          <div className='text-center'>
            <h1 className='text-2xl text-green-500'>{item.price}</h1>

            <input value={item.quantity?item.quantity:1}  onChange={(e)=>manageQuantity(item.id,e.target.value)} className='border w-15 m-2 p-1' type="number" placeholder='' />
            <button onClick={()=>handleRemove(item.id)} className='bg-red-500 p-2 rounded'>Remove from cart</button>
          </div>
        </div>
      ))
    }
    <div className='mr-30 text-right text-2xl'>
    Total : ${(cartSelector.reduce((sum,item)=>item.quantity? (sum+item.price*item.quantity): sum+item.price ,0)).toFixed(2)}
    </div>
    <button onClick={clearData} className='text-2xl bg-blue-600 p-2 rounded'>Place Order</button>
    </div>
  );
}

export default Cart;
