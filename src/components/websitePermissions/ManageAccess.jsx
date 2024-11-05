import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineInfo } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ManageAccess = () => {

    const tabs = [
        {
            top: "Active",
            text: "These are apps and websites that you've connected to your Instagram account. They can access non-public information that you choose to share with them.",
            small: "You have not authorised any applications to access your Instagram account."
        },
        {
            top: "Expired",
            text: "These are apps and websites that you've connected to your Instagram account that you may not have used in the last 90 days. They're no longer able to access your non-public information, but they may still have the information that you shared while they were active. \"Non-public\" means information that an app can only access if you choose to share it when you log in with your Instagram account (such as your email address).",
            small: "You have no expired applications that had access to your Instagram account."
        },
        {
            top: "Removed",
            text: "These are apps and websites that are no longer connected to your Instagram account. They can no longer access your non-public information, but may still have the information that you shared while they were active. \"Non-public\" means information that an app can only access if you choose to share it when you log in with your Instagram account (such as your email address). You can ask an app to delete your information. To do it, review their Privacy Policy for details and contact information. If you contact an app, they may need your user ID.",
            small: "You have no removed applications that had access to your Instagram account."
        }];
    const [activeTab, setActiveTab] = useState(0);

    const naviagte = useNavigate();
    const handleBack = () => {
        naviagte(-1);
    }
    return (
        <section className="">
            <div className="wrapper">
                <div className="top flex items-center my-2 gap-2">
                    <div className="arrow cursor-pointer" onClick={handleBack}>
                        <IoIosArrowBack size={28} />
                    </div>
                    <div className="heading text-xl font-bold">Apps and websites</div>
                </div>

                <div className=" flex items-center relative">
                    <div className=" absolute border-[1px] rounded-[50%] p-2 left-[-8%] top-[25%]">

                        <div className="icon">
                            <MdOutlineInfo size={28} />
                        </div>

                    </div>
                    <p className="  ml-2 my-4">The Instagram Basic Display API will be discontinued on 4 December 2024. After that date, access to the Instagram Basic Display API and your historical usage of it will no longer be available. Download your information now if you'd like to keep it.</p>

                </div>

                <div className="tabs flex items-center text-center mt-4 mb-2 border-b-[1px] border-b-gray-400">
                    {tabs?.map((item, i) => (
                        <div key={i} onClick={() => setActiveTab(i)} className={`tab flex-[1] p-2 cursor-pointer ${i === activeTab ? "text-blue-400" : "text-gray-400"}`}>{item?.top}</div>
                    ))}
                </div>

                {tabs?.map((item, i) => (
                    <div key={i} style={{display:i=== activeTab ?"block":"none"}} className='p-2' >
                        <div className="py-3 text-[14px]">
                            <p>{item?.text}</p>
                        </div>
                        <p className='text-[12px] text-gray-400'>{item?.small}</p>

                    </div>
                ))}




            </div>




        </section>
    )
}

export default ManageAccess