/* eslint-disable react/prop-types */
import { useState } from 'react'
import Switch from '../../helper/Switch';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';
import Radio from '../../helper/Radio';

const Comments = () => {
    return (
        <section className="suggentionSetting space-y-9 ">
            <div className="boxTop my-3">
                <p className="font-bold text-lg">Comments</p>
            </div>
            <div className="container mt-3">
                <p className='font-semibold'>Allow comments from </p>
                <div className="boxBottom  flex items-center h-full flex-col">
                    <Box text='Everyone'  />
                    <Box text='People you follow' count={203} />
                    <Box text='Your followers' />
                    <Box text='People you follow and your followers' />

                </div>

            </div>


            <div className="leftPart h-full p-1 flex flex-col gap-1 w-full justify-between">
                <div className="box flex items-center w-full justify-between">
                    <div className="left font-semibold">Allow GIF comments</div>
                    <div className="icon">
                        <Switch />
                    </div>
                </div>
                <div className="">
                    <p className='text-[12px]'>People will be able to comment GIFs on your posts and reels.</p>

                </div>
            </div>


        </section>
    )
}




const Box = ({ text = "", count = "" })  => {
    const [check, setCheck] = useState(false);

    return (<>
        <div className="container flex items-center gap-2 py-2  my-[2px]">
            <Radio />
            <div className="flex flex-col  justify-center">
                <p className='mb-[-2px]'>{text}</p>
                <p className='text-[12px] text-gray-700'><span className="count">{count}</span> <span className="txt">people</span></p>
            </div>
        </div>
    </>);
}

export default Comments