import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {SLICE_NAME} from '../constants/Name';

export interface TikTok2024State {
  value: number;
}

const initialState: TikTok2024State = {
  value: 0,
};

export const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = slice.actions;
export default slice.reducer;
