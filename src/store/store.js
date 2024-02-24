import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./Slice/auth.slice";

export const store=configureStore({
  reducer:{
    auth:authSlice
  }
})