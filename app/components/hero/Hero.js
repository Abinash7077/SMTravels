"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const router = useRouter();
  const [vehicleType, setVehicleType] = useState("select");
  console.log(vehicleType, "veh");
  return (
    <div className="bg-[url('/Images/bg.jpg')] w-full bg-cover bg-center h-screen">
      <div className="bg-[rgba(0,0,0,0.5)] w-full h-full flex items-center justify-center">
        <div className="w-full flex items-center  justify-center h-[50%]">
          <div
            ref={ref}
            className="flex justify-center items-center w-[80%] gap-12 flex-col"
          >
            <div className="text-white w-[70%] font-serif flex items-center justify-center flex-col font-bold my-6 text-6xl ">
              <motion.h2
                animate={
                  isInView
                    ? {
                        opacity: 1,
                      }
                    : { opacity: 0 }
                }
                initial={{ opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
              >
                Book <span className="text-orange-500">Cars</span>
              </motion.h2>
              <motion.p
                animate={
                  isInView
                    ? {
                        opacity: 1,
                      }
                    : { opacity: 0 }
                }
                initial={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                className="text-[16px]  mt-4 text-gray-200"
              >
                Experience safe and reliable travel with us. Our car rental
                services ensure comfort and peace of mind, with professional
                drivers committed to a no-alcohol policy. Your journey, your
                safety, our priority!
              </motion.p>
            </div>
            <motion.div
              animate={
                isInView
                  ? {
                      opacity: 1,
                    }
                  : { opacity: 0 }
              }
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: "easeInOut",
                type: "string",
                stiffness: 200,
                damping: 20,
              }}
              className="bg-white h-[100px] pl-10 shadow-lg  rounded-[60px] w-full "
            >
              <motion.div
                animate={
                  isInView
                    ? {
                        opacity: 1,
                      }
                    : { opacity: 0 }
                }
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.8,
                  ease: "easeInOut",
                  type: "string",
                  stiffness: 400,
                  damping: 40,
                }}
                className="w-full grid grid-cols-5 gap-6 h-full"
              >
                <div className="flex flex-col py-4">
                  <label htmlFor="travellingFrom" className="text-gray-600">
                    Destination From
                  </label>
                  <div className="w-full h-full border-[1px] border-solid border-gray-200 rounded-md px-2">
                    <input
                      type="text"
                      name="destinationFrom"
                      className="outline-none border-none w-full h-full"
                      id=""
                    />
                  </div>
                </div>
                <div className="flex flex-col py-4">
                  <label htmlFor="travellingTo" className="text-gray-600">
                    Destination To
                  </label>
                  <div className="w-full h-full border-[1px] border-solid border-gray-200 rounded-md px-2">
                    <input
                      type="text"
                      name="destinationFrom"
                      className="outline-none border-none w-full h-full"
                      id=""
                    />
                  </div>
                </div>
                <div className="flex flex-col py-4">
                  <label htmlFor="personNumber" className="text-gray-600">
                    Date
                  </label>
                  <div className="w-full h-full border-[1px] border-solid border-gray-200 rounded-md px-2">
                    <input
                      type="date"
                      name="travelDate"
                      className="outline-none border-none w-full h-full"
                      id=""
                    />
                  </div>
                </div>
                <div className="flex flex-col py-4">
                  <label htmlFor="vehicletype" className="text-gray-600">
                    Choose Vehicle
                  </label>
                  <div className="w-full h-full px-2 border-[1px] border-solid border-gray-200 rounded-md">
                    <select
                      type="text"
                      name="destinationFrom"
                      className="outline-none border-none w-full h-full"
                      id=""
                      value={vehicleType}
                      onChange={(e) => setVehicleType(e.target.value)}
                    >
                      <option value="select">Select</option>
                      <option value="car">Car</option>
                      <option value="bolero">Bolero</option>
                      <option value="bus">Bus</option>
                      <option value="auto">Auto</option>
                      <option value="bike">Bike</option>
                      <option value="scooty">Scooty</option>
                    </select>
                  </div>
                </div>
                <motion.div
                  whileHover={{ backgroundColor: "rgb(234, 88, 12)" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                  initial={{ backgroundColor: "rgb(249, 115, 22)" }}
                  className="flex w-full h-full items-center rounded-r-[60px] bg-orange-500 hover:bg-orange-600 "
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <button
                      onClick={() => router.push("/pages/bookNow")}
                      className="text-white text-lg"
                    >
                      Search
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
