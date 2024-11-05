import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import Switch from '../../helper/Switch';
import NotyBox from '../../helper/NotyBox';

const PushNotification = () => {
    const navigate = useNavigate();


    const handleBack = () => {
        navigate(-1);
    }

    return (
        <section className=' '>
            <div className="top flex flex-col  mt-[-1rem] gap-2">
                <div className="flex items-center gap-3 mb-4">
                    <div className="arrow cursor-pointer " onClick={handleBack}>
                        <IoIosArrowBack size={28} />
                    </div>
                    <div className="heading text-xl font-bold">Push Notifications</div>
                </div>

                <div className="font-bold">
                    <p>Push notifications</p>
                </div>


                <div className="box flex items-center justify-between py-3">
                    <p>Pause All</p>
                    <div className="icon">
                        <Switch />
                    </div>
                </div>

                <div className="">
                    <NotyBox heading={"Likes"} data={["Off", "From profiles I follow", "From everyone"]} small={"johnappleseed liked your photo."} />
                    <NotyBox heading={"Likes and comments on photos of you"} data={["Off", "From profiles I follow", "From everyone"]} small={"johnappleseed commented on a post that you're tagged in."} />
                    <NotyBox heading={"Comments"} data={["Off", "On"]} small={"johnappleseed liked your comment: Nice shot!"} />
                    <NotyBox heading={"Comment likes"} data={["Off", "From profiles I follow", "From everyone"]} small={"johnappleseed liked your photo."} />
                    <NotyBox heading={"Comment daily digest"} data={["Off", "From profiles I follow", "From everyone"]} small={"johnappleseed recently commented on this post: Nice shot!"} />
                    <NotyBox heading={"First posts and stories"} data={["Off", "From profiles I follow", "From everyone"]} small={"See johnappleseed's first story on Instagram and other similar notifications."} />
                    <NotyBox heading={"Notes"} data={["Off", "On"]} small={"johnappleseed, janeappleseed and 3 others shared notes."} />
                    <NotyBox heading={"Add to post submissions"} data={["Off", "On"]} small={"johnappleseed and 3 others want to add to your post. Review their submissions."} />
                    <NotyBox heading={"Added to post"} data={["Off", "On"]} small={"johnappleseed added your photo to their post."} />
                    <NotyBox heading={"Mention requests"} data={["Off", "From profiles I follow", "From everyone"]} small={"johnappleseed requested to be mentioned in your story."} />
                    <NotyBox heading={"Collaboration invitations"} data={["Off", "From profiles I follow", "From everyone"]} small={"johnappleseed invited you to collaborate on a post."} />
                    <NotyBox heading={"New followers"} data={["Off", "On"]} small={"John Appleseed (johnappleseed) started following you."} />
                    <NotyBox heading={"Accepted follow requests"} data={["Off", "On"]} small={"John Appleseed (johnappleseed) accepted your follow request."} />
                    <NotyBox heading={"Account suggestions"} data={["Off", "On"]} small={"johnappleseed, who you might know, is on Instagram, and other similar notifications."} />
                    <NotyBox heading={"Mentions in bio"} data={["Off", "From profiles I follow", "From everyone"]} small={"johnappleseed mentioned you in their bio."} />
                    <NotyBox heading={"Message requests"} data={["Off", "On"]} small={"johnappleseed wants to send you a message."} />
                    <NotyBox heading={"Messages from individual and group chats"} data={["Off", "On"]} small={"johnappleseed sent you a message."} />
                    <NotyBox heading={"Message reminders"} data={["Off", "On"]} small={"johnappleseed sent you a message (1d ago)."} />
                    <NotyBox heading={"Group requests"} data={["Off", "On"]} small={"johnappleseed wants to add janeappleseed to your group."} />
                    <NotyBox heading={"Broadcast channel invitations"} data={["Off", "On"]} small={"johnappleseed invited you to join their broadcast channel: Hello World!"} />
                    <NotyBox heading={"Broadcast channel messages"} data={["Off", "Personalised for you", "On"]} small={"johnappleseed sent you a message."} />
                    <NotyBox heading={"Broadcast channel replies"} data={["Off", "From profiles I follow", "From everyone"]} small={"johnappleseed replied: Nice shot!"} />
                    <NotyBox heading={"Broadcast channel reply likes"} data={["Off", "On"]} small={"johnappleseed liked your reply: Thanks!"} />
                    <NotyBox heading={"Social channel messages"} data={["Off", "From profiles I follow", "From everyone"]} small={"johnappleseed sent you a message."} />
                    <NotyBox heading={"Original audio"} data={["Off", "From profiles I follow", "From everyone"]} small={"johnappleseed created a reel with your audio."} />
                    <NotyBox heading={"Remixes"} data={["Off", "On"]} small={"johnappleseed remixed your reel."} />
                    <NotyBox heading={"Live videos"} data={["Off", "On"]} small={"johnappleseed started a live video."} />
                    <NotyBox heading={"Recently uploaded reels"} data={["Off", "On"]} small={"johnappleseed, johndoe and janedoe recently shared new reels."} />
                    <NotyBox heading={"Most watched reels"} data={["Off", "On"]} small={"Take a look at the most watched reels in your location today."} />
                    <NotyBox heading={"Add yours"} data={["Off", "On"]} small={"johnappleseed started an Add yours prompt."} />
                    <NotyBox heading={"Reels made for you"} data={["Off", "On"]} small={"See new reels made for you."} />
                    <NotyBox heading={"Your fundraisers"} data={["Off", "On"]} small={"johnappleseed donated to your fundraiser."} />
                    <NotyBox heading={"Fundraisers by others"} data={["Off", "On"]} small={"johnappleseed started a fundraiser."} />
                    <NotyBox heading={"Reminders"} data={["Off", "On"]} small={"You have unseen notifications and other similar notifications"} />
                    <NotyBox heading={"Product announcements and feedback"} data={["Off", "On"]} small={"Download Boomerang, Instagram's latest app."} />
                    <NotyBox heading={"Support requests"} data={["Off", "On"]} small={"Your support request from July 10 has just been updated."} />
                    <NotyBox heading={"Trending places"} data={["Off", "On"]} small={"John Appleseed Park is a trending place near you. See what's being shared."} />
                    <NotyBox heading={"Birthdays"} data={["Off", "On"]} small={"johnappleseed has a birthday today!"} />
                </div>



<p className='text-[12px] text-gray-400 '>We'll only notify you for people who choose to tell others about their birthdays on Instagram. You can change who to tell about your birthday at any time in your profile personal information settings.</p>

            </div>
        </section>
    )
}

export default PushNotification