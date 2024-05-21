import React, { useState } from "react"; // Import necessary React modules
import FloatingLabel from "react-bootstrap/FloatingLabel"; // Import FloatingLabel from React Bootstrap for form labels
import Form from "react-bootstrap/Form"; // Import Form from React Bootstrap for form handling
import { useDispatch } from "react-redux"; // Import useDispatch hook from Redux
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router
import { createUser } from "../actions/Users"; // Import the createUser action creator

const CreateUser = () => {
  const dispatch = useDispatch(); // Initialize the dispatch function from Redux
  const navigate = useNavigate(); // Initialize the navigate function for programmatic navigation

  // Define state variables for form fields with initial empty values
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");

  // Handle form submission
  const handleCreateUser = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Dispatch the createUser action with form field values
    await dispatch(
      createUser(name, username, email, phone, website, address, company)
    );
    navigate("/"); // Navigate to the home page after successful creation
  };

  return (
    <div className="container">
      {" "}
      {/* Container for centering the form */}
      <div className="row justify-content-center my-5 mx-1 pb-5">
        {" "}
        {/* Row for layout with padding and margins */}
        <div className="col-lg-6">
          {" "}
          {/* Column for responsive form width */}
          <Form onSubmit={handleCreateUser}>
            {" "}
            {/* Form element with onSubmit handler */}
            <h4 className="text-center login-text-heading fw-semibold mb-4">
              Create User
            </h4>{" "}
            {/* Form heading */}
            <div className="mb-3">
              <FloatingLabel label="Name">
                {" "}
                {/* Floating label for name field */}
                <Form.Control
                  type="text"
                  className="border border-secondary-subtle rounded-3"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </FloatingLabel>
            </div>
            <div className="mb-3">
              <FloatingLabel label="Username">
                {" "}
                {/* Floating label for username field */}
                <Form.Control
                  type="text"
                  className="border border-secondary-subtle rounded-3"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </FloatingLabel>
            </div>
            <div className="mb-3">
              <FloatingLabel label="Email">
                {" "}
                {/* Floating label for email field */}
                <Form.Control
                  type="email"
                  className="border border-secondary-subtle rounded-3"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </FloatingLabel>
            </div>
            <div className="mb-3">
              <FloatingLabel label="Phone">
                {" "}
                {/* Floating label for phone field */}
                <Form.Control
                  type="tel"
                  className="border border-secondary-subtle rounded-3"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </FloatingLabel>
            </div>
            <div className="mb-3">
              <FloatingLabel label="Website">
                {" "}
                {/* Floating label for website field */}
                <Form.Control
                  type="text"
                  className="border border-secondary-subtle rounded-3"
                  placeholder="Website"
                  onChange={(e) => setWebsite(e.target.value)}
                  value={website}
                />
              </FloatingLabel>
            </div>
            <div className="mb-3">
              <FloatingLabel label="Address">
                {" "}
                {/* Floating label for address field */}
                <Form.Control
                  type="text"
                  className="border border-secondary-subtle rounded-3"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
              </FloatingLabel>
            </div>
            <div className="mb-3">
              <FloatingLabel label="Company">
                {" "}
                {/* Floating label for company field */}
                <Form.Control
                  type="text"
                  className="border border-secondary-subtle rounded-3"
                  placeholder="Company"
                  onChange={(e) => setCompany(e.target.value)}
                  value={company}
                />
              </FloatingLabel>
            </div>
            <div className="d-grid mb-3">
              {" "}
              {/* Grid layout for the button */}
              <button className="btn btn-dark rounded-1">Create</button>{" "}
              {/* Submit button */}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser; // Export the CreateUser component as the default export
