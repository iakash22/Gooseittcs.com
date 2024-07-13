import React from 'react'
import HeroContainer from '../components/common/HeroContainer'
import WrapperLayout from '../components/layout/WrapperLayout'
import Subscribe from '../components/common/Subscribe'

const SoftwareDevelopment = () => {
    return (
        <div className='relative'>
            <HeroContainer 
                title={"Software Development"}
                description={"Website Design & Development, Corporate Website, Personal Website, Dynamic Website, E-Commerce Website, Re-Design & Maintenance"}
                ClassName={"software-hero-bg"}
            />
            
            <div className='relative bg-bg-color w-full py-[50px]'>
                <div className='md:max-w-[760px] mx-auto  xl:max-w-[1160px] w-full px-4'>
                    <h2 className='p-[10px] text-center w-full md:text-[36px] text-[20px] font-bold' > Our Comprehensive Range Of IT Services Covers All Your Needs! </h2>
                </div>
            </div>


            <Subscribe />
        </div>
    )
}

export default WrapperLayout()(SoftwareDevelopment);
