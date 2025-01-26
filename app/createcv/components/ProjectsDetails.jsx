import React from 'react'

const ProjectsDetails = ({ nextStep, prevStep }) => {
  return (
    <section className="px-2">

      <h2 className='text-2xl font-semibold capitalize'>Projects Details</h2>

      <div className='flex flex-col gap-4 mt-3'>
        <h6 className='text-lg'>Project 1</h6>
        {/* project Name */}
        <div>
          <h6 className='text-sm text-zinc-400 font-semibold mb-2 capitalize'>project Name</h6>
          <input type="text" name='projectName' id='projectName' placeholder='Ex. Ecommerce App' className='h-10 md:w-96 w-[21rem] px-2 placeholder:text-sm border border-green-400 outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300' />
        </div>

        {/* project Discreption */}
        <div>
          <h6 className='text-sm text-zinc-400 font-semibold mb-2 capitalize'>Discreption</h6>
          <textarea name="discreption" id="discreption" rows={3} placeholder='Tell something about your project....' className='md:w-96 w-[21rem] px-2 py-1 placeholder:text-sm border border-green-400 outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300'></textarea>
        </div>

        {/* project github link */}
        <div>
          <h6 className='text-sm text-zinc-400 font-semibold mb-2 capitalize'>github link</h6>
          <input type="text" name='projectName' id='projectName' className='h-10 md:w-96 w-[21rem] px-2 border border-green-400 outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300' />
        </div>

        {/* project github link */}
        <div>
          <h6 className='text-sm text-zinc-400 font-semibold mb-2 capitalize'>Live host link</h6>
          <input type="text" name='projectName' id='projectName' className='h-10 md:w-96 w-[21rem] px-2 border border-green-400 outline-none rounded hover:ring-2 hover:ring-green-400 transition-all duration-300' />
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

export default ProjectsDetails