// src/reducer.js
import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import authSlice from "../features/AuthSlice";

const rootReducer = combineReducers({
  allcart: cartSlice,
  auth: authSlice,
});

export default rootReducer;
