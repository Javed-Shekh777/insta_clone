import Switch from '../../helper/Switch'

const ApprovedTags = () => {
    return (
        <section>
            <div className="headingTop font-bold text-xl mb-7 mt-[-2rem]">
                <p>Manually approve tags</p>
            </div>

            <div className="box flex items-center justify-between p-4 rounded-[15px] border-[1px] border-gray-400">
               <div className="">
               <p>Tag options</p>
               <span className='mt-[-2px] text-[12px] block'>
               Manually approve tags
               </span>
               </div>
                <div className="icon">
                    <Switch />
                </div>
            </div>
 

        </section>
    )
}

export default ApprovedTags