import React, { useEffect, useState } from "react"; // Import necessary React modules
import FloatingLabel from "react-bootstrap/FloatingLabel"; // Import FloatingLabel from React Bootstrap for form labels
import Form from "react-bootstrap/Form"; // Import Form from React Bootstrap for form handling
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector hooks from Redux for managing state
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate and useParams hooks from React Router for navigation and accessing route parameters
import { getUserDetails, updateUser } from "../actions/Users"; // Import getUserDetails and updateUser actions

const EditUser = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL

  const dispatch = useDispatch(); // Initialize the dispatch function from Redux for dispatching actions
  const navigate = useNavigate(); // Initialize the navigate function for programmatic navigation

  // Select the userDetails and loading state from the Redux store
  const { userDetails, loading } = useSelector((state) => state.users);

  // Define state variables for form fields with initial values from userDetails
  const [name, setName] = useState(userDetails && userDetails.name);
  const [email, setEmail] = useState(userDetails && userDetails.email);
  const [phone, setPhone] = useState(userDetails && userDetails.phone);
  const [website, setWebsite] = useState(userDetails && userDetails.website);

  // Handle form submission for updating user details
  const handleEditUser = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Dispatch the updateUser action with updated user details
    await dispatch(updateUser(name, email, phone, website, id));
    navigate("/"); // Navigate to the home page after successful update
  };

  // Fetch user details when the component mounts
  useEffect(() => {
    dispatch(getUserDetails(id)); // Dispatch getUserDetails action to fetch user details
  }, [dispatch]);

  return (
    <div>
      {loading ? ( // Show loading message if data is being fetched
        <h1 className="my-3">Loading...</h1>
      ) : (
        <div className="container">
          {" "}
          {/* Container for centering the form */}
          <div className="row justify-content-center my-5 mx-1 pb-5">
            {" "}
            {/* Row for layout with padding and margins */}
            <div className="col-lg-6">
              {" "}
              {/* Column for responsive form width */}
              <Form onSubmit={handleEditUser}>
                {" "}
                {/* Form element with onSubmit handler */}
                <h4 className="text-center login-text-heading fw-semibold mb-4 ">
                  Update User {/* Form heading */}
                </h4>
                <div className="mb-3">
                  <FloatingLabel label="Name">
                    {" "}
                    {/* Floating label for name field */}
                    <Form.Control
                      type=""
                      className="border border-secondary-subtle rounded-3"
                      placeholder="name@example.com"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </FloatingLabel>
                </div>
                {/* Similar structure for other form fields (Email, Phone, Website) */}
                <div className="d-grid mb-3">
                  {" "}
                  {/* Grid layout for the button */}
                  <button className="btn btn-dark rounded-1">
                    Update
                  </button>{" "}
                  {/* Submit button */}
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditUser; // Export the EditUser component as the default export
