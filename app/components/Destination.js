'use client'
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Destination = () => {
  const ref=useRef(null);
  const router=useRouter();
  const isInView=useInView(ref,{once:false})
  const popularPlaces=[
    {
      itemImage:'/Images/puri.jpg',
      itemName:'Jagannath Temple',
      itemLocation:'Puri, Odisha',
      itemDesc:'Hindu temple dedicated to Lord Jagannath, a form of Lord Vishnu.'
    },
    {
      itemImage:'/Images/konark.jpg',
      itemName:'Konark Temple',
      itemLocation:'Bhubaneswar, Odisha',
      itemDesc:'Hindu temple dedicated to Lord Jagannath, a form of Lord Vishnu.'
    },
    {
      itemImage:'/Images/baladevjew.jpg',
      itemName:'Baladevjew Temple',
      itemLocation:'Kendrapara, Odisha',
      itemDesc:'Hindu temple dedicated to Lord Jagannath, a form of Lord Vishnu.'
    },
    {
      itemImage:'/Images/chandipur.jpg',
      itemName:'Chandipur',
      itemLocation:'Baleswar, Odisha',
      itemDesc:'Hindu temple dedicated to Lord Jagannath, a form of Lord Vishnu.'
    },
    {
      itemImage:'/Images/chilika.jpg',
      itemName:'Chilika Lake',
      itemLocation:'Bhubaneswar, Odisha',
      itemDesc:'Hindu temple dedicated to Lord Jagannath, a form of Lord Vishnu.'
    },
    {
      itemImage:'/Images/apollo.jpg',
      itemName:'Apollo Hospital',
      itemLocation:'Bhubaneswar, Odisha',
      itemDesc:'Hindu temple dedicated to Lord Jagannath, a form of Lord Vishnu.'
    },
    {
      itemImage:'/Images/scb.jpg',
      itemName:'SCB MCH',
      itemLocation:'Cuttack, Odisha',
      itemDesc:'Hindu temple dedicated to Lord Jagannath, a form of Lord Vishnu.'
    },
    {
      itemImage:'/Images/puri.jpg',
      itemName:'Lingaraj Temple',
      itemLocation:'Bhubaneswar, Odisha',
      itemDesc:'Hindu temple dedicated to Lord Jagannath, a form of Lord Vishnu.'
    },
  ]
  return (
    <div className="w-[80%] mx-auto h-fit">
      <div ref={ref} className="w-full h-full my-16">
        <motion.div animate={isInView?{x:0,opacity:1}:{x:-150,opacity:0}} initial={{x:-150,opacity:0}} transition={{duration:0.8,delay:0.2,ease:'easeInOut',type:'spring',stiffness:200,damping:20}}  className="flex gap-4 flex-col">
        <h3 className="font-semibold text-4xl">Find Popular Trips</h3>
        <p className="text-gray-500 text-md">Whether You're looking for places for a tour. We are here to</p>
        </motion.div>
        <div className="w-full my-4 h-full gap-4 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {
          popularPlaces.length>0 && (
            popularPlaces.map((item,index)=>(
              <motion.div  initial={{ x:-150,opacity: 0 }}
              animate={isInView?{x:0,opacity:1}:{x:-150,opacity:0}}
              transition={{ delay: index * 0.2, duration: 0.6 }} key={index} className="bg-white shadow-xl shadow-slate-400 relative w-full h-[300px] rounded-xl">
            <img src={item.itemImage} className="rounded-t-xl w-full h-[55%]" alt="" />
            <div className="w-full  h-fit">
              <div className="w-full h-fit p-2">
              <h3 className="text-xl font-semibold">{item.itemName}</h3>
              <p className="text-sm text-gray-500 flex gap-2 items-center"> <span><IoLocationSharp/></span>{item.itemLocation}</p>
              <div className="w-full h-full">
                <div className=" mt-[1px]">
                  <p className="text-xs">{item.itemDesc}</p>
                </div>
              {/* <div className="grid grid-cols-2  my-1  justify-center">
                  <p className="flex text-sm items-center font-semibold gap-2">
                    Cars- <span className="text-gray-400 text-xs">&#8377; 8000</span> 
                  </p>
                  <p className="flex text-sm items-center font-semibold gap-2">
                    Bolero- <span className="text-gray-400 text-xs">&#8377; 8000</span> 
                  </p>
                  <p className="flex text-sm items-center font-semibold gap-2">
                    Bus- <span className="text-gray-400 text-xs">&#8377; 35000/-</span> 
                  </p>
                  <p className="flex text-[12px] text-red-500 font-bold items-center  gap-2">
                    check for others.... 
                  </p>
                </div> */}
              </div>
              
              </div>
              
            </div>
            <div className="flex items-center justify-center absolute bottom-0 w-full">
                  <motion.button whileHover={{backgroundColor:'rgb(234, 88, 12)'}} transition={{duration:0.5,delay:0.1,ease:'easeIn',type:'spring',stiffness:200,damping:20}} className="bg-orange-500 w-full  mt-1 rounded-b-md py-[5px] px-4 text-white text-xs" onClick={()=>router.push('/pages/bookNow')}>Book Now</motion.button>
                </div>
          </motion.div>
            ))
          )
        } 
        </div>
        <div className="w-full flex items-center justify-center ">
          <motion.button whileHover={{backgroundColor:'rgb(234, 88, 12)'}} transition={{duration:0.5,delay:0.1,ease:'easeIn',type:'spring',stiffness:200,damping:20}}  className="text-white bg-orange-500 px-6 py-2 rounded-md text-sm">View More</motion.button>
        </div>
      </div>
    </div>
  );
};

export default Destination;
