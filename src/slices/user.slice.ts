import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IProfile {
  id: string;
  name: string;
  email: string;
  image: string;
}

export interface AppState {
  profile: IProfile | null;
  isAuth: boolean;
}

const initialState: AppState = {
  profile: {
    email: "jonh@mail.ru",
    id: "2d32kd9039",
    image: "",
    name: "john",
  },
  isAuth: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<IProfile | null>) => {
      state.profile = action.payload;
      state.isAuth = !!action.payload;
    },
  },
});

export const { setProfile } = userSlice.actions;
