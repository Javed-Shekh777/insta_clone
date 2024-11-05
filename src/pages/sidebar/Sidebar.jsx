// import "./sidebar.css"
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { FaThreads, FaBars } from "react-icons/fa6";
import { MdOutlineExplore } from "react-icons/md";

import { FiSearch, FiMessageCircle, FiHeart, FiPlusSquare } from 'react-icons/fi'
import { SiInstagram } from "react-icons/si";
import { GoHome, GoDeviceCameraVideo } from "react-icons/go";
import { useState } from 'react';



const Sidebar = () => {

  const [active, setActive] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };


  return (
    <>
      <div className={`sidebar z-400  fixed  sm:none h-auto w-full border-r  border-r-2  pb-5 pr-3 pl-2  box-border flex flex-col items-start justify-start`}>


        {/* Instagaram Logo  */}
        {
          isCollapsed &&<Link to={"/"} className='items w-full h-auto lg:block md:hidden sm:hidden hidden  py-1 px-2   my-3  ml-2'>
          <p className='itemText text-start text-2xl text-black family-cursive'>Instagram </p>
        </Link>
        }

        {/* Instagaram Icon  */}
        {isCollapsed && <Link to={"/"} className='items instalogo  py-1 px-2 my-2  sm:hidden'>
          <SiInstagram size={24} />
        </Link>}

        <Link to={"/"} id="mobileHome" className='items mobile flex items-center mt-5 p-2 my-1 group  w-full  h-auto rounded-md hover:bg-gray-200/80 transition ease-in duration-100'>
          <GoHome className='icon  h-[30px] w-[30px]  text-black group-hover:scale-105' />

          {isCollapsed && <span className='itemText ml-4   text-black lg:block md:hidden sm:hidden block'>Home</span>}
        </Link>


        <Link className='items  flex items-center   p-2 my-1   w-full group h-auto rounded-md hover:bg-gray-200/80 transition ease-in duration-100'>
          <FiSearch className='icon  h-[30px] w-[30px]   text-black group-hover:scale-105' />
          {isCollapsed && <span className='itemText ml-4   text-black lg:block md:hidden sm:hidden block'>Search</span>}
        </Link>

        <Link to={"/explore"} className='items mobile flex items-center  p-2 my-1 group   w-full  h-auto rounded-md hover:bg-gray-200/80 transition ease-in duration-100'>
          <MdOutlineExplore className='icon h-[30px] w-[30px] text-balck group-hover:scale-105' />
          {isCollapsed && <span className='itemText ml-4   text-black lg:block md:hidden sm:hidden block'>Explore</span>}
        </Link>

        <Link to={"/reels"} className='items mobile flex items-center  p-2 my-1 group  w-full  h-auto rounded-md hover:bg-gray-200/80 transition ease-in duration-100'>
          <GoDeviceCameraVideo className='icon  h-[30px] w-[30px] text-black group-hover:scale-105' />
          {isCollapsed && <span className='itemText ml-4   text-black lg:block md:hidden sm:hidden block'>Reels</span>}
        </Link>

        <Link to={"/messages"}
          onClick={() => {
            setActive(!active);
            let el1 = document.querySelector(".sidebar");

            // el1.style.display = "flex";
            el1.style.width = "4rem ";
            // el1.style.flexDirection = "column";
            // el1.style.height = "100vh";
            // el1.style.position = "relative";
            // el1.style.alignItems = "center";
            document.querySelector(".main").style.marginLeft = "5rem";
            // let el2 = document.querySelectorAll(".sidebar .itemText");
            // let el3 = document.querySelector(".instalogo");
            // document.querySelectorAll(".items");

            // function sub(ch) {
            //   ch.style.display = "none";
            // }
            // Array.from(el2).map((ch) => sub(ch))
            // el3.style.display = "block";
            setIsCollapsed(!isCollapsed);




          }}
          className='items mobile flex relative items-center  p-2 my-1 group  w-full  h-auto rounded-md hover:bg-gray-200/80 transition ease-in duration-100'>
          <FiMessageCircle size={28}  className='icon  text-black group-hover:scale-105' />
          <span className='message absolute left-6 top-2 h-4 w-4 block p-2 rounded-full bg-red-500 text-white border border-2 border-white text-[10px] items-center flex justify-center'>2</span>
          {isCollapsed && <span className='itemText ml-4   text-black lg:block md:hidden sm:hidden block'>Messages</span>}
        </Link>

        <Link className='items flex items-center  p-2 my-1 relative  w-full group h-auto rounded-md hover:bg-gray-200/80 transition ease-in duration-100'>
          <FiHeart size={28} className='icon  text-black group-hover:scale-105' />
          <span className='message absolute left-7 top-3 h-2 w-2 rounded-full bg-red-500 block   '></span>
          {isCollapsed && <span className='itemText ml-4   text-black lg:block md:hidden sm:hidden block'>Notfications</span>}
        </Link>

        <Link className='items mobile flex items-center   p-2 my-1 group  w-full  h-auto rounded-md hover:bg-gray-200/80 transition ease-in duration-100'>
          <FiPlusSquare size={28} className='icon  text-black group-hover:scale-105' />
          {isCollapsed && <span className='itemText ml-4   text-black lg:block md:hidden sm:hidden block'>Create</span>}
        </Link>

        <Link to={"/profile"} className='items mobile flex items-center   p-2 my-1 group  w-full  h-auto rounded-md hover:bg-gray-200/80 transition ease-in duration-100'>
          <FaUserCircle size={28} className='icon   text-black group-hover:scale-105' />
          {isCollapsed && <span className='itemText ml-4   text-black lg:block md:hidden sm:hidden block'>Profile</span>}
        </Link>


        <div className="items lastitems w-full h-auto flex flex-col absolute bottom-3 left-0   py-1 px-2">
          <Link  onClick={toggleSidebar} className='flex items-center   p-2 my-1   w-full group  h-auto rounded-md hover:bg-gray-200/80 transition ease-in duration-100'>
            <FaThreads size={30} className='icon   text-black group-hover:scale-105' />
            {isCollapsed && <span className='itemText ml-4   text-black lg:block md:hidden sm:hidden block'>Threads</span>}
          </Link>

          <Link to={"/setting"} className='items flex items-center   p-2 my-1   w-full group h-auto rounded-md hover:bg-gray-200/80 transition ease-in duration-100'>
            <FaBars size={25} className='icon    text-black group-hover:scale-105' />
            {isCollapsed && <span className='itemText ml-4   text-black lg:block md:hidden sm:hidden block'>More</span>}
          </Link>

        </div>
      </div>




    </>

  )
}

export default Sidebar