import React from 'react'

const FilterButtons = ({title}) => {
    return (
        <button className='w-fit text-sm capitalize px-2 py-1 bg-[#E6FCF1] text-[#0C9653] rounded-full flex items-center justify-center'>
            {title}
        </button>
    )
}

export default FilterButtons