import Box from "../../helper/Box"
import Radio from "../../helper/Radio"

const MessageControl = () => {
    return (
        <section className="mt-[-2rem]">
            <div className="headingTop font-bold text-xl mb-7">
                <p>Message controls</p>
            </div>
            <div className="para mt-3 mr-3 mb-3 w-[75%]">
                <p className="text-[12px] ">
                    People you follow or have chatted with before can always message you unless you block them. When anyone else sends you a message, you can receive it as a message request that you can accept or delete.
                </p>
            </div>
            <div className="anchor my-1">
                <a href="" className="text-[12px] hover:border-b-[1px] border-b-blue-900 text-blue-900 ">Learn more about who can message you</a>
            </div>

            <Box data={[{ text: "Message requests", icon: <Radio /> }, { text: "Don;t recieve requests", icon: <Radio /> }]} heading="Your followers on Instagram" sText="Message requests from people who follow you on Instagram will be delivered to your Message requests folder unless you choose not to receive them." />

            <Box data={[{ text: "Message requests", icon: <Radio /> }, { text: "Don;t recieve requests", icon: <Radio /> }]} heading="Others on Instagram" sText="Message requests from other accounts on Instagram will be delivered to your Message requests folder unless you choose not to receive them." />

            <Box data={[{ text: "Everyone on Instagram", icon: <Radio />, small: " You can be added to group chats by everyone, except by people you've blocked." }, { text: "Only people you follow on Instagram", icon: <Radio />, small: "People you follow or have messaged before can add you to group chats." }]} heading="Who can add you to group chats" />


        </section>
    )
}

export default MessageControl

