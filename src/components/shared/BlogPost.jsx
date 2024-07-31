import React from 'react';

const BlogPost = ({ title, author, date, imageUrl, content }) => {
    return (
        <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4 py-6 bg-white shadow-md rounded-lg mb-[3rem]">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
                <p className="text-sm text-gray-500">By {author} | {date}</p>
            </header>

            {imageUrl && (
                <img
                    src={imageUrl}
                    alt="Hero"
                    className="w-full h-72 object-cover rounded-lg mb-6"
                />
            )}

            <article className="prose prose-lg text-gray-800">
                {content.map((section, index) => (
                    <div key={index} className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{section.subtitle}</h2>
                        <p>{section.paragraph}</p>
                    </div>
                ))}
            </article>

            <footer className="mt-10 border-t pt-6">
                <p className="text-sm text-gray-600">Share this post:</p>
                <div className="flex space-x-4 mt-4">
                    {/* Replace # with actual social media links */}
                    <a href="https://x.com/gooseittc" className="text-blue-500" target='_blank'>Twitter</a>
                    <a href="https://www.linkedin.com/company/goose-ittc" target='_blank' className="text-blue-500">Linkedin</a>
                    <a href="https://www.facebook.com/gooseittc" target='_blank' className="text-blue-700">Facebook</a>
                    <a href="https://www.instagram.com/gooseittc/?igsh=YTQwZjQ0NmI0OA%3D%3D" className="text-pink-500" target='_blank'>Instagram</a>
                </div>
            </footer>
        </div>
    );
};

export default BlogPost;