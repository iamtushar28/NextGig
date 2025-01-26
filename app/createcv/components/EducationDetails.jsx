import React from 'react'

const EducationDetails = ({ nextStep, prevStep }) => {
    return (
        <section className="px-2">

            <h2 className='text-2xl font-semibold capitalize'>Education Details</h2>

            <div className='flex flex-col gap-5 mt-6'>
                {/* collage name */}
                <div>
                    <h6 className='text-sm text-zinc-400 font-semibold mb-2 capitalize'>collage name</h6>
                    <input type="text" name='collagename' id='collagename' placeholder='EX. IIT Guwahati' className='h-10 md:w-96 w-[21rem] px-2 placeholder:text-sm border border-green-400 hover:border-none outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300' />
                </div>

                {/* course name */}
                <div>
                    <h6 className='text-sm text-zinc-400 font-semibold mb-2 capitalize'>course Name</h6>
                    <input type="text" name='courseName' id='courseName' placeholder='Ex. BTECH Computer Science & Engineering' className='h-10 md:w-96 w-[21rem] px-2 placeholder:text-sm border border-green-400 hover:border-none outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300' />
                </div>

                {/* Graduation year */}
                <div>
                    <h6 className='text-sm text-zinc-400 font-semibold mb-2 capitalize'>Graduation year</h6>
                    <input type="text" name='graduationYear' id='graduationYear' placeholder='EX. 2026' className='h-10 md:w-96 w-[21rem] px-2 placeholder:text-sm border border-green-400 hover:border-none outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300' />
                </div>

                <hr />

                {/* collage name */}
                <div>
                    <h6 className='text-sm text-zinc-400 font-semibold mb-2 capitalize'>collage name <span>12<sup>th</sup></span></h6>
                    <input type="text" name='collagename' id='collagename' placeholder='EX. BDC Patan' className='h-10 md:w-96 w-[21rem] px-2 placeholder:text-sm border border-green-400 hover:border-none outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300' />
                </div>

                {/* Graduation year */}
                <div>
                    <h6 className='text-sm text-zinc-400 font-semibold mb-2 capitalize'>Passing year</h6>
                    <input type="text" name='graduationYear' id='graduationYear' placeholder='EX. 2022' className='h-10 md:w-96 w-[21rem] px-2 placeholder:text-sm border border-green-400 hover:border-none outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300' />
                </div>

                <hr />

                {/* collage name */}
                <div>
                    <h6 className='text-sm text-zinc-400 font-semibold mb-2 capitalize'>collage name <span>10<sup>th</sup></span></h6>
                    <input type="text" name='collagename' id='collagename' placeholder='EX. KDSH Patan' className='h-10 md:w-96 w-[21rem] px-2 placeholder:text-sm border border-green-400 hover:border-none outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300' />
                </div>

                {/* Graduation year */}
                <div>
                    <h6 className='text-sm text-zinc-400 font-semibold mb-2 capitalize'>Passing year</h6>
                    <input type="text" name='graduationYear' id='graduationYear' placeholder='EX. 2020' className='h-10 md:w-96 w-[21rem] px-2 placeholder:text-sm border border-green-400 hover:border-none outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300' />
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

export default EducationDetails