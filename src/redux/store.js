import { configureStore } from "@reduxjs/toolkit";
import HotelFilterSlice from "./slices/FilterSlice"
export const store = configureStore({
  reducer: {
    filterHotelJsonData: HotelFilterSlice,
  },
});
