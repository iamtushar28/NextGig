import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";

const JobDetailsCard = ({ job, onViewDetails }) => {
    return (
        <div className='w-[330px] md:w-[390px] h-fit md:p-[16px] p-[10px] border border-[#CFD4D1] flex flex-col justify-around relative rounded-xl'>

            {/* company logo, name & bookmark */}
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>

                    {/* employer logo */}
                    <div className='h-[40px] w-[40px] text-3xl rounded-full flex justify-center items-center'>
                        <img
                            src={job.employer_logo}
                            alt={job.employer_name}
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>

                    <h4 className='font-thin'>{job.employer_name}</h4>
                </div>

                {/* bookmark button */}
                <button className='h-10 w-10 rounded-full hover:bg-slate-100 hover:scale-90 flex justify-center items-center transition-all duration-300 text-2xl'>
                    <CiBookmark />
                </button>
            </div>

            {/* job position name, location & employment type */}
            <h2 className='text-lg font-semibold capitalize'>
                {job.job_title.length > 34 ? `${job.job_title.slice(0, 34)}...` : job.job_title}
            </h2>


            <div className='flex gap-2'>
                {/* job location */}
                <h4 className='capitalize text-[#8C8F8E] text-sm'>
                    {job.job_city}, {job.job_state}
                </h4>

                {/* employment type */}
                <div className='w-fit text-sm capitalize px-2 py-1 bg-[#E6FCF1] text-[#0C9653] rounded-full flex items-center justify-center'>
                    {/* {job.job_employment_type} */}
                    {job.job_employment_type.length > 9 ? `${job.job_employment_type.slice(0, 9)}...` : job.job_employment_type}
                </div>
            </div>

            {/* apply button */}
            <button
                onClick={onViewDetails}
                className='w-fit px-4 py-1 mt-4 text-[#0C9653] border border-[#00E676] hover:bg-[#00E676] hover:text-black rounded-full capitalize flex gap-1 justify-center items-center transition-all duration-300'
            >
                View details
                <FiExternalLink />
            </button>

            {/* date of job posting */}
            <div className='absolute bottom-[16px] right-[16px]'>
                <p className='text-sm'>
                    {job.job_posted_at}
                </p>
            </div>

        </div>
    );
}

export default JobDetailsCard;
