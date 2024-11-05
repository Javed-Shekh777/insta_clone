import React, { useState } from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Step1 = ({nextStep,hanldeForm,formData}) => {

    const [username,setUsername] = useState("");

    return (
        <div className="flex w-full h-screen items-center flex-col  ">
            <div className='border-2 p-10 max-w-[350px]  mt-2 '>
                <h1 className="text-3xl text-center">
                    Instagram
                </h1>
                <p className='font-semibold my-2 text-center text-slate-600'>Sign up to see photos and videos <br />from your friends</p>

                <button className='bg-blue-500 w-full text-white py-1 my-2 rounded-md hover:bg-blue-600'>
                    Log in with Facebook
                </button>


                <div className="w-full flex items-center justify-between my-2">
                    <div className='border-50 border-indigo-500/100'></div>
                    <div className='text-xs font-semibold'>OR</div>
                    <div className="border-1 "></div>
                </div>


                <div className="border-2 text-[13px] mb-1  flex justify-between items-center bg-slate-50 rounded z-index-2">
                    <input type="text" className='border-0 w-80 h-full p-2 focus:outline-0 bg-transparent placeholder:text-gray-500'
                        placeholder='Mobile number or email address'
                        // name={formData?.email ? "email" : "mobile_number"}
                        // value={formData.email ? formData?.email : formData?.mobile_number}
                        // onChange={hanldeForm}
                    />
                    <span className='bg-red-100 w-10 h-full py-2 text-center bg-transparent'>
                        <FaRegCheckCircle accentHeight={'100%'} color='gray' fontSize={18} />
                    </span>
                </div>

                <div className="border-2 text-[13px] mb-1  flex justify-between items-center bg-slate-50 rounded z-index-2">
                    <input type="text" className='border-0 w-80 h-full p-2 focus:outline-0 bg-transparent placeholder:text-gray-500'
                        placeholder='Full Name'
                        // name='name'
                        // value={formData.name}
                        // onChange={hanldeForm}
                    />
                    <span className='bg-red-100 w-10 h-full py-2 text-center bg-transparent'>
                        <FaRegCheckCircle accentHeight={'100%'} color='gray' fontSize={18} />
                    </span>
                </div>

                <div className="border-2 text-[13px] mb-1  flex justify-between items-center bg-slate-50 rounded z-index-2">
                    <input type="text" className='border-0 w-80 h-full p-2 focus:outline-0 bg-transparent placeholder:text-gray-500'
                        placeholder='Username'
                        name='username'
                        // value={formData?.username}
                        value={username}
                        // onChange={hanldeForm}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <span className='bg-red-100 w-10 h-full py-2 text-center bg-transparent'>
                        <FaRegCheckCircle accentHeight={'100%'} color='gray' fontSize={18} />
                    </span>
                </div>

                {username &&
                    <div className="text-[13px] mb-1 flex justify-between items-center  z-index-2">
                        <div className='border-2 p-1 bg-slate-50 rounded'>{username+133}</div>
                        <div className='border-2 p-1 bg-slate-50 rounded'>{username+3235}</div>
                </div>

                }


                <div className="border-2 text-[13px] mb-1  flex justify-between items-center bg-slate-50 rounded z-index-2">
                    <input type="text" className='border-0 w-80 h-full p-2 focus:outline-0 bg-transparent placeholder:text-gray-500'
                        placeholder='Password'
                        // name='password'
                        // value={formData?.password}
                        // onChange={hanldeForm}
                    />
                    <span className='bg-red-100 w-10 h-full py-2 text-center bg-transparent'>
                        <FaRegCheckCircle accentHeight={'100%'} color='gray' fontSize={18} />
                    </span>
                </div>


                <p className='learn_more text-xs text-center my-3'>People who use our service may have uploaded <br /> your contact information to instagram
                    <a href="" className='no-underline text-blue-700'> Learn more</a></p>

                <p className='text-xs text-center my-2'>By signing up, you agree to our <a href="" className='no-underline text-blue-700'>Terms, Privacy <br />Policy</a> and <a href="" className='no-underline text-blue-700'>Cookies Policy</a></p>


                <button className='text-center w-full bg-blue-400 my-2 rounded-md text-white p-1 hover:bg-blue-600'
                onClick={nextStep}
                >
                  <Link >Sign Up</Link>
                </button>
            </div>

            <div className='have_account border-2 p-6 w-[350px] text-center my-2'>
                <p className=''>Have an account? <a href="" className='text-blue-700 font-sm'>Log in</a></p>
            </div>
        </div>
    )
}

export default Step1;