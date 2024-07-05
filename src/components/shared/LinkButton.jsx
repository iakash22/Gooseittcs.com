import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({to,title,handler}) => {
    return (
        <Link to={to}>
            <button className='px-[24px] py-[12px] cursor-pointer text-base font-light italic text-[#fff] bg-blue
                                self-center hover:bg-text-black transition-all duration-300 rounded-[4px]'>
                {title}
            </button>
        </Link>
    )
}

export default LinkButton