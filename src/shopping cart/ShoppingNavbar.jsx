import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router';
const ShoppingNavbar = ({count}) => {
  return (
    <div className='flex justify-around bg-gray-400 p-5'>
      <h1 className='text-2xl font-bold text-gray-300'><Link to={'/'}> My Shopping </Link></h1>
     <Link to={'/cart'}  className='text-3xl relative inline-block'><TiShoppingCart  className='text-gray-800 hover:text-blue-600 transition'/>
     <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full'>{count}</span></Link>
    </div>
  );
}

export default ShoppingNavbar;
