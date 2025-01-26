'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import NavLink from './Navlink';
import Pattern from '@/public/images/pattern.png'
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";


const Navbar = () => {

    const [openProfileMenu, setopenProfileMenu] = useState(false);
    const wrapperRef = useRef(null);

    const toggleProfileMenu = () => {
        setopenProfileMenu((prevState) => !prevState); // Toggle the menu state
    };

    // Hide profile menu when clicked outside
    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setopenProfileMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <section className='fixed top-0 left-0 right-0 z-40'>

            {/* main navbar */}
            <nav className='h-16 md:h-20 w-full bg-white border-b border-[#E5EAE8] md:px-6 px-2 flex justify-between items-center relative'>

                {/* web title */}
                <Link href={'/'} className='text-xl md:text-2xl font-semibold text-[#00E676]'>NextGig</Link>


                <div className='flex items-center md:gap-2'>

                    <button className='text-[#000] capitalize font-medium text-xl h-10 w-10 md:text-2xl md:h-12 md:w-12 hover:bg-slate-100 rounded-full flex justify-center items-center hover:scale-95 transition-all duration-200'>
                        <IoNotificationsOutline />
                    </button>
                    <button onClick={toggleProfileMenu} className='text-[#000] capitalize font-medium text-xl h-10 w-10 md:text-2xl md:h-12 md:w-12 hover:bg-slate-100 rounded-full flex justify-center items-center hover:scale-95 transition-all duration-200'>
                        <FaRegUserCircle />
                    </button>

                </div>

                {/* Profile menu */}
                {openProfileMenu && (
                    <div ref={wrapperRef} className='w-48 h-fit py-2 bg-white border-b border-l border-r z-10 absolute md:top-20 top-16 right-4'>

                        <button className='capitalize text-start w-full py-2 px-6 hover:bg-slate-100'>profile</button>
                        <button className='capitalize text-start w-full py-2 px-6 hover:bg-slate-100'>setting</button>
                        <button className='capitalize text-start w-full py-2 px-6 hover:bg-slate-100'>help center</button>

                        <Link href={'/signin'} className='capitalize text-start w-full py-2 px-6 hover:bg-slate-100 flex justify-between items-center'>
                            sign out
                            <FiLogOut className='text-lg' />
                        </Link>

                    </div>
                )}

            </nav>


            {/* pagination links */}
            <div className='h-12 w-full md:px-12 bg-white border-b border-[#E5EAE8] flex gap-4 justify-between items-center'>

                {/* pattern image 1 */}
                <Image src={Pattern} alt='pattern image' className='w-14 h-12 md:w-36' />

                <div className='flex md:gap-12 gap-3 items-center'>
                    <NavLink href="/jobs">Jobs</NavLink>
                    <NavLink href="/companies">Companies</NavLink>
                    <NavLink href="/createcv">Create CV</NavLink>
                </div>

                {/* pattern image 2 */}
                <Image src={Pattern} alt='pattern image' className='w-14 h-12 md:w-36' />

            </div>


        </section>
    )
}

export default Navbar