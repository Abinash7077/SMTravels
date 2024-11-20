'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
const page = () => {
  const router=useRouter();
  return (
    <>
    <div className="bg-[url('/Images/bg.jpg')] w-full bg-cover bg-center h-[22rem]">
        <div className="bg-[rgba(0,0,0,0.5)] w-full h-full flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center text-white justify-center">
            <h3 className="text-white font-bold text-3xl mb-4">
              Plan Your Trip
            </h3>
            <button onClick={()=>router.push('/pages/bookNow')} className="text-orange-500 text-xl">Book Now</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 my-4 w-[80%] mx-auto h-fit md:grid-cols-3">
        <div className="h-fit  flex flex-col justify-center">
          <div className="">
          <img src="/Images/viewImages.png" className='w-full h-full' alt="" />
          </div>
          <div className="grid grid-cols-2 item-center ">
            <img src="/Images/puri.jpg" alt="" />
            <img src="/Images/konark.jpg" alt="" />
          </div>
        </div>
        <div className="col-span-2 bg-white h-full">
          <h2></h2>
        </div>
      </div>
    </>
  );
}

export default page;
