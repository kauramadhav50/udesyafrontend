import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ setOpen }) => {

  return (

    <div className="fixed top-0 left-0 w-full 
    flex items-center gap-2 
    bg-white border-b border-gray-300 
    px-3 py-2 
    md:hidden z-50">      


      {/* Logo */}

      <div className="flex-shrink-0 cursor-pointer"
       onClick={() => setOpen && setOpen(prev => !prev)}>

        <img
          src="/logo.png"
          alt="logo"
          className="h-10"
        />

      </div>


      {/* Search */}

      <div className="flex-1">

        <input
          type="search"
          placeholder="Search"
          className="w-full px-3 py-1.5 
          rounded-md bg-gray-100 
          outline-none"
        />

      </div>


      {/* Chat */}
      <Link to="/message">
        <div className="text-2xl text-gray-700">

          <IoChatbubbleEllipses />

        </div>

</Link >
    </div>

  );
};

export default Navbar;