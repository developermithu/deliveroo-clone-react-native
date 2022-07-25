import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./features/basketSlice";
import restaurentSlice from "./features/restaurentSlice";

export default configureStore({
  reducer: {
    basket: basketSlice,
    restaurent: restaurentSlice,
  },
});
