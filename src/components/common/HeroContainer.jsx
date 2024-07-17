import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const HeroContainer = ({ title, description, ClassName, colors }) => {
    return (
        <div className={`${ClassName} bg-cover overflow-hidden`}>
            <div className='md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4 md:min-h-[420px] min-h-[602px] relative flex items-center'>
                <div className=''>
                    <h1 className={`md:text-[42px] xl:text-[50px] md:leading-[3.5rem] sm:text-4xl text-3xl text-left leading-[1.4] font-bold ${colors ? colors.textColor : "text-[#000000]"} mb-[20px]`}>
                        {title}
                    </h1>

                    <p className={`${colors ? colors.textColor : "text-[#000000]"} font-medium lg:max-w-[63.956%] lg:w-[62%] md:w-[55.9%] sm:w-[70%] w-[90%] sm:text-base text-sm md:leading-[30px] leading-[25px] mb-[20px]`}>{description}</p>

                    <Link to={"/contact"}>
                        <button className='btn-sub z-[3] inline-flex items-center bg-blue text-base font-semibold text-center px-5 md:px-10 justify-center
                                                overflow-hidden relative text-[#FFFFFF] uppercase py-4 md:py-5 rounded-full'>
                            Contact us
                            <MdKeyboardDoubleArrowRight className='ml-2 text-xl' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroContainer
