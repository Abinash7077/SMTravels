"use client";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
const page = () => {
  const router = useRouter();
  const popularPlaces = [
    {
      itemImage: "/Images/goa.jpg",
      itemName: "Goa",
      itemDays: 3,
      itemNight: 4,
      itemPersonAllowed: 4,
      itemTripPrice: 60000,
      itemSharing: 2,
    },
    {
      itemImage: "/Images/ladakh.jpg",
      itemName: "Ladakh",
      itemDays: 3,
      itemNight: 4,
      itemPersonAllowed: 4,
      itemTripPrice: 45000,
      itemSharing: 2,
    },
    {
      itemImage: "/Images/darj.jpg",
      itemName: "Darjeeling",
      itemDays: 3,
      itemNight: 4,
      itemPersonAllowed: 4,
      itemTripPrice: 45000,
      itemSharing: 2,
    },
    {
      itemImage: "/Images/uttara.jpg",
      itemName: "Uttarakhand",
      itemDays: 3,
      itemNight: 4,
      itemPersonAllowed: 4,
      itemTripPrice: 45000,
      itemSharing: 2,
    },
    {
      itemImage: "/Images/jaipur.jpg",
      itemName: "Jaipur",
      itemDays: 3,
      itemNight: 4,
      itemPersonAllowed: 4,
      itemTripPrice: 45000,
      itemSharing: 2,
    },
    {
      itemImage: "/Images/manali1.jpg",
      itemName: "Manali",
      itemDays: 3,
      itemNight: 4,
      itemPersonAllowed: 4,
      itemTripPrice: 45000,
      itemSharing: 2,
    },
  ];
  return (
    <>
      <div className="bg-[url('/Images/bg.jpg')] w-full bg-cover bg-center h-[25rem]">
        <div className="bg-[rgba(0,0,0,0.5)] w-full h-full flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center text-white justify-center">
            <h3 className="text-white font-bold text-3xl mb-4">
              Plan Your <span className="text-orange-500">Trip</span>
            </h3>
            <p className="text-white">
              Find your <span className="text-orange-500">Packages</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit">
        <div className="w-[85%] mx-auto my-8 h-full gap-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {popularPlaces.length > 0 &&
            popularPlaces.map((item, index) => {
              const {
                itemImage,
                itemName,
                itemDays,
                itemNight,
                itemPersonAllowed,
                itemTripPrice,
                itemSharing,
              } = item;
              return (
                <div
                  key={index}
                  className="bg-white relative w-full h-[170px] rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={itemImage}
                      className="rounded-tl-xl w-[120px] object-cover h-[150px]"
                      alt=""
                    />
                    <div className="w-full  h-fit">
                      <div className="w-full h-fit p-2">
                        <h3 className="text-xl font-semibold">{itemName}</h3>
                        <div className="flex items-center text-sm text-gray-600 font-[500] gap-2">
                          <p>
                            {itemDays > 1
                              ? `${itemDays} days`
                              : `${itemDays} day`}
                          </p>{" "}
                          |{" "}
                          <p>
                            {itemNight > 1
                              ? `${itemNight} nights`
                              : `${itemNight} night`}
                          </p>
                        </div>
                        <div className="flex my-2 items-center gap-4">
                          <p className="text-sm w-fit px-2 py-[1px] border-[1px] border-dashed border-gray-300 rounded-sm text-gray-600 flex gap-2 items-center">
                            {itemSharing} sharing
                          </p>
                        </div>
                        <p className="text-sm w-fit rounded-sm text-gray-600 flex gap-2 items-center">
                          Maximum{" "}
                          {itemPersonAllowed > 1
                            ? `${itemPersonAllowed} persons`
                            : `${itemPersonAllowed} person`}{" "}
                          are allowed.
                        </p>
                        <p className="text-sm w-fit rounded-sm text-red-600 font-bold flex gap-2 items-center">
                          &#8377;{itemTripPrice}/-
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center absolute bottom-0 w-full">
                    <motion.button
                      whileHover={{ backgroundColor: "rgb(234, 88, 12)" }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1,
                        ease: "easeIn",
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      className="bg-orange-500 w-full  mt-1 rounded-b-lg py-[5px] px-4 text-white text-xs"
                      onClick={() => router.push("/pages/bookNow")}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default page;
