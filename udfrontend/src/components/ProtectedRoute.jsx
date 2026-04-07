import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check if the access token exists in localStorage
  const isAuthenticated = localStorage.getItem("access");

  // If the token exists, render the page (children)
  // Otherwise, redirect the user to the login page
  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;