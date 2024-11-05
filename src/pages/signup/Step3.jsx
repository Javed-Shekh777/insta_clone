/* eslint-disable react/prop-types */
import  { useState } from 'react'


const Step3 = ({nextStep,prevStep,hanldeForm,formData}) => {

    const [code,setCode ] = useState("fdf");

    return (
        <div className="flex w-full items-center flex-col mt-2 h-full">
            <div className='border-2 p-6 max-w-[21.875rem]'>
                <h1 className="text-3xl text-center">
                    Instagram
                </h1>
                <p className='font-bold my-2 text-center text-slate-600'>Enter the confirmation code</p>

                <p className='  mb-7 text-center text-slate-600 text-sm'>Enter the confirmation code that we sent to example@gmail.com <a href="" className='text-blue-400 hover:text-blue-600'>Resend code.</a></p>
                
                <div className="border-2 text-[13px] mb-2 mt-3  bg-slate-50 rounded z-index-2">
                    <input type="text" className='border-0 w-80 h-full p-2 focus:outline-0 bg-transparent placeholder:text-gray-500'
                        placeholder='Confirmation code'
                        name={formData?.email ? "email" : "mobile_number"}
                        value={formData?.email ? formData?.email : formData?.mobile_number}
                        onChange={hanldeForm}
                    />
                    
                </div>


                 

                <button className='text-center w-full bg-blue-400 my-2 rounded-md text-white p-1 hover:bg-blue-600 cursor-pointer'
                onClick={nextStep}
                disabled={true}
                >
                    Next
                </button>


                <button className='text-center w-full  my-2 text-blue-400 p-1 hover:text-blue-600'
                onClick={prevStep}
                
                >
                    Go back
                </button>

            </div>

            <div className='have_account border-2 p-6 w-[21.875rem] text-center my-2'>
                <p className=''>Have an account? <a href="" className='text-blue-700 font-sm hover:text-blue-800'>Log in</a></p>
            </div>
        </div>
    )
}

export default Step3;