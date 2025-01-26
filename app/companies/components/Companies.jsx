'use client'
import React from 'react'
import { useState } from 'react';
import CompanyDetailsCard from '../../components/shared/CompanyDetailsCard';
import CompanySearchbar from './CompanySearchbar';
import { CiBookmark } from "react-icons/ci";
import { SlSizeFullscreen, SlSizeActual } from "react-icons/sl";
import { FaBoltLightning } from "react-icons/fa6";

import { FcGoogle } from "react-icons/fc";

const Companies = () => {

    const [fullScreen, setfullScreen] = useState(false);

    const togglefullScreen = () => {
        setfullScreen(!fullScreen);
    };

    return (
        <section className="mt-32">
            {/* Job search bar */}
            <div className="w-full md:py-10 py-6 px-2 border-b flex justify-center bg-white">
                <CompanySearchbar />
            </div>

            {/* Container for job list */}
            <div className="md:py-8 md:px-4 px-0 py-4 flex gap-4">

                {/* Job list */}
                <div className={`w-full md:w-[420px] py-2 md:py-0 h-[800px] overflow-y-scroll flex items-center flex-col gap-3 scrollbar-hidden ${fullScreen ? 'hidden' : ''} `}>
                    <CompanyDetailsCard
                        title={'Google'}
                    />
                    <CompanyDetailsCard
                        title={'Google'}
                    />
                    <CompanyDetailsCard
                        title={'Google'}
                    />
                    <CompanyDetailsCard
                        title={'Google'}
                    />
                    <CompanyDetailsCard
                        title={'Google'}
                    />
                    <CompanyDetailsCard
                        title={'Google'}
                    />
                </div>

                {/* job details */}
                <div className='hidden w-full h-[800px] border rounded-xl p-6 md:flex flex-col gap-4 overflow-y-scroll scrollbar-hidden'>

                    <div className='flex justify-between items-center'>

                        {/* company image & name */}
                        <div className='flex gap-4 items-center'>
                            <div className='h-16 w-16 flex justify-center items-center rounded-full'>
                                <FcGoogle className='text-6xl' />
                            </div>

                            <h4 className='text-2xl font-semibold'>Google</h4>

                        </div>

                        {/* bookmark & full screen buttons */}
                        <div className='flex items-center gap-2'>

                            {/* bookmark  */}
                            <button className='h-10 w-10 rounded-full hover:bg-slate-100 hover:scale-90 flex justify-center items-center transition-all duration-300'>
                                <CiBookmark className='text-2xl' />
                            </button>

                            {/* full screen mode button */}
                            <button
                                onClick={togglefullScreen}
                                className='h-10 w-10 rounded-full hover:bg-slate-100 hover:scale-90 flex justify-center items-center transition-all duration-300'>

                                {fullScreen ? (
                                    <SlSizeActual className='text-xl' />

                                ) : (
                                    <SlSizeFullscreen className='text-xl' />

                                )}

                            </button>

                        </div>
                    </div>

                    {/* job details */}
                    <div className='flex justify-between items-center'>
                        <div>
                            {/* position name */}
                            <h3 className='text-3xl font-semibold capitalize'>
                                Front-end developer
                            </h3>

                            <div className='flex gap-2 mt-2'>
                                {/* location */}
                                <h6 className='text-lg capitalize'>
                                    Pune, MH
                                </h6>

                                {/* work mode */}
                                <div className='w-fit text-sm capitalize px-2 py-1 bg-[#E6FCF1] text-[#0C9653] rounded-full flex items-center justify-center'>
                                    internship
                                </div>
                                <div className='w-fit text-sm capitalize px-2 py-1 bg-[#E6FCF1] text-[#0C9653] rounded-full flex items-center justify-center'>
                                    on site
                                </div>

                            </div>
                        </div>

                        {/* apply button */}
                        <button className='text-xl py-2 px-5 text-black bg-[#00E676] rounded-lg hover:scale-90 capitalize flex gap-2 justify-center items-center transition-all duration-200'>
                            <FaBoltLightning />
                            Apply
                        </button>

                    </div>

                    {/* job discreption */}
                    <div>

                        <h4 className='text-xl font-semibold capitalize text-[#8C8F8E]'>Job discreption</h4>

                        <p>We are looking for a talented React.js Developer to join our dynamic team. In this role, you will be responsible for building user-friendly web applications that provide seamless experiences for our customers. You will collaborate with designers and backend developers to create scalable and efficient solutions. Key Responsibilities: Develop and maintain responsive web applications using React.js. Collaborate with Optimize applications for maximum speed and scalability. Write clean, maintainable, and testable code. Troubleshoot and debug applications to enhance performance and user experience. Stay up to date with the latest industry trends and technologies.</p>
                        <p>We are looking for a talented React.js Developer to join our dynamic team. In this role, you will be responsible for building user-friendly web applications that provide seamless experiences for our customers. You will collaborate with designers and backend developers to create scalable and efficient solutions. Key Responsibilities: Develop and maintain responsive web applications using React.js. Collaborate with Optimize applications for maximum speed and scalability. Write clean, maintainable, and testable code. Troubleshoot and debug applications to enhance performance and user experience. Stay up to date with the latest industry trends and technologies.</p>
                        <p>We are looking for a talented React.js Developer to join our dynamic team. In this role, you will be responsible for building user-friendly web applications that provide seamless experiences for our customers. You will collaborate with designers and backend developers to create scalable and efficient solutions. Key Responsibilities: Develop and maintain responsive web applications using React.js. Collaborate with Optimize applications for maximum speed and scalability. Write clean, maintainable, and testable code. Troubleshoot and debug applications to enhance performance and user experience. Stay up to date with the latest industry trends and technologies.</p>

                        <h4 className='text-xl font-semibold capitalize text-[#8C8F8E] mt-4'>Requirements</h4>

                        <p>We are looking for a talented React.js Developer to join our dynamic team. In this role, you will be responsible for building user-friendly web applications that provide seamless experiences for our customers. You will collaborate with designers and backend developers to create scalable and efficient solutions. Key Responsibilities: Develop and maintain responsive web applications using React.js. Collaborate with Optimize applications for maximum speed and scalability. Write clean, maintainable, and testable code. Troubleshoot and debug applications to enhance performance and user experience. Stay up to date with the latest industry trends and technologies.</p>

                    </div>

                </div>

            </div>

        </section>

    )
}

export default Companies