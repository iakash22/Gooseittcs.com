import React, { useState } from 'react'
import WrapperLayout from '../components/layout/WrapperLayout'
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { FaMinus, FaPlus } from "react-icons/fa";
import LineHeading from '../components/shared/LineHeading';

const chooseData1 = [
    {
        id: "1",
        title: "Expertise",
        description: "At Goose ITTC, We Have Teams Of Experts With Extensive Knowledge And Experience Across Technology Verticals And Domains. We Can Help You Analyze Your Business Needs, Design The Best Solution For You, And Execute It Flawlessly.",
    },
    {
        id: "2",
        title: "Flexibility",
        description: "Goose ITTC Can Adapt To Your Changing Requirements And Preferences. They Can Work With You On-Site Or Remotely, Depending On Your Convenience. They Can Also Customize Their Services And Solutions To Fit Your Budget And Timeline.",
    },
]
const chooseData2 = [
    {
        id: "3",
        title: "Quality",
        description: "Goose ITTC Follows The Best Practices And Standards In The Industry To Ensure That Their Services And Solutions Are Of The Highest Quality. They Also Use The Latest Tools And Technologies To Deliver Optimal Performance And Efficiency.",
    },
    {
        id: "4",
        title: "Customer Satisfaction",
        description: "Goose ITTC Values Its Customers And Strives To Exceed Their Expectations. They Provide Regular Updates And Feedback On The Progress Of The Project, And Are Always Available To Answer Any Questions Or Concerns. They Also Offer Post-Implementation Support And Maintenance To Ensure That Everything Runs Smoothly.",
    },
]

const About = () => {
    const [openFirst, setOpenFirst] = useState(1);
    const [openSecond, setOpenSecond] = useState(3);

    const closeHandler = (setState) => {
        setState(0);
    }

    const openHandler = (setState, id) => {
        setState(id);
    }

    return (
        <div>
            <div className='relative'>
                <div className="about-hero-bg md:px-[120px] py-[100px] px-4">
                    <div className='md:w-[70%]'>
                        <h1 className='md:text-[45px] md:leading-[3.5rem] sm:text-[28px] text-xl text-start leading-[1.4] lg:font-bold font-semibold text-text-black mb-[40px]'>
                            Your One-Stop Solution For Consulting And Training Needs
                        </h1>

                        <Link to={"/contact-us"}>
                            <button className='btn-sub z-[3] inline-flex items-center bg-blue text-base font-semibold text-center px-5 md:px-10 justify-center
                                                overflow-hidden relative text-[#FFFFFF] uppercase py-3 md:py-5 rounded-full'>
                                Contact us
                                <MdKeyboardDoubleArrowRight />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='relative bg-bg-color md:py-[100px] py-[70px] w-full'>
                <div className='xl:max-w-[1140px] lg:max-w-[1024px] flex mx-auto px-4'>
                    <div className='w-full'>
                        <div className='text-center mb-5 pb-[50px]'>
                            <LineHeading
                                title={"ABOUT"}
                            />
                            <h2 className='md:text-[42px] font-bold text-3xl text-text-black'>
                                Our Company
                            </h2>
                        </div>

                        <div>
                            <p className='text-base leading-[30px]'>
                                Are You Looking For A Reliable And Trustworthy Partner To Help You With Your Software And
                                Training Needs? Do You Want To Get The Best Value For Your Money And Time? If Yes, Then Look
                                No Further Than Goose ITTC, The Company That Will Provide You With A One-Stop Solution For All
                                Your Technology-Related Challenges.
                            </p>
                            <p className='text-base leading-[30px]'>
                                Goose ITTC Is A Company Based In California, With A Team Of Experienced Professionals Who Provide Clients
                                With The Best Possible Services And Solutions In The Field Of Technology Consulting, Software Implementation,
                                Customized Interactive Instructor-Led Training, And Software. Whether You Need To Upgrade Your Existing Software,
                                Implement A New System, Train Your Staff On How To Use It Effectively, Or Develop A Custom Software Solution For
                                Your Specific Needs, Goose ITTC Has Got You Covered.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative bg-bg-color w-full'>
                <div className='xl:max-w-[1140px] lg:max-w-[1024px] flex mx-auto px-4 pb-8'>
                    <div className='w-full'>
                        <div className='text-center mb-5 pb-[50px]'>
                            <h2 className='md:text-[42px] font-bold text-3xl text-text-black'>Why Choose Us?</h2>
                        </div>

                        <div className='flex w-full md:flex-row flex-col gap-x-3 gap-y-5'>
                            <div className='md:w-[50%] w-full md:px-2'>
                                {
                                    chooseData1.map((data) => (
                                        <div
                                            key={data.id}
                                            className={`w-full border border-[#d5d8dc] ${data.id == 2 ? "border-t-0" : ""}`}
                                        >
                                            <div className={`flex justify-between items-center px-3 py-2 w-full ${data.id == openFirst ? "border-b border-[#d5d8dc]" : ""}`}>
                                                <span className={`text-lg font-medium ${data.id == openFirst ? "text-blue" : "text-text-black"}`}>
                                                    {data.id}. {data.title}
                                                </span>
                                                {
                                                    data.id == openFirst ?
                                                        <FaMinus
                                                            onClick={() => closeHandler(setOpenFirst)}
                                                            className='text-xl font-extrabold text-blue cursor-pointer'
                                                        />
                                                        :
                                                        <FaPlus
                                                            onClick={() => openHandler(setOpenFirst, data.id)}
                                                            className='text-base font-extrabold cursor-pointer text-text-black'
                                                        />
                                                }
                                            </div>
                                            {
                                                data.id == openFirst && (
                                                    <p className='w-full px-3 py-2 text-base text-text-black font-light'>
                                                        {data.description}
                                                    </p>
                                                )
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='md:w-[50%] w-full md:px-2'>
                                {
                                    chooseData2.map((data) => (
                                        <div
                                            key={data.id}
                                            className={`w-full border border-[#d5d8dc] ${data.id == 4 ? "border-t-0" : ""}`}
                                        >
                                            <div className={`flex justify-between items-center px-3 py-2 w-full ${data.id == openSecond ? "border-b border-[#d5d8dc]" : ""}`}>
                                                <span className={`text-lg font-medium ${data.id == openSecond ? "text-blue" : "text-text-black"}`}>
                                                    {data.id}. {data.title}
                                                </span>

                                                {
                                                    data.id == openSecond ?
                                                        <FaMinus
                                                            onClick={() => closeHandler(setOpenSecond)}
                                                            className='text-xl font-extrabold text-blue cursor-pointer'
                                                        />
                                                        :
                                                        <FaPlus
                                                            onClick={() => openHandler(setOpenSecond, data.id)}
                                                            className='text-base font-extrabold cursor-pointer text-text-black'
                                                        />
                                                }
                                            </div>
                                            {
                                                data.id == openSecond && (
                                                    <p className='w-full px-3 py-2 text-base text-text-black font-light'>
                                                        {data.description}
                                                    </p>
                                                )
                                            }
                                        </div>
                                    ))
                                }
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

export default WrapperLayout()(About);