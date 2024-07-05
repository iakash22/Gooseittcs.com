import React from 'react'
import { Link } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='relative z-[1] pt-[70px] bg-[#F4F4F4]'>
            <img
                src="https://www.gooseittc.com/wp-content/themes/conbix/assets/img/shape/footer-bg-2.png"
                alt="footer-img"
                className='absolute top-0 left-0 w-full h-full z-[-1]'
            />

            <div className='px-3 md:w-[calc(100%-10%)] mx-auto'>
                <div className='flex justify-between flex-col md:flex-row sm:flex-wrap lg:flex-nowrap items-start gap-x-8'>
                    <div className='md:w-[30%]'>
                        <Link to={'/'}>
                            <img
                                src="https://www.gooseittc.com/wp-content/uploads/2024/06/Gooseittc-logo-.png"
                                alt="logo"
                                className='w-[287px]'
                            />
                        </Link>
                        <p className='text-base text-neutral-900 font-light mt-5 md:w-[100%]'>
                            If you are interested in working with Goose ITTC, please contact us today to get a
                            free consultation and quote. We would love to hear from you and discuss how we can
                            help you achieve your goals.
                        </p>
                    </div>

                    <div className='flex flex-col gap-y-5 mt-8 md:mt-0 md:w-[30%]'>
                        <div>
                            <h4 className='mb-[20px] text-text-black text-2xl font-bold'>Address</h4>
                            <div className='flex items-center gap-x-5'>
                                <div className='w-[40px] h-[40px] rounded-full border border-[#ACBDF8] inline-flex items-center justify-center'>
                                    <CiLocationOn className='text-[20px] text-blue' />
                                </div>
                                <Link to={''} className='w-[60%]'>
                                    <p className='text-lg font-normal text-neutral-600 hover:text-blue cursor-pointer transition duration-300 ease-in'>300 Nicole Ave, Mountain House, CA-95391</p>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h4 className='mb-[20px] text-text-black text-xl font-bold'>Contact No</h4>
                            <div className='flex items-center gap-x-5'>
                                <div className='w-[40px] h-[40px] rounded-full border border-[#ACBDF8] inline-flex items-center justify-center'>
                                    <HiOutlinePhone className='text-[20px] text-blue font-extralight' />
                                </div>
                                <Link to="tel:+16196781977">
                                    <p className='text-lg font-normal text-neutral-600 hover:text-blue cursor-pointer transition duration-300 ease-in'>+1-619-678-1977</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 md:mt-0 md:w-[30%]'>
                        <h4 className='mb-[20px] text-text-black text-2xl font-bold'>Services</h4>
                        <ul className='flex flex-col gap-y-3'>
                            <li className='list-none'>
                                <Link to={'/software-development'} className='flex items-center text-neutral-600 group transition-all duration-500 cursor-pointer'>
                                    <MdKeyboardDoubleArrowRight className=' text-blue text-sm group-hover:translate-x-0 hidden group-hover:inline -translate-x-1 transition-all duration-200 delay-100' />
                                    <p className='text-lg font-normal group-hover:text-blue transition-all duration-[0.3s] -translate-x-1 group-hover:translate-x-2 ease-out'>Software Development</p>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to={'/technology-consulting'} className='flex items-center text-neutral-600 group transition-all duration-500 cursor-pointer'>
                                    <MdKeyboardDoubleArrowRight className=' text-blue text-sm group-hover:translate-x-0 hidden group-hover:inline -translate-x-1 transition-all duration-200 delay-100' />
                                    <p className='text-lg font-normal group-hover:text-blue transition-all duration-[0.3s] -translate-x-1 group-hover:translate-x-2 ease-out'>Technology Consulting</p>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to={'/technology-training'} className='flex items-center text-neutral-600 group transition-all duration-500 cursor-pointer'>
                                    <MdKeyboardDoubleArrowRight className=' text-blue text-sm group-hover:translate-x-0 hidden group-hover:inline -translate-x-1 transition-all duration-200 delay-100' />
                                    <p className='text-lg font-normal group-hover:text-blue transition-all duration-[0.3s] -translate-x-1 group-hover:translate-x-2 ease-out'>Technology Training</p>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to={'/implementation-partners'} className='flex items-center text-neutral-600 group transition-all duration-500 cursor-pointer'>
                                    <MdKeyboardDoubleArrowRight className=' text-blue text-sm group-hover:translate-x-0 hidden group-hover:inline -translate-x-1 transition-all duration-200 delay-100' />
                                    <p className='text-lg font-normal group-hover:text-blue transition-all duration-[0.3s] -translate-x-1 group-hover:translate-x-2 ease-out'>Implementation Partners</p>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8 md:mt-0 md:w-[30%]">
                        <h4 className='mb-[20px] text-text-black text-2xl font-bold'>Working Time</h4>
                        <div>
                            <p className='text-lg text-neutral-600 mb-2'>Mon - Fri : 9:00 AM - 5:00 PM</p>
                            <p className='text-lg text-neutral-600 mb-2'>Sat & Sun Close</p>
                        </div>

                        <div className='flex gap-x-6 mt-8 '>
                            <Link to={"https://www.facebook.com/"} target='_blank'>
                                <div className='w-[50px] h-[50px]  bg-[#fff] text-center flex items-center justify-center rounded-full hover:bg-blue cursor-pointer transition-all duration-500 group'>
                                    <FaFacebookF className='text-[20px] group-hover:text-[#fff] transition-all duration-300' />
                                </div>
                            </Link>
                            <Link to={'https://www.instagram.com/gooseittc?igsh=YTQwZjQ0NmI0OA=='} target='_blank'>
                                <div className='w-[50px] h-[50px] bg-[#fff] text-center flex items-center justify-center rounded-full hover:bg-blue cursor-pointer transition-all duration-500 group'>
                                    <FaInstagram className='text-[20px] group-hover:text-[#fff] transition-all duration-300' />
                                </div>
                            </Link>
                            <Link to={"https://x.com/gooseittc"} target='_blank'>
                                <div className='w-[50px] h-[50px] bg-[#fff] text-center flex items-center justify-center rounded-full hover:bg-blue cursor-pointer transition-all duration-500 group'>
                                    <FaTwitter className='text-[20px] group-hover:text-[#fff] transition-all duration-300' />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[70px] lg:mt-[100px] py-[30px] px-0 border-t border-[#E1E1E1] text-center'>
                <div className='text-neutral-600 text-sm text-center'>
                    © 2023 Goose ITTC. All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer