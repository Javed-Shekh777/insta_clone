import { useState } from "react";
import Radio from "./Radio";

const NotyBox = ({ heading = "", data = [], small = "" }) => {
    return (
        <div className="container my-3">
            <p className='font-bold my-3'>{heading} </p>
            <div className="boxBottom  flex items-center h-full flex-col">
                {data?.map((item, i) => (
                    <Box key={i} text={item} />
                ))}
            </div>

            <div className="text-[12px] my-5 text-gray-400 border-b-[1px] border-b-gray-400">
                <p>{small}</p>
            </div>

        </div>
    )
}



const Box = ({ text = "" }) => {
    const [check, setCheck] = useState(false);

    return (<>
        <div className="container flex items-center gap-2 py-2  my-[2px]">
            <Radio />
            <div className="flex flex-col  justify-center">
                <p className='mb-[-2px]'>{text}</p>
            </div>
        </div>
    </>);
}
export default NotyBox