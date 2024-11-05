import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';



import { FiMessageCircle, FiHeart } from 'react-icons/fi'




const Reels = () => {
  return (
    <div className='  max-w[30rem] w-[30%] h-[100%] max-h[811.8px] lg:mt-6 md:mt-4 sm:mt-0 mt-0 '>
      <div className="Rells h-full w-full relative flex ">
        <div className="reelsVideo h-full bg-red-100 w-[90%]">Video</div>
        <div className="info h-full bg-gray-300 flex items-end flex-col justify-between ">
          <Link to={"/profile"} className='items mobile flex items-center  flex-col  p-2 my-1 group  w-full  h-auto rounded-md hover:bg-gray-200/80 transition ease-in duration-100'>
          <FiHeart className='icon  h-[30px] w-[30px] text-black group-hover:scale-105' />
          <span>ffs</span>
        </Link>

        <Link to={"/profile"} className='items mobile flex items-center flex-col   p-2 my-1 group  w-full  h-auto rounded-md hover:bg-gray-200/80 transition ease-in duration-100'>
          <FiMessageCircle className='icon  h-[30px] w-[30px] text-black group-hover:scale-105' />
          <span>ffs</span>
        </Link>

        <Link to={"/profile"} className='items mobile flex items-center flex-col  p-2 my-1 group  w-full  h-auto rounded-md hover:bg-gray-200/80 transition ease-in duration-100'>
          <FaUserCircle className='icon  h-[30px] w-[30px] text-black group-hover:scale-105' />
          <span>ffs</span>
        </Link>

        <Link to={"/profile"} className='items mobile flex items-center flex-col   p-2 my-1 group  w-full  h-auto rounded-md hover:bg-gray-200/80 transition ease-in duration-100'>
          <FaUserCircle className='icon  h-[30px] w-[30px] text-black group-hover:scale-105' />
          <span>ffs</span>
        </Link>

        </div>

      </div>
    </div>
  )
}

export default Reels