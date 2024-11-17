"use client";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
const page = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="bg-[url('/Images/bg.jpg')] w-full bg-cover bg-center h-screen">
      <div className="bg-[rgba(0,0,0,0.7)] flex items-center justify-center w-full h-full">
        <div className="md:w-[50%] h-[350px] bg-white rounded-md grid grid-cols-2  w-full">
          <div className=" w-full h-full px-4">
            <div className="flex my-4 justify-center w-full">
              <h3 className="text-2xl font-bold text-center">Login</h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-full flex flex-col gap-2 ">
                <label htmlFor="email">Email</label>
                <input type="email" className="w-full h-[40px]  border-[1px] border-solid border-gray-300 rounded-md" />
              </div>
              <div className="w-full flex flex-col gap-2 ">
                <label htmlFor="email">Password</label>
                <input type="text" className="w-full h-[40px]  border-[1px] border-solid border-gray-300 rounded-md" />
              </div>
              <div className="w-full flex flex-col gap-2 ">
                <button className="bg-orange-500 text-white text-sm w-full rounded-md py-2">Login</button>
              </div>
              <div className="w-full flex item-center gap-2 ">
                <p className=" text-sm">Forget password?</p> <p className="text-orange-500 text-sm flex font-bold items-center gap-2">Click here <FaArrowRight className="text-orange-500 text-sm" /></p>
              </div>
            </div>
          </div>
          <div className="w-full relative h-full  text-white bg-slate-800 overflow-hidden ">
            <div className="flex items-center flex-col w-full h-full justify-center">
              <p className="text-sm">Don't have an account!</p>
              <h3 className="text-white font-bold mt-2 flex items-center gap-2 text-3xl">
                Sign Up
                <Link href='/pages/signup'>
                  <FaArrowRight className="text-orange-500 text-xl" />
                </Link>
              </h3>
            </div>
            <div className="absolute top-[-30%] right-[-30%] rounded-full bg-orange-500 w-[250px] h-[250px]">
              <div className="relative w-full h-full ">
                <div className="absolute top-[60%] left-[24%] bg-white rounded-full w-[30px] h-[30px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
