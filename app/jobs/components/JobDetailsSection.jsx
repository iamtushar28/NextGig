'use client'
import React from 'react'
import { CiBookmark } from "react-icons/ci";
import { FaBoltLightning } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { PiBuildingsBold } from "react-icons/pi";

export default function JobDetailsSection({ job }) {

  return (
    <div className={`w-full h-[900px] md:border rounded-xl p-6 md:flex flex-col gap-4 overflow-y-scroll scrollbar-hidden`}>

      <div className='flex justify-between items-center'>
        {/* company image & name */}
        <div className='flex gap-4 items-center'>
          <div className='md:h-16 md:w-16 h-8 w-8 flex justify-center items-center rounded-full'>
            {job.employer_logo ? (
              <img
                src={job.employer_logo}
                alt={job.employer_name || 'Employer'}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              // Use the icon when no image is available
              <PiBuildingsBold className="text-green-400" size={32} /> 
            )}
          </div>

          <div className='flex flex-col'>
            <h4 className='md:text-xl font-medium'>
              {job.employer_name || 'Unknown Employer'}
            </h4>

            {job.employer_website && (
              <a href={job.employer_website} target="_blank" rel="noopener noreferrer" className='flex gap-1 items-center text-xs text-sky-500 mt-1'>
                Website <FiExternalLink />
              </a>
            )}
          </div>
        </div>

        {/* bookmark & full screen buttons */}
        <div className='flex items-center gap-2'>
          <button className='h-10 w-10 rounded-full hover:bg-slate-100 hover:scale-90 flex justify-center items-center transition-all duration-300'>
            <CiBookmark className='text-2xl' />
          </button>
        </div>
      </div>

      {/* Job details */}
      <div className='flex justify-between items-center mt-2'>
        <div>
          <h3 className='md:text-xl font-semibold capitalize'>
            {job.job_title || 'Job Title Not Available'}
          </h3>

          <div className='mt-2'>
            <div className='flex items-center gap-1 text-zinc-500 capitalize'>
              <CiLocationOn className='text-lg' />
              {job.job_city && job.job_state ? `${job.job_city}, ${job.job_state}` : 'Location Not Available'}
            </div>
          </div>

          <div className='flex flex-wrap gap-2 mt-2'>
            <button className='w-fit text-xs md:text-sm font-medium capitalize px-2 py-1 bg-[#E6FCF1] text-[#0C9653] flex items-center justify-center rounded'>
              {job.job_employment_type || 'Employment Type Not Available'}
            </button>

            <button className='w-fit text-xs md:text-sm font-medium capitalize px-2 py-1 bg-[#E6FCF1] text-[#0C9653] flex gap-1 items-center justify-center rounded'>
              <CiCalendar className='text-lg' />
              <span>{job.job_posted_at || 'Date Not Available'}</span>
            </button>

            <button className='w-fit text-xs md:text-sm font-medium capitalize px-2 py-1 bg-[#E6FCF1] text-[#0C9653] flex gap-1 items-center justify-center rounded'>
              <RiMoneyRupeeCircleLine className='text-lg' />
              <span>{job.job_salary || 'NA'}</span>
            </button>
          </div>
        </div>

        {/* Apply Button */}
        <a
          href={job.job_apply_link || '#'}
          target="_blank"
          className='md:text-xl py-2 md:px-5 px-3 text-black bg-[#00E676] rounded-lg capitalize flex gap-2 justify-center items-center hover:scale-90 transition-all duration-200'>
          <FaBoltLightning />
          Apply
        </a>
      </div>

      {/* Job Description */}
      <div>
        <h4 className='md:text-lg font-normal capitalize text-zinc-400'>Job Description</h4>
        <p className='text-sm'>{job.job_description || 'No description available.'}</p>
      </div>

      {/* Job Qualifications */}
      {job.job_highlights.Qualifications && job.job_highlights.Qualifications.length > 0 && (
        <div>
          <h4 className="md:text-lg font-semibold capitalize text-[#8C8F8E]">Job Qualifications</h4>
          <ul className="list-disc pl-5">
            {job.job_highlights.Qualifications.map((qualification, index) => (
              <li key={index} className="text-gray-700">
                {qualification}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Job Responsibilities */}
      {job.job_highlights.Responsibilities && job.job_highlights.Responsibilities.length > 0 && (
        <div>
          <h4 className="md:text-lg font-semibold capitalize text-[#8C8F8E]">Job Responsibilities</h4>
          <ul className="list-disc pl-5">
            {job.job_highlights.Responsibilities.map((responsibility, index) => (
              <li key={index} className="text-gray-700">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Job Benefits */}
      {job.job_highlights.Benefits && job.job_highlights.Benefits.length > 0 && (
        <div>
          <h4 className="md:text-lg font-semibold capitalize text-[#8C8F8E]">Job Benefits</h4>
          <ul className="list-disc pl-5">
            {job.job_highlights.Benefits.map((benefit, index) => (
              <li key={index} className="text-gray-700">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}
