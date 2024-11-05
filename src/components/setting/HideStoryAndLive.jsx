import { useEffect, useState } from 'react'
import SetBox from '../SetBox';
import { IoIosArrowForward } from "react-icons/io";
import { Link, Outlet } from 'react-router-dom';

const HideStoryAndLive = () => {

    const [hide, setHide] = useState(true);
 
    const handle = (id ) => {
        // if(id){
        //     setHide(id);
        // }else{
        //     setHide(false);
        // }

        setHide(id || false);
        
    }

  useEffect(()=>{
      handle(!hide);
  },[])

    return (
        <>
            {hide && <section className="suggentionSetting  ">
                <div className="boxTop my-3">
                    <p className="font-bold text-lg">Hide Story and live</p>
                </div>
                <div className="container">
                    <div className="boxBottom border-[2px] rounded-[15px] p-4 flex items-center justify-between h-full">
                        <div className="rightPart">
                            <p className="text-slate-800 ">
                                Hide story and live from
                            </p>
                        </div>
                        <div className="leftPart h-full p-2">
                            <Link to={"data"}>
                                <div className="icon cursor-pointer" onClick={handle}>
                                    <IoIosArrowForward size={20} />
                                </div>

                            </Link>

                        </div>
                    </div>
                </div>
            </section>}


            {/* {hide ? "" : <SetBox heading={"Hide story and live"} pText={"Hide all photos and videos you add to your story from specific people. This also hides your live videos."} handleBack={handleBack} />} */}

             <Outlet context={{heading:"Hide story and live", pText:"Hide all photos and videos you add to your story from specific people. This also hides your live videos."}} />








        </>

    )
}

export default HideStoryAndLive