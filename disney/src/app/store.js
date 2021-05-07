import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "C:/React Projects/Disney +/disney/src/features/userSlice.js";


export default configureStore ({
  reducer:{
    user:userReducer,

  },
  middleware:getDefaultMiddleware({
    serializablecheck: false,

  })
});
