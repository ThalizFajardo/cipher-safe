import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../core/entities/user.entity";

interface AuthState {
  status: "checking" | "authenticated" | "not-authenticated";
  user: User | null;
  errorMessage?: string;
}

const initialState: AuthState = {
  status: "not-authenticated",
  user: null,
  errorMessage: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = null;
      state.errorMessage = undefined;
    },
    onLogin: (state, action: PayloadAction<User>) => {
      state.status = "authenticated";
      state.user = action.payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, action: PayloadAction<string | undefined>) => {
      state.status = "not-authenticated";
      state.user = null;
      state.errorMessage = action.payload;
    },
  },
});

export const { onChecking, onLogin, onLogout } = authSlice.actions;
