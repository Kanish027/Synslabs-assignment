import React, { useEffect } from "react"; // Import necessary React module and useEffect hook
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector hooks from Redux for managing state
import { Link, useParams } from "react-router-dom"; // Import Link and useParams hooks from React Router for navigation and accessing route parameters
import { getUserDetails } from "../actions/Users"; // Import getUserDetails action from the Users actions file (adjust the import path as necessary)

// Define the User component
const User = () => {
  const dispatch = useDispatch(); // Initialize the dispatch function from Redux for dispatching actions
  const { id } = useParams(); // Get the 'id' parameter from the URL

  // Select the 'userDetails' and 'loading' state from the Redux store
  const { userDetails, loading } = useSelector((state) => state.users);

  // Fetch user details when the component mounts
  useEffect(() => {
    dispatch(getUserDetails(id)); // Dispatch getUserDetails action to fetch user details
  }, [dispatch]);

  return (
    <div className="container">
      {" "}
      {/* Container for the user details */}
      {loading ? ( // Show loading message if data is being fetched
        <h1 className="my-2">Loading...</h1>
      ) : (
        <div className="row my-4">
          {" "}
          {/* Row for layout */}
          <h2 className="fw-bold pb-3 text-center">User Details</h2>{" "}
          {/* Heading for user details */}
          <div className="border p-4">
            {" "}
            {/* Border container for user details */}
            <div className="d-flex justify-content-end mb-3">
              {" "}
              {/* Container for edit button */}
              {/* Link to edit user page with edit button */}
              <Link to={`/edit/${id}`} className="btn btn-success">
                Edit
              </Link>
            </div>
            <h5 className="mb-3">Name: {userDetails && userDetails.name}</h5>{" "}
            {/* Display user's name */}
            <h5 className="mb-3">
              Username: {userDetails && userDetails.username}
            </h5>{" "}
            {/* Display user's username */}
            <h5 className="mb-3">
              Address:{" "}
              {userDetails && userDetails.address && userDetails.address.street}
              ,{" "}
              {userDetails && userDetails.address && userDetails.address.suite},{" "}
              {userDetails && userDetails.address && userDetails.address.city},{" "}
              {userDetails &&
                userDetails.address &&
                userDetails.address.zipcode}
            </h5>{" "}
            {/* Display user's address */}
            <h5 className="mb-3">
              Company:{" "}
              {userDetails && userDetails.company && userDetails.company.name}
            </h5>{" "}
            {/* Display user's company name */}
            <h5 className="mb-3">
              Email: {userDetails && userDetails.email}
            </h5>{" "}
            {/* Display user's email */}
            <h5 className="mb-3">
              Phone no: {userDetails && userDetails.phone}
            </h5>{" "}
            {/* Display user's phone number */}
            <h5 className="mb-3">
              Website: {userDetails && userDetails.website}
            </h5>{" "}
            {/* Display user's website */}
          </div>
        </div>
      )}
    </div>
  );
};

export default User; // Export the User component as the default export
