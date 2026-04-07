import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      
      // const response = await fetch("https://drshfwkr-8000.inc1.devtunnels.ms/api/login/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     username: username,
      //     password: password
      //   })
      // });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        
        localStorage.setItem("user_data", JSON.stringify({
          username: data.username,
          fullname: data.fullname,
          bio: data.bio,
          profile_pic: data.profile_pic
        }));

        navigate("/");
      } else {
        alert(data.detail || "Login Failed ❌");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-200 px-4 sm:px-6 lg:px-8">

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-sm sm:max-w-md md:max-w-lg p-6 sm:p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full p-2.5 sm:p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2.5 sm:p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?
          <Link to="/signup" className="text-indigo-600 font-semibold ml-1 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>

    </div>
  );
}

export default Login;