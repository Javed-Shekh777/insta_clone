import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import Image from "../../assets/images/img1.png";
const MutedAccounts = () => {

    const array = [1, 2, 3, 4];

    const naviagte = useNavigate();
    const handleBack = () => {
        naviagte(-1);
    }
    return (
        <section className="mx-2 space-y-5 h-full ">
            <div className="wrapper">
                <div className="top flex items-center my-2 gap-2">
                    <div className="arrow cursor-pointer" onClick={handleBack}>
                        <IoIosArrowBack size={28} />
                    </div>
                    <div className="heading text-xl font-bold">Restricted accounts</div>
                </div>
            </div>


            <div className="friends w-full">
                {
                    array.map((p) => (
                        <>
                            <div key={p} className="box  cursor-pointer flex  justify-between py-2">
                                <div className="flex items-center  w-full px-3">
                                    <div className="profilePicture h-full w-[4rem]  ">
                                        <div className="imageBox w-[3rem]    h-[3rem]     p-[2px]   flex items-center justify-center  rounded-full cursor-pointer">
                                            <img src={Image} alt="" className='w-full h-full object-cover rounded-full' />
                                        </div>
                                    </div>

                                    <div className="lastMessage flex flex-col sm:hidden md:block">
                                        <div className="username">Username</div>
                                        <p className="text-sm mt-[-5px]"> story muted</p>
                                    </div></div>
                                <div className="  w-36 flex items-center justify-center  ">
                                    <button className='block py-1 bg-gray-300 rounded-[10px] px-2'>View profile</button>
                                </div>

                            </div>
                        </>
                    ))
                }
            </div>


        </section>
    )
}

export default MutedAccounts