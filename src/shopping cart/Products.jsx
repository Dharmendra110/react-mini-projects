// import js from '@eslint/js';
import React, { useEffect } from 'react';
import ShoppingNavbar from './ShoppingNavbar';
import { add, fetchProducts, remove } from './store/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
const Products = () => {
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(fetchProducts())
},[dispatch])

const productSelector = useSelector((state)=>state.products.data)
const cartSelector = useSelector((state)=>state.products.cart)

  function handleAdd(item){
      dispatch(add(item))  
  }

  function handleRemove(id){
    dispatch(remove(id))
  }

  return (
    <div>
       <ShoppingNavbar count={cartSelector.length}/>
  
    <div className='flex flex-wrap gap-3 m-5 '>
      {
        productSelector.map((item)=>{
          const cart =  cartSelector.find((cart)=>cart.id===item.id)
          return  <div className=' border flex flex-col w-80 h-full m-auto p-3 items-center' key={item.id}>
            <img className='w-48' src={item.thumbnail} alt="" />
            <div>
            <h1>{item.title}</h1>
            <h1>{item.price}</h1>
            <button className={`p-2 rounded ${!cart?'bg-yellow-500':'bg-red-500'}`} onClick={!cart?()=>handleAdd(item):()=>handleRemove(item.id)} >{!cart?'Add To Cart':'Remove form Cart'}</button>
            </div>
          </div>
})
      }
    </div>
      </div>
  );
}

export default Products;
