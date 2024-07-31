import React from 'react'
import WrapperLayout from '../components/layout/WrapperLayout'
import { Link } from 'react-router-dom';
import BlogPost from '../components/shared/BlogPost';



const Blog = () => {
    const blogContent1 = [
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
    ];
    const blogContent2 = [
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
    ]
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
                            <li className='list-none font-bold text-lg text-blue'>Blog</li>
                        </ul>
                        <h1 className='text-[70px] md:leading-[80px]  text-start leading-[1.4] lg:font-bold font-semibold text-[#FFFFFF]'>Blog</h1>
                    </div>
                </div>
            </div>

            <div className='relative bg-bg-color py-[3rem]'>
                <BlogPost
                    title="The Struggles of Job Seekers: Finding the Perfect Fit"
                    content={blogContent1}
                    author="Team GITTC"
                    date="July 26, 2024"
                    imageUrl={"https://media.licdn.com/dms/image/D5612AQHlkpwuZRMgNA/article-cover_image-shrink_720_1280/0/1721983249032?e=1727913600&v=beta&t=BQe3A__yj3iF5L-CIolxR_CfmMX3SRSnQ5V85ddNRGM"}
                />
                <BlogPost
                    title="Navigating the AI Revolution: Where Humans and Algorithms Tango"
                    content={blogContent2}
                    author="Team GITTC"
                    date="July 24, 2024"
                    imageUrl={"https://media.licdn.com/dms/image/D5612AQEMfvJqp_vbUw/article-cover_image-shrink_720_1280/0/1721779583852?e=1727913600&v=beta&t=V5KyIItNov0SYSkdlGJP9eqC2Ye4Zbiy-Pd9OiQYQTM"}
                />
            </div>
        </div>
    )
}

export default WrapperLayout()(Blog);