import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "redux-devtools-extension";
import userReducer from "../redux/slices/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: false,
  enhancers: [devToolsEnhancer({ realtime: true })],
});
