import React, { useEffect, useState } from 'react'
import Box from '../../helper/Box'
import Switch from '../../helper/Switch'
import { IoIosArrowForward } from 'react-icons/io'
import { Outlet } from 'react-router-dom'

const HiddenWords = () => {
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
                    <p className="headingTop font-bold text-xl mb-7">Hidden words</p>

                    <p className="font-bold my-5">Offensive words and phrases</p>

                    <div className="small text-[12px] text-gray-400 my-3">
                        <p>When these settings are on, Instagram automatically hides some comments and message requests.</p>
                    </div>

                    <div className="box flex items-center justify-between py-3">
                        <p>Hide Comments</p>
                        <div className="icon">
                            <Switch />
                        </div>
                    </div>

                    <div className="small text-[12px] text-gray-400 my-3">
                        <p>Comments that may be offensive will be hidden in a separate section of your posts, reels, lives, videos and channels.</p>
                    </div>


                    <div className="box flex items-center justify-between py-3">
                        <p>Advanced comment filtering</p>
                        <div className="icon">
                            <Switch />
                        </div>
                    </div>


                    <div className="small text-[12px] text-gray-400 my-3">
                        <p> Even more comments that meet our criteria will automatically be hidden.</p>
                    </div>

                    <div className="box flex items-center justify-between py-3">
                        <p>Hide Message Requests</p>
                        <div className="icon">
                            <Switch />
                        </div>
                    </div>

                    <div className="small text-[12px] text-gray-400 my-3">
                        <p>Message requests that may be offensive will be moved to the hidden requests folder. We'll also filter notifications for these messages.</p>
                    </div>

                    <Box data={[{ text: "Manage custom words and phrases", icon: <IoIosArrowForward size={20} /> ,path:"comment_filtering"}]} heading='Custom words and phrases' fw="bold" handle={handle} />

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

export default HiddenWords