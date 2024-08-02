import React, { useState } from 'react'
import WrapperLayout from '../components/layout/WrapperLayout'
import { Link } from 'react-router-dom';
import BlogPost from '../components/shared/BlogPost';
import Subscribe from '../components/common/Subscribe';
import PostModal from '../components/shared/PostModal';
import Button from '@mui/material/Button';


const blogPost1 = {
    blogContent: [
        {
            subtitle: 'Confusing Application Processes',
            paragraph: 'Navigating through complex and lengthy application forms can be frustrating. Many job seekers find themselves lost in a maze of requirements and steps. Simplifying your resume and keeping a checklist of required documents can help streamline the process.'
        },
        {
            subtitle: 'Unclear Job Descriptions',
            paragraph: 'Job descriptions that are vague or overly broad can leave candidates unsure if they are a good fit. It’s important to reach out to the hiring manager for clarification and tailor your application to highlight relevant skills and experiences.'
        },
        {
            subtitle: "Long Drawn-Out Interview Processes",
            paragraph: "Extended interview processes can be exhausting and demotivating. To stay motivated, keep track of your progress, prepare thoroughly for each stage, and maintain open communication with the recruiter."
        },
        {
            subtitle: "Unknown Salary Ranges",
            paragraph: "Not knowing the salary range for a position can make it difficult to gauge if the job meets your financial needs. Research industry standards and use platforms like Glassdoor to get an idea of what to expect."
        },
        {
            subtitle: "Online Resume Filters",
            paragraph: "Many companies use Applicant Tracking Systems (ATS) to filter resumes, which can be a barrier for job seekers. To increase your chances, use keywords from the job posting and keep your resume format simple and ATS-friendly."
        },
        {
            subtitle: "The Hidden Job Market",
            paragraph: "A significant number of job opportunities are never advertised. Networking is key to accessing these hidden jobs. Attend industry events, join professional groups, and connect with people in your field."
        },
        {
            subtitle: "Not Feeling 100% Qualified for a Job",
            paragraph: "It’s common to feel underqualified for a job, but don’t let that stop you from applying. Highlight your transferable skills and show your willingness to learn and grow in the role."
        },
        {
            subtitle: "Resume Optimization",
            paragraph: "Creating a resume that stands out is crucial. Tailor your resume for each job application, use keywords, and focus on achievements rather than just job duties."
        },
        {
            subtitle: "Interview Anxiety",
            paragraph: "Interviews can be nerve-wracking. Prepare thoroughly, practice mindfulness techniques, and conduct mock interviews to build confidence."
        },
        {
            subtitle: "Aligning Personal Values with Company Culture",
            paragraph: "Finding a job that aligns with your personal values and company culture is essential for long-term satisfaction. Research the company, ask the right questions during the interview, and trust your instincts."
        },
        {
            subtitle: "Conclusion",
            paragraph: "The job search journey is filled with challenges, but with the right strategies and mindset, job seekers can navigate these obstacles and find the perfect fit. Remember, persistence and resilience are key. Keep refining your approach, and don’t be afraid to seek support from mentors, career coaches, or professional networks."
        },
        // Add more content sections as needed
    ],
    title: "The Struggles of Job Seekers: Finding the Perfect Fit",
    author: "Team GITTC",
    date: "July 26, 2024",
    imageUrl: "https://media.licdn.com/dms/image/D5612AQHlkpwuZRMgNA/article-cover_image-shrink_720_1280/0/1721983249032?e=1727913600&v=beta&t=BQe3A__yj3iF5L-CIolxR_CfmMX3SRSnQ5V85ddNRGM",
}

