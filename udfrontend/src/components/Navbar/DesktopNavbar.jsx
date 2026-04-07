import { IoSearch } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoChatbubbleEllipses, IoNotifications } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const DesktopNavbar = () => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // SIGN OUT FUNCTION
  const handleSignout = async () => {
    try {
      const access = localStorage.getItem("access");
      const refresh = localStorage.getItem("refresh");

      // Attempt to tell the backend to logout
      // We use await but we don't 'trap' the user if this fails
      await fetch("http://127.0.0.1:8000/api/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access}`
        },
        body: JSON.stringify({
          refresh: refresh
        })
      });

      // await fetch("https://drshfwkr-8000.inc1.devtunnels.ms/api/logout/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Authorization": `Bearer ${access}`
      //   },
      //   body: JSON.stringify({
      //     refresh: refresh
      //   })
      // });

    } catch (error) {
      console.error("Logout API error (Server might be down):", error);
    } finally {
      // THIS BLOCK ALWAYS RUNS
      // Even if the token is expired (401) or the server is dead
      
      // 1. Clear all local storage
      localStorage.clear(); 

      // 2. Close the dropdown menu
      setOpen(false);

      // 3. Force redirect to login
      navigate("/login");
    }
  };

  return (

    <div className="hidden md:flex fixed top-0 left-0 w-full 
    bg-white border-b border-gray-300 justify-center z-[9999]">

      <div className="flex items-center justify-between w-[1100px] px-4 py-2">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-3">

          {/* Logo */}
          <img
            src="/logo.png"
            alt="logo"
            className="h-10"
          />

          {/* Search */}
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-md">

            <IoSearch className="text-gray-600" />

            <input
              type="search"
              placeholder="Search"
              className="bg-transparent px-2 outline-none w-60"
            />

          </div>

        </div>


        {/* RIGHT SECTION */}
        <div className="flex items-center gap-8 text-gray-600">

          {/* Home */}
          <Link to="/">
            <div className="flex flex-col items-center cursor-pointer hover:text-black">
              <AiFillHome size={22} />
              <p className="text-xs">Home</p>
            </div>
          </Link>

          {/* Network */}
          <Link to="/network">
            <div className="flex flex-col items-center cursor-pointer hover:text-black">
              <FaUserFriends size={22} />
              <p className="text-xs">Network</p>
            </div>
          </Link>

          {/* Jobs */}
          <Link to="/jobs">
            <div className="flex flex-col items-center cursor-pointer hover:text-black">
              <MdWork size={22} />
              <p className="text-xs">Jobs</p>
            </div>
          </Link>

          {/* Messaging */}
          <Link to="/message">
            <div className="flex flex-col items-center cursor-pointer hover:text-black">
              <IoChatbubbleEllipses size={22} />
              <p className="text-xs">Messaging</p>
            </div>
          </Link>

          {/* Notifications */}
          <Link to="/notification">
            <div className="flex flex-col items-center cursor-pointer hover:text-black">
              <IoNotifications size={22} />
              <p className="text-xs">Notifications</p>
            </div>
          </Link>


          {/* PROFILE DROPDOWN */}
          <div className="relative">

            <div
              onClick={() => setOpen(!open)}
              className="flex flex-col items-center cursor-pointer"
            >

              <img
                src="/logo.png"
                alt="profile"
                className="w-7 h-7 rounded-full"
              />

              <p className="text-xs">Me</p>

            </div>


            {/* DROPDOWN MENU */}
            {open && (

              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">

                <Link to="/profile">
                  <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Profile
                  </div>
                </Link>

                 <Link to="/add-post">
                  <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Create Post
                  </div>
                </Link>

                <div
                  onClick={handleSignout}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                >
                  Sign Out
                </div>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>

  );
};

export default DesktopNavbar;