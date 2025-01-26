import React from 'react'
import { FaUsers } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuUserRoundSearch } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";

const Banner = () => {
    return (
        <section className='w-full md:h-[360px] px-2 md:px-0 py-6 md:py-0 mt-6 border-t border-b flex md:gap-14 gap-6 flex-col items-center justify-center'>

            <h2 className='text-xl md:text-3xl font-semibold capitalize text-center'>Have you graduated or changed your carrer?</h2>

            <div className='w-full flex gap-6 md:gap-0 flex-wrap justify-around'>

                <div className='flex gap-2 flex-col items-center'>

                    <div className='h-[100px] w-[100px] text-5xl rounded-full border flex justify-center items-center'>
                        <FaUsers />
                    </div>

                    <p className='text-sm'>Enter NextGig campion</p>

                </div>

                <div className='flex gap-2 flex-col items-center'>

                    <div className='h-[100px] w-[100px] text-5xl rounded-full border flex justify-center items-center'>
                        <IoDocumentTextOutline />
                    </div>

                    <p className='text-sm'>Get resume assessment</p>

                </div>

                <div className='flex gap-2 flex-col items-center'>

                    <div className='h-[100px] w-[100px] text-5xl rounded-full border flex justify-center items-center'>
                        <LuUserRoundSearch />
                    </div>

                    <p className='text-sm'>Search suitable recruiter</p>

                </div>

                <div className='flex gap-2 flex-col items-center'>

                    <div className='h-[100px] w-[100px] text-5xl rounded-full border flex justify-center items-center'>
                        <IoWalletOutline />
                    </div>

                    <p className='text-sm'>Search Salaries by major</p>

                </div>

            </div>

        </section>
    )
}

export default Banner