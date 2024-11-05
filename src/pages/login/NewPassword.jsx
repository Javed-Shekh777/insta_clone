import React from 'react';
import { FaSearch } from 'react-icons/fa';

const NewPassword = () => {
    return (

        <>
            <div className="box w-full h-full">
                <nav className='w-[100vw] p-2 border-b-2 flex justify-evenly items-center'>
                    <h1 className='text-2xl text-center'>Instagram</h1>
                    <div className="search flex items-center bg-slate-100 px-3 py-2 sm:w-[14rem] md:w-[22vw]  rounded-[20px]">
                        <FaSearch size={16} className='mr-2' color='gray'  />
                        <input type="search" name="search" id="" className=' w-full bg-transparent focus:outline-0 border-0' placeholder='Seacrh' />
                    </div>

                    <div className="loginbox flex items-center ">
                        <button className='bg-blue-400 hover:bg-blue-600 rounded-lg text-white mr-3 px-3 py-1'>Log In</button>
                        <button className='text-blue-400'>Sign Up</button>
                    </div>
                </nav>


               <div className='flex items-center justify-center '>
               <div className="password border-2 p-7 max-w-[21.875rem] mt-9">
                    <p className='mt-2 text-center font-semibold text-black-900 mb-2'>Create A Strong Password</p>
                    <p className='text-center text-sm text-gray-400 mb-7'>Your password must be at least 6 character and should include a combination of numbers, letters and special characters (!$@%).</p>

                    <div className="input_field bg-slate-50 w-full my-4 border-2 rounded-md">
                        <input type="text" placeholder='New password' className='p-2 placeholder:text-black-400 w-full focus:outline-0' />
                    </div>

                    <div className="input_field w-full bg-slate-50 w-full my-4 border-2 rounded-md">
                        <input type="text" placeholder='New password again'  className='p-2 placeholder:text-black-400 w-full focus:outline-0' />
                    </div>

                    <button className='my-4 bg-blue-400 hover:bg-blue-700 p-2 rounded-md text-white text-center w-full'>
                        Reset Password
                    </button>
                </div>
               </div>
            </div>
        </>
    )
}

export default NewPassword