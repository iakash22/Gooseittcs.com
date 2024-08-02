import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, ButtonGroup, IconButton, Modal, Paper, Popover, Typography } from '@mui/material'
import { ImCross } from "react-icons/im";
import BlogPost from './BlogPost';
import { FaArrowUp } from 'react-icons/fa6';



const style = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -45%)',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: "15px",
    p: 4,
    zIndex: 900,
};


const PostModal = ({ open, setOpen, data }) => {
    const [isDark, setIsDark] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Paper elevation={8} className=''>
                <Box
                    sx={style}
                    className={`${isDark ? 'bg-gray-900' :'bg-[#FFFFFF]'} min-w-[90%] w-[350px] md:h-[96%] h-[93%] sm:w-[95%] overflow-y-auto postModal z-[100]`}>
                    <div className='fixed right-6 top-4 z-[1000] flex items-center gap-x-9'>
                        <button
                            className={`${isDark ? "text-gray-800 bg-[#FFFFFF]" : "bg-gray-800 text-white"} text-xl font-semibold px-4 py-2 rounded-md`}
                            onClick={() => setIsDark(prev => !prev)}
                        >
                            {isDark ? "Light" : "Dark"}
                        </button>
                        <button
                            className=''
                            onClick={handleClose}
                        >
                            <ImCross className={`${isDark ? "text-[#FFFFFF]" :"text-gray-900"} text-[25px] opacity-50 hover:opacity-80 transition-opacity duration-150 `} />
                        </button>
                    </div>
                    <div className='relative'>
                        {data ?
                            <BlogPost
                                title={data.title}
                                description={data.description}
                                content={data.blogContent}
                                author={data.author}
                                subItalicheading={data.subItalicheading}
                                date={data.date}
                                imageUrl={data.imageUrl}
                                handler={handleClose}
                                isDarkMode={isDark}
                                setIsDarkMode={setIsDark}
                            />
                            :
                            <div>
                                No blog data found
                            </div>
                        }
                    </div>
                </Box>


                {/* <div onClick={scrollHanlder}
                    id='scrollButton'
                    className={`${scrollHide ? "block" : "hidden"} w-10 h-10 bg-blue rounded-full flex justify-center items-center fixed bottom-[10%] right-[5%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] z-[1000]`}
                >
                    <FaArrowUp />
                </div> */}
            </Paper>

        </Modal>
    )
}

export default PostModal

