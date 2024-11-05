import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Switch from '../../helper/Switch'
import { useNavigate } from 'react-router-dom'

const CommentFiltering = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }
    return (
        <section className="mx-2 space-y-5 h-full ">
            <div className="wrapper">
                <div className="top flex items-center mt-[-1rem] gap-2">
                    <div className="arrow cursor-pointer "onClick={handleBack}>
                        <IoIosArrowBack size={28} />
                    </div>
                    <div className="heading text-xl font-bold">Comment filtering</div>
                </div>

                <p className='my-5 font-semibold'>Keyword filters</p>
                <p className=" my-5 text-[14px]">Hide comments that contain any of the words or phrases you type above from your posts.</p>
            </div>


            <form action="" className="w-full">
                <div className="">
                    <textarea name="" id="" rows={5} placeholder='Add keywords separated by commas' className='border-[1px]  border-gray-300 w-full placeholder:text-gray-700 rounded-md focus:border-blue-200 focus:placeholder:text-gray-300 p-2' ></textarea>
                </div>
                <button type="submit" className='bg-blue-500   text-white mt-3 py-1  rounded-md px-3'>Submit</button>
            </form>


            <div className="box flex items-center justify-between py-3">
                <p>Hide Comments</p>
                <div className="icon">
                    <Switch />
                </div>
            </div>

            <p className='text-[12px] text-gray-400'>Hide comments that contain commonly reported keywords from your posts.</p>



        </section>
    )
}

export default CommentFiltering