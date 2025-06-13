"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from './image/logo.png';
import righticon from './image/righticon.png';


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false); // For background styling
    const [isVisible, setIsVisible] = useState(true); // For show/hide
    const [prevScrollPos, setPrevScrollPos] = useState(0); // Tracks scroll direction

    // Handle clicks outside to close the menu
    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Smooth scroll to section
    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: "smooth",
            });
            setToggle(false);
        }
    };

    // Scroll logic for show/hide and background change
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Update scrolled state for background styling
            if (currentScrollPos > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Show/hide navbar based on scroll direction
            if (currentScrollPos < 50) {
                setIsVisible(true); // Show near the top
            } else if (currentScrollPos > prevScrollPos) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const handleScrollToTop   = (e, targetId) => {
        e.preventDefault();
        if (targetId === "") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      

    return (
        <div className={` header ${scrolled ? "scrolled" : " "} z-[150] w-full header backgronsdvg border-b-[1px] border-[#ffffff14]   ${
            isVisible ? "translate-y-0 transition-transform duration-300 " : "-translate-y-full transition-transform duration-300 "
        }`}>
            
            <header className='px-[24px]   flex  justify-between items-center py-[20px] sm:py-[24px] lg:py-[30px] relative  sm:overflow-hidden backgroundimage sm:px-[40px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[100px] '>
            <dev className='linersext absolute bottom-0 left-0 w-full h-[2px] z-10'></dev>
            <Link onClick={(e) => handleScrollToTop(e, "")} href='#' className='cursor-pointer relative flex  items-center justify-start Froggo-Logo'>
                <Image className='w-full h-[26px] sm:h-[35px] 2xl:h-[48.25px]' src={logo} alt=''/></Link>
                <div className='sm:hidden relative top-[-11px] -left-6'>
                    
                    <div 
                        className={`transition-transform  duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[24px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>
                 

                <nav ref={menuRef} className={`navbar-items-main absolute  sm:left-0 sm:relative duration-1000 z-[99] sm:opacity-100 flex justif-start sm:justify-center items-start sm:items-center  sm:blur-none blur-[200] sm:bg-transparent bg-[#15161B] right-0 sm:flex-row flex-col p-[20px] sm:p-[0] sm:w-fit w-full  sm:h-full pl-[24px] sm:pl-[32px] md:pl-[36px] lg:pl-[40px] xl:pl-[48px] 2xl:pl-[60px]
                    ${toggle ? 'top-[67px] h-screen' :'-top-[500%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Home" onClick={(e) => handleScroll(e, "Home")}>
                    Home
                    </a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Features" onClick={(e) => handleScroll(e, "Features")}>
                    Features</a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#SnapperAdvantage" onClick={(e) => handleScroll(e, "SnapperAdvantage")}>
                    Snapper Advantage
                    </a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Referral" onClick={(e) => handleScroll(e, "Referral")}>
                    Referral</a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#FAQ" onClick={(e) => handleScroll(e, "FAQ")}>
                    FAQ
                    </a>

                    <ul className='sm:hidden flex flex-col  gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px]'>
                    <button className='buttonauditelt cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center justify-center font- h-[30px] md:h-[40px] lg:h-[44px] xl:h-[48px] 2xl:h-[59px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px] '>
                    Get Started
                    </button>
                    </ul>
                </nav>
                
                <ul className='sm:flex hidden gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px] ml-atuo'>
                <button className='buttonauditelt cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center justify-center py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] group gap-[7.50px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px]'>
                    Get Started
                </button>
                </ul>
                
                
            </header>
        </div>
    );
};

export default NavBar;