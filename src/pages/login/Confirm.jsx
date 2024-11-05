import React from 'react'

const Confirm = () => {
  return (
    
    <>
    <div className="box w-full h-full flex justify-center items-center">
        <div className="confirm border-2 max-w-[21.875rem] p-5 mt-9">
            <div className='image text-center font-2xl my-3'>
            <h1 className=''>Instagram</h1>
            </div>

            <p className='text-center '>Enter the code we sent to your email ending in md****12@gmail.com.</p>

            <div className="input_field w-full border-2 my-2 rounded-md bg-slate-100">
                <input type="text" placeholder='Security Code' className='w-full p-2 focus:outline-0 border-0 placeholder:text-black-400' />
            </div>

            <button className='bg-blue-600 hover:bg-blue-800 text-center text-white p-2 my-2 w-full rounded-md'>
                Confirm
            </button>

            <p className='text-center text-sm my-2'>Didn't get a security code? We can<br/> <a href="" className='text-blue-600 hover:text-blue-900 text-center'>resend it.</a></p>

            <p className='text-center text-sm my-2'>If you're unable to recieve a security code. <br />use one of your <a href="" className='text-blue-500 hover:text-blue-800'>backup codes.</a></p>


        </div>
    </div>
    </>
  )
}

export default Confirm