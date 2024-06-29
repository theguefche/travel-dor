import CallToAction from '@components/button/CallToAction'
import React from 'react'
import Map from "@assets/map.svg"
import Blob from '@assets/blob.svg'
import Blob2 from '@assets/blob2.svg'

const HeroSection = () => {
    return (
        <React.Fragment>
            <div className='w-1/2 h-1/2 md:h-full absolute md:top-0 right-0 bottom-5 md:bottom-auto -z-10  overflow-hidden'>
                <div className='glass-effect w-full h-full'></div>
                <Blob />
            </div>
            <div>
                <div className="transparent-layout-element grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 ">
                    <div className='w-3/4 md:w-1/3 h-1/2 absolute -top-[15%] -left-[10%] md:-top-0 mix-blend-screen z-0 '>
                        <Blob2 />
                    </div>
                    <div className="flex flex-col justify-center prose lg:prose-lg">
                        <h1 className="bg-clip-text text-transparent mix-blend-color-dodge bg-heading pb-1">Dormitory Stays for Budget Travelers</h1>
                        <h6 className="bg-clip-text text-transparent mix-blend-hard-light  bg-sub-heading">Find and book
                            affordable and convenient dormitory rooms from multiple owners at unbeatable prices.</h6>
                        <div className="flex flex-row mx-auto justify-start mt-4 pt-2 ml-0">
                            <CallToAction text={'Find Your Stay Now !'} link={'/book'} />
                        </div>
                    </div>
                    <div>
                        <Map />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroSection