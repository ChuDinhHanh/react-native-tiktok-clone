import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {SLICE_NAME} from '../constants/Name';

export interface TikTok2024State {
  value: number;
  openModalComment: {isOpen: boolean; data: any};
  openReplyComment: {
    uniqueCode: string;
    uid: number | null;
    name: string | null;
  };
}

const initialState: TikTok2024State = {
  value: 0,
  openModalComment: {isOpen: false, data: null},
  openReplyComment: {uniqueCode: '', uid: null, name: null},
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
    openModalComments: (state, action: PayloadAction<any>) => {
      state.openModalComment = {isOpen: true, data: action.payload};
    },
    closeModalComments: state => {
      state.openModalComment = {
        isOpen: false,
        data: [],
      };
    },
    openReplyComments: (
      state,
      action: PayloadAction<{uid: number; name: string}>,
    ) => {
      state.openReplyComment = {
        ...action.payload,
        uniqueCode: new Date().toLocaleString(),
      };
    },
    closeReplyComments: state => {
      state.openReplyComment = {
        uniqueCode: state.openReplyComment.uniqueCode,
        uid: null,
        name: null,
      };
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  closeModalComments,
  openModalComments,
  closeReplyComments,
  openReplyComments,
} = slice.actions;
export default slice.reducer;
