import React from 'react'
import Image from 'next/image';
import Banner from '@/public/images/banner.png'
import JobDetailsCard from '../shared/JobDetailsCard';

const ExclusiveJobs = () => {
    return (
        <section className='w-full py-2 md:py-6 border-t relative'>

            {/* banner image */}
            <Image src={Banner} alt='banner image' className='w-full absolute top-0 left-0 right-0' />

            <div className='mt-2 md:mt-8 flex md:gap-8 gap-6 flex-col justify-center items-center '>

                {/* title */}
                <h2 className='text-2xl font-semibold capitalize'>exclusive job offers</h2>

                {/* job details cards */}
                <div className='flex justify-center gap-2 flex-wrap'>

                    {/* <JobDetailsCard
                        jobTitle={'software engineer'}
                    />
                    <JobDetailsCard
                        jobTitle={'sde-2'}
                    />
                    <JobDetailsCard
                        jobTitle={'frontend developer'}
                    />
                    <JobDetailsCard
                        jobTitle={'backend developer'}
                    />
                    <JobDetailsCard
                        jobTitle={'product manager'}
                    />
                    <JobDetailsCard
                        jobTitle={'app developer'}
                    /> */}

                </div>

            </div>
        </section>
    )
}

export default ExclusiveJobs