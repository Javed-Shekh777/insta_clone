import React from 'react'
import Switch from '../../helper/Switch'

const LikeAndShareCounts = () => {
  return (
    <section className='mt-7'>
    <div className="headingTop font-bold text-xl mb-7 mt-[-2rem]">
        <p>Like and share counts</p>
    </div>

    <div className="box flex items-center justify-between py-3">
        <p>Hide like and share counts</p>
        <div className="icon">
            <Switch />
        </div>
    </div>

    <div className="text-[12px] text-gray-500">
        <p className='my-1'>On Instagram, the number of likes on posts and reels from other accounts will be hidden. You can hide the number of likes on your own posts and reels by going to Advanced settings before sharing.</p>

        <p className='my-3'>On Threads, the number of likes, views, reposts and quotes on posts from other profiles will be hidden. You can hide these on your own posts from the menu for each post. Learn more</p>

    </div>


</section>
  )
}

export default LikeAndShareCounts