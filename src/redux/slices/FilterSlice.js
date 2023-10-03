import { createSlice } from "@reduxjs/toolkit";
import hotelData from "../../data/hotels.json";
const initialState = {
  filterValue: "new york",
  hotelFilteredJsonData: hotelData.filter((hotel) => {
    const value = hotel.location.toLowerCase();
    return value.includes("new york");
  }),
};

export const FilterHotelData = createSlice({
  name: "FilterHotelData",
  initialState,
  reducers: {
    filterHotelData: (state, action) => {
      state.filterValue = action.payload.toLowerCase();
      state.hotelFilteredJsonData = [];
      state.hotelFilteredJsonData = hotelData.filter((hotel) => {
        const Name = hotel.location.toLowerCase();
        return Name.includes(action.payload.toLowerCase());
      });
    },
  },
});

export const { filterHotelData } = FilterHotelData.actions;

export default FilterHotelData.reducer;
