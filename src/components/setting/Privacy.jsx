import Switch from "../../helper/Switch"

const Privacy = () => {
  return (

    <section className="suggentionSetting  ">
      <div className="boxTop my-3">
        <p className="font-bold text-lg">Account Privacy</p>
      </div>
      <div className="container">
        <div className="boxBottom border-[2px] rounded-[15px] p-4 flex items-center h-full">
          <div className="rightPart">
            <div className="p" style={{fontWeight:350}}>Private account</div>
            <p className="text-slate-800 text-[12px]">
            When your account is public, your profile and posts can be seen by anyone, on or off Instagram, even if they don't have an Instagram account.
            When your account is private, only the followers that you approve can see what you share, including your photos or videos on hashtag and location pages, and your followers and following lists. Certain info on your profile, such as your profile picture and username, is visible to everyone on and off Instagram. <a href="" className="hover:border-b-[1px] border-b-blue-600 text-blue-300">Learn more</a>
            </p>
          </div>
          <div className="leftPart h-full p-2">
            <div className="icon">
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Privacy