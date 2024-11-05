import React from 'react'
import Switch from '../../helper/Switch'
import Box from '../../helper/Box'

const ArchievingAndDownloading = () => {
    return (
        <section className='mx-2  mt-7'>
            <div className="headingTop font-bold text-xl mb-7 mt-[-2rem]">
                <p>Archiving and downloading</p>
            </div>

            <Box data={[{ text: "Save story to archive", icon: <Switch />, small: "Automatically save photos and videos to your archive so you don't have to save them to your phone. Only you can see your archive." }]} heading={"Saving to archive"} fw="bold" />

        </section>
    )
}

export default ArchievingAndDownloading