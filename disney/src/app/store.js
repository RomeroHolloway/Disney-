import {configureStore, getDefaultMiddleaware} from '@redux/toolkit'
import {userReducer} "./features/user/userSlice.js"


export default configuration ({
  reducer:{
    user:userReducer

  },
  middleware:getDefaultMiddleaware({
    serializablecheck: false,

  });
});
