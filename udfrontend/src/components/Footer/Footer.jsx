import Footerbtn from "./Footerbtn.jsx"
import { IoHomeSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { MdAddBox } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-black text-white py-3 flex justify-around w-full text-2xl">

           
                <Footerbtn Name="Home" icon={<IoHomeSharp />} path="/" />
            

           
                <Footerbtn Name="Network" icon={<HiUserGroup />} path="/network" />
          

           
                <Footerbtn Name="Add" icon={<MdAddBox />} path="/add-post" />
            

            
                <Footerbtn Name="Notifications" icon={<IoNotificationsSharp />} path="/notification" />
            
            
                <Footerbtn Name="Jobs" icon={<IoBriefcase />} path="/jobs" />
            

        </div>
    )
}

export default Footer
