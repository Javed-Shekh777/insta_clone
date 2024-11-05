import { useEffect, useState } from 'react'
import Box from '../../helper/Box'
import { IoIosArrowForward } from 'react-icons/io'
import { Outlet } from 'react-router-dom';

const ContentPrefrences = () => {
    const [hide, setHide] = useState(true);

    const handle = (d) => {
        setHide(d);
    }

    useEffect(() => {
        setHide(true);
    }, [])
  return (<>
        <section className="mx-2 space-y-9 h-full">

{
    hide &&
    <div className="">
        <p className="headingTop font-bold text-xl mb-7">Content preferences</p>

        <Box data={[{ text: "Sensitive Content", icon: <IoIosArrowForward size={20} />,path:"sensitive_conent"}]} heading={"Content from accounts that you don't follow"} handle={handle} fw={"bold"} />
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

export default ContentPrefrences