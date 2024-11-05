import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import Image from "../../assets/images/img1.png";


const RestrictedAccounts = () => {
    
  const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  const naviagte = useNavigate();
  const handleBack = ()=>{
    naviagte(-1);
  }

    return (
        <>
              <section className="mx-2 space-y-5 h-full ">
      <div className="wrapper">
        <div className="top flex items-center my-2 gap-2">
          <div className="arrow cursor-pointer" onClick={handleBack}>
            <IoIosArrowBack size={28} />
          </div>
          <div className="heading text-xl font-bold">Restricted accounts</div>
        </div>
        <p className="text-gray-500 ml-2 my-5">Protect yourself from unwanted interactions without having to block or unfollow people that you know. You can restrict them at any time from their profiles.<a href="" className=" text-blue-800"> Learn how it works</a></p>
      </div>
     

      <div className="friends">
        {
          array.map((p)=> (
            <>
              <div key={p} className="box  cursor-pointer flex items-center py-2">
                <div className="flex items-center justofy-between w-full px-3">
                  <div className="profilePicture h-full w-[4rem]  ">
                    <div className="imageBox w-[3rem]    h-[3rem]     p-[2px]   flex items-center justify-center  rounded-full cursor-pointer">
                      <img src={Image} alt="" className='w-full h-full object-cover rounded-full' />
                    </div>
                  </div>

                  <div className="lastMessage flex flex-col sm:hidden md:block">
                    <div className="username">Username</div>
                    <p className="text-sm mt-[-3px]"> name</p>
                  </div></div>
                <div className="border-gray-300 ">
                 <button className='px-3 py-1 bg-gray-300 rounded-[10px]'>Unrestrict</button>
                </div>

              </div>
            </>
          ))
        }
      </div>


    </section>

        </>
    )
}

export default RestrictedAccounts