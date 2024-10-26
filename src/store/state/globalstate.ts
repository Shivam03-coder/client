import { globalStateTypes } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: globalStateTypes = {
  isSidebarOpen: false,
  isdarkMode: false,
};

export const applicationState = createSlice({
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

export const { setisSidebarOpen, setisdarkMode } = applicationState.actions;