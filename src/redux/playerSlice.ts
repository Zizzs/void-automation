import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { initialStateType } from "./types";
import { updateResources as updateResourcesFunc } from "./logic/updateResources";

const playerSlice = createSlice({
  name: "player",
  initialState: initialState,
  reducers: {
    updateResources: (state, action: PayloadAction<initialStateType>) => {
      state = updateResourcesFunc(action.payload);

      return state;
    },
  },
});

export const { updateResources } = playerSlice.actions;
export default playerSlice.reducer;
