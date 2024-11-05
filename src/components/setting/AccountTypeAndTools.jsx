import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import Box from '../../helper/Box';
import { Outlet } from 'react-router-dom';

const AccountTypeAndTools = () => {
    const [hide, setHide] = useState(true);

    const handle = (d) => {
        setHide(d);
    }

    useEffect(() => {
        setHide(true);
    }, [])

    return (

        <>
            <section className="mx-2 space-y-9 h-full  ">

                {
                    hide &&
                    <div className="">
                        <p className="headingTop font-bold text-xl mb-7">Account type and tools</p>

                        <Box data={[{ text: "Switch to Professional Account", icon: <IoIosArrowForward size={20} />, path: "" }
                        ]} heading={"Account type"} handle={handle} fw={"bold"} />

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

export default AccountTypeAndTools