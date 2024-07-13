import React from 'react'
import WrapperLayout from '../components/layout/WrapperLayout'
import { Link } from 'react-router-dom';
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdKeyboardDoubleArrowRight } from "react-icons/md";
import LineHeading from '../components/shared/LineHeading';
import Subscribe from '../components/common/Subscribe';

const Contact = () => {
    const submithandler = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <div className='contact-hero-bg bg-cover pt-[160px] pb-[160px] overflow-hidden xl:after:left-[-140px]'>
                <div className='md:max-w-[760px] mx-auto xl:max-w-[1160px] 2xl:max-w-[1380px] w-full px-4'>
                    <div className='px-2'>
                        <ul className='mb-[10px] list-none flex flex-row text-[#FFFFFF] gap-x-5'>
                            <li className='list-none font-bold text-lg'>
                                <Link to={"/"} className='mr-[20px] transition duration-[0.4s]'>Home</Link>
                                <span>|</span>
                            </li>
                            <li className='list-none font-bold text-lg text-blue'>Contact Us</li>
                        </ul>
                        <h1 className='md:text-[70px] md:leading-[80px] sm:text-4xl text-2xl text-start leading-[1.4] lg:font-bold font-semibold text-[#FFFFFF]'>Contact us</h1>
                    </div>
                </div>
            </div>

            <div className='relative bg-bg-color md:py-[100px] py-[70px] w-full'>
                <div className='md:max-w-[760px] mx-auto xl:max-w-[1160px] 2xl:max-w-[1300px] w-full px-4'>
                    <div className='flex md:flex-row flex-col gap-x-8 mx-auto justify-center items-center gap-y-10'>
                        <FlipCard
                            title={"Office Location"}
                            desc={"300 Nicole Ave, Mountain House, CA-95391"}
                            Icon={FaLocationDot}
                        />
                        <FlipCard
                            title={"Tell To Us"}
                            desc={"Keeping You Always Better Connected."}
                            info={"+1-619-678-1977"}
                            Icon={FaPhone}
                        />
                        <FlipCard
                            title={"Quick Email"}
                            desc={"Drop Us A Mail We Will Answer You Asap."}
                            info={"info@gooseittc.com"}
                            Icon={MdEmail}
                        />
                    </div>
                </div>
            </div>

            <div className='relative bg-bg-color md:py-[80px] py-[40px] w-full'>
                <div className='md:max-w-[760px] mx-auto xl:max-w-[1160px] 2xl:max-w-[1380px] w-full px-4'>
                    <div className='bg-[#FFFFFF] md:px-[50px] md:py-[70px] py-[50px] px-[30px] shadow-[0px_25px_70px_rgba(0,0,0,0.08)] md:w-[93.5%] max-w-full mx-auto'>
                        <div className='text-center lg:max-w-[660px] mx-auto mb-[60px]'>
                            <LineHeading
                                title={"GET IN TOUCH"}
                                style={"text-xl font-semibold"}
                            />
                            <h2 className='md:text-[45px] sm:text-4xl text-[26px] font-bold md:leading-[55px] sm:leaing-[40px] sm:mt-0 mt-5 leading-[35px] text-text-black'>
                                We Are Always Ready For Your Solution
                            </h2>
                        </div>

                        <form onSubmit={submithandler}>
                            <div className='flex w-full sm:flex-row flex-col mb-[20px] sm:h-[60px] lg:gap-x-8 gap-x-5 gap-y-8'>
                                <input
                                    type="text"
                                    name='name'
                                    id='name'
                                    placeholder='Name'
                                    required
                                    className='sm:w-1/2 w-full max-w-full md:h-full h-[60px] p-[0_15px] text-[#343434] bg-transparent border border-[#E9E9E8] outline-1 outline-blue
                                            placeholder:text-[#676767] placeholder:font-medium rounded-md'
                                />
                                <input
                                    type="email"
                                    name='email'
                                    id='email'
                                    required
                                    placeholder='Email'
                                    className='sm:w-1/2 w-full max-w-full sm:h-full h-[60px] p-[0_15px] text-[#343434] bg-transparent border border-[#E9E9E8] outline-1 outline-blue
                                            placeholder:text-[#676767] placeholder:font-medium rounded-md'
                                />
                            </div>

                            <div className='w-full mb-[20px] h-[60px]'>
                                <input
                                    type="text"
                                    name='phone'
                                    id='phone'
                                    placeholder='Phone'
                                    required
                                    className='w-full max-w-full h-full p-[0_15px] text-[#343434] bg-transparent border border-[#E9E9E8] outline-1 outline-blue
                                            placeholder:text-[#676767] placeholder:font-medium rounded-md'
                                />
                            </div>
                            <div className='w-full mb-[20px] h-[60px]'>
                                <input
                                    type="text"
                                    name='subject'
                                    id='subject'
                                    placeholder='Subject'
                                    required
                                    className='w-full max-w-full h-full p-[0_15px] text-[#343434] bg-transparent border border-[#E9E9E8] outline-1 outline-blue
                                            placeholder:text-[#676767] placeholder:font-medium rounded-md'
                                />
                            </div>
                            <div className='w-full mb-[20px]'>
                                <textarea
                                    name='message'
                                    id='message'
                                    placeholder='Message'
                                    rows={5}
                                    required
                                    className='w-full max-w-full h-full p-[15px_15px] text-[#343434] bg-transparent border border-[#E9E9E8] outline-1 outline-blue
                                            placeholder:text-[#676767] placeholder:font-medium rounded-md'
                                > </textarea>
                            </div>
                            <div className='w-full flex justify-center '>
                                <button
                                    type='submit'
                                    className='btn-sub z-[3] inline-flex items-center bg-blue text-base font-semibold text-center px-5 md:px-10 justify-center
                                                overflow-hidden relative text-[#FFFFFF] uppercase py-3 md:py-5 rounded-[5px] mx-auto'>
                                    Submit
                                    <MdKeyboardDoubleArrowRight className='ml-2 text-xl' />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Subscribe />
        </div>
    )
}

export default WrapperLayout()(Contact);

const FlipCard = ({ Icon, title, desc, info }) => {
    return (
        <div className='relative flip-card md:w-[33%] sm:w-[80%] w-full py-[40px] mb:py-[60px] lg:py-[80px] px-[30px] pt-[75px] mt-10 bg-[#FFFFFF] shadow-[0px_25px_70px_rgba(0,0,0,0.08)] z-[1] group transition-all duration-[0.6s]'>
            <div className='w-[60px] h-[60px] rounded-full bg-blue flex justify-center text-center items-center absolute top-[-30px] left-[40px] leading-[60px] spin-box'>
                <Icon
                    className="text-[35px] text-[#FFFFFF] flip-animate group-hover:rotate transition-all duration-[0.4s] ease-linear"
                />
            </div>
            <div className='group-hover:text-[#FFFFFF]'>
                <h4 className='text-2xl leading-[34px] font-bold'>{title}</h4>
                <p className='font-normal text-[18px] leading-[25px] mb-[15px] text-[#676767] group-hover:text-[#b0b0bd]'>{desc}</p>
                {info &&
                    <p className='text-base text-[#676767] lowercase leading-[30px] group-hover:text-[#b0b0bd]'>{info}</p>
                }
            </div>
        </div>
    )
}
