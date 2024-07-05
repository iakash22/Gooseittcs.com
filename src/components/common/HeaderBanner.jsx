import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HeaderBanner = () => {
    return (
        <div className='top-banner before:xl:w-[33%] before:lg:w-[40%] after:xl:left-[33%] after:hidden after:lg:block before:w-0 after:lg:left-[40%] after:xl:rotate-[18deg] after:lg:rotate-[20deg]'>
            <div className='mx-auto px-3 max-w-[1520px] h-full'>
                <div className='flex items-center md:justify-end justify-center mt-5 md:mt-0 gap-x-5'>
                    <div className='flex items-center gap-2'>
                        <IoMail className='text-[20px] text-blue mt-[2px]' />
                        <Link to="mailto:info@gooseittc.com" className='cursor-pointer tracking-wider text-[#fff] text-base hover:text-blue transition duration-150 ease-linear'>
                            info@gooseittc.com
                        </Link>
                    </div>

                    <div className='w-[1.5px] bg-[#eee4] h-8'></div>
                    <div className='flex gap-x-3 text-[#fff]'>
                        <Link to={"https://www.facebook.com/"} target='_blank'>
                            <FaFacebookF className='text-[20px] text-[#fff] hover:text-blue transition duration-150 ease-linear cursor-pointer' />
                        </Link>
                        <Link to={"https://www.instagram.com/gooseittc?igsh=YTQwZjQ0NmI0OA=="} target='_blank'>
                            <FaInstagram className='text-[20px] text-[#fff] hover:text-blue transition duration-150 ease-linear cursor-pointer' />
                        </Link>
                        <Link to={"https://x.com/gooseittc"} target='_blank'>
                            <FaTwitter className='text-[20px] text-[#fff] hover:text-blue transition duration-150 ease-linear cursor-pointer' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBanner