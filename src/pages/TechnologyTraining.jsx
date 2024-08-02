import React from 'react'
import WrapperLayout from '../components/layout/WrapperLayout'
import HeroContainer from '../components/common/HeroContainer'
import Subscribe from '../components/common/Subscribe'
import MicroSoftImg from '../assets/services/microsoft-logo..png'
import MultiMediaImg from '../assets/services/multimedia.jpeg'
import OracleCloudImg from '../assets/services/oracle-cloud.jpg'
import SapCloudImg from '../assets/services/sap-cloud.png'
import ScrumImg from '../assets/services/scrum.png'
import AssessmentImg from '../assets/services/assessment.jpg'
import ElearningImg from '../assets/services/Elearning.png'
import AboutImg from '../assets/services/about3.jpg'
import GraphImg from '../assets/services/graph.png'
import LmsImg from '../assets/services/lms.png'
import Lms2Img from '../assets/services/lms2.png'

const TechnologyTraining = () => {
    return (
        <div className='bg-bg-color relative'>
            <HeroContainer
                title={"Technology Training"}
                description={"We Understand That Technology Is Always Evolving, And It Can Be Difficult For Businesses And Organizations To Keep Up. That’s Why We Offer Interactive Instructor-Led Training Services To Help You And Your Team Stay Up-To-Date With The Latest Technology Advancements. Our Training Sessions Are Interactive And Engaging, And Our Instructors Are Experts In Their Respective Fields. Whether You Need Training For Software Development, Technology Consulting Or Any Other IT Related Fields, We Have Got You Covered"}
                ClassName={"technology-training-hero-bg"}
                colors={{ textColor: "text-[#FFFFFF]" }}
            />

            <div className='my-[50px] bg-bg-color relative'>
                <div className='md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4'>
                    <div className='p-[10px]'>
                        <div className='mb-1'>
                            <h2 className='p-[10px] text-center w-full md:text-[36px] text-[20px] font-bold'>Leading Training Services Company</h2>
                        </div>
                        <div className='text-[#000000] text-[30px] text-center'>
                            <h6 className='text-base font-medium leading-[30px] text-text-black'>To Stay Relevant And Competitive In Today’s Fast-Paced Business World, Your Employees Must Perform At Their Best.  Gooseittc Delivers Engaging And Innovative Corporate Training Programs That Strategically Align With Your Business Goals</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-bg-color relative">
                <div className='md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4'>
                    <div className='grid place-content-center xl:gap-y-12 md:gap-y-8 gap-y-5 gap-x-6 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pb-5'>
                        <ImageCard
                            src={AssessmentImg}
                            title={"Training Needs Assessment"}
                            desc={"Our Skilled Instructional Design Consultants Will Work With Your Team To Deliver The Right Training Needs Analysis To Identify And Address Your Learner Knowledge And Skills Gaps. Download Free Training Needs Assessment Templates And Tools Today."}
                        />
                        <ImageCard
                            src={GraphImg}
                            title={"Instructional Design Consulting Services"}
                            desc={"Our Top Instructional Designers Provide Employee-Centric Learning Design Based On Your Learners’ Needs And Training Program Objectives.  Contact Us Today To Learn More About How Our Instructional Design Consulting Services Can Help Your Organization."}
                        />
                        <ImageCard
                            src={LmsImg}
                            title={"Global Contract Trainers"}
                            desc={"Train Sales And Services Teams And More With The Right Corporate Trainer.  With A Network Of Over 30,000 Training Consultants, Gooseittc Is Your Top Contract Training Services Provider."}
                        />
                        <ImageCard
                            src={ElearningImg}
                            title={"Custom ELearning Design And Development"}
                            desc={"Create New Custom ELearning Programs, Maintain Existing Ones Or Take In-Class Training Content Online With Gooseittc’ Dedicated Team Of Experienced ELearning Developers."}
                        />
                        <ImageCard
                            src={AboutImg}
                            title={"User Adoption Strategy And Training"}
                            desc={"Increase Employee Adoption Of New Technologies Like Salesforce, SAP, Workday, Microsoft Dynamics, And More.  Our Team Of Training Consultants Will Create Results-Driven User Adoption Strategies And Training."}
                        />
                        <ImageCard
                            src={Lms2Img}
                            title={"Learning Management System (LMS)"}
                            desc={"Improve Your Overall Learner Experience While Easily Managing Company Training And Development Records, Data And Reports With A Fully Hosted LMS Solution From Gooseittc.  See What Your Learner Portal Could Look Like With A Free Demo."}
                        />
                    </div>
                </div>
            </div>

            <div className='bg-bg-color relative'>
                <div className='md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4'>
                    <div className='p-[10px]'>
                        <div className='mb-1 my-[50px]'>
                            <h2 className='p-[10px] text-center w-full md:text-[36px] text-[20px] font-bold'>Training Streams</h2>
                        </div>
                    </div>
                </div>

                <div className='bg-[#F5F5F5]'>
                    <TrainingCard
                        src={MicroSoftImg}
                        title={"Microsoft"}
                        desc1={`Microsoft Power Platform And SharePoint Are Two Microsoft Technologies That Organizations Can Use To Automate Processes, Create Workflows, And Share Information.`}
                        desc2={"Overall, Both Microsoft Power Platform And SharePoint Enable Organizations To Streamline Processes, Automate Tasks, And Improve Collaboration Across Teams And Departments. They Are Powerful Tools That Can Help Organizations To Increase Efficiency, Reduce Costs, And Drive Innovation."}
                        direction={"md:flex-row flex-col"}
                    />
                </div>

                <div className='bg-[#FFFFFF] md:my-[50px] my-5'>
                    <TrainingCard
                        src={SapCloudImg}
                        title={"SAP IBP Cloud"}
                        desc1={`SAP Integrated Business Planning (IBP) Is A Cloud-Based Planning And Forecasting Solution That Helps Organizations Improve Their Supply Chain Processes. IBP Enables Businesses To Create Integrated Plans For Demand, Inventory, Supply, And Financials. It Provides Real-Time Visibility Into Planning Data, Enables Collaboration Across Departments And Partners, And Helps Organizations To Quickly Respond To Changing Business Conditions Using A Range Of Functions, Including Demand Planning, Inventory Optimization, Supply, Response Planning And Supply Chain Control Tower.`}
                        direction={"md:flex-row-reverse flex-col"}
                    />
                </div>

                <div className='bg-[#F5F5F5] md:my-[50px] my-5'>
                    <TrainingCard
                        src={OracleCloudImg}
                        title={"Oracle Cloud"}
                        desc1={"Oracle Cloud Is A Suite Of Cloud Computing Services Offered By Oracle Corporation. It Includes A Wide Range Of Services Such As Infrastructure As A Service (IaaS), Platform As A Service (PaaS), Software As A Service (SaaS), And Data As A Service (DaaS). Oracle Cloud Provides Businesses With A Comprehensive And Integrated Cloud Platform That Can Be Used To Build, Deploy, And Manage Various Types Of Applications And Services. With Features Such As High Availability, Security, Scalability, And Flexibility, Oracle Cloud Enables Businesses To Reduce Costs, Increase Efficiency, And Drive Innovation"}
                        direction={"md:flex-row flex-col"}
                    />
                </div>

                <div className='bg-[#FFFFFF] md:my-[50px] my-5'>
                    <TrainingCard
                        src={ScrumImg}
                        title={"SCRUM"}
                        desc1={"Scrum Is An Agile Methodology Used For Software Development And Project Management. It Is A Framework That Enables Teams To Work Collaboratively To Deliver High-Quality Products In An Iterative And Incremental Manner. Scrum Is Based On The Principles Of Transparency, Inspection, And Adaptation."}
                        desc2={"Scrum Involves A Set Of Predefined Roles, Events, Artifacts, And Rules."}
                        desc3={"Overall, Scrum Provides A Flexible And Adaptable Framework For Teams To Work Collaboratively And Iteratively To Deliver High-Quality Products. It Encourages Transparency, Inspection, And Adaptation, Enabling Teams To Continuously Improve Their Processes And Deliverables."}
                        direction={"md:flex-row-reverse flex-col"}
                    />
                </div>

                <div className='bg-[#F5F5F5]'>
                    <TrainingCard
                        src={MultiMediaImg}
                        title={"Multimedia Tools"}
                        desc1={"Multimedia Tools Are Software Applications Designed To Create, Edit, And Manipulate Multimedia Content, Such As Images, Audio, Video, And Animations. These Tools Can Be Used In A Wide Range Of Fields And Industries, Including Education, Entertainment, Marketing, Advertising, And More."}
                        desc2={"Overall, Multimedia Tools Have Numerous Uses And Applications In Various Industries, And Their Importance Continues To Grow As Digital Media Becomes More Prevalent In Our Daily Lives."}
                        direction={"md:flex-row flex-col"}
                    />
                </div>

            </div>

            <Subscribe />
        </div>
    )
}

