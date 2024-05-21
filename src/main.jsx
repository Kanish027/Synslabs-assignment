import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering the application
import App from "./App.jsx"; // Import the main App component
import "./index.css"; // Import global CSS styles
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS for styling
import { BrowserRouter as Router } from "react-router-dom"; // Import Router for handling routing
import { Provider } from "react-redux"; // Import Provider to connect the app with the Redux store
import store from "./app/store.js"; // Import the configured Redux store

// Render the React application into the root DOM element
ReactDOM.createRoot(document.getElementById("root")).render(
  // Provide the Redux store to the application
  <Provider store={store}>
    {/* Set up the router for handling navigation */}
    <Router>
      {/* Render the main App component */}
      <App />
    </Router>
  </Provider>
);
