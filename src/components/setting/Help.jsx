import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

const Help = () => {
    const navigate = useNavigate();
    const arr = ["Help Centre", "Account Status", "Privacy and security help", "Support Requests"];


    const handleBack = () => {
        navigate(-1);
    }
    return (
        <section className='mx-7  mt-9 p-2'>
            <div className="top flex items-center mt-[-1rem] gap-2">
                <div className="arrow cursor-pointer " onClick={handleBack}>
                    <IoIosArrowBack size={28} />
                </div>
                <div className="heading text-xl font-bold">Help</div>
            </div>

            <div className="mt-5">

                {arr.map((item, i) => (
                    <div key={i} className="wrapper flex items-center justify-between  p-3 cursor-pointer">
                        <div className="left">
                            <p>{item}</p>

                        </div>
                        <div className="right">
                            <div className="icon text-gray-400">
                                <IoIosArrowForward size={20} />
                            </div>
                        </div>
                    </div>
                ))}

            </div>





        </section>
    )
}

export default Help