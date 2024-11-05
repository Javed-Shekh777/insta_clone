import Image from "../../assets/images/img11.png";
import { MdMoreHoriz, MdSaveAlt } from "react-icons/md";
import { FiMessageCircle, FiHeart } from 'react-icons/fi'
import { arr } from '../../constant';


const Post = () => {

    return (
        <div key={1} className='post w-full h-auto   lg:px-6 md:px-4 mt-1 '>

            {
                arr.map((l) => (
                    <>
                        <div key={l} className="postHead h-[3.5rem] flex flex-row justify-between items-center px-3 lg:px-0 md:px-0 ">
                            <div className="postHeadLeft h-full w-full flex items-center ">
                                <div className='flex items-center '>
                                    <div className="imageBox   w-[2.6rem] h-[2.6rem] p-[2px] border border-[2.5px] flex items-center justify-center border-red-400 rounded-full flex items-center justify-center cursor-pointer ">
                                        <img src={Image} alt="" className='w-[100%] h-[100%] object-cover rounded-full' />
                                    </div>
                                    <div className="options flex flex-col items-start h-full ml-2 ">
                                        <div className='flex h-full flex-row items-center '>
                                            <p className=' font-semibold cursor-pointer ' >Amjab ali speaks </p>
                                            <p className=' inline'> . </p>
                                            <p className='font-light cursor-pointer '> 1 d</p>
                                            <p className='  '> . </p>
                                            <p className='font-bold text-blue-500 cursor-pointer  '> Follow</p>
                                        </div>
                                        <span className='text-xs'>Original audio</span>
                                    </div>
                                </div>
                            </div>
                            <div className="postHeadRight cursor-pointer">
                                <MdMoreHoriz size={25} />
                            </div>

                        </div>
                        <div className="postAvatar w-full overflow-clip max-h-[28rem] h-auto rounded-[4px]">
                            <div className="postAvatarContainer h-full w-full rounded-[4px]">
                                <div className="Image">
                                    <img src={Image} alt="" className='h-full h-full rounded-[4px]' />
                                </div>
                            </div>
                        </div>
                        <div className="interactions h-10 w-full flex flex-row items-center justify-between  px-3 lg:px-0 md:px-0">
                            <div className="interactionsLeft flex items-center gap-3">
                                <FiHeart className='h-[1.6rem] w-[1.6rem] cursor-pointer' />
                                <FiMessageCircle className='h-[1.6rem] w-[1.6rem] cursor-pointer' />
                                <FiMessageCircle className='h-[1.6rem] w-[1.6rem] cursor-pointer' />
                            </div>
                            <MdSaveAlt className='h-[1.6rem] w-[1.6rem] cursor-pointer' />
                        </div>
                        <div className="likes my-0 p-0 font-semibold text-[14px]  px-3 lg:px-0 md:px-0 cursor-pointer">
                            123,5353 likes
                        </div>
                        <div className="description text-[14px] max-w-[95%]  px-3 lg:px-0 md:px-0">
                            anchor_zain
                            Ab Isme Meri Kya Galti 😂 A For Alif Laila yad hai ?fdkfdsklfndkdfmdlkfkdfmdk
                            ...
                            more
                        </div>
                        <div className="comments px-3 text-gray-400 text-[14px] cursor-pointer  px-3 lg:px-0 md:px-0">
                            View all <span>233</span> comments
                        </div>
                        <div className="addComment mb-2 h-auto flex flex-row h-auto justify-between items-center w-full border-b border-b-2 px-3 lg:px-0 md:px-0">
                            <textarea type="text" className='storiesBox group max-h[70px] flex grow input w-auto focus:outline-0 text-sm placeholder:text-gray-400 bg-transparent resize-none' placeholder='Add a comment' />
                            <button className='group-active:inline mx-2 hidden hover:text-gray-400 '>Post</button>
                            <span className='inline-block cursor-pointer text-[12px'>🥰</span>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default Post