import axios from "axios"; // Import axios for making HTTP requests
import {
  // Import action creators from userSlice for handling user-related actions
  createUserFailure,
  createUserRequest,
  createUserSuccess,
  deleteUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  updateUserFailure,
  updateUserRequest,
  updateUserSuccess,
  userDetailsFailure,
  userDetailsRequest,
  userDetailsSuccess,
  userFailure,
  userRequest,
  userSuccess,
} from "../features/users/userSlice"; // Import action creators from userSlice (adjust the path as necessary)

// Function to fetch users from the server
const getUsers = () => async (dispatch) => {
  try {
    dispatch(userRequest()); // Dispatch action to indicate user request is initiated

    const { data } = await axios.get("/api/users"); // Send GET request to fetch users

    dispatch(userSuccess(data)); // Dispatch action with users data upon successful request
  } catch (error) {
    dispatch(userFailure(error.response.data.message)); // Dispatch action with error message upon request failure
  }
};

// Function to fetch details of a specific user from the server
const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch(userDetailsRequest()); // Dispatch action to indicate user details request is initiated

    const { data } = await axios.get(`/api/users/${id}`); // Send GET request to fetch user details

    dispatch(userDetailsSuccess(data)); // Dispatch action with user details data upon successful request
  } catch (error) {
    dispatch(userDetailsFailure(error.response.data.message)); // Dispatch action with error message upon request failure
  }
};

// Function to update details of a specific user on the server
const updateUser = (name, email, phone, website, id) => async (dispatch) => {
  try {
    dispatch(updateUserRequest()); // Dispatch action to indicate user update request is initiated

    const { data } = await axios.put(
      // Send PUT request to update user details
      `/api/users/${id}`, // URL endpoint for the specific user
      {
        name: name,
        email: email,
        phone: phone,
        website: website,
      }, // Data to be updated
      {
        headers: {
          "Content-Type": "application/json",
        }, // Headers for the request
        withCredentials: true, // Include credentials in the request
      }
    );

    console.log(data); // Log updated user data to the console
    dispatch(updateUserSuccess()); // Dispatch action upon successful user update
  } catch (error) {
    dispatch(updateUserFailure()); // Dispatch action upon failure to update user
  }
};

// Function to create a new user on the server
const createUser =
  (name, username, email, phone, website, address, company) =>
  async (dispatch) => {
    try {
      dispatch(createUserRequest()); // Dispatch action to indicate user creation request is initiated

      const { data } = await axios.post(
        // Send POST request to create a new user
        "/api/users", // URL endpoint for creating users
        { name, username, email, phone, website, address, company }, // Data for creating the user
        {
          headers: { "Content-Type": "application/json" }, // Headers for the request
          withCredentials: true, // Include credentials in the request
        }
      );

      dispatch(createUserSuccess(data)); // Dispatch action with created user data upon successful request
    } catch (error) {
      dispatch(createUserFailure(error.response.data.message)); // Dispatch action with error message upon request failure
    }
  };

const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch(deleteUserRequest());

    const { data } = await axios.delete(`/api/users/${id}`);

    dispatch(deleteUserSuccess(data));
  } catch (error) {
    dispatch(deleteUserFailure(error.response.data.message)); // Dispatch action with error message upon
  }
};

// Export all the defined functions for use in other parts of the application
export { getUsers, getUserDetails, updateUser, createUser, deleteUser };
