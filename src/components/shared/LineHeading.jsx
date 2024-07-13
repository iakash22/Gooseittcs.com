import React from 'react'

const LineHeading = ({ title, style }) => {
    return (
        <span
            className={`relative uppercase font-bold pl-[55px] inline-block mb-[14px] text-blue text-center
                        before:absolute before:w-[40px] before:h-[3px] before:bg-blue before:top-[6px] before:left-0
                        after:absolute after:w-[40px] after:h-[2px] after:bg-blue after:bottom-[6px] after:left-0 ${style ? style : "text-base"}`}>
            {title}
        </span>
    )
}

export default LineHeading