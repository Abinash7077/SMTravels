'use client'
import React, { useState,useEffect } from 'react';
import Link from 'next/link';
const Headers = () => {
  const [isScrolled,setIsScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>100){
        setIsScrolled(true)
      }
      else{
        setIsScrolled(false)
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])
  return (
    <div className={`w-[100%] bg-white h-[12vh] font-sans ${isScrolled?'top-[0%] bg-slate-800 text-white':'top-[5%]'} fixed z-10 `}>
      <div className="flex w-[80%] items-center h-full mx-auto justify-between">
        <div className="flex items-center h-full ">
          <h2 className='text-xl font-serif font-bold'>Let's <span className='text-orange-500'>TRAVEL</span></h2>
        </div>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <ul className="flex items-center gap-6 text-sm font-semibold">
              <li className='hover:text-orange-500'>
                <Link href='/'>HOME</Link>
              </li>
              <li className='hover:text-orange-500'>
                <Link href='/pages/about'>ABOUT</Link>
              </li>
              <li className='hover:text-orange-500'>
                <Link href='/pages/destination'>DESTINATIONS</Link>
              </li>
              <li className='hover:text-orange-500'>
                <Link href='/pages/packages'>PACKAGES</Link>
              </li>
              <li className='hover:text-orange-500'>
                <Link href='/pages/services'>SERVICES</Link>
              </li>
              <li className='hover:text-orange-500'>
                <Link href='/pages/contact'>CONTACT US</Link>
              </li>
              <li className='text-orange-500'>
                <Link href='/pages/login'>LOGIN</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
    </div>
  );
}

export default Headers;
