import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  createdUser: Record<string, any> | null;
}

// Initialize with createdUser as null
const initialState: UserState = {
  createdUser: null,
};

export const userauthState = createSlice({
  name: "authstate",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Record<string, any>>) => {
      state.createdUser = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
  },
});

// Export the action to set user state
export const { setUser } = userauthState.actions;

// Optional: export the reducer
export default userauthState.reducer;
