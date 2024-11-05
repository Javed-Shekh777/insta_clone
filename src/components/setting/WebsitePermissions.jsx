import { Outlet } from 'react-router-dom'
import Box from '../../helper/Box'
import { IoIosArrowForward } from 'react-icons/io'
import { useEffect, useState } from 'react';

const WebsitePermissions = () => {
    const [hide, setHide] = useState(true);

    const handle = (d) => {
        setHide(d);
    }

    useEffect(() => {
        setHide(true);
    }, [])

    return (
        <section className='mx-2 mt-7'>

            {hide && <>
                <div className="headingTop font-bold text-xl mb-7 mt-[-2rem]">
                    <p>Website permission</p>
                </div>

                <div className="">
                    
                    <Box data={[{ text: "Apps and websites", icon: <IoIosArrowForward />, path: "manage_access" }]} handle={handle} />
                </div>

            </>
            }

            {
                hide ||
                <main className="mx-5">
                    <Outlet />
                </main>
            }


        </section>
    )
}

export default WebsitePermissions