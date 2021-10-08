import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMission = createAsyncThunk("mission", async () => {
  const response = await axios.get("https://api.spacexdata.com/v3/launches");
  //console.log(response.data);
  return response.data;
});
