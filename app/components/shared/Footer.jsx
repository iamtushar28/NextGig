import React from 'react'
import { FaGooglePlay, FaAppStore, FaInstagram } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <section className=''>

            <div className='md:h-[180px] md:px-8 py-6 md:py-8 px-4 border-b border-t flex gap-4 md:gap-0 flex-wrap justify-between'>
                {/* web title */}
                <h2 className='hidden md:block text-lg md:text-2xl font-semibold text-[#00E676]'>NextGig</h2>

                <div>
                    <h4 className='md:text-lg capitalize font-semibold'>Company</h4>
                    <ul>
                        <li className='capitalize hover:underline hover:text-[#00E676] cursor-pointer'>Blog</li>
                        <li className='capitalize hover:underline hover:text-[#00E676] cursor-pointer'>carrer</li>
                        <li className='capitalize hover:underline hover:text-[#00E676] cursor-pointer'>news</li>
                    </ul>
                </div>

                <div>
                    <h4 className='md:text-lg capitalize font-semibold'>Resources</h4>
                    <ul>
                        <li className='capitalize hover:underline hover:text-[#00E676] cursor-pointer'>accesibilty</li>
                        <li className='capitalize hover:underline hover:text-[#00E676] cursor-pointer'>partner</li>
                        <li className='capitalize hover:underline hover:text-[#00E676] cursor-pointer'>employers</li>
                    </ul>
                </div>

                <div>
                    <h4 className='md:text-lg capitalize font-semibold'>support</h4>
                    <ul>
                        <li className='hover:underline hover:text-[#00E676] cursor-pointer'>FAQ</li>
                        <li className='capitalize hover:underline hover:text-[#00E676] cursor-pointer'>privacy policy</li>
                        <li className='capitalize hover:underline hover:text-[#00E676] cursor-pointer'>terms of use</li>
                    </ul>
                </div>

                <div>
                    <h4 className='md:text-lg capitalize font-semibold'>about us</h4>
                    <ul>
                        <li className='hover:underline hover:text-[#00E676] cursor-pointer'>About NextGig</li>
                        <li className='hover:underline hover:text-[#00E676] cursor-pointer'>Work For NextGig</li>
                        <li className='capitalize hover:underline hover:text-[#00E676] cursor-pointer'>contact us</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <button className='capitalize px-4 py-2 rounded-full border flex items-center gap-2 hover:scale-90 transition-all duration-200'>
                        <FaGooglePlay />
                        Google play
                    </button>
                    <button className='capitalize px-4 py-2 rounded-full border flex items-center gap-2 hover:scale-90 transition-all duration-200'>
                        <FaAppStore />
                        app store
                    </button>
                </div>

            </div>

            <div className='h-16 md:px-16 px-4 flex items-center justify-between'>

                <div className='flex gap-2'>
                    {/* social links */}
                    <button className='h-[34px] w-[34px] rounded-full border flex justify-center items-center hover:scale-90 transition-all duration-200'>
                        <FiGithub />
                    </button>
                    <button className='h-[34px] w-[34px] rounded-full border flex justify-center items-center hover:scale-90 transition-all duration-200'>
                        <FiLinkedin />
                    </button>
                    <button className='h-[34px] w-[34px] rounded-full border flex justify-center items-center hover:scale-90 transition-all duration-200'>
                        <FaInstagram />
                    </button>
                </div>

                <div>
                    <p className='text-xs md:text-sm'>NextGig Copyright &copy; 2025</p>
                </div>

            </div>

        </section>
    )
}

export default Footer