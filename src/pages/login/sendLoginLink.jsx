import React from 'react'

const sendLoginLink = () => {
    return (
        <>
            <nav className='navbar w-full p-0 m-0 '>
                <h1 className=' border-b-2 p-3 text-center text-2xl'>Instagram</h1>
            </nav>
            <div className="sendlink w-full flex flex-col items-center justify-center text-center mt-5">

                <div className="box max-w-[21.875rem] p-7 border-2 ">
                   
                   <div className="image text-center my-2">
                        <h1 className='text-center'>Instagram</h1>
                    </div>

                    <p className='font-semibold text-center my-2'>Trouble with logging in?</p>

                    <p className='text-sm text-slate-500 text-center my-2'>Enter your email address, phone number or username, and we'll send you a link to get back into your account.</p>


                    <div className="input_field bg-slate-400 w-full my-2 border-2 rounded-md ">
                        <input type="text"
                            placeholder='Email address, phone number or username'
                            className='p-2 placeholder:text-sm placeholder:text-black-300 focus:outline-0  w-full'
                        />
                    </div>

                    <button className='text-center w-full bg-blue-400 my-2 rounded-md text-white p-1 hover:bg-blue-600'
                    // onClick={nextStep}
                    >
                        Send Login Link
                    </button>

                    <button className='text-center text-blue-400 hover:text-blue-600'>
                        Can't reset your password?
                    </button>

                    <div className="w-full flex items-center justify-between my-4">
                        <div className='border-50 border-indigo-500/100'></div>
                        <div className='text-xs font-semibold'>OR</div>
                        <div className="border-1 "></div>
                    </div>

                    <p className='text-center font-semibold mb-9  w-full '><a href="" >Create New Account</a></p>

                   </div>
                   <button className='box max-w-[21.875rem] w-full p-1 border-2  text-center bg-slate-200 p-2 border-3'>Back to Login</button>

                   


                
            </div>
        </>
    )
}

export default sendLoginLink