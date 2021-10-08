import { configure, getDefaultMiddleware } from "@reduxjs/toolkit";
import missoinReducer from "../ruducers/missoinReducer";
export default configure({
  reducer: {
    mission: missoinReducer,
  },
  middleware: [...getDefaultMiddleware()],
});