const blogPost2 = {
    blogContent: [
        {
            subtitle: "How AI Is Changing the Dance Floor",
            paragraph: "Picture this: a grand ballroom where history meets innovation. The waltz of technology has always had its disruptors—the kind that sweep in, uninvited, and change everything. In the early 20th century, it was the automobile, scoffed at by horse-and-buggy loyalists. Today, it’s AI’s turn to take the lead. AI is altering the fabric of industries across the globe. Let’s explore this transformation, its implications, and how forward-thinking companies are adapting.",
        },
        {
            subtitle: "The Dance of Disruption and Creation",
            paragraph: "The Historical Echo: Auto Industry vs. the Cycle : Remember when cars were noisy contraptions, belching smoke and ruffling feathers? Well, AI is our modern-day engine of transformation. It’s rewriting the choreography of industries—sometimes with grace, sometimes with a few missteps. But it’s here to stay, and we’re all part of the performance. AI—often met with skepticism—holds similar transformative potential.",
        },
        {
            subtitle: "The Yin and Yang of Employment",
            paragraph: "Job Losses and the Spotlight on New Roles : Yes, there are casualties on the dance floor. Routine tasks—the cha-cha of spreadsheets, the two-step of data entry—are now AI’s domain. But let’s not forget the tango of opportunity. AI creates new roles: the salsa of chatbots, the foxtrot of predictive analytics. Consider chatbots handling customer inquiries or predictive analytics optimizing supply chains. And guess what? Humans still lead the dance. We’re the improvisers, the ones who spin innovation out of thin air.",
        },
        {
            subtitle: "The Human Advantage",
            paragraph: "Our Secret Sauce: Adaptability : Here’s the thing about humans: we’re chameleons. We adapt. We thrive amidst change, learning and evolving. While AI crunches numbers, we weave narratives. As companies embrace AI, they must also nurture their human workforce. Sure, algorithms can predict your next shoe size, but can they tell you why you love those red sneakers? Nope. That’s our superpower—the ability to connect the dots, even when they’re in different constellations.",
        },
        {
            subtitle: "Leading by Example: Companies in Transition",
            paragraph: "",
        },
        {
            subtitle: "Amazon: From Warehouses to Algorithms",
            paragraph: "Amazon’s metamorphosis from an online bookstore to a global e-commerce giant exemplifies adaptability. Their AI-driven recommendation engine—based on user behavior—fuels sales. Yet, Amazon invests in employee training, recognizing that humans remain the heartbeat of innovation. Pure AI magic. But Jeff Bezos knows the score. Humans still write the plot twists. They train, they adapt, and they keep the story alive.",
        },
        {
            subtitle: "Tesla: Autonomy with a Human Chauffeur",
            paragraph: "Tesla’s self-driving cars epitomize AI’s potential. But Elon Musk emphasizes the “human in the loop.” Tesla’s Autopilot system relies on neural networks, but human drivers remain essential for safety. It’s a delicate balance—an orchestra where AI plays the notes, but humans conduct. Elon Musk insists on a backup dancer—the human in the loop. It’s like having a DJ mix the beats while the AI grooves. Together, they create harmony on the highway.",
        },
        {
            subtitle: "Our Ongoing Symphony",
            paragraph: "Embracing Change: GITTC’s Dance Card : At Goose ITTC, we’re not wallflowers, we’re not bystanders. We’re jitterbugging with AI. Our supply chain algorithms do the jitterbug, but our logistics experts? they’re the swing dancers. We’re rewriting the steps, adapting to the rhythm of progress. So grab a partner—human or algorithm—and let’s tango toward success.",
        },
    ],
    title: "Navigating the AI Revolution: Where Humans and Algorithms Tango",
    author: "Team GITTC",
    date: "July 24, 2024",
    imageUrl: "https://media.licdn.com/dms/image/D5612AQEMfvJqp_vbUw/article-cover_image-shrink_720_1280/0/1721779583852?e=1727913600&v=beta&t=V5KyIItNov0SYSkdlGJP9eqC2Ye4Zbiy-Pd9OiQYQTM",
}

