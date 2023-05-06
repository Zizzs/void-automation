import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";

const playerSlice = createSlice({
  name: "player",
  initialState: initialState,
  reducers: {
    incOne(state, action) {
      state.one = state.one + 1;
    },
    decOne(state, action) {
      state.one = state.one - 1;
    },
    incByAmount: (state, action: PayloadAction<number>) => {
      state.one += action.payload;
    },
  },
});

export const { incOne, decOne } = playerSlice.actions;
export default playerSlice.reducer;
