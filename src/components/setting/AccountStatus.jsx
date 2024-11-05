import { IoIosArrowForward, IoIosCheckmarkCircle } from "react-icons/io";
import Image from "../../assets/images/img1.png";
import {  FaEyeSlash, FaImage, FaRegComment } from "react-icons/fa";


const AccountStatus = () => {
    const arr = [
        { icon: <FaImage size={25} />, text: "Removed Conent and messaging issues" },
        { icon: <FaEyeSlash size={25} />, text: "Content lowered in feed" },
        { icon: <FaRegComment size={25} />, text: "Features you can't use" }

    ]
    return (
        <section className='mx-5   h-full mt-[3rem]'>
            <div className="wrapper">
                <div className="top flex items-center   gap-2">

                    <div className="heading text-xl font-bold">Account Status</div>
                </div>
            </div>


          <div className="">
          <div className="changePhoto flex items-center justify-between mb-3 mt-9 bg-gray-200 rounded-[20px]   px-3 ">
                <div className="changePhotoLeft">
                    <div className="box   flex items-center p-2">
                        <div className="profilePicture h-full w-[5rem]  ">
                            <div className="imageBox w-[4rem]    h-[4rem]  p-[2px]   flex items-center justify-center  rounded-full ">
                                <img src={Image} alt="" className='w-full h-full object-cover rounded-full' />
                            </div>
                        </div>
                        <div className="lastMessage flexflex-col sm:hidden md:block">
                            <div className="username font-bold">Ranjeet Yadav</div>
                            <p className="text-sm  mt-[-2px]"> Active 2 hours age</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>


<div className="font-[200] text-[15px]">
<p className="my-5 ">See any actions that Instagram has taken when your account or content doesn't follow our guidelines. <a href="" className="text-blue-900 hover:border-b-[1px] border-b-blue-900">Learn more about Account Status</a></p>

</div>


            {arr.map((item, i) => (
                <div key={i} className="wrapper flex items-center justify-between p-3 cursor-pointer">
                    <div className="left flex items-center gap-2">
                        <div className="icon  ">
                            {item?.icon}
                        </div>
                        <p>{item?.text}</p>

                    </div>
                    <div className="right flex items-center">
                        <div className="icon text-green-500 ">
                            <IoIosCheckmarkCircle size={20} />
                        </div>
                        <div className="icon text-gray-400">
                            <IoIosArrowForward size={20} />
                        </div>
                    </div>
                </div>
            ))}


        </section>
    )
}

export default AccountStatus