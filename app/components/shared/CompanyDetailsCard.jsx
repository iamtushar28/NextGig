import React from 'react'
import { FiExternalLink } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";

const CompanyDetailsCard = ({title}) => {
    return (
        <div className='max-w-[280px] max-h-[360px] p-4 border flex gap-4 flex-col items-center rounded-xl'>

            {/* company logo */}
            <div className='h-[80px] w-[80px] rounded-full text-6xl flex justify-center items-center'>
                <FcGoogle />
            </div>

            <div className='flex gap-4 flex-col items-start'>
                {/* comapany name & rating */}
                <div className='w-full flex justify-between items-center'>

                    <h4 className='text-2xl font-semibold capitalize'>{title}</h4>
                    <div className='text-lg capitalize flex gap-1 items-center'>
                        <FaStar className='text-yellow-400' />
                        <p>4.9</p>
                    </div>

                </div>

                <div>
                    {/* employee count */}
                    <h4 className='text-sm'>
                        1000 to 10000 employes
                    </h4>

                    {/* followers */}
                    <h4 className='text-sm'>
                        1 Million followers
                    </h4>
                </div>

                {/* discreption */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className='flex gap-2'>
                    <div className='w-fit text-sm capitalize px-2 py-1 bg-[#E6FCF1] text-[#0C9653] rounded-full flex items-center justify-center'>
                        hiring
                    </div>
                    <div className='w-fit text-sm capitalize px-2 py-1 bg-[#E6FCF1] text-[#0C9653] rounded-full flex items-center justify-center'>
                        high benifits
                    </div>
                </div>

                {/* view details */}
                <button className='w-fit px-4 py-1 text-green-600 border border-[#00E676] hover:bg-[#00E676] hover:text-black rounded-full capitalize flex gap-1 justify-center items-center transition-all duration-300'>
                    view details
                    <FiExternalLink />
                </button>

            </div>

        </div>
    )
}

export default CompanyDetailsCard