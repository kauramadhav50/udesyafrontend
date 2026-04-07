import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import Network from "./components/Network/Network.jsx";
import AddPost from "./components/AddPost.jsx";
import Notification from "./components/Notification/Notification.jsx";
import Jobs from "./components/Job/Jobs.jsx";
import Message from "./components/Message/Message.jsx";
import Login from "./components/loginsignup/Login.jsx";
import Signup from "./components/loginsignup/Signup.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Profile from "./components/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Main Layout */}
      <Route path="/" element={
        <ProtectedRoute>
          <App />
        </ProtectedRoute>
      }>
        <Route index element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
        />
        <Route path="network" element={
          <ProtectedRoute>
            <Network />
          </ProtectedRoute>
        } />
        <Route path="add-post" element={
          <ProtectedRoute>
            <AddPost />
          </ProtectedRoute>
        } />
        <Route path="notification" element={
          <ProtectedRoute>
            <Notification />
          </ProtectedRoute>
        } />
        <Route path="jobs" element={
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
        } />

        <Route path="profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

      </Route>

      {/* Separate Pages */}
      <Route path="message" element={
        <ProtectedRoute>
        <Message />
        </ProtectedRoute>
        } />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);