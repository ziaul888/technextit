import { createSlice } from "@reduxjs/toolkit";
import { getMission } from "../actions/missionAction";
const missionReducer = createSlice({
  name: "mission",
  initialState: {
    missions: [],
    loader: false,
    errors: {},
  },
  reducers: {
    // getMission: (state, action) => {
    //   state.missions = [...state.missions, action.payload];
    // },
  },
  extraReducers: {
    [getMission.padding]: (state, action) => {
      state.loader = true;
    },
    [getMission.fulfilled]: (state, action) => {
      state.loader = false;
      state.missions = action.payload;
    },
    [getMission.rejected]: (state, action) => {
      state.loader = true;
      state.errors = action.payload;
    },
  },
});
// export const {getMission}=missionReducer.actions
export default missionReducer.reducer;
