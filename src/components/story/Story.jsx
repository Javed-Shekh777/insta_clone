import Image from "../../assets/images/img1.png";
import {arr} from "../../constant.js";
 


const Story = () => {
    
    return (
        <div className='stories w-full h-full py-1 px-2  '  >
            <ul className='storiesBox flex flex-row   h-full w-full gap-x-2 scroll-smooth overflow-auto   '>
               {
                arr.map((item)=>(
                    <li  key={item} className='h-full w-[6rem] flex flex-col items-center justify-center  p-1 cursor-pointer'>
                    <div className="imageBox  w-[5rem] h-[5rem] p-[2px] border border-[2.5px] flex items-center justify-center border-red-400 rounded-full">
                        <img src={Image} alt="" className='w-full h-full object-cover rounded-full' />
                    </div>
                    <span className='text-xs '>Name</span>
                </li>

                ))
               }
            </ul>

        </div>
    )
}

export default Story