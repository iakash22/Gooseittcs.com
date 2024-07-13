import React from 'react'
import HeroContainer from '../components/common/HeroContainer'
import WrapperLayout from '../components/layout/WrapperLayout'
import Subscribe from '../components/common/Subscribe'
import { FaLongArrowAltRight } from "react-icons/fa";

const SoftwareDevelopment = () => {
    return (
        <div className='relative bg-bg-color'>
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

            <div className='relative bg-bg-color w-full pb-10'>
                <div className='md:max-w-[760px] mx-auto  xl:max-w-[1160px] w-full px-4'>
                    <div className='text-left lg:w-[55%] w-full lg:max-w-[63%] md:max-w-[75%] mb-[20px] p-[10px]'>
                        <h4 className='lg:text-2xl text-xl leading-[30px] 2xl:text-[28px] 2xl:leading-[36px] font-medium'>We Are Offering Wide Range Of IT Services Desktop Application To Mobile Application.</h4>
                    </div>
                    <div className='w-full flex md:flex-row flex-col-reverse justify-between gap-x-10'>
                        <div className='md:w-[50%] w-full'>
                            <BorderBox 
                                title={"Custom ERP Solutions"}
                            />
                            <BorderBox 
                                title={"Planning Solutions And Analytics"}
                            />
                            <BorderBox 
                                title={"Collaboration Tools"}
                            />
                            <BorderBox 
                                title={"SaaS Based Applications"}
                            />
                            <BorderBox 
                                title={"Supply Chain Applications"}
                            />
                        </div>
                        <div className='mb-[20px]'>
                            <img 
                                src="https://www.gooseittc.com/wp-content/uploads/2023/06/Software_Development1.jpg" 
                                alt="software" 
                                width={930}
                                height={590}
                                className='w-full xl:h-[391px] md:h-[450px] rounded-[20px_0px_20px_0px]'
                            />
                        </div>
                    </div>
                </div>
            </div>


            <Subscribe />
        </div>
    )
}

export default WrapperLayout()(SoftwareDevelopment);

const BorderBox = ({ title }) => {
    return (
        <div className='mb-[20px]'>
            <div className="p-[10px] border-solid border-blue border-2 rounded-[20px_0px_20px_0px] transition-all durstion-[0.4s]
                            hover:rounded-[0px_20px_0px_20px]">
                <div className='flex text-start flex-row items-center'>
                    <div className='bg-blue hover:bg-[#000] text-xl p-[.5em] mr-[15px] rounded-tl-[10px] rounded-br-[10px] transition'>
                        <FaLongArrowAltRight 
                            className='text-[#FFFFFF]'
                        />
                    </div>
                    <div className="flex-grow">
                        <p className="text-[#000000] text-lg font-semibold">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


