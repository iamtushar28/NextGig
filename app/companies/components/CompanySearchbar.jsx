import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const CompanySearchbar = () => {
    return (
        <div className='md:h-16 h-12 md:w-[560px] w-full px-1 border rounded-full flex justify-between items-center'>

            {/* job title input */}
            <input
                type="text"
                placeholder='Company / Field'
                className='w-[240px] h-16 px-4 outline-none rounded-full bg-transparent'
            />

            {/* devider */}
            <div className='h-8 w-[1px] bg-zinc-300 hidden md:block'></div>

            {/* location input */}
            <input
                type="text"
                placeholder='Location'
                className='w-[240px] h-16 px-4 outline-none rounded-full bg-transparent hidden md:block'
            />

            {/* search icon */}
            <button className='md:h-14 md:w-14 h-10 w-10 text-lg md:text-3xl rounded-full bg-[#00E676] text-white flex justify-center items-center'>
                <IoSearchOutline />
            </button>

        </div>
    )
}

export default CompanySearchbar