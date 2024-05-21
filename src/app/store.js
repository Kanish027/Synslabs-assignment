import { configureStore } from "@reduxjs/toolkit"; // Import the configureStore function from Redux Toolkit
import userReducer from "../features/users/userSlice"; // Import the user reducer from the user slice

// Configure and create the Redux store
const store = configureStore({
  reducer: {
    // Combine the user reducer under the 'users' key in the store
    users: userReducer,
  },
});

export default store; // Export the configured store as the default export
