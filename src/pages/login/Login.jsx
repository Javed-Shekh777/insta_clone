import React from 'react';
import { Link } from 'react-router-dom';



const Login = () => {
  return (
    <>
      <div>
        <div className="signin w-full h-full flex items-center justify-center my-[4rem] gap-9">
          <div className="image ">
            <img src="./sign.png" alt="" className='h-[35rem]' />
          </div>


          <div className="form">

            <form action="" className='border-2 p-7 flex flex-col justify-center max-w-[22rem] mt-0  '>
              <h1 className="text-4xl text-center my-5">
                Instagram
              </h1>

              <div className="border-2 text-[13px] mb-1 flex justify-between items-center bg-slate-50 rounded z-index-2">
                <input type="text" className='border-0 w-full h-full p-2 focus:outline-0 bg-transparent placeholder:text-gray-500' placeholder='Phone number ,username or email address' />
              </div>

              <div className="border-2 text-[13px] mb-1  flex justify-between items-center bg-slate-50 rounded z-index-2">
                <input type="text" className='border-0 w-80 h-full p-2 focus:outline-0 bg-transparent placeholder:text-gray-500' placeholder='Password' />
                <span className='bg-red-100 w-20 h-full py-2 text-center bg-transparent cursor-pointer'>
                  Show
                </span>
              </div>


              <button className='text-center w-full bg-blue-400 my-2 rounded-md text-white p-1 hover:bg-blue-600'>
                Log in
              </button>

              <div className="w-full flex items-center justify-between my-2">
                <div className='border-50 border-indigo-500/100'></div>
                <div className='text-xs font-semibold'>OR</div>
                <div className="border-1 "></div>
              </div>

              <button className=' w-full text-blue-900 py-1 my-2 '>
                Log in with Facebook
              </button>
              <Link to={"signup"}>
                <p className='text-center text-blue-700 cursor-pointer text-[.9rem]'>Forgotten your password?</p>
              </Link>

            </form>

            <div className='have_account border-2 p-6 w-[350px] text-center my-2'>
              <p className='text-[14px]'>Don't have an account? <Link to={"signup"} className='text-blue-700 font-sm'>Sign up</Link></p>
            </div>
          </div>



        </div>
      </div>

    </>
  )
}

export default Login