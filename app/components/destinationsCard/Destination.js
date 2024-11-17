import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const Destination = () => {
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
      <div className="w-full h-full my-16">
        <div className="flex gap-4 flex-col">
        <h3 className="font-semibold text-4xl">Find Popular Trips</h3>
        <p className="text-gray-500 text-md">Whether You're looking for places for a tour. We are here to</p>
        </div>
        <div className="w-full my-4 h-full gap-4 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {
          popularPlaces.length>0 && (
            popularPlaces.map((item,index)=>(
              <div key={index} className="bg-white relative w-full h-[300px] rounded-xl">
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
                  <button className="bg-orange-500 w-full  mt-1 rounded-b-md py-[5px] px-4 text-white text-xs">View Details</button>
                </div>
          </div>
            ))
          )
        } 
        </div>
        <div className="w-full flex items-center justify-center ">
          <button className="text-white bg-orange-500 px-6 py-2 rounded-md text-sm">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Destination;
