import { useState } from "react";
import logo from "../assets/logo.svg";
import {  Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const  navLinks =[
        {name:"HOME",link:"/"},
        {name:"PRODUCTS",link:"#products"},
        {name:"ABOUT",link:"#about"},
        {name:"GALLERY",link:"#gallery"},
      ];
      const [open, setOpen] =useState(false);


  return (
    <div className="w-full shadow-md px-2 md:px-4 cursor-pointer fixed z-50 bg-white opacity-80">
      <div className="flex flex-row-reverse justify-between items-center px-5 lg:px-7.5 xl:px-10 py-1 lg:py-2 xl:py-4 ">
        {/* logo */}
        <div className="px-2 md:px-6 ">
          <img src={logo} height={50} width={50} alt="" />
        </div>
        <div onClick={()=>setOpen(!open)} className='absolute left-8 top-6 cursor-pointer md:hidden w-7 h-7 '>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
        {/* links */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all shadow-md md:shadow-none xl:shadow-none duration-700 ease-in-out ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    navLinks.map((link) => (
                    <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-black hover:text-green-500 duration-500'>{link.name}</a>
                    </li>))
                }
                
            </ul>
      </div>
    </div>
  );
};

export default Header;
