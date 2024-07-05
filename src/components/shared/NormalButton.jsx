import React from 'react'

const NormalButton = ({ title, handler}) => {
    return (
        <button
            className='uppercase text-base font-bold text-[#fff] rounded-[50px] bg-blue px-[24px] py-[12px] xl:px-[40px] xl:py-[20px] cursor-pointer
                            hover:text-[#000000] self-center hover:bg-white transition-all duration-300'
        onClick={handler}
        >
            {title}
        </button>
    )
}

export default NormalButton