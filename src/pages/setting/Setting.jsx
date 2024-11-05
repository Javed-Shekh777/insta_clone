import { MdLock, MdOutlineNotifications, MdPerson, MdVerified, MdOutlineStarOutline, MdOutlineLock, MdOutlineBlock, MdOutlineMessage, MdOutlineTag, MdOutlineShare, MdOutlinePerson, MdOutlinePersonOff, MdOutlineNotificationsOff, MdOutlineOndemandVideo, MdOutlineDownload, MdOutlineLanguage, MdOutlineComputer, MdOutlineFamilyRestroom, MdOutlineBarChart, MdOutlineHelpOutline, MdOutlinePrivacyTip } from "react-icons/md";
import Image from "../../assets/images/img1.png";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Switch from "../../helper/Switch";
import "./setting.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaAmilia, FaRegComment, FaRegHeart } from "react-icons/fa";

const Mazedar = ({ heading, icons, handle = () => { } }) => {
    return (<>
        <div className="container my-4">
            <div className="top ml-4 mb-3 text-[12px] font-semibold text-gray-500">
                <p className="heading">{heading}</p>
            </div>
            {
                icons.map((item) => (
                    <>
                        <Link onClick={() => { if (item?.path) { handle(false) } else { handle(true) } }} to={item?.path || ""} className=" ">
                            <div className="bottom flex items-center space-x-3 p-3 my-1 hover:bg-slate-200 cursor-pointer rounded-[10px] w-full">

                                <div className="icon">
                                    {item?.icon}
                                </div>
                                <p>{item?.name}</p>
                            </div>
                        </Link>
                    </>
                ))
            }
        </div>
    </>);
}


