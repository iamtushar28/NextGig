import React from 'react'
import { RxCross1 } from "react-icons/rx";

const Skills = ({ nextStep, prevStep }) => {
    return (
        <section className="px-2">

            <h2 className='text-2xl font-semibold capitalize'>skills <span className='text-xs font-normal'>(Add minimum 8-10 skills)</span></h2>

            <div className='flex flex-col gap-5 mt-4'>

                {/* skills searchbar */}
                <div className='relative'>
                    <h6 className='text-sm text-zinc-400 font-semibold mb-2'>Search SKills</h6>

                    {/* text input */}
                    <input type="text" name='skills' id='skills' placeholder='Ex. NextJs' className='h-10 md:w-96 w-[21rem] px-2 border border-green-400 hover:border-none outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300' />

                    {/* search suggestions */}
                    <div className='md:w-96 w-[21rem] h-fit bg-white border absolute top-20 hidden'>

                        <button className='px-4 py-2 w-full text-start hover:bg-slate-100 border-b'>
                            Next Js
                        </button>
                        <button className='px-4 py-2 w-full text-start hover:bg-slate-100 border-b'>
                            React Js
                        </button>
                        <button className='px-4 py-2 w-full text-start hover:bg-slate-100'>
                            Javascript
                        </button>

                    </div>

                </div>

                {/* Added Skills */}
                <div className='md:w-96 w-[21rem]'>

                    <h4 className='text-lg capitalize mb-2'>Added Skills</h4>

                    <div className='flex flex-wrap gap-2'>
                        <button className='w-fit px-3 py-1 text-sm font-medium bg-[#E6FCF1] rounded-lg flex gap-2 items-center'>
                            NextJs
                            <RxCross1 className='text-xs' />
                        </button>
                        <button className='w-fit px-3 py-1 text-sm font-medium bg-[#E6FCF1] rounded-lg flex gap-2 items-center'>
                            ReactJs
                            <RxCross1 className='text-xs' />
                        </button>
                        <button className='w-fit px-3 py-1 text-sm font-medium bg-[#E6FCF1] rounded-lg flex gap-2 items-center'>
                            React Native
                            <RxCross1 className='text-xs' />
                        </button>
                        <button className='w-fit px-3 py-1 text-sm font-medium bg-[#E6FCF1] rounded-lg flex gap-2 items-center'>
                            Javascript
                            <RxCross1 className='text-xs' />
                        </button>
                        <button className='w-fit px-3 py-1 text-sm font-medium bg-[#E6FCF1] rounded-lg flex gap-2 items-center'>
                            Tailwind CSS
                            <RxCross1 className='text-xs' />
                        </button>
                    </div>

                </div>

                {/* Add Popular Skills */}
                <div className='md:w-96 w-[21rem]'>

                    <h4 className='text-lg capitalize mb-2'>Add Popular Skills</h4>

                    <div className='flex flex-wrap gap-2'>
                        <button className='w-fit px-3 py-1 text-sm font-medium bg-[#E6FCF1] rounded-lg flex gap-2 items-center'>
                            DSA
                            <RxCross1 className='text-xs rotate-45' />
                        </button>
                        <button className='w-fit px-3 py-1 text-sm font-medium bg-[#E6FCF1] rounded-lg flex gap-2 items-center'>
                            HTML
                            <RxCross1 className='text-xs rotate-45' />
                        </button>
                        <button className='w-fit px-3 py-1 text-sm font-medium bg-[#E6FCF1] rounded-lg flex gap-2 items-center'>
                            CSS
                            <RxCross1 />
                        </button>
                        <button className='w-fit px-3 py-1 text-sm font-medium bg-[#E6FCF1] rounded-lg flex gap-2 items-center'>
                            Javascript
                            <RxCross1 className='text-xs rotate-45' />
                        </button>
                        <button className='w-fit px-3 py-1 text-sm font-medium bg-[#E6FCF1] rounded-lg flex gap-2 items-center'>
                            PHP
                            <RxCross1 className='text-xs rotate-45' />
                        </button>
                        <button className='w-fit px-3 py-1 text-sm font-medium bg-[#E6FCF1] rounded-lg flex gap-2 items-center'>
                            ReactJS
                            <RxCross1 className='text-xs rotate-45' />
                        </button>
                    </div>

                </div>

                <div className="flex gap-2">
                    {/* previous button */}
                    <button onClick={prevStep}
                        className="w-fit px-6 py-2 bg-[#00E676] text-black font-medium rounded-lg">
                        Previous
                    </button>

                    {/* next button */}
                    <button
                        onClick={nextStep}
                        className="w-fit px-10 py-2 bg-[#00E676] text-black font-medium rounded-lg"
                    >
                        Next
                    </button>
                </div>

            </div>

        </section>
    )
}

export default Skills