import React, { useEffect } from 'react'
import WrapperLayout from '../components/layout/WrapperLayout';
import { Link } from 'react-router-dom';
import NormalButton from '../components/shared/NormalButton';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CardAutoSlider from '../components/shared/CardAutoSlider';
import { sliderCardsData, SliderSucessImgData } from '../data'
import AnimateButton from '../components/shared/AnimateButton';
import BannerImgSlider from '../components/shared/BannerImgSlider';
import LineHeading from '../components/shared/LineHeading';
import {
    touch1Img,
    touch2Img,
} from '../assets';


const Home = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <div>
            {/* Hero Section  */}
            <div className='relative'>
                <div className='home-hero-bg z-[-1] md:h-[calc(100vh-150px)] h-[calc(100vh-110px)] '>
                </div>
                <div className='w-[100%] h-[100%] absolute top-0 left-0 bottom-0 bg-[#00000080] z-[1]'></div>
                <Link to={'/contact'} className='text-center flex justify-center absolute items-center md:p-[50px] cursor-pointer z-[2] top-0 left-0 right-0 bottom-0 m-auto'>
                    <div className='flex flex-col max-w-full' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
                        <div className='sm:text-xl text-[15px] text-[#FFFFFF] text-center font-bold uppercase mb-[30px] mt-5 drop-shadow-[0px_0px_10px_rgba(0,0,0,0.3)]'>
                            what we do
                        </div>
                        <div className='md:text-[60px] text-[35px] leading-[1.4] text-center font-bold text-[#FFFFFF] mb-[40px] md:leading-[5rem] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.3)]'>
                            IT Consulting, Bespoke Development, Implementation, Training and Support Services
                        </div>
                        <NormalButton
                            to={'/contact'}
                            title={"Contact Us"}
                        />
                    </div>
                </Link>
            </div>

            {/* Globe Overlay Section */}
            <div className='relative bg-bg-color'>
                <div className='home-globe-bg'>
                </div>
                <div className='max-w-[1140px] min-h-[500px] flex mx-auto relative items-center'>
                    <div className='w-full relative flex min-h-1'>
                        <div className='p-[10px] w-full relative content-start flex flex-wrap'>
                            <div className='text-center w-full'>
                                <h1 className='md:text-[60px] text-5xl text-[#000000] font-bold'>Business Portfolio</h1>
                            </div>
                            <div className='text-center mt-[40px]'>
                                <p className='sm:text-2xl tex-[22px] font-normal sm:text-text-black text-black'>
                                    Welcome To Goose ITTC, Your One-Stop Solution For All Your Software And Training Needs.
                                    Based In California, We Are A Team Of Experienced Professionals Who Provide Our Clients
                                    With The Best Possible Services And Solutions In The Field Of Technology Consulting, Software
                                    Implementation, Customized Interactive Instructor-Led Training, And Software Development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Section  */}
            <div className='bg-bg-color pt-[8rem] pb-[5rem]'>
                <div className='flex mx-auto relative flex-wrap md:flex-row flex-col'>
                    <div className='mb-5 w-[100%]'>
                        <div className='pb-[50px] text-center'>
                            <LineHeading
                                title={"WE OFFER SERVICES"}
                            />
                            <h2 className='sm:text-[45px] text-3xl md:font-bold font-semibold text-center text-text-black'>Our Popular Services</h2>
                        </div>
                    </div>

                    <div className='w-full md:px-[50px]'>
                        <CardAutoSlider
                            data={sliderCardsData}
                            autoSlide={true}
                            nav={false}
                            page={true}
                        />
                    </div>
                </div>
            </div>

            {/* Success Section  */}
            <div className='bg-bg-color'>
                <div className='p-3 w-full flex items-start flex-wrap relative'>
                    <div className='relative pt-[70px] pb-[180px] overflow-hidden w-[100%] mx-auto'>
                        <div className='box-border w-full gap-x-[2rem] flex md:flex-row gap-y-10 flex-col md:max-w-[960px] xl:max-w-[95.5%] mx-auto h-[100%]'>
                            <div className='md:px-2 md:w-[50%] w-full flex flex-col justify-center md:items-start items-center'>
                                <span className='text-xl text-blue font-bold block mb-2 ml-1'>Success Is Our Priority</span>
                                <h1 className='md:text-[64px] sm:text-4xl text-[35px] md:leading-[76px] leading-[45px] md:text-start text-center mb-5 md:font-bold font-semibold text-text-black'>Consulting For Your Business</h1>
                                <p className='max-w-[550px] text-base leading-[30px] capitalize ml-1 md:text-start text-center text-text-black mb-6'>Our Experienced Team Provides Solutions And Guidance To Help You Achieve Your Business Goals And Drive Success.</p>
                                <div className='xl:-ml-10 md:self-start self-center'>
                                    <AnimateButton
                                        title={"Read More"}
                                    />
                                </div>
                            </div>

                            <div className='md:w-[55%] md:mr-5'>
                                <BannerImgSlider
                                    data={SliderSucessImgData}
                                    autoSlide={false}
                                    page={false}
                                    nav={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-bg-color'>
                <div className='flex relative mx-auto box-border md:h-[calc(100vh-90px)] h-full'>
                    <div className='home-touch-bg md:py-[110px] py-[20px]'>
                        <img
                            src={touch1Img}
                            alt="shapeOne"
                            className='max-w-full absolute right-[36%] h-[100%_!important] top-0 mix-blend-color-dodge z-[-1] translate-x-[-50%] animate-left-right'
                        />
                        <div className='box-border w-full gap-x-[2rem] justify-between flex max-w-[960px] xl:max-w-[91.5%] ml-auto mr-auto h-[100%] relative px-3'>
                            <div className='flex md:flex-row flex-col w-full justify-between items-center box-border'>
                                <div className='xl:max-w-[58.3%] md:max-w-[50%]'>
                                    <div className='w-full relative mb-10 md:mb-0'>
                                        <LineHeading
                                            title={"GET IN TOUCH"}
                                        />
                                        <h1 className='mb-5 text-[#FFFFFF] xl:max-w-[545px] max-w-full w-full sm:font-bold font-semibold xl:text-[45px] md:text-4xl sm:text-3xl text-[31px] md:leading-[55px] leading-[35px]'>Offering Consultations Is A Great Way To Introduce Your Business To Customers</h1>
                                        <p className='max-w-[530px] text-base leading-[30px] capitalize ml-1 text-[#CCCCCC]'>We’re Currently Offering Up To 25% Off All Online Instructor-Led Courses. Don’t Miss Out!</p>
                                    </div>
                                    <div className='lg:mt-[50px] md:mt-[55px] flex items-center xl:gap-x-[45px] gap-x-8 w-full'>
                                        <h4 className='text-[#FFFFFF] sm:text-2xl text-xl font-bold xl:max-w-[200px] max-w-[60%] leading-[34px]'>Client Satisfaction In The Globaly</h4>
                                        <div>
                                            <img className='h-auto max-w-full' src={touch2Img} alt="shapetwo" />
                                        </div>
                                    </div>
                                </div>

                                <div className='md:px-2 xl:w-[45%] w-full md:max-w-[50%] z-50 rounded-md lg:mt-10 -mb-14 md:mb-0'>
                                    <form className='box-border md:px-[45px] md:py-[40px] sm:px-[40px] px-[30px] py-[40px] bg-[#FFFFFF] lg:ml-[120px] flex flex-col gap-y-6 items-start rounded-md shadow-xl mt-12'>
                                        <h2 className='text-3xl font-bold text-text-black'>Free Consultation</h2>
                                        <div className='bg-[#F4F4F4] h-[60px] w-full rounded-md outline-none'>
                                            <input
                                                type="text"
                                                name='name'
                                                id='name'
                                                placeholder='Name'
                                                className='w-[100%] h-full p-[0_15px] text-[#676767] bg-transparent border border-[#F4F4F4] outline-1 outline-blue
                                                            placeholder:text-[#676767] placeholder:font-medium rounded-md'
                                            />
                                        </div>
                                        <div className='bg-[#F4F4F4] h-[60px] w-full rounded-md outline-none'>
                                            <input
                                                type="email"
                                                name='email'
                                                id='email'
                                                placeholder='Email Address'
                                                className='w-[100%] h-full p-[0_15px] text-[#676767] bg-transparent border border-[#E9E9E8] outline-1 outline-blue
                                                            placeholder:text-[#676767] placeholder:font-medium rounded-md'
                                            />
                                        </div>
                                        <div className='w-full rounded-md outline-none'>
                                            <textarea
                                                type="text"
                                                name='name'
                                                id='name'
                                                rows={6}
                                                placeholder='Message'
                                                className='w-[100%] h-full p-[15px_15px] bg-[#F4F4F4] text-[#676767] border border-[#E9E9E8] outline-1 outline-blue
                                                            placeholder:text-[#676767] placeholder:font-medium rounded-md'
                                            ></textarea>
                                        </div>

                                        <div className='self-start xl:-ml-11 xl:mb-0 xl:mt-0'>
                                            <AnimateButton
                                                title={"SUBMIT NOW"}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='bg-blue box-border'>
                <div className="xl:w-[95.5%] mx-auto p-3">
                    <div className='flex md:flex-row flex-col p-2 items-center'>
                        <div className='relative z-[1] md:p-[60px_0] py-[30px] flex md:w-[50%] subscribe-title after:left-[12%] md:after:left-[20%]'>
                            <h2 className='font-bold text-[#FFFFFF] md:text-[45px] sm:text-3xl text-2xl md:text-start text-center xl:leading-[55px]'>Stay Informed, Subscribe To Our Newsletter</h2>
                        </div>

                        <div className='relative z-[1] flex md:w-[50%]'>
                            <div className='w-full mt-10'>
                                <div className='w-full bg-[#FFFFFF] flex py-2 pr-2 rounded-md shadow-md shadow-dark-blue'>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder='Email Adress'
                                        className='bg-transparent text-text-black border-none outline-none w-full px-6 py-2 placeholder:text-base placeholder:text-[#a3a3a3] font-light'
                                    />
                                    <button className='z-[3] inline-flex items-center bg-blue text-base font-semibold text-center px-2 justify-center
                                                        overflow-hidden relative text-[#FFFFFF] uppercase md:w-[33%] w-[100%] py-3 md:py-4 rounded-md btn-sub' >
                                        SUBSCRIBE NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WrapperLayout()(Home)