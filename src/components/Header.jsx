import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link, NavLink, useLocation} from 'react-router'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const Header =()=>{
  const {theme, toggleTheme} = useTheme()
  const [isOpen,setIsOpen] = useState(false)
  const location = useLocation()
  const tabs = [
    {name:'Home',path:'/'},
    {name:'About',path:'/about'},
    {name:'Users', path:'/users'},
    {name:'Products', path:'/products'},
    {name:'Carts', path:'/carts'},
    // {name:'products', path:'/products'},
  ]
  return(
     <header className="h-16 bg-gray-900 flex items-center ml-64 justify-between px-10 border fixed left-0 right-0  ">
      <Link to={'/'}><IoHome className="text-3xl"/></Link>

      <div className="relative hidden md:flex gap-10 ">
        {tabs.map(tab=>(
          <NavLink key={tab.name} to={tab.path} className={`text-xl p-2 rounded hover:text-yellow-500 ${location.pathname===tab.path?'bg-white text-yellow-500':''} tracking-wide font-bold `}>{tab.name}</NavLink>
          
        ))}
        <button onClick={toggleTheme} className="text-2xl">{theme==="light"?<MdDarkMode />:<MdLightMode />}</button>
    </div>

        {/* Mobile Menu */}
      <div className="md:hidden"><button onClick={()=>setIsOpen(!isOpen)} className="text-2xl hover:bg-gray-500 p-2 rounded-4xl"><IoReorderThreeOutline/></button>

        {
            isOpen && (
          <div className=" bg-gray-900 absolute top-16 left-0 w-full flex flex-col md:hidden gap-2 p-4 ">
             {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              onClick={() => setIsOpen(false)}
              className={`font-bold rounded p-2 ${
                location.pathname === tab.path ? "bg-white text-gray-700" : "hover:bg-gray-500"
              }`}
            >
              {tab.name}
            </Link>
            ))}
             <button className="text-2xl">{mode==="light"?<MdDarkMode />:<MdLightMode />}</button>
          </div>
           )}
          </div>
     </header>
  )

}

export default Header

