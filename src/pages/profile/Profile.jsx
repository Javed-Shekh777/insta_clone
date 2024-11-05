import React from 'react';
import { MdOutlineGridOn, MdComment, MdSettings, MdLink, MdAdd, MdArrowDropDown } from "react-icons/md";
import { FaHeart, } from "react-icons/fa";

import "./profile.css";
import Image from "../../assets/images/img1.png";
import { FaThreads } from 'react-icons/fa6';

const Profile = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const stories = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15];



  return (
    <>




      <div className='mainBox
     max-w-[935px] w-full h-auto  pt-4   
    '>

        <div className='mbprofile w-full p-2 mb-1   hidden border-b-2 border-b-[#eee]'>
          <div className="wrapper flex w-full items-center mx-5 justify-between">
          <div className="setting cursor-pointer">
            <MdSettings size={25} />
          </div>
          <div className="mid flex items-center gap-1 cursor-pointer">
          <div className="username text-[17px]">Hello</div>
          <MdArrowDropDown size={25} />
          </div>
          <div className="icon cursor-pointer">
            <FaThreads size={25} />
          </div>
          </div>
        </div>



        <div className="top h-auto w-full  p-2 flex flex-col  ">
          <div className='left h-full  sm:px-7  md:p-5 flex md:flex-row items-start justify-center gap-x-20 sm:flex-col '>
            <div className="leftTop w-auto h-full items-center justify-center   sm:hidden md:block ">
              <div className="profilePicture h-full w-full    " style={{ margin: "0px auto" }}>
                <div className="imageBox w-[10rem]    h-[10rem]     p-[2px]   flex items-center justify-center  rounded-full cursor-pointer">
                  <img src={Image} alt="" className='w-full h-full object-cover rounded-full' />
                </div>
              </div>
            </div>

            {/* MobileView */}


            <div className="MleftTop flex w-full  h-full items-center  mx-7 mb-2  md:hidden hidden sm:flex">
              <div className="MprofilePicture h-full   "  >
                <div className="MimageBox w-[8rem]  h-[8rem]     p-[2px]   flex items-center justify-center   rounded-full cursor-pointer">
                  <img src={Image} alt="" className='w-full h-full object-cover rounded-full' />
                </div>
              </div>


              <div className="MtopInfo flex flex-col items-center space-x-5 ">
                <p className="Musername">codesikho.mj</p>
                <div className="Mbuttons flex space-x-2 text-white mt-3">
                  <button className='bg-gray-300 py-1 px-2 rounded-md cursor-pointer'>Edit profile</button>
                  <button className='bg-gray-300 py-1 px-2 rounded-md cursor-pointer'>View archive</button>
                </div>
              </div>
            </div>
            {/* MobileView */}




            <div className="rightTop  ">
              <div className="topInfo flex items-center space-x-5  hidden md:flex   sm:hidden">
                <p className="username">codesikho.mj</p>
                <div className="buttons flex space-x-2 text-black">
                  <button className='bg-gray-300 py-1 px-2 rounded-md cursor-pointer'>Edit profile</button>
                  <button className='bg-gray-300 py-1 px-2 rounded-md cursor-pointer'>View archive</button>
                </div>
                <div className="setting cursor-pointer md:block sm:hidden ">
                  <MdSettings size={30} />
                </div>
              </div>



              <div className="middleInfo md:flex space-x-5 mt-2  sm:hidden">
                <div className="box">
                <p> <span>50k</span> <span> Posts</span></p>
                </div>
                <div className="box">
                  <p> <span>50k</span> <span>Followers</span></p>
                </div>
                <div className="box">
                  <p> <span>100</span> <span>Followings</span></p>
                </div>
              </div>

              <div className="bottomInfo mt-2 sm:w-screen md:w-auto">
                <p className="fullname">JavedShekh123</p>
                <p className="bio text-[15px]">
                  Professional Account <br />
                  🚀 Web/App enthuist <br />
                  ❤️Life Long learner <br />
                  full stack developer 💻 <br />


                </p>
                <div className="link flex items-center gap-x-2">
                  <MdLink size={20} />
                  <a href="#" className='text-[15px] text-blue-700'>fdjjfdsfsdfidhf fdsf </a>
                </div>

              </div>



            </div>

          </div>


          <div className='right  story w-full h-auto my-2 '>

            <div className='tagg w-full h-auto p-3  '>
              <ul className='storiesBox flex flex-row  h-auto w-full gap-[1rem] scroll-smooth overflow-auto   '>
                {
                  stories.map((item) => (
                    <li key={item} className='h-auto md:w-[7rem] sm:w-[5rem]   flex flex-col items-center justify-center  p-1 cursor-pointer'>
                      <div className="imageBox  md:w-[6rem] md:h-[6rem] sm:w-[4rem] sm:h-[4rem] sm:p-0 md:p-[2px] border border-[2.5px] flex items-center justify-center border-gray-400 rounded-full">
                        <img src={Image} alt="" className='w-full h-full object-cover rounded-full' />
                      </div>
                      <span className='text-xs '>Name</span>
                    </li>

                  ))
                }
                <li className='h-auto md:w-[8rem] sm:w-[5rem]   flex flex-col items-center justify-center  p-1 cursor-pointer'>
                  <div className="imageBox  md:w-[7rem] md:h-[7rem] sm:w-[4rem] sm:h-[4rem] sm:p-0 md:p-[2px] border border-[2.5px] flex items-center justify-center border-red-400 rounded-full">
                    <MdAdd size={45} />
                  </div>

                </li>
              </ul>

            </div>



          </div>
        </div>

        <div className="MomiddleInfo items-center justify-evenly py-1 border-t-2 border-t-gray-300 space-x-5 mt-2 sm:flex md:hidden hidden">
          <div className="box">
            <div className="flex items-center flex-col justify-center">
              <p>10</p>
              <p>Posts</p>
            </div>
          </div>
          <div className="box">
          <div className="flex items-center flex-col justify-center">
              <p>10k</p>
              <p>Followers</p>
            </div>
          </div>
          <div className="box">
          <div className="flex items-center flex-col justify-center">
              <p>1M</p>
              <p>Followings</p>
            </div>
          </div>
        </div>


        <div className="middle h-auto sm:h-[30px] w-full flex flex-row items-center justify-center transition-all ease border-t-2  mt-1 ">
          <div className='h-auto w-full '>
            <div className="flex justify-around md:justify-around h-auto items-center w-full lg:justify-center ">
              <div className="box flex items-center  h-[32px] px-2   lg:mr-16 md:mr-0 sm:mr-4 cursor-pointer sm:border-b-2 lg:border-t-2 sm:border-t-0 lg:border-b-0  hover:border-black transition-all ease-in duration-100">
                <MdOutlineGridOn className='lg:mr-3 md:mr-3 sm:mr-1 h-[18px] w-[18px]' />
                <p className='uppercase lg:block md:block hidden text-[12px]'>Posts</p>
              </div>
              <div className="box flex items-center h-[32px] px-2  lg:mr-16 md:mr-0 sm:mr-4 mr-0 cursor-pointer sm:border-b-2 lg:border-t-2 sm:border-t-0 lg:border-b-0  hover:border-black transition-all ease-in duration-200">
                <MdOutlineGridOn className='lg:mr-3 md:mr-3  sm:mr-1 mr-0 h-[18px] w-[18px]' />
                <p className='uppercase lg:block md:block hidden text-[12px]'>reels</p>
              </div>
              <div className="box flex items-center px-2 h-[32px]   lg:mr-16 md:mr-0 sm:mr-4  cursor-pointer sm:border-b-2 lg:border-t-2 sm:border-t-0 lg:border-b-0  hover:border-black transition-all ease-in duration-200">
                <MdOutlineGridOn className='lg:mr-3 md:mr-3 sm:mr-1 mr-0 h-[18px] w-[18px]' />
                <p className='uppercase lg:block md:block hidden text-[12px]'>saved</p>
              </div>
              <div className="sm:hidden hidden box lg:flex items-center px-2 h-[32px]  lg:mr-16 md:mr-12 sm:mr-4 cursor-pointer sm:border-b-2 lg:border-t-2  sm:border-t-0 lg:border-b-0 hover:border-black transition-all ease-in duration-200">
                <MdOutlineGridOn className='lg:mr-3 md:mr-3 sm:mr-1 mr-0 h-[18px] w-[18px]' />
                <p className='uppercase lg:block md:block hidden text-[12px]'>tagged</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom box-sizing my-3">
          <div className="posts" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gridGap: '10px'
          }}>

            {
              images.map((item) => (
                <div key={item} className="images relative cursor-pointer group">
                  <img src={Image} alt="" className='"h-full w-full object-cover' />
                  <div className="hoverItems flex items-center absolute left-0 top-0  h-full w-full  text-white flex items-center   justify-center gap-2" >
                    <span className='  opacity-0 flex  items-center ' > <FaHeart className='h-5 w-5 ' /><span>23</span></span>
                    <span className='opacity-0 flex items-center '><MdComment className='h-5 w-5' /><span>23</span></span>
                  </div>
                </div>

              ))
            }









          </div>
        </div>
      </div>
    </>
  )
}

export default Profile