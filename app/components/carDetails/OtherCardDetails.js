import React from 'react';

const OtherCardDetails = () => {
  const popularPlaces = [
    {
      itemImage: "/Images/bike.jpg",
      itemName: "Bike",
      itemType: "Petrol",
      itemSeat: 1,
      itemMaxSpeed:45,
      carryBag: 1,
      itemAvgSpeed:45,
      itemPricePerKm:10,
    },
    {
      itemImage: "/Images/scooty.jpg",
      itemName: "Scooty",
      itemType: "Petrol",
      itemSeat: 1,
      itemMaxSpeed:1,
      carryBag: 1,
      itemAvgSpeed:45,
      itemPricePerKm:14,
    },
    {
      itemImage: "/Images/auto.jpg",
      itemName: "Auto",
      itemType: "Petrol",
      itemSeat: 1,
      itemMaxSpeed:1,
      carryBag: 1,
      itemAvgSpeed:40,
      itemPricePerKm:20,
    }
  ];
  const vehicleForLongTravels = [
    {
      itemImage: "/Images/bus.jpg",
      itemName: "Bus",
      itemType: "Petrol",
      itemSeat: 54,
      itemMaxSpeed:1,
      carryBag: 1,
      itemAvgSpeed:45,
      itemPricePerKm:10,
    },
    {
      itemImage: "/Images/traveller.jpg",
      itemName: "Traveller (Big)",
      itemType: "Petrol",
      itemSeat: 27,
      itemMaxSpeed:1,
      carryBag: 1,
      itemAvgSpeed:45,
      itemPricePerKm:14,
    },
    {
      itemImage: "/Images/traveller.jpg",
      itemName: "Traveller (small)",
      itemType: "Petrol",
      itemSeat: 12,
      itemMaxSpeed:1,
      carryBag: 1,
      itemAvgSpeed:40,
      itemPricePerKm:20,
    }
  ];
  return (
    <div className="w-[80%] mx-auto h-fit">
    <div className="w-full h-full mt-16">
      <div className="flex gap-4 flex-col">
        <h3 className="font-semibold text-4xl">Some Other Vehicles</h3>
        <p className="text-gray-500 text-md">
          Book for short trip
        </p>
      </div>
      <div className="w-full my-4 h-full gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {popularPlaces.length > 0 &&
          popularPlaces.map((item, index) => {
            const {
              itemImage,
              itemName,
              itemType,
              itemSeat,
              carryBag,
              itemAvgSpeed,
              itemPricePerKm,
              itemMaxSpeed
            } = item;
            return (
                (
                <div
                  key={index}
                  className="bg-white relative w-full h-[170px] rounded-xl"
                >
                 <div className="flex items-center gap-2">
                 <img
                    src={itemImage}
                    className="rounded-t-xl w-[80px] object-contain h-[150px]"
                    alt=""
                  />
                  <div className="w-full  h-fit">
                    <div className="w-full h-fit p-2">
                      <h3 className="text-xl font-semibold">{itemName}</h3>
                      <div className="flex items-center text-sm text-gray-600 font-[500] gap-2">
                        <p>{itemType.toUpperCase()}</p> | <p>{itemSeat}</p>
                      </div>
                      <div className="flex my-2 items-center gap-4">
                      <p className="text-sm w-fit px-2 py-[1px] border-[1px] border-dashed border-gray-300 rounded-sm text-gray-600 flex gap-2 items-center">
                       {itemType}
                      </p>
                      <p className="text-sm w-fit px-2 py-[1px] border-[1px] border-dashed border-gray-300 rounded-sm text-gray-600 flex gap-2 items-center">
                       {itemAvgSpeed} Km/Hr
                      </p>
                      <p className="text-sm w-fit px-2 py-[1px] border-[1px] border-dashed border-gray-300 rounded-sm text-gray-600 flex gap-2 items-center">
                      &#8377; {itemPricePerKm}/KM
                      </p>
                      </div>
                      <p className="text-sm w-fit rounded-sm text-gray-600 flex gap-2 items-center">
                       Maximum {carryBag>0? `${carryBag} bag`:`${carryBag} bags`}  are allowed.
                      </p>
                      <p className="text-sm w-fit rounded-sm text-gray-600 flex gap-2 items-center">
                       Maximum speed:- {itemMaxSpeed}Km/Hr
                      </p>
                    </div>
                  </div>
                 </div>
                  <div className="flex items-center justify-center absolute bottom-0 w-full">
                    <button className="bg-orange-500 w-full  mt-1 rounded-b-md py-[5px] px-4 text-white text-xs">
                      Book Now
                    </button>
                  </div>
                </div>
                )
            );
          })}
      </div>
    </div>


    <div className="w-full h-full">
      <div className="flex gap-4 flex-col">
        <p className="text-gray-500 text-md">
          Book for long trip
        </p>
      </div>
      <div className="w-full my-4 h-full gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {vehicleForLongTravels.length > 0 &&
          vehicleForLongTravels.map((item, index) => {
            const {
              itemImage,
              itemName,
              itemType,
              itemSeat,
              carryBag,
              itemAvgSpeed,
              itemPricePerKm
            } = item;
            return (
                (
                <div
                  key={index}
                  className="bg-white relative w-full h-[170px] rounded-xl"
                >
                 <div className="flex items-center gap-2">
                 <img
                    src={itemImage}
                    className="rounded-t-xl w-[80px] h-[55%]"
                    alt=""
                  />
                  <div className="w-full  h-fit">
                    <div className="w-full h-fit p-2">
                      <h3 className="text-xl font-semibold">{itemName}</h3>
                      <div className="flex items-center text-sm text-gray-600 font-[500] gap-2">
                        <p>{itemType.toUpperCase()}</p> | <p>{itemSeat}</p>
                      </div>
                      <div className="flex my-2 items-center gap-4">
                      <p className="text-sm w-fit px-2 py-[1px] border-[1px] border-dashed border-gray-300 rounded-sm text-gray-600 flex gap-2 items-center">
                       {itemType}
                      </p>
                      <p className="text-sm w-fit px-2 py-[1px] border-[1px] border-dashed border-gray-300 rounded-sm text-gray-600 flex gap-2 items-center">
                       {itemAvgSpeed} Km/Hr
                      </p>
                      <p className="text-sm w-fit px-2 py-[1px] border-[1px] border-dashed border-gray-300 rounded-sm text-gray-600 flex gap-2 items-center">
                      &#8377; {itemPricePerKm}/KM
                      </p>
                      </div>
                      <p className="text-sm w-fit rounded-sm text-gray-600 flex gap-2 items-center">
                       Maximum {carryBag>0? `${carryBag} bag`:`${carryBag} bags`}  are allowed.
                      </p>
                    </div>
                  </div>
                 </div>
                  <div className="flex items-center justify-center absolute bottom-0 w-full">
                    <button className="bg-orange-500 w-full  mt-1 rounded-b-md py-[5px] px-4 text-white text-xs">
                      Book Now
                    </button>
                  </div>
                </div>
                )
            );
          })}
      </div>
    </div>
  </div>
  );
}

export default OtherCardDetails;
