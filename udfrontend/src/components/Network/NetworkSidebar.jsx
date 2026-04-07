import { FaUserFriends, FaCalendarAlt } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { FaRegFileAlt, FaRegNewspaper } from "react-icons/fa";

const NetworkSidebar = () => {

  const menu = [
    {
      name: "Connections",
      icon: <FaUserFriends />,
      count: 935
    },
    {
      name: "Following & followers",
      icon: <IoPeople />
    },
    {
      name: "Groups",
      icon: <MdGroups />,
      count: 37
    },
    {
      name: "Events",
      icon: <FaCalendarAlt />,
      count: 3
    },
    {
      name: "Pages",
      icon: <FaRegFileAlt />,
      count: 149
    },
    {
      name: "Newsletters",
      icon: <FaRegNewspaper />,
      count: 70
    }
  ];


  return (

    <div className="bg-white border rounded-lg">

      {/* Title */}

      <div className="p-4 border-b font-semibold">
        Manage my network
      </div>


      {/* Menu */}

      <div>

        {menu.map((item, index) => (

          <div
            key={index}
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm">

            <div className="flex items-center gap-3 text-gray-700">

              <span className="text-lg">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

            </div>

            {item.count && (
              <span className="text-gray-500">
                {item.count}
              </span>
            )}

          </div>

        ))}

      </div>

    </div>

  );
};

export default NetworkSidebar;