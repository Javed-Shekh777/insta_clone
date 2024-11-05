import { useEffect, useState } from 'react'
import Box from '../../helper/Box'
import Switch from '../../helper/Switch'
import Radio from '../../helper/Radio';
import { Outlet } from 'react-router-dom';

const SharingAndReuse = () => {
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
                        <p className="headingTop font-bold text-xl mb-7">Sharing and reuse</p>

                        <Box data={[{ text: "Posts and reels tp stories", icon: <Switch /> }, { text: "Stories in messages", icon: <Switch /> }

                        ]} heading={"Allow people to share your content"} handle={handle} fw={"bold"} />

                        <p className='font-bold my-3'>Allow people to share externally</p>

                        <Box data={[{ text: "On", icon: <Radio /> }, { text: "Off", icon: <Radio /> }]} heading={"Website embeds"} handle={handle} fw={"normal"} sText='When this is on, your public posts or profile can be shown outside of Instagram, including articles and blogs.' />

                        <Box data={[{ text: "Featured content requests in shops", icon: <Switch /> ,small:"When this is on, business account can request to feature to your photos and videos in their shops across Meta Company Products when you tag accounts with shops or use hashtags related to shops in your posts."}]} heading={"Allow businesses to interact with you"} handle={handle} fw={"bold"} />

                        <p className='font-bold my-3'>Where you share your story and posts outside Instagram</p>

                        <Box data={[{ text: "On", icon: <Radio /> }, { text: "Off", icon: <Radio /> }]} heading={"Share story to facebook"} handle={handle} fw={"normal"} />



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

export default SharingAndReuse