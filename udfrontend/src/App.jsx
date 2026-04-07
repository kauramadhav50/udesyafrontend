import { useState } from 'react'
// import './App.css'

import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import DesktopNavbar from './components/Navbar/DesktopNavbar.jsx'
import MobileSidebar from './components/Navbar/MobileSidebar.jsx'

import { Outlet } from 'react-router-dom';


function App() {

  const [open, setOpen] = useState(false);

  return (

    <div className="bg-[#f3f2ef] overflow-y-scroll hide-scrollbar h-screen">


      Navbars

      <Navbar setOpen={setOpen} />

      <DesktopNavbar />


      {/* Sidebar */}

      <MobileSidebar open={open} setOpen={setOpen} />


      {/* Pages */}

      <div className="pt-10 pb-16">

        <div className="">



          <Outlet />

        </div>

      </div>


      {/* Mobile Footer */}

      <div className="fixed bottom-0 w-full md:hidden">

        <Footer />

      </div>


    </div>

  )
}

export default App