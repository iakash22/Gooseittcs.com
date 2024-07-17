import React from 'react'
import Subscribe from '../components/common/Subscribe'
import { FaRegEdit, FaDatabase, FaArrowRight } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { HiRefresh } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";
import HeroContainer from '../components/common/HeroContainer';
import WrapperLayout from '../components/layout/WrapperLayout';

const TechnologyConsulting = () => {
    return (
        <div className='relative bg-bg-color'>
            <HeroContainer
                title={"Technology Consulting"}
                description={"At Goose ITTC, We Believe That Technology Should Be Used To Drive Business Growth And Success. Our Technology Consulting Services Are Designed To Help Businesses And Organizations Stay Ahead Of The Curve And Make The Most Of The Latest Technology Advancements. Our Team Of Experts Will Work Closely With You To Understand Your Needs And Provide Customized Technology Solutions That Will Help You Achieve Your Goals."}
                ClassName={"technology-cons-hero-bg"}
                colors={{textColor : "text-[#000000]"}}
            />

            <div className='my-[50px] bg-bg-color relative'>
                <div className='md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4'>
                    <div className='p-[10px]'>
                        <div className='mb-5'>
                            <h2 className='p-[10px] text-center w-full md:text-[36px] text-[20px] font-bold'>What Do We Offer</h2>
                        </div>
                        <div className='text-[#000000] text-[30px] text-center'>
                            <h6 className='text-xl font-bold leading-[30px] text-text-black'>At Goose ITTC, We Offer Consulting Services At Various Stages Of A Solution Implementation.</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-[50px] bg-bg-color relative'>
                <div className='md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4'>
                    <div className='w-full'>
                        <div className='flex md:flex-row flex-col gap-5 mb-[20px]'>
                            <HoverCard
                                title={"Business Case Studies"}
                                description={"Our Team Can Help You Understand Your Business Portfolio And Policies And Help Provide A Detailed Case Study Of Your Business Processes."}
                                Icon={FaRegEdit}
                            />
                            <HoverCard
                                title={"Business System Process Refinement"}
                                description={"We Can Collaborate With You To Review Your Existing Business Practices And Suggest You The Industry Standard And Most Suitable Re-Engineered Process Get The Max Out Of Your Team And Software Applications."}
                                Icon={HiRefresh}
                            />
                        </div>
                        <div className="flex md:flex-row flex-col gap-5  mb-[20px]">
                            <HoverCard
                                title={"Requirement Gathering And Documentation"}
                                description={"All Business Teams Have Expertise In Their Respective Business Processes But Documenting The Process As Requirement Into IT Lingo, To Get The Right Application Can Be Quite A Tricky Job. That's Where Our Experts Can Help You Build A Comprehensive Requirement Documents To The Minute Details To Get You The Best Solutions For Your Needs."}
                                Icon={BiMessageRounded}
                            />
                            <HoverCard
                                title={"Solution Shortlisting"}
                                description={"There Are Tons Of Cloud Or On-Prem Applications In Market To Cater To Your Specific Needs, But It's Hard To Choose What Suits You The Best In Terms Of Budget, Timeline And Delivering All The Requirements Calls Out For An Expert Opinion, And That's Where We Stand To Help You Choose What's Best For Your Business."}
                                Icon={FaDatabase}
                            />
                        </div>
                        <div className='md:w-[50%] w-full'>
                            <HoverCard
                                title={"Implementation Support"}
                                description={"Implementing A Software Solution Requires A Whole Team Of Specialists In Solution Architecture, Business And Application Analysis And Application Admins And Support Staff. Acquiring Such Talent Can Be A Tremendous Undertaking, While We Can Help Out Ease The Pain Of Going Throughout Implementation And Transitioning To The Business And IT Teams."}
                                Icon={FaUserGroup}
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className='my-[50px] bg-bg-color relative '>
                <div className='md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4'>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-y-3'>
                        <div className='md:rounded-[6px_0px_0px_6px]  rounded-[6px] p-[40px_30px] lg:p-[60px_40px] relative overflow-hidden bg-[#FFFFFF] hover:bg-[#1a73e9] group transition-all duration-[0.4s] ease-out'>
                            <span className=''>
                                <div className='absolute right-[-50px] top-[-50px] w-[137px] h-[137px] bg-blue opacity-[0.1] rounded-full group-hover:bg-[#FFFFFF] z-[1] transition-all duration-[0.4s] ease-out'>
                                </div>
                                <FaArrowRight
                                        className='text-[25px] text-blue absolute top-[25px] right-[20px] group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out'
                                    />
                            </span>
                            <p className='max-w-[270px] text-base leading-[30px] group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out'>Creative Approaches To Tackle Your Most Pressing Challenges</p>
                            <h4 className='text-2xl font-bold leading-[34px] mb-1 group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out'>Strategic Planning</h4>
                        </div>
                        <div className='rounded-[6px] md:rounded-none p-[40px_30px] lg:p-[60px_40px] relative overflow-hidden bg-[#FFFFFF] hover:bg-[#1a73e9] group transition-all duration-[0.4s] ease-out'>
                            <span className=''>
                                <div className='absolute right-[-50px] top-[-50px] w-[137px] h-[137px] bg-blue opacity-[0.1] rounded-full group-hover:bg-[#FFFFFF] z-[1] transition-all duration-[0.4s] ease-out'>
                                </div>
                                <FaArrowRight
                                        className='text-[25px] text-blue absolute top-[25px] right-[20px] group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out'
                                    />
                            </span>
                            <h4 className='text-2xl font-bold leading-[34px] mb-1 group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out'>Strategic Planning</h4>
                            <p className='max-w-[270px] text-base leading-[30px] group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out'>Creative Approaches To Tackle Your Most Pressing Challenges</p>
                        </div>
                        <div className='md:rounded-[0px_6px_6px_0px] rounded-[6px] p-[40px_30px] lg:p-[60px_40px] relative overflow-hidden bg-[#FFFFFF] hover:bg-[#1a73e9] group transition-all duration-[0.4s] ease-out'>
                            <span className=''>
                                <div className='absolute right-[-50px] top-[-50px] w-[137px] h-[137px] bg-blue opacity-[0.1] rounded-full group-hover:bg-[#FFFFFF] z-[1] transition-all duration-[0.4s] ease-out'>
                                </div>
                                <FaArrowRight
                                        className='text-[25px] text-blue absolute top-[25px] right-[20px] group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out'
                                    />
                            </span>
                            <h4 className='text-2xl font-bold leading-[34px] mb-1 group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out'>Strategic Planning</h4>
                            <p className='max-w-[270px] text-base leading-[30px] group-hover:text-[#FFFFFF] transition-all duration-[0.4s] ease-out'>Creative Approaches To Tackle Your Most Pressing Challenges</p>
                        </div>
                    </div>
                </div>
            </div>


            <Subscribe />
        </div>
    )
}

export default WrapperLayout()(TechnologyConsulting);


const HoverCard = ({ title, Icon, description }) => {
    return (
        <div className='w-full '>
            <div className="bg-[#FFFFFF] h-full border-solid border border-[#E7E7E7] transition-all duration-[0.6s] mx-[5px] p-5 hover:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] rounded-[30px]">
                <div className='block text-center text-[#343434]'>
                    <div className="bg-blue rounded-full p-2 mb-[15px] text-[30px] text-center flex justify-center items-center w-[65px] h-[65px] mx-auto">
                        <Icon className="text-[30px] text-[#FFFFFF]" />
                    </div>
                    <div className="">
                        <h3 className='text-[25px] leading-[40px] font-bold text-text-black'>{title}</h3>
                        <p className='text-[17px] leading-[30px]'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
