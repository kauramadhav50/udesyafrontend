import React, { useEffect, useState } from "react";
import { MdEdit, MdLocationOn, MdPublic } from "react-icons/md";
import { BiLike, BiRepost } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "http://127.0.0.1:8000";
  const token = localStorage.getItem("access");

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      // 1. Fetch User Info (Matches UserProfileView)
      const userRes = await fetch(`${BASE_URL}/api/user-profile/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userData = await userRes.json();
      setUser(userData);

      // 2. Fetch Only My Posts (Matches MyPostListView)
      const postsRes = await fetch(`${BASE_URL}/api/my-posts/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const postsData = await postsRes.json();
      setMyPosts(postsData);
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  // Helper to handle image paths (fixes 404s)
  const getImageUrl = (path) => {
    if (!path) return "/logo.png"; // Fallback
    if (path.startsWith("http")) return path;
    return `${BASE_URL}${path}`;
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  };

  if (loading) return <div className="text-center mt-20 font-semibold text-gray-600">Loading Udesya Profile...</div>;

  return (
    <div className="bg-[#f3f2ef] min-h-screen pt-20 pb-10">
      <div className="max-w-[1128px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* LEFT & CENTER COLUMN */}
        <div className="md:col-span-2 space-y-4">
          
          {/* Profile Header Card */}
          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            
            <div className="px-6 pb-6">
              <div className="relative -mt-16 mb-4">
                <img
                  src={getImageUrl(user?.profile_pic)}
                  alt="Avatar"
                  className="w-32 h-32 rounded-full border-4 border-white object-cover bg-white shadow-md"
                />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{user?.fullname || user?.username}</h1>
                  <p className="text-gray-700 text-lg leading-tight mt-1">{user?.bio || "Digital Innovation at Udesya"}</p>
                  <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                    <MdLocationOn className="text-gray-400" /> India • 
                    <span className="text-blue-600 font-semibold cursor-pointer hover:underline ml-1">Contact info</span>
                  </p>
                  <p className="text-blue-600 text-sm font-semibold mt-2 hover:underline cursor-pointer">
                    500+ connections
                  </p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition">
                  <MdEdit size={24} />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-sm">
                  Open to
                </button>
                <button className="border border-blue-600 text-blue-600 px-4 py-1.5 rounded-full font-semibold hover:bg-blue-50 transition">
                  Add profile section
                </button>
                <button className="border border-gray-500 text-gray-500 px-4 py-1.5 rounded-full font-semibold hover:bg-gray-100 transition">
                  More
                </button>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">About</h2>
                <MdEdit className="text-gray-600 cursor-pointer" size={20}/>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {user?.bio || "You haven't added a bio yet. Click edit to tell the Udesya community about yourself!"}
            </p>
          </div>

          {/* Activity Section */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="text-xl font-bold">Activity</h2>
              <p className="text-blue-600 text-sm font-semibold hover:underline cursor-pointer mt-1">502 followers</p>
            </div>

            <div className="divide-y divide-gray-200">
              {myPosts.length > 0 ? (
                myPosts.map((post) => (
                  <div key={post.id} className="p-4 hover:bg-gray-50 transition">
                    <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                      <span className="font-bold text-gray-700">{user?.fullname}</span> 
                      posted this • {formatDate(post.created_at)}
                    </div>
                    
                    <div className="flex gap-4">
                      {post.image && (
                        <img 
                            src={getImageUrl(post.image)} 
                            className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md border" 
                            alt="post-preview"
                        />
                      )}
                      <div className="flex-1">
                        <p className="text-sm text-gray-800 line-clamp-3 mb-2">{post.content}</p>
                        <div className="flex items-center gap-4 text-gray-500">
                            <div className="flex items-center gap-1 text-xs">
                                <BiLike size={16}/> 0
                            </div>
                            <div className="flex items-center gap-1 text-xs">
                                <FaRegCommentDots size={14}/> 0
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-10 text-center text-gray-500">
                    <p>No activity yet. Your posts will appear here.</p>
                </div>
              )}
            </div>
            
            <div className="p-3 text-center border-t hover:bg-gray-100 cursor-pointer transition">
                <span className="text-gray-600 font-semibold">Show all activity →</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hidden md:block space-y-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-700">Profile Language</h3>
                <MdEdit className="text-gray-500" size={18}/>
            </div>
            <p className="text-sm text-gray-500">English</p>
            <hr className="my-4" />
            <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-700">Public Profile & URL</h3>
                <MdEdit className="text-gray-500" size={18}/>
            </div>
            <p className="text-xs text-gray-500 truncate">udesya.in/in/{user?.username}</p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-3">People also viewed</h3>
            <div className="space-y-4">
                {[1,2,3].map(i => (
                    <div key={i} className="flex gap-2">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                        <div>
                            <p className="text-sm font-bold leading-none">Udesya Member</p>
                            <p className="text-xs text-gray-500">Developer at Tech</p>
                            <button className="mt-2 border border-gray-500 px-3 py-1 rounded-full text-xs font-semibold hover:bg-gray-100">Connect</button>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;