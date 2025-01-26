import React from 'react'
import Image from 'next/image'
import HeroImage from '@/public/images/hero.svg'
import FilterButtons from '../shared/FilterButtons'
import { TbUserSquareRounded } from "react-icons/tb";
import { RiBuildingLine } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";
import { LuLaptopMinimal } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";
import FeaturesCard from '../shared/FeaturesCard';



const Hero = () => {
    return (

        <section className='md:h-screen h-fit w-full mt-28 md:mt-32 py-6'>

            <div className='flex flex-wrap md:flex-nowrap justify-around items-center'>

                <div className='flex flex-col text-center'>

                    {/* home title */}
                    <h2 className='text-3xl md:text-5xl font-bold'>Find a job that suits <br /> your interest & skills.</h2>
                    <p className='text-sm text-zinc-400 mt-6'>Discover opportunities, unlock potential, and achieve career goals.</p>

                    <div className='flex flex-col gap-6 mt-8 px-3'>

                        {/* searchbar */}
                        <div className='w-full h-12 border border-green-300 rounded px-1 flex justify-between md:justify-normal items-center hover:ring-2 hover:ring-green-300 transition-all duration-300'>

                            <div className='w-[46%]'>
                                <input type="text" name="job" id="job" placeholder='Search Job' className='h-12 px-3 bg-transparent placeholder:text-sm outline-none' />
                            </div>

                            <div className='h-8 w-[1px] bg-zinc-200 hidden md:block'></div>

                            <div className='w-[46%] hidden md:block'>
                                <input type="text" name="location" id="location" placeholder='Location' className='h-12 px-3 bg-transparent placeholder:text-sm outline-none' />
                            </div>

                            {/* search button */}
                            <button className='h-10 px-4 bg-[#00E676] text-black font-medium rounded hover:scale-90 transition-all duration-200'>
                                Search
                            </button>

                        </div>

                        {/* search Suggestions */}
                        <div className='hidden md:flex gap-3'>
                            <h4 className='text-sm text-zinc-400'>Suggestions :</h4>
                            <div className='flex gap-2'>
                                <FilterButtons title={'web developer'} />
                                <FilterButtons title={'software developer'} />
                                <FilterButtons title={'NextJs developer'} />
                            </div>
                        </div>

                    </div>

                </div>

                {/* home page image */}
                <div className='w-full md:w-[40%] flex justify-center items-center'>
                    <Image src={HeroImage} alt='Hero Image' className='h-96 md:w-[30rem]' />
                </div>
            </div>

            <div className='flex gap-3 md:gap-0 flex-wrap justify-center md:justify-around items-center md:mt-20 mt-4'>

                <FeaturesCard
                    icon={TbUserSquareRounded}
                    title={'1,28,000'}
                    disc={'Live Jobs'}
                />
                <FeaturesCard
                    icon={RiBuildingLine}
                    title={'50,000'}
                    disc={'Companies'}
                />
                <FeaturesCard
                    icon={PiStudent}
                    title={'80,000'}
                    disc={'Candidates'}
                />
                <FeaturesCard
                    icon={LuLaptopMinimal}
                    title={'90,000'}
                    disc={'Software Jobs'}
                />
                <FeaturesCard
                    icon={BsGraphUpArrow}
                    title={'60,000'}
                    disc={'New Jobs'}
                />

            </div>

        </section>

    )
}

export default Hero