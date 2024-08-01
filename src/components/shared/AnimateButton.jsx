import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const AnimateButton = ({to="#",title, hidden, style, handler}) => {
    return (
        <button className={`xl:ml-[45px] lg:block ${hidden} ${style}`} onClick={handler}>
            <Link to={to} className="btn-one">
                {title}
                <MdKeyboardDoubleArrowRight />
            </Link>
        </button>
    )
}

export default AnimateButton