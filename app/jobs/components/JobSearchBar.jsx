'use client'
import React from 'react'

const JobSearchBar = ({ setSearchQuery }) => {

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    setSearchQuery(query);
  };

  return (


    <form onSubmit={handleSearch} className='h-12 w-full md:w-[50%] pr-2 border rounded flex justify-between items-center'>
      {/* job title input */}
      <input
        type="text"
        name="query"
        placeholder="Search for jobs..."
        className='w-[84%] h-12 px-3 outline-none rounded bg-transparent'
      />

      {/* submit button */}
      <button type='submit' className='h-8 px-3 bg-[#00E676] text-black font-medium rounded hover:scale-90 transition-all duration-200'>
        Search
      </button>

    </form>


  )
}

export default JobSearchBar