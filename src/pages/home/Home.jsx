import Story from '../../components/story/Story'
import Post from '../../components/post/Post'
import Suggestion from '../../components/suggestion/Suggestion'
import { MdSearch, MdArrowDropDown } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'
 

const Home = () => {
  return (
    <>
      <div className=' h-full w-screen flex justify-center pt-5'>


        <div className="header flex justify-center w-full h-[40px] p-2 fixed z-[100] left-0 top-0 justify-between  bg-white border-b border-b-[2px] items-center  hidden">
          <div className='w-full h-full flex items-center relative justify-between wrap p-3 items-stretch '>
            <div className="icon flex items-center basis-0 shrink-1 grow-1  align-left  ">
              <p className='    text-ellipsis'>Instagram</p>
              <MdArrowDropDown />

            </div>
            <div className="search flex items-center  h-full basis-8 ">
              <div className="searchBar flex items-center p-[4px] mr-5 bg-gray-100 rounded-md ">
                <MdSearch className='mx-2' />
                <input type="text" className='bg-transparent w-[200px] focus:outline-0 ' placeholder='Search' />
              </div>
              <FiHeart className='h-[26px] w-[26px] ' />
            </div>
          </div>
        </div>




        <div className="feed flex flex-col  h-auto max-w-[39.375rem] sm:w-full w-[100%]   ">
          <div className="story w-full h-auto mb-1  ">
            <Story />

          </div>
          <div className="post w-full h-auto  ">
            <Post />
          </div>
        </div>
        <div className="suggestion md:hidden lg:block sm:hidden hidden ml-[40px] h-auto w-[19.9375rem] ">
          <Suggestion />
        </div>

      </div>

    </>
  )
}

export default Home