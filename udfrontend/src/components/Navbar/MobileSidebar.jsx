import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoChatbubbleEllipses, IoNotifications, IoClose} from "react-icons/io5";
import { Link } from "react-router-dom";

const MobileSidebar = ({ open, setOpen }) => {

  return (

    <>

      {/* Overlay */}

      <div
        className={`
        fixed inset-0 bg-black/40 z-[9998] md:hidden
        transition-opacity duration-300
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setOpen(false)}
      ></div>



      {/* Sidebar */}

      <div
        className={`
        fixed top-0 left-0 h-full w-[260px]
        bg-white z-[10000] md:hidden
        shadow-lg
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* Header */}

        <div className="flex justify-between items-center p-4 border-b">

          <p className="font-semibold text-lg">
            Profile
          </p>

          <IoClose
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          />

        </div>



        {/* Profile Section */}

        <div className="p-4 flex items-center gap-3 border-b">

          <img
            src="/logo.png"
            alt="profile"
            className="w-14 h-14 rounded-full object-cover border"
          />

          <div>

            <p className="font-semibold">
              Devanshu Gupta
            </p>

            <p className="text-xs text-gray-500">
              View Profile
            </p>

          </div>

        </div>



        {/* Menu */}

        <div className="flex flex-col text-gray-700">


          <Link to="/">

            <div className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer">

              <AiFillHome size={22} />

              Home

            </div>

          </Link>



          <Link to="/network">

            <div className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer">

              <FaUserFriends size={22} />

              Network

            </div>

          </Link>


<Link to="/jobs">
          <div className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer">

            <MdWork size={22} />

            Jobs

          </div>
          </Link>


<Link to="/message">
          <div className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer">

            <IoChatbubbleEllipses size={22} />

            Messaging

          </div>
</Link>



          <Link to="/notification">

            <div className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer">

              <IoNotifications size={22} />

              Notifications

            </div>

          </Link>


        </div>

      </div>

    </>

  );
};

export default MobileSidebar;