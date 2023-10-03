import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsFillBuildingsFill } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { LiaBathSolid } from "react-icons/lia";
import { SlCursorMove } from "react-icons/sl";

const Card = ({
  beds,
  rooms,
  bathroom,
  sft,
  price,
  location,
  forRent,
  popular,
  url,
  hotelLocation,
}) => {
  return (
    <div className="h-[500px] w-[450px] rounded-xl p-1 bg-[#f8f6f6] shadow-md">
      <div className="relative w-[99%] h-[250px] mx-auto flex items-center justify-center ">
        <img
          src={url}
          className="object-cover w-full h-full rounded-xl"
          alt="Image"
        />
        <div className="absolute left-3 top-3 bg-white px-3 py-2 text-[blue] flex justify-center font-semibold items-center rounded-2xl">
          {forRent ? "For Rent" : "For Sale"}
        </div>
        <div className="absolute right-3 top-3 bg-white p-2 text-[blue] text-[23px] flex justify-center font-semibold items-center rounded-full">
          <AiOutlineHeart />
        </div>
        {popular && (
          <div className="absolute -left-4 -bottom-6 flex flex-col justify-start items-start">
            <div className="bg-[blue] text-white rounded-r-xl rounded-t-xl px-9 py-2 font-semibold">
              Popular
            </div>
            <div className="rounded-bl-xl bg-[#1f1f8d] h-3 w-3"></div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-1 mt-6 w-fit h-fit ml-6">
        <CiLocationOn />
        <p>{location}</p>
      </div>
      <p className="text-[22px]  w-fit h-fit flex justify-center items-center font-semibold text-[#221a1a] ml-6">
        {hotelLocation}
      </p>
      <div className="flex justify-between items-center w-[86%] mt-5 h-fit mx-auto gap-3">
        <div className="flex text-[#786161] font-semibold flex-col justify-center items-start gap-1 h-fit w-fit">
          <BsFillBuildingsFill />
          <p>{rooms} Room</p>
        </div>
        <div className="flex text-[#786161] font-semibold flex-col justify-center items-start gap-1 h-fit w-fit">
          <BiBed />
          <p>{beds} Bed</p>
        </div>
        <div className="flex text-[#786161] font-semibold flex-col justify-center items-start gap-1 h-fit w-fit">
          <LiaBathSolid />
          <p>{bathroom} Bath</p>
        </div>
        <div className="flex text-[#786161] font-semibold flex-col justify-center items-start gap-1 h-fit w-fit">
          <SlCursorMove />
          <p>{sft} sft</p>
        </div>
      </div>
      <div className="w-[90%] mx-auto h-[1px] rounded-xl mt-3 bg-[#e6e0e0] my-3"></div>
      <div className="flex justify-between items-center w-[90%] mx-auto mt-6">
        <div className="flex justify-center items-center h-fit w-fit">
          <p className="text-[blue] font-semibold text-[23px]">${price}</p>
          <p>/month</p>
        </div>
        <div className="flex justify-center items-center px-4 py-2 border border-solid border-[blue] w-fit h-fit font-semibold text-[blue] rounded-3xl">
          Read More
        </div>
      </div>
    </div>
  );
};

export default Card;
