import React, { useEffect, useState } from 'react'
import Box from '../../helper/Box'
import { IoIosArrowForward } from 'react-icons/io';
import { Outlet } from 'react-router-dom';

const Notification = () => {
    const [hide, setHide] = useState(true);

    const handle = (d) => {
        setHide(d);
    }

    useEffect(() => {
        setHide(true);
    }, [])
    return (

        <section className='mx-5   h-full'>
            {hide &&
                <div className="">
                    <div className="top flex items-center   gap-2">

                        <div className="heading text-xl font-bold">Notifications</div>
                    </div>

                    <div className="">
                        <Box data={[{ text: "Push notifications", icon: <IoIosArrowForward />, path: "push_notifications" }, { text: "Email notifications", icon: <IoIosArrowForward />, path: "email_notifications" }]} handle={handle} />
                    </div>
                </div>}


            {
                hide ||
                <main className=" py-[2.5rem]">
                    <Outlet />
                </main>
            }

        </section>
    )
}

export default Notification