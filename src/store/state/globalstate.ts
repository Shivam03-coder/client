import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
  isSidebarOpen: boolean;
  isdarkMode: boolean;
}

const initialState: initialStateTypes = {
  isSidebarOpen: true,
  isdarkMode: false,
};

export const globalstate = createSlice({
  name: "app-state",
  initialState,
  reducers: {
    setisSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    setisdarkMode: (state, action: PayloadAction<boolean>) => {
      state.isdarkMode = action.payload;
    },
  },
});

export const { setisSidebarOpen, setisdarkMode } = globalstate.actions;