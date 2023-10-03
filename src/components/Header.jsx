import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { filterHotelData } from "../redux/slices/FilterSlice";

const Header = () => {
  const filters = ["New York", "Tokyo", "Paris", "London"];
  let filterSelect = useSelector(
    (state) => state.filterHotelJsonData.filterValue
  );
  filterSelect = filterSelect.toLocaleLowerCase();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col h-fit w-full gap-2">
      <div className="flex flex-col gap-2 justify-center items-center w-[420px] mx-auto h-fit">
        <p className="text-[36px] font-semibold text-[#231f1f]">
          Featured Listed Property
        </p>
        <p className="text-center text-[14px] text-[#322f2f]">
          Real estate can be bought, sold, leased, or rented, and can be a
          valuable investment opportunity. The value of real estate can be...
        </p>
      </div>
      <div className="w-[91%] mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          {filters.map((filter, index) => {
            const value = filter.toLocaleLowerCase();
            return (
              <div
                key={index}
                onClick={() => {
                  dispatch(filterHotelData(value));
                }}
                className={`flex rounded-3xl justify-center items-center px-5 py-2 transition-colors duration-200 cursor-pointer ${
                  filterSelect.includes(value) ? "bg-[blue]" : "bg-gray-400"
                } text-white font-semibold`}
              >
                {filter}
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-2 bg-transparent text-[blue] border-2 border-[blue] px-5 py-2 border-solid rounded-3xl">
          <p>View All</p> <FiArrowRight className="mt-[2px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
