import React from 'react'
import LinkButton from './LinkButton';

const SlideCard = ({ data }) => {
    return (
        <div className='sm:w-[330px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[550px] border border-[#0000001b] shadow-lg rounded-md'>
            <div className='w-full relative'>
                <img
                    src={data.img}
                    alt=""
                    className='w-full sm:h-[250px] h-[220px]'
                />
                <div className='p-4 flex flex-col justify-between h-full w-full'>
                    <div className='w-full'>
                        <h1 className='sm:text-[26px] text-[22px] font-bold md:font-extrabold text-text-black mb-[20px] leading-7'>{data.head}</h1>
                        <h6 className='text-[#00000070] sm:text-xl text-lg font-semibold md:font-bold mb-[20px]'>{data.subHead}</h6>
                        <p className='md:font-base font-sm md:font-medium text-[#000000] mb-[20px]'>{data.description}</p>
                    </div>
                    <LinkButton
                        title={data.buttonhead}
                        to={data.redirect}
                    />
                </div>
            </div>
        </div>
    )
}

export default SlideCard