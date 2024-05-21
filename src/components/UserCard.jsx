import React from "react"; // Import necessary React module
import { Link } from "react-router-dom"; // Import Link from React Router for navigation
import { useDispatch } from "react-redux";
import { deleteUser } from "../actions/Users";

// Define the UserCard component
const UserCard = ({ name, username, id }) => {
  const dispatch = useDispatch();

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="card">
      {" "}
      {/* Container for user card */}
      <div className="card-body d-flex justify-content-between align-content-center">
        {" "}
        {/* Card body with flex layout */}
        <div>
          {" "}
          {/* Container for user name and username */}
          <h5 className="card-title">{name}</h5> {/* Display user name */}
          <div className="card-text mb-3">@{username}</div>{" "}
          {/* Display username */}
        </div>
        <div className="">
          {" "}
          {/* Container for view details button */}
          {/* Link to view user details page with view details button */}
          <Link to={`/user/${id}`} className="btn btn-sm rounded-0 btn-dark">
            View Details
          </Link>
          <button
            onClick={() => handleDeleteUser(id)}
            className="btn btn-danger ms-2 btn-sm"
          >
            Delete User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard; // Export the UserCard component as the default export
