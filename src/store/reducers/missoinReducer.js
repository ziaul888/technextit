import { createSlice } from "@reduxjs/toolkit";
import { getMission } from "../actions/missionAction";

const missionReducer = createSlice({
  name: "mission",
  initialState: {
    missions: [],
    missionsContainer: [],

    loader: false,
    errors: {},
  },
  reducers: {
    missionSearch: (state, action) => {
      state.missions = state.missionsContainer.filter((missio) =>
        missio.rocket.rocket_name.toLowerCase().includes(action.payload)
      );
    },
    filterStatus: (state, action) => {
      state.missions = action.payload;
    },
  },
  extraReducers: {
    [getMission.padding]: (state, action) => {
      state.loader = true;
    },
    [getMission.fulfilled]: (state, action) => {
      state.loader = false;
      state.missions = action.payload;
      state.missionsContainer = action.payload;
    },
    [getMission.rejected]: (state, action) => {
      state.loader = true;
      state.errors = action.payload;
    },
  },
});
export const { missionSearch, filterStatus } = missionReducer.actions;
export default missionReducer.reducer;
