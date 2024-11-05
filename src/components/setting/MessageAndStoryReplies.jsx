import { IoIosArrowForward } from "react-icons/io"
import Box from "../../helper/Box"
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const MessageAndStoryReplies = () => {
    const [hide, setHide] = useState(true);

    const handle = (d) => {
        setHide(d);
    }

    useEffect(() => {
        setHide(true);
    }, [])

    return (

        <>
            <section className="mx-2 space-y-9 h-full">

                {
                    hide &&
                    <div className="">
                        <p className="headingTop font-bold text-xl mb-7">Messages and story replies</p>

                        <Box data={[{ text: "Message controls", icon: <IoIosArrowForward size={20} />, path: "message_controls" }, { text: "Story replies", icon: <IoIosArrowForward size={20} />, path: "story_replies" }
                        ]} heading={"How people can reach you"} handle={handle} fw={"bold"} />

                        <Box data={[{ text: "Show acitvity status", icon: <IoIosArrowForward size={20} /> ,path:"activity_status"}]} heading={"Who can see that you're online"} handle={handle} fw={"bold"} />
                    </div>
                }

                {
                    hide ||
                    <main className=" py-[2.5rem]">
                        <Outlet />
                    </main>
                }


            </section>



        </>


    )
}

export default MessageAndStoryReplies