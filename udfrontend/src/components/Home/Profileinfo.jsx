import React, { useState, useEffect } from "react"; // Added hooks
import cover from "../../assets/images/cover.png";
import { FaCheckCircle } from "react-icons/fa";

const Profileinfo = () => {
  // --- Logic to fetch data from your Django API ---
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("access");
      try {
        const response = await fetch("http://127.0.0.1:8000/api/user-profile/", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.error("Error fetching profile sidebar:", error);
      }
    };

    fetchProfile();
  }, []);

  // Helper to handle the image URL from Django media
  const getProfilePic = (path) => {
    if (!path) return "/logo.png"; 
    if (path.startsWith("http")) return path;
    return `http://127.0.0.1:8000${path}`;
  };

  return (
    <div className="w-full md:w-72 bg-gray-100 rounded-lg shadow-lg overflow-hidden pr-2.5 border border-gray-200">

      {/* Cover */}
      <div className="relative">
        <img
          src={cover}
          alt="cover"
          className="w-full h-24 object-cover object-right"
        />

        {/* Profile Image - Kept exact positioning and border */}
        <img
          src={getProfilePic(user?.profile_pic)}
          alt="profile"
          className="w-20 h-20 rounded-full border-4 border-white absolute left-4 -bottom-8 z-10 object-cover bg-white"
        />
      </div>

      {/* Profile Info - Kept exact spacing */}
      <div className="pt-14 px-4 pb-4">
        <h2 className="font-semibold text-lg flex items-center gap-1">
          {/* Dynamic Name */}
          {(user?.fullname || "MADHAV KAURA").toUpperCase()}
          <FaCheckCircle className="text-gray-500 text-sm" />
        </h2>

        <p className="text-sm text-gray-600 mt-1">
          {/* Dynamic Bio */}
          {user?.bio || "💻 Full-Stack Developer | 🐍 Python & Django Expert | 🤖 Generative AI"}
        </p>

        <p className="text-sm text-gray-600 mt-1">
          📍 Mata Gujri College, Fatehgarh Sahib
        </p>
      </div>

      {/* Stats - Kept exact design */}
      <div className="border-t border-gray-300 px-4 py-3 text-sm">
        <div className="flex justify-between">
          <span>Profile viewers</span>
          <span className="text-blue-600">45</span>
        </div>

        <div className="flex justify-between mt-1">
          <span>Post impressions</span>
          <span className="text-blue-600">2,625</span>
        </div>
      </div>

      {/* Premium - Kept exact design */}
      <div className="border-t border-gray-300 px-4 py-3 text-sm">
        <p className="text-gray-600">Unlock exclusive tools & insights</p>
        <p className="font-semibold">Try Premium for ₹0</p>
      </div>

      {/* Menu - Kept exact design */}
      <div className="border-t border-gray-300 px-4 py-3 text-sm space-y-2">
        <p className="cursor-pointer hover:underline">🔖 Saved items</p>
        <p className="cursor-pointer hover:underline">👥 Groups</p>
        <p className="cursor-pointer hover:underline">📰 Newsletters</p>
        <p className="cursor-pointer hover:underline">📅 Events</p>
      </div>

    </div>
  );
};

export default Profileinfo;