'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, Plus, Minus } from "lucide-react";

const Navbar = ({ textcolor,strokecolor }) => {


    const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State for dropdown visibility
    const [isNavbarVisible, setisNavbarVisible] = useState(false); // State for navbar visibility
    const NavRef = useRef(null); // Ref to track dropdown container
    const dropdownRef = useRef(null); // Ref to track dropdown container
    const toggleButtonRef = useRef(null); // Ref for the toggle button

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible); // Toggle the dropdown
    };

    const toggleNav = () => {
        setisNavbarVisible(!isNavbarVisible); // Toggle the dropdown
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownVisible(false);
            }
            if (
                NavRef.current &&
                !NavRef.current.contains(event.target) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(event.target)
            ) {
                setisNavbarVisible(false);
                // setIsDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



return (
    <nav className="w-full">
        <div className=' w-full mx-auto px-3 xl:container max-xl:px-1 flex items-center justify-end py-2 relative select-none'>
        
            {/* nav mob start */}
            <div className={`${isNavbarVisible? 'max-md:translate-y-[0px]' : 'max-md:translate-y-[-900px]'} transition duration-300 ease-in-out max-md:overflow-hidden z-10 max-md:min-h-[100vh] min-w-max flex items-center gap-16  max-md:fixed max-md:bg-[#fff] max-md:top-0 max-md:left-0 max-md:w-full max-md:flex-col max-md:gap-6 max-md:bg-primaryBg max-md:items-start max-md:p-4 max-md:pt-20 max-md:shadow-2xl`} aria-expanded="true" aria-haspopup="true" ref={NavRef}>
                {/* nav dropdown start */}
                <Link onClick={(e) => {if (window.innerWidth <= 768) {toggleNav();}}} href='/' className={`max-md:w-full flex flex-col items-start py-2 text-base max-md:text-4xl sansMedium hover:bg-primaryMain/10 rounded-lg max-md:text-[#000] uppercase ${textcolor}`}>
                    Home
                </Link>
                <div className={`max-md:w-full cursor-pointer relative group`} onClick={toggleDropdown} id="menu-button" aria-expanded="true" aria-haspopup="true" ref={dropdownRef}>
                        <span className={`max-md:w-full py-2 max-md:text-4xl max-md:text-[#000] rounded-lg cursor-pointer sansMedium relative group flex items-center max-md:justify-between gap-0.5 hover:bg-primaryMain/10 uppercase  ${textcolor} ${isDropdownVisible? 'bg-primaryMain/10' : ''}`}>
                            Service
                            {isDropdownVisible ? <Minus size="15" className='max-md:h-8 max-md:w-8' /> : <Plus size="15" className='max-md:h-8 max-md:w-8' />}
                        </span>
                        <div onClick={(e) => {if (window.innerWidth <= 768) {toggleNav();}}} className={`relative md:absolute md:top-[100%] md:left-5 md:p-2 py-2 mt-2 max-md:shadow-none max-md:w-full w-48 text-[#000] bg-[#fff] bg-primaryBg rounded-lg shadow-xl max-md:gap-y-2 max-lg:mt-0 transition-transform duration-300 ease-in-out overflow-hidden flex flex-col ${isDropdownVisible ? 'md:opacity-100 visible translate-y-0' : 'md:opacity-0  translate-y-4 md:invisible hidden'}`}>
                            <Link href="/investor-relations">
                                <span className="w-full font-sansMedium rounded-md max-md:rounded-none text-sm block px-4 py-2 text-primaryTextColor hover:bg-primaryMain/10 bg-transparent max-sm:bg-black/20 hover:bg-black/30">Investor Relations</span>
                            </Link>
                            <Link href="/reverse-takeover">
                                <span className="w-full font-sansMedium rounded-md max-md:rounded-none text-sm block px-4 py-2 text-primaryTextColor hover:bg-primaryMain/10 bg-transparent max-sm:bg-black/20 hover:bg-black/30">Reverse Takeover</span>
                            </Link>
                            <Link href="/merge&acquisition">
                                <span className="w-full font-sansMedium rounded-md max-md:rounded-none text-sm block px-4 py-2 text-primaryTextColor hover:bg-primaryMain/10 bg-transparent max-sm:bg-black/20 hover:bg-black/30">Merge & Acquisition</span>
                            </Link>
                            <Link href="/equity-placement" className="">
                                <span className="w-full font-sansMedium rounded-md max-md:rounded-none transition text-sm block px-4 py-2 text-primaryTextColor hover:bg-primaryMain/10 bg-transparent max-sm:bg-black/20 hover:bg-black/30">Equity Placement</span>
                            </Link>
                            <Link href="/debt-placement" className="">
                                <span className="w-full font-sansMedium rounded-md max-md:rounded-none transition text-sm block px-4 py-2 text-primaryTextColor hover:bg-primaryMain/10 bg-transparent max-sm:bg-black/20 hover:bg-black/30">Debt Placement</span>
                            </Link>
                        </div>
                </div>
                {/* nav dropdown end*/}
                
                <Link onClick={(e) => {if (window.innerWidth <= 768) {toggleNav();}}} href='#about' className={`max-md:w-full flex flex-col items-start py-2 text-base max-md:text-4xl max-md:text-[#000] sansMedium  hover:bg-primaryMain/10 uppercase ${textcolor}`}>
                    About
                </Link>
                <Link onClick={(e) => {if (window.innerWidth <= 768) {toggleNav();}}} href='#team' className={`max-md:w-full flex flex-col items-start py-2 text-base max-md:text-4xl max-md:text-[#000] sansMedium hover:bg-primaryMain/10 uppercase ${textcolor}`}>
                    Team
                </Link>
                <hr className="w-full border-1 border-[#D3D3D3] my-0 md:hidden" />

                <div className='md:hidden flex flex-col gap-y-6 text-black/50'>
                    <Link href="">Facebook</Link>
                    <Link href="">Instagram</Link>
                    <Link href="">Linkedin</Link>
                </div>
            </div>
            {/* nav toggle buton */}
            <div onClick={toggleNav} ref={toggleButtonRef} className="cursor-pointer md:hidden relative z-20 flex w-max mr-4 mt-3">
                {isNavbarVisible ? <X size="24" stroke='#000'/> : <Menu size="24" stroke={strokecolor}/>}
            </div>
        </div>
    </nav>
);
};

export default Navbar;