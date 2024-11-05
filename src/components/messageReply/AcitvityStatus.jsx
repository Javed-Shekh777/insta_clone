import Switch from '../../helper/Switch'

const AcitvityStatus = () => {
    return (
        <section>
            <div className="headingTop font-bold text-xl mb-7 mt-[-2rem]">
                <p>Activity status</p>
            </div>

            <div className="box flex items-center justify-between py-3">
                <p>Show acitvity status</p>
                <div className="icon">
                    <Switch />
                </div>
            </div>

            <div className="text-[12px] text-gray-500">
                <p className='my-1'>Allow accounts that you follow and anyone you message to see when you were last active or are currently active on Instagram apps. When this is turned off, you won't be able to see the activity status of other accounts. Learn more</p>

                <p className='my-3'>You can continue to use our services if Active Status is off.</p>

            </div>


        </section>
    )
}

export default AcitvityStatus