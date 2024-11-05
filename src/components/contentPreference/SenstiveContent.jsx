import React from 'react'
import Box from '../../helper/Box'
import { IoIosArrowForward } from 'react-icons/io'
import Switch from '../../helper/Switch'
import Radio from '../../helper/Radio'

const SenstiveContent = () => {
    return (
        <section className="mx-2 space-y-9 h-full">


            <div className="">
                <p className="headingTop font-bold text-xl mb-7">Sensitive content control</p>

                <div className="small my-3 text-[12px] text-gray-700">
                    <p>Sensitive content doesn't go against our Community Guidelines, but refers to topics that some people may not want to see. Learn more.</p>
                </div>

                <Box data={[
                    { text: "Less", icon: <Radio />, small: "You might see less sensitive content" },
                    { text: "Standard", icon: <Radio />, small: "You might see some sensitive content" },
                    { text: "More", icon: <Radio />, small: "You might see more sensitive content" }

                ]} heading={"Choose how much sensitive content to see:"} fw={"normal"} sText="This affects search results as well as recommended content in Explore, Reels, feed and hashtag pages. This also affects comments that you see on other people's posts." />

            </div>



        </section>
    )
}

export default SenstiveContent