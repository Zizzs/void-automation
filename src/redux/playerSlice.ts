import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";

const playerSlice = createSlice({
  name: "player",
  initialState: initialState,
  reducers: {
    incOne(state, action) {
      state.resources.one = state.resources.one + 1;
    },
    decOne(state, action) {
      state.resources.one = state.resources.one - 1;
    },
    incByAmount: (state, action: PayloadAction<number>) => {
      state.resources.one += action.payload;
    },
  },
});

export const { incOne, decOne } = playerSlice.actions;
export default playerSlice.reducer;
