import React from 'react'
import Image from 'next/image';
import Banner from '@/public/images/banner.png'
import CompanyDetails from '../shared/CompanyDetailsCard'

const TopCompanies = () => {
    return (
        <section className='relative'>

            {/* banner image */}
            <Image src={Banner} alt='banner image' className='w-full absolute top-0 left-0 right-0' />

            <div className='py-4 md:py-16 flex gap-4 flex-col justify-center items-center'>

                {/* title */}
                <h2 className='text-2xl font-semibold capitalize'>Top companies</h2>

                <div className='flex flex-wrap gap-2 justify-center'>

                    <CompanyDetails
                        title={'google'}
                    />
                    <CompanyDetails
                        title={'google'}
                    />
                    <CompanyDetails
                        title={'google'}
                    />
                    <CompanyDetails
                        title={'google'}
                    />

                </div>

            </div>

        </section>
    )
}

export default TopCompanies