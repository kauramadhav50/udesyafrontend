import { FaBookmark, FaCheckCircle, FaList } from "react-icons/fa";
import { MdInsights } from "react-icons/md";
import cover from "../../assets/images/cover.png";

const JobsSidebar = () => {
  return (

    <div className="w-[260px] space-y-4">

      {/* Profile Card */}

      <div className="bg-white border rounded-lg overflow-hidden">

        {/* Cover */}

        <div className="relative">

          <img
            src={cover}
            alt="cover"
            className="w-full h-24 object-cover object-right"
          />

          {/* Profile Image */}

          <img
            src="/logo.png"
            alt="profile"
            className="w-20 h-20 rounded-full border-4 border-white absolute left-4 -bottom-10"
          />

        </div>


        {/* Profile Info */}

        <div className="pt-12 px-4 pb-4">

          <h2 className="font-semibold text-lg flex items-center gap-1">

            MADHAV KAURA

            <FaCheckCircle className="text-gray-500 text-sm" />

          </h2>

          <p className="text-sm text-gray-600 mt-1">
            💻 Full-Stack Developer | 🐍 Python & Django Expert | 🤖 Generative AI
          </p>

          <p className="text-sm text-gray-600 mt-1">
            📍 Mata Gujri College, Fatehgarh Sahib
          </p>

        </div>

      </div>


      {/* Job Menu */}

      <div className="bg-white border rounded-lg p-4 space-y-3">

        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">

          <FaList className="text-gray-600" />

          <span className="text-sm">
            Preferences
          </span>

        </div>


        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">

          <FaBookmark className="text-gray-600" />

          <span className="text-sm">
            Job tracker
          </span>

        </div>


        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">

          <MdInsights className="text-gray-600 text-lg" />

          <span className="text-sm">
            My Career Insights
          </span>

        </div>


        {/* Post Job */}

        <div className="border-t pt-3">

          <button className="text-blue-600 text-sm font-semibold hover:underline">

            Post a free job

          </button>

        </div>

      </div>

    </div>

  );
};

export default JobsSidebar;