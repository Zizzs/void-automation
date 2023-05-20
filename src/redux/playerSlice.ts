import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { initialStateType } from "./types";
import { updatePlayerState as updatePlayerStateFunc } from "./logic/updatePlayerState";

const playerSlice = createSlice({
  name: "player",
  initialState: initialState,
  reducers: {
    createPlayer: (state, action: PayloadAction<initialStateType>) => {
      state = action.payload;

      return state;
    },
    updatePlayerState: (state, action: PayloadAction<initialStateType>) => {
      state = updatePlayerStateFunc(action.payload);

      return state;
    },
  },
});

export const { updatePlayerState, createPlayer } = playerSlice.actions;
export default playerSlice.reducer;
