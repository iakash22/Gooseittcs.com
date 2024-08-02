import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const BlogPost = ({ title, author, date, imageUrl,description,content,handler,isDarkMode,setIsDarkMode }) => {

    return (
        <div>
            <div className={`w-full px-4 py-6 ${!isDarkMode ? "text-gray-900 bg-[#FFFFFF]" : "text-gray-100 bg-gray-900" } `}>
                <header className="mb-6 mt-5">
                    <h1 className={`sm:text-3xl md:text-4xl text-2xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>{title}</h1>
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"} `}>By {author} | {date}</p>
                </header>

                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Hero"
                        className="w-full h-72 object-cover rounded-lg mb-6"
                    />
                )}
                
                {
                    description && (
                        <p className='lg:mb-8 mb-5 mt-3 py-1'>
                            {description}
                        </p>
                    )
                }

                <article className={`prose prose-lg  ${isDarkMode ? "text-gray-200 prose-invert" : "text-gray-800"}`}>
                    {content.map((section, index) => (
                        console.log(section.paragraph.get),
                        <div key={index} className="mb-6">
                            {section.subtitle && <h2 className={`text-2xl font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-800"} mb-2`}>{section.subtitle}</h2>}
                            {section.subNumrictitle && <h2 className={`text-2xl font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-800"} mb-2`}><span>{index+1}.</span> {section.subNumrictitle}</h2>}
                            {section.subItalicheading && <h4 className={`text-base font-semibold italic ${isDarkMode ? "text-gray-200" : "text-gray-800"} mb-2`}>{section.subItalicheading}</h4>}
                            {section.subheading && <h4 className={`text-xl font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-800"} mb-2`}>{section.subheading}</h4>}
                            <p>{section.paragraph}</p>
                        </div>
                    ))}
                </article>

                <footer className="mt-10 border-t dark:border-gray-700 pt-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Share this post:</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://x.com/gooseittc" className="text-blue-500 dark:text-blue-400" target='_blank'>Twitter</a>
                        <a href="https://www.linkedin.com/company/goose-ittc" target='_blank' className="text-blue-500 dark:text-blue-400">Linkedin</a>
                        <a href="https://www.facebook.com/gooseittc" target='_blank' className="text-blue-700 dark:text-blue-600">Facebook</a>
                        <a href="https://www.instagram.com/gooseittc/?igsh=YTQwZjQ0NmI0OA%3D%3D" className="text-pink-500 dark:text-pink-400" target='_blank'>Instagram</a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default BlogPost;
