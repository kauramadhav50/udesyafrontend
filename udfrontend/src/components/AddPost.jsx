import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem("user_data");
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const handlePost = async () => {
        if (content.trim() === "") {
            alert("Content is required!");
            return;
        }

        setLoading(true);
        const token = localStorage.getItem("access");

        const formData = new FormData();
        formData.append("content", content);

        if (image) {
            formData.append("image", image);
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/api/posts/", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData
            });

            if (response.ok) {
                alert("Post Added Successfully! ✅");
                navigate("/");
            } else {
                const errorData = await response.json();
                console.error("Post error:", errorData);
                alert("Failed to add post. Please try again.");
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Server is not responding.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            <div className="max-w-[600px] mx-auto px-4">
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                    
                    {/* Profile Section */}
                    <div className="flex gap-3 items-center mb-4">
                        <img
                            src={user?.profile_pic || "/logo.png"}
                            alt="profile"
                            className="w-12 h-12 rounded-full border"
                        />
                        <div>
                            <p className="font-semibold">{user?.fullname || "Udesya User"}</p>
                            <p className="text-xs text-gray-500">Post to Anyone</p>
                        </div>
                    </div>

                    {/* Content Area */}
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="What do you want to talk about?"
                        className="w-full h-40 outline-none resize-none text-lg"
                    />

                    {/* Image Upload */}
                    <div className="mt-4 border-t pt-4">
                        <input 
                            type="file" 
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        {image && <p className="text-xs text-green-600 mt-1">Image selected: {image.name}</p>}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end mt-6 gap-3">
                        <button 
                            onClick={() => navigate("/")}
                            className="px-5 py-1.5 rounded-full text-gray-600 hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handlePost}
                            disabled={loading}
                            className={`${
                                loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"
                            } text-white px-6 py-1.5 rounded-full font-semibold transition`}
                        >
                            {loading ? "Posting..." : "Post"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;