const Setting = () => {

    const [hide, setHide] = useState(true);
    const [active,setActive] = useState(true);

    const handle = (d) => {
        setHide(d);
        setActive(true);
    }

    // useEffect(()=>{
    //     setHide(true);
    // },[])

    return (
        <section className='Setting flex w-full h-screen items-center  '>
            <section className="setting   w-[20rem] h-full  scroll-smooth overflow-y-scroll px-4 mb-2" style={{ flexShrink: 0, flexWrap: "nowrap" }}>
                <div className="settingWrapper h-full">
                    <div className="heading mb-3 mt-[2.4rem] ml-4">
                        <p className="font-bold text-xl">Settings</p>
                    </div>

                    <div className="box1 mb-2 mt-6  rounded-[15px] bg-white hover:bg-gray-100 cursor-pointer" style={{ boxShadow: "0 0 2px  black" }}>
                        <div className="wrapper p-3">
                            <div className="flex items-center space-x-0 text-lg ml-2 my-1">
                                <div className="icon"><MdLock /></div> <span>Meta</span>
                            </div>
                            <p className="font-bold   ml-2">Account Centre</p>
                            <p className="text-[12px] ml-2 text-gray-600">Manage your connected experiences and account settings across Meta technologies.</p>
                            <div className="my-1 text-gray-700 text-[12px]">
                                <div className="bx1 flex items-center space-x-3 py-1 px-2 w-full  rounded-[10px] cursor-pointer">
                                    <div className="icon"><MdPerson size={20} /></div>
                                    <p>Personel Details</p>
                                </div>
                                <div className="bx1 flex items-center space-x-3 py-1 px-2 w-full   rounded-[10px] cursor-pointer">
                                    <div className="icon"><MdVerified size={20} /></div>
                                    <p>Password and security</p>
                                </div>
                                <div className="bx1 flex items-center space-x-3 py-1 px-2 w-full  rounded-[10px] cursor-pointer">
                                    <div className="icon"><MdVerified size={20} /></div>
                                    <p>Ad preferences</p>
                                </div>
                                <div className="bx1 flex items-center space-x-3 py-1 px-2 w-full rounded-[10px] cursor-pointer">
                                    <div className="icon"><MdVerified size={20} /></div>
                                    <p>Payments</p>
                                </div>
                            </div>
                            <p className="text-blue-700 ml-2 text-[13px] font-semibold"><a href="">See more in Account Centres</a></p>
                        </div>

                    </div>

                    <div className="box my-3 ">

                        <Mazedar heading={"How you use Instagram"} icons={[
                            { icon: <FaRegCircleUser size={25} />, name: "Edit Profile", path: "" },
                            { icon: <MdOutlineNotifications size={25} />, name: "Notifications", path: "notifications" }
                        ]} handle={handle} />

                        <Mazedar heading={"Who can see your content"} icons={[
                            { icon: <MdOutlineLock size={25} />, name: "Account Privacy", path: "privacy" },
                            { icon: <MdOutlineStarOutline size={25} />, name: "Close friends", path: "close" },
                            { icon: <MdOutlineBlock size={25} />, name: "Blocked", path: "block" },
                            { icon: <MdOutlineStarOutline size={25} />, name: "hide story and live", path: "hide_story_live" },

                        ]} handle={handle} />


                        <Mazedar heading={"How others can interact with you"} icons={[
                            { icon: <MdOutlineMessage size={25} />, name: "Messages and story replies", path: "messages_and_story_replies" },
                            { icon: <MdOutlineTag size={25} />, name: "Tags and mentions", path: "tags_and_mentions" },
                            { icon: <FaRegComment size={25} />, name: "Comments", path: "comments" },
                            { icon: <MdOutlineShare size={25} />, name: "Sharing and reuse", path: "sharing_and_reuse" },
                            { icon: <MdOutlinePersonOff size={25} />, name: "Restricted accounts", path: "restricted_accounts" },
                            { icon: <FaAmilia size={25} />, name: "Hidden words", path: "hidden_words" },


                        ]} handle={handle} />


                        <Mazedar heading={"What you see"} icons={[
                            { icon: <MdOutlineNotificationsOff size={25} />, name: "Muted accounts", path: "muted_accounts" },
                            { icon: <MdOutlineOndemandVideo size={25} />, name: "Content preferences", path: "content_preferences" },
                            { icon: <FaRegHeart size={25} />, name: "Like and share counts", path: "like_and_share_counts" },
                        ]} handle={handle} />

                        <Mazedar heading={"Your app and media"} icons={[
                            { icon: <MdOutlineDownload size={25} />, name: "Archiving and downlaoding", path: "archiving_and_downloading" },
                            { icon: <MdOutlineLanguage size={25} />, name: "Language", path: "langauge" },
                            { icon: <MdOutlineComputer size={25} />, name: "Website permissions", path: "website_permissions" },
                        ]} handle={handle} />


                        <Mazedar heading={"For families"} icons={[
                            { icon: <MdOutlineFamilyRestroom size={25} />, name: "Family Center" }
                        ]} handle={handle} />

                        <Mazedar heading={"For professionals"} icons={[
                            { icon: <MdOutlineBarChart size={25} />, name: "Account type and tools", path: "account_type_and_tools" }
                        ]} handle={handle} />

                        <Mazedar heading={"More info ans support"} icons={[
                            { icon: <MdOutlineHelpOutline size={25} />, name: "Help", path: "help" },
                            { icon: <MdOutlinePrivacyTip size={25} />, name: "Privacy Centre", path: "https://privacycenter.instagram.com/?entry_point=instagram_settings_page" },
                            { icon: <MdOutlinePerson size={25} />, name: "Account status", path: "account_status" }
                        ]} handle={handle} />
                    </div>

                </div>
            </section>




            {
                hide || <section className="h-full  flex-[2] " style={{ flexShrink: 1, flexWrap: "nowrap" }}>
                    <main id="main" className=" h-full w-full scroll-smooth overflow-y-scroll md:px-[9rem] py-[2.5rem] sm:px-[5rem]">
                        <Outlet context={{ heading: "Hide story and live", pText: "Hide all photos and videos you add to your story from specific people. This also hides your live videos." }} />
                    </main>
                </section>
            }

            {
                hide &&
                <section className="editProfile scroll-smooth overflow-y-scroll h-full  flex-[2] flex items-center justify-center " style={{ flexShrink: 1, flexWrap: "nowrap" }}>
                    <div className="editProfileWrapper  justify-center flex flex-col w-full   space-y-7 px-[9rem] py-[2rem]">


                        <div className="heading mt-[12rem]  ">
                            <p className="font-bold text-2xl">Edit Profile</p>
                        </div>
                        <div className="changePhoto flex items-center justify-between my-5 bg-gray-200 rounded-[20px] py-1 px-4">
                            <div className="changePhotoLeft">

                                <div className="box   flex items-center p-3">
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
                            <div className="changePhotoRight">
                                <div className="button bg-blue-400 rounded-[10px] text-center py-1 px-2">
                                    <button className="text-white">Change photo</button>
                                </div>
                            </div>
                        </div>

                        <div className="website">
                            <div className="boxTop my-2">
                                <p className="font-bold">Website</p>
                            </div>
                            <div className="container">
                                <div className="boxBottom border-[2px] bg-slate-200 rounded-[10px] p-2">
                                    <textarea name="" id="" rows={1} cols={1} className="border-0 outline-0 w-full bg-transparent resize-none cursor-not-allowed">Website</textarea>
                                </div>
                                <div className="p text-xs mt-1">
                                    Editing your liks is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.
                                </div>
                            </div>
                        </div>


                        <div className="bio">
                            <div className="boxTop my-2">
                                <p className="font-bold">Bio</p>
                            </div>
                            <div className="boxBottom border-[2px] rounded-[10px] p-2 relative">
                                <textarea name="" id="" rows={2} cols={1} contentEditable className="border-0 outline-0 w-full bg-transparent resize-none">Hello ❤️</textarea>
                                <div className="limit absolute bottom-1 font-semibold right-2 text-xs text-gray-600"> <span>8</span> / <span>150</span></div>
                            </div>
                        </div>
                        <div className="gender">
                            <div className="boxTop my-2">
                                <p className="font-bold">Gender</p>
                            </div>
                            <div className="container">
                                <div className="boxBottom border-[2px] p-1 rounded-[10px]">
                                    <select name="" id="" className="p-2 w-full outline-0 border-0">
                                        <option selected >Prefer not to say</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="p text-xs mt-1">
                                    This won't be part your public profile
                                </div>
                            </div>
                        </div>
                        <div className="suggentionSetting">
                            <div className="boxTop my-2">
                                <p className="font-bold">Show account suggestion on profile</p>
                            </div>
                            <div className="container">
                                <div className="boxBottom border-[2px] rounded-[10px] p-4 flex items-center h-full">
                                    <div className="rightPart">
                                        <div className="p font-bold">Show account suggestions on profiles.</div>
                                        <p className="text-slate-800 text-[14px]">Choose whether people can see similiar account suggestions on your profile, and wthether your account can be suggested on other profiles.</p>
                                    </div>
                                    <div className="leftPart   h-full p-2">
                                        <div className="icon">
                                            <Switch />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="button text-white  w-full items-center justify-end text-right">
                            <button className="px-7 py-2 w-56 cursor-pointer bg-blue-600 rounded-[10px]">Submit</button>
                        </div>


                    </div>
                </section>
            }
        </section>
    )
}




export default Setting