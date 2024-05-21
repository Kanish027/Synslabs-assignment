import React from "react"; // Import necessary React module
import { Link } from "react-router-dom"; // Import Link from React Router for navigation
import { useSelector } from "react-redux"; // Import useSelector hook from Redux for accessing state
import UserCard from "./UserCard"; // Import UserCard component

// Define the Home component
const Home = () => {
  // Select the 'users' state from the Redux store
  const { users } = useSelector((state) => state.users);

  return (
    <div className="container">
      {" "}
      {/* Container for the entire home page */}
      {/* Button to navigate to create user page */}
      <div className="my-3 d-flex justify-content-end px-3">
        <Link to={"/create"} className="btn btn-success">
          {" "}
          {/* Link to the create user page */}
          Create User {/* Button text */}
        </Link>
      </div>
      <div className="d-flex justify-content-center">
        {" "}
        {/* Flex container for centering */}
        <div className="row col-8 gy-4 py-2">
          {" "}
          {/* Row with padding */}
          {/* Map through the users array and render UserCard component for each user */}
          {users &&
            users.map((user) => {
              return (
                <div key={user.id} className="">
                  {/* Unique key for each user */}
                  {/* Render UserCard component with user data */}
                  <UserCard
                    name={user.name}
                    username={user.username}
                    id={user.id}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home; // Export the Home component as the default export