const blogPost3 = {
    title: "Talent Acquisition Trends: What's Shaping the Industry?",
    author: "Team GITTC",
    date: "July 23, 2024",
    imageUrl: "https://media.licdn.com/dms/image/D4D12AQFuzHBrZ9D0jw/article-cover_image-shrink_720_1280/0/1721679445384?e=1727913600&v=beta&t=mdwIgxyIwv-uRlzgJTy3yjmozO2aQU7NwejQVysFRrs",
    blogContent: [
        {
            subtitle: "AI and Automation:",
            paragraph : " - Artificial intelligence (AI) and automation are transforming recruitment. Chatbots screen candidates, algorithms match skills to job descriptions, and predictive analytics identify top talent. Embrace these tools to streamline processes and improve efficiency.",
        },
        {
            subtitle: "Remote Hiring and Onboarding:",
            paragraph : "- The pandemic accelerated remote work adoption. Companies now hire and onboard employees virtually. Video interviews, e-assessments, and digital paperwork are standard. Adapt your processes to accommodate remote talent.",
        },
        {
            subtitle: "Diversity, Equity, and Inclusion (DEI):",
            paragraph : " - Organizations prioritize DEI initiatives. They actively seek diverse talent, address biases, and create inclusive workplaces. As a recruitment agency, emphasize DEI in your candidate searches and educate clients on its importance.",
        },
        {
            subtitle: "Skills Over Degrees:",
            paragraph : " - Employers increasingly value skills and experience over formal degrees. Highlight candidates' practical abilities, certifications, and relevant projects. Upskilling and reskilling programs are gaining traction.",
        },
        {
            subtitle: "Employer Branding:",
            paragraph : " - Companies invest in employer branding to attract top talent. Showcase your clients' company culture, values, and employee experiences. A strong employer brand attracts candidates who align with the organization's mission.",
        },
        {
            subtitle: "Data-Driven Decision-Making:",
            paragraph : "- Data analytics guide recruitment strategies. Track metrics like time-to-hire, cost-per-hire, and quality of hire. Use insights to optimize processes and allocate resources effectively.",
        },
        {
            subtitle: "Gig Economy and Freelancers:",
            paragraph : " - The gig economy continues to grow. Companies hire freelancers, contractors, and project-based workers. Consider offering flexible staffing solutions to meet this demand.",
        },
        {
            subtitle: " Soft Skills Assessment:",
            paragraph : " - Beyond technical skills, employers focus on soft skills like adaptability, communication, and emotional intelligence. Assess candidates holistically to ensure cultural fit.",
        },
        {
            paragraph : "As the recruitment landscape continues to evolve, staying informed about these trends is crucial for success. Embracing AI and automation, adapting to remote hiring, prioritizing DEI, and valuing skills over degrees are just a few ways to stay ahead. By leveraging data-driven decision-making and focusing on employer branding, organizations can attract and retain top talent. Remember, the key to thriving in this dynamic environment is continuous learning and flexibility.",
        },
    ]
}
const blogPost4 = {
    title: "Charting a Course for Tomorrow: The UAE's Ministries of the Future",
    author: "Team GITTC",
    date: "June 26, 2024",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5612AQGvzOgEW3wh3A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1719389652739?e=1727913600&v=beta&t=2vmelt5SPYALOJ-Kx2NXMdmtOm_C4eLGIqvnBptpMQg",
    blogContent: [
        {
            subtitle: "",
            paragraph : "The United Arab Emirates (UAE) has long been synonymous with grandeur and innovation, but it is the nation's unique approach to governance that truly sets it apart on the world stage. The UAE is the sole country to have established a Ministry of Tolerance, a Ministry of Happiness, and a Ministry of Artificial Intelligence. Additionally, it has pioneered the concept of a virtual ministry with the Ministry of Possibilities. Each of these ministries is not just a functional department but a symbol of the UAE's commitment to a progressive and inclusive future. ",
        },
        {
            subtitle: "",
            paragraph : "The Ministry of Tolerance is a bold initiative that champions the values of coexistence and respect in a culturally diverse nation. It serves as a guiding force for policies that nurture a tolerant society, where every individual's rights are respected, and cultural diversity is celebrated.",
        },
        {
            subtitle: "",
            paragraph : "The Ministry of Happiness is an embodiment of the UAE's dedication to its citizens' and residents' overall well-being. It is tasked with integrating happiness into all aspects of government service, ensuring that the pursuit of happiness is a core value in public policy.",
        },
        {
            subtitle: "",
            paragraph : "The Ministry of Artificial Intelligence represents the UAE's strategic move to embrace and leverage the transformative power of AI. This ministry is a clear indicator of the nation's ambition to lead in the era of technological advancement and smart governance. ",
        },
        {
            subtitle: "",
            paragraph : "The Ministry of Possibilities operates beyond the confines of traditional bureaucracy. It is a virtual entity designed to tackle complex challenges with innovative solutions, thereby enhancing the quality of life for all. ",
        },
        {
            subtitle: "",
            paragraph : "These ministries collectively illustrate the UAE's visionary leadership and its proactive approach to shaping a future where technology, happiness, and tolerance are interwoven into the fabric of society. For professionals in the logistics and freight industry, the UAE's model offers inspiration on how to incorporate these values into business practices, ensuring adaptability, efficiency, and a commitment to excellence. ",
        },
        {
            subtitle: "",
            paragraph : "The UAE's governance structure, with its focus on positive societal values and embracing new technologies, provides a blueprint for modern businesses and governments aiming to create a thriving, future-ready environment. It is a testament to the belief that with visionary leadership and innovative thinking, the possibilities for growth and success are boundless.",
        },
        {
            subtitle: "",
            paragraph : "Join us in exploring how the principles of the UAE's governance can be applied to our industry for a brighter, more prosperous future.",
        },
    ]
}
const blogPost5 = {
    title: "",
    author: "Team GITTC",
    date: "April 17, 2024",
    imageUrl: "https://media.licdn.com/dms/image/D5612AQHldNerRp5Zwg/article-cover_image-shrink_720_1280/0/1713337916400?e=1727913600&v=beta&t=iCQMZJgMCc2Susx6mApE7lkI5xL5ZEImWQBYBYbJ37U",
    blogContent: [
        {
            subtitle: "",
            paragraph : "In an era where technology blurs the lines between work and personal life, the ‘Right to Disconnect’ bill emerges as a beacon of hope for employees seeking a healthier work-life balance. This groundbreaking legislation is not just a policy; it’s a cultural shift towards acknowledging the importance of rest and recuperation in our hyper-connected world.",
        },
        {
            subtitle: "",
            paragraph : "The bill’s core principle is simple yet profound: employees should have the right to switch off from work-related communications after business hours. This right is crucial in preventing burnout, a phenomenon all too common in today’s workforce. By setting clear boundaries, employees can fully engage in their personal lives without the looming pressure of work tasks.",
        },
        {
            subtitle: "",
            paragraph : "However, the bill is not without its challenges. Implementation requires careful consideration of various industries’ operational needs and the diverse preferences of the workforce. It’s a delicate balance between ensuring business continuity and respecting personal time.",
        },
        {
            subtitle: "",
            paragraph : "As companies navigate these waters, the success stories of those who have already adopted similar policies shine a light on the potential benefits. Increased productivity, higher job satisfaction, and improved mental health are just a few of the positive outcomes reported by organizations that respect the ‘Right to Disconnect.’",
        },
        {
            subtitle: "",
            paragraph : "In conclusion, the ‘Right to Disconnect’ bill is more than legislation; it’s a commitment to the well-being of employees. It’s a statement that personal time is valuable and that a well-rested employee is an asset to any organization.",
        },
        {
            subtitle: "",
            paragraph : "However, the policy alone is insufficient; it requires accompanying measures like awareness raising, training, and effective limits on out-of-hours connection.",
        },
        // {
        //     subtitle: "",
        //     paragraph : "",
        // },
        // {
        //     subtitle: "",
        //     paragraph : "",
        // },
        // {
        //     subtitle: "",
        //     paragraph : "",
        // },
        // {
        //     subtitle: "",
        //     paragraph : "",
        // },
    ]
}

