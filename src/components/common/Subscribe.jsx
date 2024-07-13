import React from 'react'

const Subscribe = () => {
    return (
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
    )
}

export default Subscribe
