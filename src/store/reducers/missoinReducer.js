import { createSlice } from "@reduxjs/toolkit";

const missionReducer = createSlice({
  name: "mission",
  initialState: {
    mission: [],
  },
});

export default missionReducer.reducer;
