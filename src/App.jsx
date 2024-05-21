import React, { Suspense, lazy, useEffect } from "react"; // Import necessary React modules
import { Route, Routes } from "react-router-dom"; // Import routing modules from React Router
import { useDispatch } from "react-redux"; // Import useDispatch hook from Redux
import { getUsers } from "./actions/Users"; // Import the getUsers action creator

// Lazily load components to optimize performance by code splitting
const Home = lazy(() => import("./components/Home"));
const CreateUser = lazy(() => import("./components/CreateUser"));
const EditUser = lazy(() => import("./components/EditUser"));
const User = lazy(() => import("./components/User"));

const App = () => {
  const dispatch = useDispatch(); // Initialize the dispatch function from Redux

  // useEffect to dispatch the getUsers action when the component mounts
  useEffect(() => {
    dispatch(getUsers()); // Fetch users from the server and populate the Redux store
  }, [dispatch]);

  return (
    // Suspense component to display a fallback UI while lazy-loaded components are being fetched
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        {/* Define the application's routes and the corresponding components */}
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/create" element={<CreateUser />} />{" "}
        {/* Route for creating a user */}
        <Route path="/edit/:id" element={<EditUser />} />{" "}
        {/* Route for editing a user */}
        <Route path="/user/:id" element={<User />} />{" "}
        {/* Route for viewing a user */}
      </Routes>
    </Suspense>
  );
};

export default App; // Export the App component as the default export