export default WrapperLayout()(TechnologyTraining)


const ImageCard = ({ src, title, desc }) => {
    return (
        <div className='w-full bg-[#ffffff] rounded-lg border border-solid border-[#ECECEC] transition-[border_0.6s,border-radius_0.6s,box-shadow_0.6s] mx-[5px] relative p-[10px]
                        hover:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] hover:border-b-[10px] hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-[#1A73E9]'>
            <div className="mb-5 w-full h-[240px]">
                <img
                    src={src}
                    alt="img"
                    className='w-full h-full object-fill'
                    loading='lazy'
                />
            </div>
            <div className='text-center text-[#343434]'>
                <h2 className="text-[25px] leading-[30px] font-semibold text-text-black mb-5">{title}</h2>
                <p className='text-base font-normal leading-[28px] text-center'>{desc}</p>
            </div>
        </div>
    )
}


const TrainingCard = ({ title, desc1, desc2, desc3, src, direction}) => {
    return (
        <div className='md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4'>
            <div className={`py-[30px] w-full`}>
                <div className={`w-full flex ${direction} justify-between gap-y-5`}>
                    <div className='md:w-[50%] w-full sm:p-[10px] text-center'>
                        <div className='w-full text-center flex justify-center'>
                            <img
                                src={src}
                                loading='lazy'
                                alt="training-img"
                                className='self-end'
                            />
                        </div>
                    </div>

                    <div className='md:w-[50%] w-full sm:p-[10px] text-start text-[#000000]'>
                        <h2 className='text-[25px] mb-5 font-bold text-start'>{title}</h2>
                        <p className='mb-5 text-base font-normal leading-[30px] text-start'>{desc1}</p>
                        {desc2 && <p className={`${desc3 ? "mb-5" : ""} text-base font-normal leading-[30px] text-start`}>{desc2}</p>}
                        {desc3 && <p className='text-base font-normal leading-[30px] text-start'>{desc3}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}