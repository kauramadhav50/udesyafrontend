import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    profile_pic: null // Changed 'pic' to 'profile_pic' to match Django
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profile_pic") { // Changed 'pic' to 'profile_pic'
      setFormData({ ...formData, profile_pic: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    try {

      const data = new FormData();
      data.append("username", formData.username);
      data.append("fullname", formData.fullname);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("bio", formData.bio);
      
      // Fixed: Append as "profile_pic" to match your Django Serializer/Model
      if (formData.profile_pic) {
        data.append("profile_pic", formData.profile_pic);
      }

      const response = await fetch("http://127.0.0.1:8000/api/signup/", {
        method: "POST",
        body: data
      });

      // const response = await fetch("https://drshfwkr-8000.inc1.devtunnels.ms/api/signup/", {
      //   method: "POST",
      //   body: data
      // });

      const result = await response.json();

      if (response.ok) {

        // store user info (optional)
        localStorage.setItem("user", JSON.stringify(result));

        alert("Signup Successful 🎉");

        navigate("/");

      } else {
        alert(result.message || "Signup Failed");
      }

    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-200 px-4 sm:px-6 lg:px-8">

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 rounded-2xl shadow-xl space-y-4"
      >

        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Create Account
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2.5 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={formData.fullname}
          onChange={handleChange}
          className="w-full p-2.5 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2.5 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2.5 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-2.5 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <textarea
          name="bio"
          placeholder="Write your bio..."
          value={formData.bio}
          onChange={handleChange}
          className="w-full p-2.5 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          rows="3"
        />

        <input
          type="file"
          name="profile_pic" // Changed name from 'pic' to 'profile_pic'
          onChange={handleChange}
          className="w-full text-sm file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-600 file:text-white hover:file:bg-purple-700"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2.5 sm:py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?
          <Link to="/login" className="text-purple-600 ml-1 font-medium">
            Login
          </Link>
        </p>

      </form>

    </div>
  );
}

export default Signup;