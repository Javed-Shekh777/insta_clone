import Radio from "../../helper/Radio"

const Storyreply = () => {
    return (
        <section>
            <div className="headingTop font-bold text-xl mb-7 mt-[-2rem]">
                <p>Story replies</p>
            </div>
            <p className=" font-bold my-2">Who can reply to your stories.</p>
            <div className="container flex items-center gap-2 py-2  my-[2px]">
                <Radio />
                <div className="flex flex-col  justify-center">
                    <p className='mb-[-2px]'>Everyone</p>
                </div>
            </div>

            <div className="container flex items-center gap-2 py-2  my-[2px]">
                <Radio />
                <div className="flex flex-col  justify-center">
                    <p className='mb-[-2px]'>People you follow</p>
                </div>
            </div>

            <div className="container flex items-center gap-2 py-2  my-[2px]">
                <Radio />
                <div className="flex flex-col  justify-center">
                    <p className='mb-[-2px]'>Off</p>
                </div>
            </div>




        </section>
    )
}

export default Storyreply