import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { Outlet } from 'react-router-dom'
import Box from '../../helper/Box';
import Radio from '../../helper/Radio';

const TagsAndMentions = () => {
    const [hide, setHide] = useState(true);

    const handle = (d) => {
        setHide(d);
    }

    useEffect(() => {
        setHide(true);
    }, [])

    return (
        <section className="mx-2 space-y-9 h-full">

            {
                hide &&
                <div className="">
                    <p className="headingTop font-bold text-xl mb-7">Tag and mentions</p>

                    <Box data={[
                        { text: "Allow tags from everyone", icon: <Radio /> },
                        { text: "Allow tags from people that you follow", icon:<Radio /> },
                        { text: "Don't allow tags", icon: <Radio />}
                    ]} heading={"Who can tag you"} handle={handle} fw={"normal"} sText={"Choose who can tag you in their photos and videos. When people try to tag you, they'll see if you don't allow tags from everyone"} />

                    <Box data={[{ text: "Manually approve tags", icon: <IoIosArrowForward size={20} />, path: "approved_tags" }]}  handle={handle} fw={"bold"} />

                    <Box data={[
                        { text: "Allow mentions from everyone", icon: <Radio /> },
                        { text: "Allow mentions from people that you follow", icon:<Radio /> },
                        { text: "Don't allow mentions", icon: <Radio />}
                    ]} heading={"Who can @mention you"} handle={handle} fw={"normal"} sText={"Choose who can @mention you to link your account in their stories, comments, live videos and captions. When people try to @mention you, they'll see if you don't allow @mentions."} />



                </div>
            }

            {
                hide ||
                <main className=" py-[2.5rem]">
                    <Outlet />
                </main>
            }


        </section>

    )
}

export default TagsAndMentions