'use client'
import React, { useState,useRef } from "react";
import { motion,useInView } from "framer-motion";
import { useRouter } from "next/navigation";
const CarDetails = () => {
  const router=useRouter();
  const ref=useRef(null);
  const isInView=useInView(ref,{once:false})
  const [visibleProducts, setVisibleProducts] = useState(3);
 
  const popularPlaces = [
    {
      itemImage: "Images/nexon.jpg",
      itemName: "Tata Nexon",
      itemType: "Sedan",
      isAc: "AC",
      itemSeat: 4,
      largeBag: 1,
      smallBag: 1,
      isFuel: "Diesel",
      itemRatings: 4.8,
      reviewCount: 400,
      itemPrice: 2000,
      itemDiscount: 15,
    },
    {
      itemImage: "/Images/tigo.jpg",
      itemName: "Tata Tiago",
      itemType: "Sedan",
      isAc: "AC",
      itemSeat: 4,
      largeBag: 1,
      smallBag: 1,
      isFuel: "Diesel",
      itemRatings: 4.8,
      reviewCount: 400,
      itemPrice: 2000,
      itemDiscount: 15,
    },
    {
      itemImage: "/Images/swift.jpg",
      itemName: "Suzuki Swift",
      itemType: "Sedan",
      isAc: "AC",
      itemSeat: 4,
      largeBag: 1,
      smallBag: 1,
      isFuel: "Diesel",
      itemRatings: 4.8,
      reviewCount: 400,
      itemPrice: 2000,
      itemDiscount: 15,
    },
    {
      itemImage: "/Images/scorpio.jpg",
      itemName: "Mahindra Scorpio",
      itemType: "Sedan",
      isAc: "AC",
      itemSeat: 6,
      largeBag: 1,
      smallBag: 1,
      isFuel: "Diesel",
      itemRatings: 4.8,
      reviewCount: 400,
      itemPrice: 2000,
      itemDiscount: 15,
    },
    {
      itemImage: "/Images/ertiga.jpg",
      itemName: "Suzuki Ertiga",
      itemType: "Sedan",
      isAc: "AC",
      itemSeat: 7,
      largeBag: 1,
      smallBag: 1,
      isFuel: "Diesel",
      itemRatings: 4.8,
      reviewCount: 400,
      itemPrice: 2000,
      itemDiscount: 15,
    },
    {
      itemImage: "/Images/alto.jpg",
      itemName: "Alto",
      itemType: "Sedan",
      isAc: "AC",
      itemSeat: 4,
      largeBag: 1,
      smallBag: 1,
      isFuel: "Diesel",
      itemRatings: 4.8,
      reviewCount: 400,
      itemPrice: 2000,
      itemDiscount: 15,
    },
    {
      itemImage: "/Images/bolero.jpg",
      itemName: "Bolero XL",
      itemType: "Sedan",
      isAc: "AC",
      itemSeat: 7,
      largeBag: 1,
      smallBag: 1,
      isFuel: "Diesel",
      itemRatings: 4.8,
      reviewCount: 400,
      itemPrice: 2000,
      itemDiscount: 15,
    },
    {
      itemImage: "/Images/inova.jpg",
      itemName: "Toyota Inova",
      itemType: "Sedan",
      isAc: "AC",
      itemSeat: 7,
      largeBag: 1,
      smallBag: 1,
      isFuel: "Diesel",
      itemRatings: 4.8,
      reviewCount: 400,
      itemPrice: 2000,
      itemDiscount: 15,
    },
    {
      itemImage: "/Images/hundai.jpg",
      itemName: "Hyundai I10",
      itemType: "Sedan",
      isAc: "AC",
      itemSeat: 4,
      largeBag: 1,
      smallBag: 1,
      isFuel: "Diesel",
      itemRatings: 4.8,
      reviewCount: 400,
      itemPrice: 2000,
      itemDiscount: 15,
    },
  ];
  const toggleView = () => {
    if (visibleProducts >= popularPlaces.length) {
      setVisibleProducts((prev) => Math.max(3, prev - 3));
    } else {
      setVisibleProducts((prev) => Math.min(popularPlaces.length, prev + 3));
    }
  };
  return (
    <div  className="w-[80%] mx-auto h-fit">
      <motion.div ref={ref} className="w-full h-full my-16">
        <motion.div
        initial={{ opacity: 0,x:-150 }}
        animate={isInView?{ opacity: 1,x:0 }:{opacity:0,x:-150}}
        transition={{ duration: 1,delay:0.6, ease:'easeInOut',type:'spring',stiffness:400,damping:40 }}
        viewport={{ once: false, amount: 0.6 }}
         className="flex gap-4 flex-col">
          <h3 className="font-semibold text-4xl">Our Awesome Vehicles</h3>
          <p className="text-gray-500 text-md">
            Travel in a safest way
          </p>
        </motion.div>
        <div className="w-full my-4 h-full gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {popularPlaces.length > 0 &&
            popularPlaces.slice(0, visibleProducts).map((item, index) => {
              const {
                itemImage,
                itemName,
                itemType,
                isAc,
                itemSeat,
                largeBag,
                smallBag,
                isFuel,
                itemRatings,
                reviewCount,
                itemPrice,
                itemDiscount,
              } = item;
              return (
                  (
                  <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  whileOutOfView={{ opacity: 0 }}
                  transition={{ duration: 1,delay:0.4, ease:'easeInOut' }}
                  viewport={{ once: false, amount: 0.6 }}
                    key={index}
                    className="bg-white shadow-xl shadow-slate-400 relative w-full h-[300px] rounded-xl"
                  >
                    <img
                      src={itemImage}
                      className="rounded-t-xl w-full h-[55%]"
                      alt=""
                    />
                    <div className="w-full  h-fit">
                      <div className="w-full h-fit p-2">
                        <h3 className="text-xl font-semibold">{itemName}</h3>
                        <div className="flex items-center text-sm text-gray-600 font-[500] gap-2">
                          <p>{itemType.toUpperCase()}</p> | <p>{isAc}</p> | <p>{itemSeat}</p>
                        </div>
                        <div className="flex my-2 items-center gap-4">
                        <p className="text-sm w-fit px-2 py-[1px] border-[1px] border-dashed border-gray-300 rounded-sm text-gray-600 flex gap-2 items-center">
                         Manual
                        </p>
                        <p className="text-sm w-fit px-2 py-[1px] border-[1px] border-dashed border-gray-300 rounded-sm text-gray-600 flex gap-2 items-center">
                         {largeBag} {largeBag>1? 'Large bags':'Large bag'}
                        </p>
                        <p className="text-sm w-fit px-2 py-[1px] border-[1px] border-dashed border-gray-300 rounded-sm text-gray-600 flex gap-2 items-center">
                         {smallBag} {largeBag>1? 'Small bags':'Small bag'}
                        </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center absolute bottom-0 w-full">
                      <motion.button whileHover={{backgroundColor:'rgb(234, 88, 12)'}} transition={{duration:0.5,delay:0.1,ease:'easeIn',type:'spring',stiffness:200,damping:20}} className="bg-orange-500 w-full  mt-1 rounded-b-md py-[5px] px-4 text-white text-xs" onClick={()=>router.push('/pages/bookNow')}>
                        Book Now
                      </motion.button>
                    </div>
                  </motion.div>
                  )
              );
            })}
        </div>
        <div className="w-full flex items-center justify-center ">
       {/* {
        viewMoreButton? <button className="text-white bg-orange-500 px-6 py-2 rounded-md text-sm " onClick={showMore}>
        View More
      </button>: <button className="text-white bg-orange-500 px-6 py-2 rounded-md text-sm " onClick={showMore}>
            View Less
          </button>
       } */}
       {popularPlaces.length > 3 && (
          <button
            onClick={toggleView}
            className="text-white bg-orange-500 px-6 py-2 rounded-md text-sm "
          >
            {visibleProducts === popularPlaces.length ? 'View Less' : 'View More'}
          </button>
        )}
        </div>
      </motion.div>
    </div>
  );
};

export default CarDetails;
