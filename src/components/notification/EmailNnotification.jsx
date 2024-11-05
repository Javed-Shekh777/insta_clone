import React from 'react'
import NotyBox from '../../helper/NotyBox';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const EmailNnotification = () => {
    const navigate = useNavigate();


    const handleBack = () => {
        navigate(-1);
    }

    return (
        <section className=' '>
            <div className="top flex flex-col  mt-[-1rem] gap-2">
                <div className="flex items-center gap-3 mb-4">
                    <div className="arrow cursor-pointer " onClick={handleBack}>
                        <IoIosArrowBack size={28} />
                    </div>
                    <div className="heading text-xl font-bold">Email notifications</div>
                </div>

        
                <div className="">
                    <NotyBox heading={"Feedback emails"} data={["Off", "On"]} small={"Give feedback on Instagram."} />  
                    <NotyBox heading={"Reminder emails"} data={["Off", "On"]} small={"See notifications that you may have missed."} />           
                    <NotyBox heading={"Product emails"} data={["Off", "On"]} small={"Get tips and resources about Instagram's tools."} />           
                    <NotyBox heading={"News emails"} data={["Off", "On"]} small={"Learn about new Instagram features."} />           
                    <NotyBox heading={"Support emails"} data={["Off", "On"]}   />           

                </div>



<p className='text-[12px] text-gray-400 '>Get updates on reports and violations of our Community Guidelines.</p>

            </div>
        </section>
    )
}

export default EmailNnotification