import React from 'react';
import Image from "../../assets/images/img1.png";
import { arr } from '../../constant';



const Suggestion = () => {

 

  return (
    <div className='suggestion h-auto '>
      <div className="suggestinons p-3 h-24 w-full">
        <div className="userSwitch flex items-center justify-between mb-3">
          <div className="userSwitchLeft flex flex-row">
            <div className="imageBox   w-[2.8rem] h-[2.8rem]   rounded-full flex items-center justify-center cursor-pointer ">
              <img src={Image} alt="" className='w-[100%] h-[100%] object-cover rounded-full' />
            </div>
            <div className="info flex flex-col ml-2 justify-center   ">
              <p className='cursor-pointer'>Uername</p>
              <p className='m-0 p-0 text-xs'>Fullname</p>
            </div>
          </div>
          <div className="userSwitchRight text-xs text-blue-400 font-bold hover:text-gray-300 cursor-pointer">Switch</div>
        </div>
        <div className="showAll flex items-center justify-between my-3 ">
          <p className='text-gray-400'>Suggested for you</p>
          <p className='text-gray-600 text-[13px] font-semibold'>See All</p>
        </div>
        <div className="users">

          {
            arr.splice(0,8).map((item) => (
              <div key={item} className="userSwitch flex items-center justify-between my-3">
                <div className="userSwitchLeft flex flex-row">
                  <div className="imageBox   w-[2.8rem] h-[2.8rem]   rounded-full flex items-center justify-center cursor-pointer ">
                    <img src={Image} alt="" className='w-[100%] h-[100%] object-cover rounded-full' />
                  </div>
                  <div className="info flex flex-col ml-2 justify-center wrap  ">
                    <p className='cursor-pointer'>Uername</p>
                    <p className='m-0 p-0 text-xs'>followed by ry000</p>
                  </div>
                </div>
                <div className="userSwitchRight text-xs text-blue-400 font-bold hover:text-gray-300 cursor-pointer">Follow</div>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Suggestion