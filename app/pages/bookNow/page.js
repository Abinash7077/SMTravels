'use client'
import React, { useState } from "react";
import { FaPlus,FaMinus } from "react-icons/fa6";

const page = () => {
  const [activeTab, setActiveTab] = useState('travelDetails');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [passengerDetails,setPassengerDetails] = useState([
    {
      passengerFullName:'',
      passengerGender:'',
      passengerIDProof:''
    }
  ])
  const addPassengerRow=()=>{
    setPassengerDetails([...passengerDetails,{
      passengerFullName:'',
      passengerGender:'',
      passengerIDProof:''
    }])
  }
  const deletePassengerRow=(index)=>{
    let filterRow=passengerDetails.filter((_,i)=>i !=index);
    setPassengerDetails(filterRow)
  }
  return (
    <>
      <div className="bg-[url('/Images/bg.jpg')] w-full bg-cover bg-center h-[22rem]">
        <div className="bg-[rgba(0,0,0,0.5)] w-full h-full flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center text-white justify-center">
            <h3 className="text-white font-bold text-3xl mb-4">
              Plan Your Trip
            </h3>
            <p className="text-orange-500 text-xl">Fill Your Details</p>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-4 mx-auto  gap-4 w-[60%] h-fit">
        <div
          className={`font-bold text-2xl py-2 px-8 text-orange-500 bg-white rounded-t-[10px] cursor-pointer ${activeTab === 'travelDetails' ? 'bg-white' : ''}`}
          onClick={() => handleTabClick('travelDetails')}
        >
          <h3>Travel Details</h3>
        </div>
        <div
          className={`font-bold cursor-pointer ${activeTab === 'payAdvance' ? 'text-orange-500' : ''}`}
          onClick={() => handleTabClick('payAdvance')}
        >
          <h3>Pay Advance</h3>
        </div>
      </div>
      <div className="w-[60%]  h-fit mb-4 mx-auto bg-white rounded-tr-[10px] py-4">
        <div className="w-full mb-4 h-fit">
          <div className=" px-4">
            <h3 className="font-bold text-2xl ">Personal Details / Primary Contact</h3>
          </div>
          <div className="px-4 w-full h-fit ">
            <div className="w-full grid gap-2 grid-cols-3">
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="middleName">Middle Name</label>
                <input
                  type="text"
                  name="middleName"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="address1">Address1</label>
                <input
                  type="text"
                  name="address1"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="address2">Address2</label>
                <input
                  type="text"
                  name="address2"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="landMark">Land Mark</label>
                <input
                  type="text"
                  name="landMark"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                >
                  <option value="select">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="dob">Date Of Birth</label>
                <input
                  type="date"
                  name="dob"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="number"
                  name="mobile"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="primaryId">ID Card</label>
                <input
                  type="text"
                  name="primaryId"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit">
          <div className=" px-4">
            <h3 className="font-bold text-2xl ">Travel Details</h3>
          </div>
          <div className="px-4 w-full h-fit ">
            <div className="w-full grid gap-2 grid-cols-3">
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="travelFrom">Travel From</label>
                <input
                  type="text"
                  name="travelFrom"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="travelTo">Travel To</label>
                <input
                  type="text"
                  name="travelTo"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="travelMode">Choose Vehicle</label>
                <select
                  name="chooseVehicle"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                >
                  <option value="select">Select</option>
                  <option value="bike">Bike</option>
                  <option value="bus">Bus</option>
                  <option value="car">Car</option>
                  <option value="travellerSmall">Traveller-Small</option>
                  <option value="travellerBig">Traveller-Big</option>
                </select>
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="address2">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="numberOfTraveller">No Of Traveller</label>
                <input
                  type="text"
                  name="numberOfTraveller"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="departureLocation">Departure Location</label>
                <input
                  type="text"
                  name="departureLocation"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="returnLocation">Return Location</label>
                <input
                  type="text"
                  name="returnLocation"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor="departureLandMark">Land Mark</label>
                <input
                  type="text"
                  name="departureLandMark"
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 h-fit">
          <div className=" px-4">
            <h3 className="font-bold text-2xl ">Traveler / Passenger Details</h3>
          </div>
          <div className="px-4 w-full h-fit ">
            
             {
              passengerDetails.length>0 && passengerDetails.map((item,index)=>{
                const {
                  passengerFullName,
                  passengerGender,
                  passengerIDProof
                }=item
                return(
                  <div key={index} className="w-full grid gap-2 grid-cols-4">
                   <div  className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor={passengerFullName}>Full Name</label>
                <input
                  type="text"
                  name={passengerFullName}
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor={passengerGender}>Gender</label>
                <select
                  name={passengerGender}
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                >
                  <option value="select">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className=" flex flex-col mt-2 text-sm gap-[3px]">
                <label htmlFor={passengerIDProof}>ID Proof</label>
                <input
                  type="text"
                  name={passengerIDProof}
                  className="border-[1px] h-[30px] max-w-[250px] border-solid border-gray-400 rounded outline-none "
                />
              </div>
              <div className=" flex w-full items-center justify-center flex-col mt-2 text-sm gap-[3px]">
              <label htmlFor="travelerIdProof"></label>
                <span className="w-full mt-4">{passengerDetails.length>1?<>
                <span className="flex gap-2 items-center"><FaPlus className="text-xl" onClick={addPassengerRow}/>
                  <FaMinus className="text-xl" onClick={()=>deletePassengerRow(index)}/></span>
                </>:<FaPlus className="text-xl" onClick={addPassengerRow}/>}</span>
              </div>
              </div>
                )
              })
             }
              
            
          </div>
        </div>
        <div className="flex item-center justify-center mt-6 w-full h-[70px]">
          <div className="w-[20%] flex items-center justify-center mx-auto"><button className="bg-orange-500 hover:text-orange-400 rounded-lg py-[5px] text-white px-12">Submit</button></div>
        </div>
      </div>
    </>
  );
};

export default page;
