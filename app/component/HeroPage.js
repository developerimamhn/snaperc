'use client';


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image';
import image1 from './image/image1 (2).png';


const HeroPage = () => {

  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Check if the screen width is greater than 768px (non-mobile)
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      // Animation for text elements
      gsap.from(textRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: 'power2.out',
      });

      // Animation for buttons
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Animation for image
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });
    }
  }, []);


  const itemRefs = useRef([]);

  // GSAP animation effect
  useEffect(() => {
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 100%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.1, // Delay between each item
          }
        );
      });
    }
  }, []);


    return (
        <div id="hero" ref={buttonRef} className='relative'>
          <div className='relative z-[2] container mx-auto'>
              <div className='pt-[80px] sm:pt-[81px] md:pt-[150px] xl:pt-[210px] 2xl:pt-[300px]  px-[24px] sm:px-[40px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[100px] w-full flex felx-center justify-center relative '>
                <div className='flex flex-col items-center justify-center text-center'>
                  <div className=''>
                    <h1 ref={textRef} className='tesfastaas text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[80px]'>
                      <span className='tesfastesnnpaper'>Snapper</span> Trade Smarter,<br/> Faster, Safer.
                      </h1>
                      <p className='text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px] px-[15%] thefirstfullty'>The first fully integrated on-chain trading experience. No dashboards, no delays — Snapper empowers you to trade directly from your favorite DeFi sites like Dexscreener, Dextools and more.</p>
                      <ul className='flex items-center justify-center gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]'>
                      <button className='buttonauditelt cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center justify-center py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] group gap-[7.50px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px]'>
                        Get Started
                      </button>
                      <button className='buttonauditeltkleaeasa cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center justify-center py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] group gap-[7.50px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px]'>
                        Learn More
                      </button>
                      </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default HeroPage;