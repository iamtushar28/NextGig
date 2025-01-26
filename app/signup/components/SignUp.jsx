import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Friendtalking from '@/public/images/Friendtalking.png'
import Womenincomputer from '@/public/images/womenincomputer.png'
import Calender from '@/public/images/calendar.png'
import Clock from '@/public/images/clock.png'

const SignUp = () => {
  return (
    <section className='mt-28 md:mt-32 md:py-10 py-8 px-3 w-full h-fit flex justify-around items-center'>

      {/* illustration images */}
      <div className='md:flex hidden flex-col gap-20'>
        <Image src={Friendtalking} alt='Friendtalking' className='h-[10rem] w-[11rem]' />
        <Image src={Calender} alt='Friendtalking' className='h-[10rem] w-[11rem]' />
      </div>

      <div className='flex gap-6 flex-col justify-center items-center'>

        {/* page title */}
        <div className='flex gap-3 md:gap-6 flex-col'>
          <h2 className='text-2xl md:text-4xl font-semibold capitalize text-center'>Get ahead with <span className='text-[#00E676]'>NextGig</span></h2>

          {/* prvacy policy  discreption */}
          <p className='text-xs md:text-sm text-center'>Create an account or sign in. By continuing, you agree to our <br /> <span className='text-sm text-[#00E676] underline cursor-pointer'>Terms of Use</span> and acknowledge our <span className='text-[#00E676] underline cursor-pointer'>Privacy Policy</span>.</p>
        </div>

        {/* continue with social acconts button */}
        <div className='flex gap-4 flex-col'>
          <button className='w-[300px] md:w-[420px] h-10 font-semibold text-center border border-[#00E676] hover:ring-[#00E676] hover:ring-2 rounded-lg capitalize relative transition-all duration-300'>
            <FcGoogle className='absolute left-4 text-2xl' />
            continue with google
          </button>
          <button className='w-[300px] md:w-[420px] h-10 font-semibold text-center border border-[#00E676] hover:ring-[#00E676] hover:ring-2 rounded-lg capitalize relative transition-all duration-300'>
            <FaFacebook className='absolute left-4 text-2xl text-blue-500' />
            continue with facebook
          </button>
        </div>

        {/* devider */}
        <div className='flex items-center gap-2'>
          <div className='w-[100px] md:w-[180px] h-[1px] bg-zinc-300'></div>
          <p className='text-zinc-500'>Or</p>
          <div className='w-[100px] md:w-[180px] h-[1px] bg-zinc-300'></div>
        </div>

        {/* sign up form */}
        <form className='flex flex-col gap-2'>
          <div className='flex flex-col gap-1'>

            <label htmlFor="name" className='capitalize text-zinc-500 text-sm'>enter name</label>
            {/* input email */}
            <input
              id='name'
              type="name"
              className='w-[300px] md:w-[420px] h-10 px-4 outline-none border border-[#00E676] hover:ring-[#00E676] hover:ring-2 rounded-lg transition-all duration-300' />

          </div>

          <div className='flex flex-col gap-1'>

            <label htmlFor="email" className='capitalize text-zinc-500 text-sm'>email</label>
            {/* input email */}
            <input
              id='email'
              type="email"
              className='w-[300px] md:w-[420px] h-10 px-4 outline-none border border-[#00E676] hover:ring-[#00E676] hover:ring-2 rounded-lg transition-all duration-300' />

          </div>

          <div className='flex flex-col gap-1'>

            <label htmlFor="password" className='capitalize text-zinc-500 text-sm'>password</label>
            {/* input password */}
            <input
              id='password'
              type="password"
              className='w-[300px] md:w-[420px] h-10 px-4 outline-none border border-[#00E676] hover:ring-[#00E676] hover:ring-2 rounded-lg transition-all duration-300' />

          </div>

          {/* submit button */}
          <button className='w-[300px] md:w-[420px] mt-4 h-10 font-semibold text-center border border-black hover:border-[#00E676] hover:bg-[#00E676] rounded-lg capitalize transition-all duration-300'>
            Submit
          </button>

        </form>

        {/* redirect for signin */}
        <p className='text-xs md:text-sm'>Already have an account? <Link href={'/signin'} className="text-[#00E676] underline capitalize">sign in</Link></p>

      </div>

      {/* illustration images */}
      <div className='md:flex hidden flex-col gap-20'>
        <Image src={Clock} alt='Friendtalking' className='h-[8rem] w-[11rem]' />
        <Image src={Womenincomputer} alt='Friendtalking' className='h-[10rem] w-[11rem]' />
      </div>

    </section>
  )
}

export default SignUp