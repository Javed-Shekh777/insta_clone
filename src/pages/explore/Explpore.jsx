
import { MdSearch } from 'react-icons/md';
import Image from "../../assets/images/img1.png";
import { arr } from '../../constant';


const Explpore = () => {
   
  return (
    <div className=' w-full h-auto flex justify-center flex-col max-w-[60rem]  sm:w-full w-[100%] h-auto'>

      <div className="header flex justify-center items-center w-full h-[60px]  p-3  fixed z-[100] left-0 top-0   bg-white border-b border-b-[2px] items-center  hidden">
        <div className="searchBar flex   p-2  w-full  bg-white focus:outline-2 rounded-md border-2 ">
          <MdSearch className='mx-2 h-[25px] w-[25px]' />
          <input type="text" className=' bg-transparent focus:outline-0 w-[100%] ' placeholder='Search' />
        </div>
      </div>


      <div className='relative feed  w-full h-auto flex flex-col left-0 md:mt-0 lg:top-[50px] sm:mt-[15px]  top-[15px]' >
        {
          arr.concat([323,43,434,343,35,345,5,345,]).map((item) => (

            <div key={item} className="explores h-auto w-full flex justify-between mb-2  gap-3 items-center cursor-pointer sm:px-[10px]">
              <div className="ImageBox   ">

                <div className="image   relative  group top-0 left-0">
                  <img src={Image} alt="" className='' />
                  <div className='absolute bg-black opacity-[0.2] group-hover:block  top-0 left-0 hidden  h-full w-full   flex items-center '>

                  </div>
                </div>
              </div>
              <div className="ImageBox">
                <div className="image relative  group top-0 left-0">
                  <img src={Image} alt="" />
                  <div className='absolute bg-black opacity-[0.2] group-hover:block  top-0 left-0 hidden  h-full w-full   flex items-center '>

                  </div>
                </div>
              </div>
              <div className="ImageBox">
                <div className="image relative  group top-0 left-0">
                  <img src={Image} alt="" />
                  <div className='absolute bg-black opacity-[0.2] group-hover:block  top-0 left-0 hidden  h-full w-full   flex items-center '>

                  </div>
                </div>
              </div>

            </div>

          ))
        }
      </div>


    </div>
  )
}

export default Explpore