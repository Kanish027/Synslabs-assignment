import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userRequest: (state) => {
      state.loading = true;
    },
    userSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    userFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    userDetailsRequest: (state) => {
      state.loading = true;
    },
    userDetailsSuccess: (state, action) => {
      state.loading = false;
      state.userDetails = action.payload;
    },
    userDetailsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateUserRequest: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createUserRequest: (state) => {
      state.loading = true;
    },
    createUserSuccess: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    createUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteUserRequest: (state) => {},
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  userRequest,
  userSuccess,
  userFailure,
  userDetailsRequest,
  userDetailsSuccess,
  userDetailsFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  createUserRequest,
  createUserSuccess,
  createUserFailure,
  deleteUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
