import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import missoinReducer from "./reducers/missoinReducer";
export default configureStore({
  reducer: {
    mission: missoinReducer,
    middleware: getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
  },
});
