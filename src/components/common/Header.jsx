import React, { useState } from 'react'
import HeaderBanner from './HeaderBanner'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight, MdOutlineMenu, MdClose } from "react-icons/md";
import AnimateButton from '../shared/AnimateButton';
import Headroom from 'react-headroom';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className=''>
            <HeaderBanner />
            <Headroom className='z-[1000] relative transition-all duration-300'>
                <div className="sm:px-[30px] bg-[#FFFFFF] relative py-2 md:py-0">
                    <div className="max-w-[1520px] mx-auto px-3">
                        <div className="flex justify-between items-center gap-x-5">
                            <div className="w-[275px]">
                                <Link to="/">
                                    <img
                                        src="https://www.gooseittc.com/wp-content/uploads/2024/06/Gooseittc-logo-.png"
                                        alt="logo"
                                        className="w-full"
                                    />
                                </Link>
                            </div>
                            <div className="md:block hidden">
                                <ul className="flex items-center">
                                    <HeaderLink
                                        title={"Home"}
                                        to={"/"}
                                    />
                                    <HeaderLink
                                        title={"About Us"}
                                        to={"/about"}
                                    />
                                    <HeaderLink
                                        title={"Service +"}
                                        to={"/service"}
                                    />
                                    <HeaderLink
                                        title={"Contact Us"}
                                        to={"/contact"}
                                    />
                                </ul>
                            </div>

                            <div>
                                <AnimateButton
                                    title={"Request quote"}
                                    hidden={"hidden"}
                                />
                            </div>

                            <div className="md:hidden block">
                                <div className="sm:mr-[42px]">
                                    {
                                        open ?
                                            <MdClose
                                                className="text-[34px] text-text-black"
                                                onClick={() => setOpen(false)}
                                            />
                                            :
                                            < MdOutlineMenu
                                                className="text-[34px] text-text-black"
                                                onClick={() => setOpen(true)}
                                            />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`menu ${open ? "active" : ""}`}>
                        <ul className="flex items-center">
                            <MenuLink
                                title={"Home"}
                                to={"/"}
                            />
                            <MenuLink
                                title={"About Us"}
                                to={"/about"}
                            />
                            <div className='flex justify-between w-full items-center border-[#E9E9E8] border-b'>
                                <li className='text-sm font-semibold text-text-black px-5 py-4'>Service</li> 
                                <span className='w-[70px] bg-blue py-3 inline-flex justify-center items-center text-3xl text-[#FFFFFF]'>+</span>
                            </div>
                            <MenuLink
                                title={"Contact Us"}
                                to={"/contact"}
                            />
                        </ul>
                    </div>
                </div>
            </Headroom>
        </div>
    )
}

export default Header

const HeaderLink = ({ title, to }) => {
    return (
        <li>
            <Link
                to={to}
                className="text-text-black font-bold text-base py-[43px] px-[32px] 
                            leading-[24px] block uppercase hover:text-[#0a58ca] transition-all 
                            duration-200 ease-in cursor-pointer"
            >
                {title}
            </Link>
        </li>
    )
}

const MenuLink = ({ title, to }) => {
    return (
        <li className='text-start w-full px-5 py-4 border-[#E9E9E8] border-b list-none'>
            <Link to={to} className='text-sm font-semibold text-text-black'>
                {title}
            </Link>
        </li>
    )
}