const Blog = () => {
    const [open, setOpen] = useState(false);
    const [blogPostData, setBlogPostData] = useState(null);
    const openHandler = (data) => {
        setBlogPostData(data)
        setOpen(true);
        console.log(open);
    }


    return (
        <div className='relative bg-bg-color'>
            <div className="blog-bg bg-cover overflow-hidden after:h-[620px] after:md:h-[420px] mb-10">
                <div className='md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4 md:min-h-[420px] min-h-[602px] relative flex items-center'>
                    <div className='px-2'>
                        <ul className='mb-[10px] flex flex-row text-[#FFFFFF] gap-x-5'>
                            <li className='font-bold text-lg'>
                                <Link to={"/"} className='mr-[20px] transition duration-[0.4s] cursor-pointer'>Home</Link>
                                <span>|</span>
                            </li>
                            <li className='list-none font-bold text-lg text-blue'>Blogs</li>
                        </ul>
                        <h1 className='text-[70px] md:leading-[80px]  text-start leading-[1.4] lg:font-bold font-semibold text-[#FFFFFF]'>Blogs</h1>
                    </div>
                </div>
            </div>

            <div className="lg:max-w-[960px] md:max-w-[760px] mx-auto  xl:max-w-[1280px] w-full px-4">
                <div className='relative bg-bg-color py-[3rem] grid md:grid-cols-2 grid-col-1 gap-8'>
                    <BlogPostCard
                        title="The Struggles of Job Seekers: Finding the Perfect Fit"
                        data={blogPost1}
                        imageUrl={"https://media.licdn.com/dms/image/D5612AQHlkpwuZRMgNA/article-cover_image-shrink_720_1280/0/1721983249032?e=1727913600&v=beta&t=BQe3A__yj3iF5L-CIolxR_CfmMX3SRSnQ5V85ddNRGM"}
                        handler={openHandler}
                    />
                    <BlogPostCard
                        title="Navigating the AI Revolution: Where Humans and Algorithms Tango"
                        data={blogPost2}
                        imageUrl={"https://media.licdn.com/dms/image/D5612AQEMfvJqp_vbUw/article-cover_image-shrink_720_1280/0/1721779583852?e=1727913600&v=beta&t=V5KyIItNov0SYSkdlGJP9eqC2Ye4Zbiy-Pd9OiQYQTM"}
                        handler={openHandler}
                    />
                    <BlogPostCard
                        title={blogPost4.title}
                        data={blogPost4}
                        imageUrl={blogPost2.imageUrl}
                        handler={openHandler}
                    />
                    <BlogPostCard
                        title={blogPost3.title}
                        data={blogPost3}
                        imageUrl={blogPost3.imageUrl}
                        handler={openHandler}
                    />
                    <BlogPostCard
                        title={blogPost5.title}
                        data={blogPost5}
                        imageUrl={blogPost5.imageUrl}
                        handler={openHandler}
                    />
                </div>
            </div>

            <Subscribe />

            <PostModal
                title={"The Struggles of Job Seekers: Finding the Perfect Fit"}
                setOpen={setOpen}
                open={open}
                data={blogPostData}
            />
        </div>
    )
}

export default WrapperLayout()(Blog);


const BlogPostCard = ({ handler, data }) => {
    const clickHandler = () => {
        handler(data);
    }
    return (
        <div className="w-full px-4 py-6 bg-white shadow-md rounded-lg">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{data?.title}</h1>
                <p className="text-sm text-gray-500">By {data?.author} | {data?.date}</p>
            </header>

            {data?.imageUrl && (
                <img
                    src={data?.imageUrl}
                    alt="Hero"
                    className="w-full h-72 object-cover rounded-lg mb-6"
                />
            )}
            <Button onClick={clickHandler} variant="contained" sx={{padding : "10px 15px", backdropFilter : "#1a73e9"}}>
                Read more
            </Button>
        </div>
    )
}