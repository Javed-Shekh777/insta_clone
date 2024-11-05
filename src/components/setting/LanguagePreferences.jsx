import { useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import { IoIosArrowBack } from 'react-icons/io';
import { MdRadioButtonUnchecked, MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const LanguagePreferences = () => {
    const [check, setCheck] = useState(false);
   
   
    const array = ["English","Hindi","French","Urdu","Marathi","Chini","English","Hindi","French","Urdu","Marathi"];
  
    const naviagte = useNavigate();
    const handleBack = ()=>{
      naviagte(-1);
    }

  return (
    <section className="mx-2   ">
    <div className="wrapper">
      <div className="top flex items-center my-2 gap-2">
        <div className="arrow cursor-pointer" onClick={handleBack}>
          <IoIosArrowBack size={28} />

        </div>
        <div className="heading text-xl font-bold"> Language preferences</div>
      </div>
      <div className="">
      <p className="text-[14px] font-bold my-4">App language</p>
      <span className='block mt-[-8px] text-[15px] text-gray-600'>See buttons, titles and other texts on Instagram in your preferred langauge.</span>
      </div>
    </div>
    <div className="inputField flex items-center p-2 bg-red-300 gap-2 mt-4 bg-gray-100 rounded-md">
      <div className="icon text-gray-600 ">
        <MdSearch size={25} />
      </div>
      <input type="text" placeholder="Search" className="w-full h-full bg-transparent border-0 outline-0 placeholder:text-black " style={{ lineHeight: "40px" }} />
    </div>

    <div className="friends overflow-y-scroll h-[70vh]">
      {
        array.map((lng,i)=> (
          <>
            <div key={i} className="box  cursor-pointer flex items-center p-3">
              <div className="flex items-center justofy-between w-full px-3">
               <p>{lng}</p>
                </div>
              <div className="border-gray-300">
                {check || <MdRadioButtonUnchecked size={28} onClick={() => setCheck(true)} />}
                {check &&  <FaCircleCheck size={23} onClick={() => setCheck(false)} />}
              </div>

            </div>
          </>
        ))
      }
    </div>


  </section>
  )
}

export default LanguagePreferences