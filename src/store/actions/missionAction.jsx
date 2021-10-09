import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { filterStatus } from "../reducers/missoinReducer";

export const getMission = createAsyncThunk("mission", async () => {
  const response = await axios.get("https://api.spacexdata.com/v3/launches");
  //console.log(response.data);
  return response.data;
});
export const failure = (missionsContainer) => (dispatch) => {
  const mission = missionsContainer?.filter(
    (item) => item.launch_success === false
  );
  dispatch(filterStatus(mission));
};
export const success = (missionsContainer) => (dispatch) => {
  const mission = missionsContainer?.filter(
    (item) => item.launch_success === true
  );
  dispatch(filterStatus(mission));
};
