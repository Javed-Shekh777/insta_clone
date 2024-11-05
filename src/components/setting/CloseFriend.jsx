 import SetBox from "../SetBox";
 
const CloseFriend = () => {
   
  return (
    <>
      {/* <section className="mx-2 space-y-5 h-full ">
      <div className="wrapper">
        <div className="top flex items-center my-2 gap-2">
          <div className="arrow cursor-pointer">
            <IoIosArrowBack size={28} />
          </div>
          <div className="heading text-xl font-bold">Close friends</div>
        </div>
        <p className="text-[14px] ml-2 my-4">We don't send notifications when you edit your close friends list. <a href="" className="hover:border-b-[1px] border-b-blue-300 text-blue-300">How it works.</a></p>
      </div>
      <div className="inputField flex items-center p-2  gap-2 bg-gray-100 rounded-md">
        <div className="icon text-gray-600 ">
          <MdSearch size={25} />
        </div>
        <input type="text" placeholder="Search" className="w-full h-full bg-transparent border-0 outline-0 placeholder:text-black " style={{ lineHeight: "40px" }} />
      </div>

      <div className="friends">
        {
          arr.map((p,i)=> (
            <>
              <div key={p} className="box  cursor-pointer flex items-center p-3">
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
                <div className="border-gray-300">
                  {check || <MdRadioButtonUnchecked size={28} onClick={() => setCheck(true)} />}
                  {check &&  <FaCircleCheck size={23} onClick={() => setCheck(false)} />}
                </div>

              </div>
            </>
          ))
        }
      </div>


    </section> */}
      <SetBox heading={"Close friends"} path={""} pText={"We don't send notifications when you edit your close friends list. "} aText={"How it works."}   />

    </>

  )
}

export default CloseFriend