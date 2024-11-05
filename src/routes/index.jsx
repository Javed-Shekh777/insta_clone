import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login.jsx";
import SignUp from "../pages/signup/SignUp.jsx";
import Reels from "../pages/reels/Reels";
import Messsages from "../pages/messages/Messages";
import Profile from "../pages/profile/Profile";
import Home from "../pages/home/Home.jsx";
import Explore from "../pages/explore/Explpore.jsx"
import Setting from "../pages/setting/Setting.jsx";
import Privacy from "../components/setting/Privacy.jsx";
import CloseFriend from "../components/setting/CloseFriend.jsx";
import BlockFriend from "../components/setting/BlockFriend.jsx";
import AccountStatus from "../components/setting/AccountStatus.jsx";

import HideStoryAndLive from "../components/setting/HideStoryAndLive.jsx";
import SetBox from "../components/SetBox.jsx";
import Comments from "../components/setting/Comments.jsx";
import MessageAndStoryReplies from "../components/setting/MessageAndStoryReplies.jsx";
import MessageControl from "../components/messageReply/MessageControl.jsx";
import Storyreply from "../components/messageReply/Storyreply.jsx";
import AcitvityStatus from "../components/messageReply/AcitvityStatus.jsx";
import TagsAndMentions from "../components/setting/TagsAndMentions.jsx";
import ApprovedTags from "../components/tagMention/ApprovedTags.jsx";
import SharingAndReuse from "../components/setting/SharingAndReuse.jsx";
import ArchievingAndDownloading from "../components/setting/ArchievingAndDownloading.jsx";
import LanguagePreferences from "../components/setting/LanguagePreferences.jsx";
import LikeAndShareCounts from "../components/setting/LikeAndShareCounts.jsx";
import WebsitePermissions from "../components/setting/WebsitePermissions.jsx";
import ManageAccess from "../components/websitePermissions/ManageAccess.jsx";
import ContentPrefrences from "../components/setting/ContentPrefrences.jsx";
import SenstiveContent from "../components/contentPreference/SenstiveContent.jsx";
import RestrictedAccounts from "../components/setting/RestrictedAccounts.jsx";
import HiddenWords from "../components/setting/HiddenWords.jsx";
import CommentFiltering from "../components/hiddenWords/CommentFiltering.jsx";
import Help from "../components/setting/Help.jsx";
import Notification from "../components/setting/Notification.jsx";
import PushNotification from "../components/notification/PushNotification.jsx";
import EmailNnotification from "../components/notification/EmailNnotification.jsx";
import MutedAccounts from "../components/setting/MutedAccounts.jsx";
import AccountTypeAndTools from "../components/setting/AccountTypeAndTools.jsx";





const router = createBrowserRouter([{
    path: "/",
    element: <App />,

    children: [
        {
            path: "",
            element: <Home />
        },
        {
            path: "signup",
            element: <SignUp />
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "explore",
            element: <Explore />
        },
        {
            path: "reels",
            element: <Reels />
        },
        {
            path: "messages",
            element: <Messsages />
        },
        {
            path: "profile",
            element: <Profile />
        },
        {
            path: "setting",
            element: <Setting />,
            children: [
                {

                path: "privacy",
                element: <Privacy />
            },
            {
                path: "notifications",
                element: <Notification />,
                children:[{
                    path:"push_notifications",
                    element:<PushNotification />
                },{
                    path:"email_notifications",
                    element:<EmailNnotification />
                }]
            },
            {
                path: "close",
                element: <CloseFriend />
            },
            {
                path: "block",
                element: <BlockFriend />
            },
            {
                path: "hide_story_live",
                element: <HideStoryAndLive />,
                children: [{
                    path: "data",
                    element: <SetBox />
                }]
            },
            {
                path: "messages_and_story_replies",
                element: <MessageAndStoryReplies />,
                children: [{
                    path: "message_controls",
                    element: <MessageControl />
                },
                {
                    path: "story_replies",
                    element: <Storyreply />
                },
                {
                    path: "activity_status",
                    element: <AcitvityStatus />
                }
                ]
            },
            {
                path: "tags_and_mentions",
                element: <TagsAndMentions />,
                children: [{ path: "approved_tags", element: <ApprovedTags /> }]
            },
            {
                path: "comments",
                element: <Comments />
            },
            {
                path: "sharing_and_reuse",
                element: <SharingAndReuse />
            },
            {
                path: "restricted_accounts",
                element: <RestrictedAccounts />
            },
            {
                path: "hidden_words",
                element: <HiddenWords />,
                children: [{ path: "comment_filtering", element: <CommentFiltering /> }]
            },
            {
                path:"muted_accounts",
                element:<MutedAccounts />
            },
            {
                path: "content_preferences",
                element: <ContentPrefrences />,
                children: [{ path: "sensitive_conent", element: <SenstiveContent /> }]
            },
            {
                path: "like_and_share_counts",
                element: <LikeAndShareCounts />
            },
            {
                path: "archiving_and_downloading",
                element: <ArchievingAndDownloading />
            },
            {
                path: "langauge",
                element: <LanguagePreferences />
            },
            {
                path: "website_permissions",
                element: <WebsitePermissions />,
                children: [{ path: "manage_access", element: <ManageAccess /> }]
            },
            {
                path: "account_type_and_tools",
                element: <AccountTypeAndTools />
            },
            {
                path: "help",
                element: <Help />
            },
            {
                path: "account_status",
                element: <AccountStatus />
            }




            ]
        },

    ]
},

]);

export default router;