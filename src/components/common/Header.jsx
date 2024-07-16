import React, { useEffect, useState } from 'react'
import HeaderBanner from './HeaderBanner'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight, MdOutlineMenu, MdClose } from "react-icons/md";
import AnimateButton from '../shared/AnimateButton';
import Headroom from 'react-headroom';

const Header = () => {
    const [open, setOpen] = useState(false)
    const [serviceMenu, setServiceMenu] = useState(false);
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
                                    <li className="text-text-black font-bold text-base xl:py-[43px] py-[30px] px-[10px] xl:px-[32px] 
                                                    leading-[24px] uppercase hover:text-[#0a58ca] transition-all 
                                                    duration-200 ease-in cursor-pointer text-nowrap inline-block relative service-menu"
                                    >
                                        <Link to={"#"} className='service-link'>
                                            Service
                                        </Link>
                                        <SubMenu />
                                    </li>
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
                        <ul className="flex items-center list-none">
                            <MenuLink
                                title={"Home"}
                                to={"/"}
                            />
                            <MenuLink
                                title={"About Us"}
                                to={"/about"}
                            />
                            <li className='w-[100%] float-left relative border-[#E9E9E8] border-b' style={serviceMenu ? {padding : "0", paddingTop : "12px"} : {padding : "12px 0px"}}>
                                <span className='text-sm font-semibold text-text-black px-5 py-3'>Service</span>
                                <ul className='mt-2 mb-0' style={serviceMenu ? {overflow : "hidden",padding : "0px"} : {display : 'none'}}>
                                    <ServiceSubLink
                                        title={"Software Development"}
                                        to={"/software-development"}
                                    />
                                    <ServiceSubLink
                                        title={"Technology Consulting"}
                                        to={"/technology-consulting"}
                                    />
                                    <ServiceSubLink
                                        title={"Technology Training"}
                                        to={"/technology-training"}
                                    />
                                    <ServiceSubLink
                                        title={"Implementation Partners"}
                                        to={"/implementation-partners"}
                                    />
                                </ul>
                                <span
                                    onClick={() => setServiceMenu(!serviceMenu)}
                                    className='w-[40px] bg-blue inline-flex justify-center items-center text-center z-[100] text-3xl text-[#FFFFFF] absolute right-0 top-0'
                                    style={serviceMenu ? {height : "44px"} : {height: "100%"}}
                                >
                                    {!serviceMenu ? "+" : "-"}
                                </span>
                            </li>
                            <MenuLink
                                title={"Contact Us"}
                                to={"/contact"}
                            />
                        </ul>
                    </div>
                </div >
            </Headroom >
        </div >
    )
}

export default Header

const HeaderLink = ({ title, to }) => {
    return (
        <li>
            <Link
                to={to}
                className="text-text-black font-bold text-base xl:py-[43px] py-[30px] px-[10px] xl:px-[32px] 
                            leading-[24px] block uppercase hover:text-[#0a58ca] transition-all 
                            duration-200 ease-in cursor-pointer text-nowrap"
            >
                {title}
            </Link>
        </li>
    )
}

const ServiceLink = ({ title, to }) => {
    return (
        <li className='block list-none border-[#E9E9E8] border border-solid relative after:absolute after:bg-blue after:w-[2px] after:transition-all after:duration-500 after:ease-out after:h-0
                        after:left-0 after:top-[50%] hover:after:h-[100%] after:translate-y-[-50%] py-[12px] 2xl:py-[42px] group'>
            <Link to={to} className='text-text-black py-[12px] px-[20px] 2xl:py-[42px] 2xl:px-[26px] transition-all duration-[0.4s] capitalize font-semibold text-base hover:text-blue group-hover:pl-[26px]'>
                {title}
            </Link>
        </li>
    )
}
const ServiceSubLink = ({ title, to }) => {
    return (
        <li className='block list-none border-[#E9E9E8] border border-solid relative py-3'>
            <Link to={to} className='text-text-black px-[20px]  2xl:px-[26px] transition-all duration-[0.4s] capitalize font-semibold text-sm hover:text-blue group-hover:pl-[26px]'>
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

const SubMenu = () => {
    return (
        <ul className='sub-menu'>
            <ServiceLink
                title={"Software Development"}
                to={"/software-development"}
            />
            <ServiceLink
                title={"Technology Consulting"}
                to={"/technology-consulting"}
            />
            <ServiceLink
                title={"Technology Training"}
                to={"/technology-training"}
            />
            <ServiceLink
                title={"Implementation Partners"}
                to={"/implementation-partners"}
            />
        </ul>
    )
}