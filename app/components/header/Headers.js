'use client'
import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
const Headers = () => {
  const [isScrolled,setIsScrolled] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useEffect(()=>{
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
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
      clearTimeout(timer);
    };
  },[])
  return (
    <motion.div 
    animate={{
      top: isPageLoaded
        ? isScrolled
          ? 0
          : '5%'
        : '-10%',
      opacity: isPageLoaded ? 1 : 0,
      backgroundColor:isScrolled?'#1e293b':'#fff',
      color:isScrolled?'#fff':'black'
    }}
    initial={{ top: '-10%', opacity: 0 }}
    transition={{ duration: 0.3,delay:0.1, ease: 'easeInOut' }}  className={`w-[100%] text-black bg-white h-[12vh] font-sans ${isScrolled?'top-[0%]':'top-[5%]'} fixed z-10 `}>
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
      
    </motion.div>
  );
}

export default Headers;
