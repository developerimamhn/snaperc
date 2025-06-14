'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sectionpadding from './image/sectionpadding.png';
import image5 from './image/Group 2085662607.svg';
import image6 from './image/Group 2085662600.svg';
import image7 from './image/Group 2085662601.svg';
import canada from './image/canada.png';
import usa from './image/usa.png';
import chin from './image/chin.png';
import roundesecsss from './image/roundesecsss.png';
import Image from 'next/image';


gsap.registerPlugin(ScrollTrigger);



const Pagefive = () => {
  const wrapperRef = useRef(null); // Outer container
  const gridItem1Ref = useRef(null); // First grid item (text content)
  const acquireRef = useRef(null); // Second grid item (image)

  useEffect(() => {
    // Create GSAP context for proper scoping and cleanup
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
        },
        (context) => {
          const { isDesktop } = context.conditions;

          if (isDesktop) {
            // Create a timeline for better control and sequencing
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: 'top 100%',
                end: 'bottom 10%', // Desktop-specific values
                scrub: 0.8,
              },
            });

            // Main wrapper animation (left to right)
            tl.fromTo(
              wrapperRef.current,
              { x: -100, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out',
              },
              0 // Start at timeline's beginning
            );

            // First grid item (text content) animation (left to right)
            tl.fromTo(
              gridItem1Ref.current,
              { x: 150, opacity: 0, scale: 0.95 },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
              },
              0.1 // Slight stagger
            );

            // Second grid item (image) animation (faster right to left)
            tl.fromTo(
              acquireRef.current,
              { x: 50, opacity: 0, scale: 0.95 },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6, // Faster animation
                ease: 'power3.out',
              },
              0.25 // Stagger for visual hierarchy
            );
          }
        }
      );
    }, wrapperRef); // Scope animations to wrapperRef for React's strict mode

    // Cleanup GSAP context and animations
    return () => ctx.revert();
  }, []);
    return (
        <div id='NewsFeed' className='relative ' >
          <Image src={roundesecsss} alt='loadings' className='absolute top-0 left-0 w-full z-[-1]'/>
          <div ref={wrapperRef} className='container mx-auto sm:px-0 px-6 py-[50px] md:py-[58px] lg:py-[80px] xl:py-[110px] 2xl:py-[140px]'>
            <span className='regulariteems text-[10px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] py-1 sm:py-2 lg:py-3 border-[1px] border-[#d84a0e80] rounded-[90px] '>REFERRAL</span>
            <h2 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[50px] snpergameaws pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]  pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]'>Earn While You Trade.<br/>Refer to Multiply.</h2>
            <p className='nofaching text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[64px] sm:pr-[40%]'>Snapper charges a 1% fee on trades — and gives 50% of that directly back to you through referrals. The more your community trades, the more you earn — simple as that.This is how top influencers and power users are already earning thousands in passive income.</p>
            <div className='grid relative overflow-hidden  items-center justify-between  py-[20px] sm:py-[24px] md:py-[32px] lg:py-[36px] xl:py-[40px] 2xl:py-[48px]  sm:p-0 p-6'>
                <Image src={sectionpadding} alt="loading" className='w-full pointer-events-none select-none' /> 
            </div>
            <div className=' mt-[11px] sm:mt-[12px] md:mt-[13px] lg:mt-[14px] xl:mt-[15px] 2xl:mt-[16px]'>
              <div className='TOPASEIONTEXTGERQ p-[12px] sm:p-[13px] md:p-[14px] lg:p-[15px] xl:p-[16px] 2xl:p-[20px]'>
                <div  ref={wrapperRef} className='flex items-center jusify-between pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]'>
                  <h3 className='topuseiaoend text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>Top Users</h3>
                  <button className='semofieasbausesd cursor-pointer ml-auto text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px] py-[6px] lg:py-[10px]'>See More</button>
                </div>
                <div ref={wrapperRef} className='gap-[24px] grid grid-rows-5  '>
                  <div className='flex items-center justify-between w-full flexingassection p-[12px] sm:p-[13px] md:p-[14px] lg:p-[15px] xl:p-[16px] 2xl:p-[20px]'>
                    <h3 className='websisedsesser text-[10px] sm:text-[11px] md:text-[12px]'>User Address</h3>
                    <h3 className='websisedsesser text-[10px] sm:text-[11px] md:text-[12px]'>Serial Number</h3>
                    <h3 className='websisedsesser text-[10px] sm:text-[11px] md:text-[12px]'>24h Volume</h3>
                    <h3 className='websisedsesser text-[10px] sm:text-[11px] md:text-[12px]'>User Address</h3>
                  </div>
                  <div className='flex items-center justify-between w-full p-[12px] sm:p-[13px] md:p-[14px] lg:p-[15px] xl:p-[16px] 2xl:p-[20px] border-b-[1px] border-[#ffffff0f]'>
                    <h3 className='websisedsesser text-[10px] sm:text-[11px] md:text-[12px] flex items-center gap-[4px]'>
                      <svg className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[20px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2.375" y="2.375" width="15.25" height="15.25" rx="5.625" stroke="white" stroke-opacity="0.16" stroke-width="0.75"/>
                      </svg> #002
                    </h3>
                    <h3 className='websisedsesser flex items-center gap-[8px] text-[10px] sm:text-[11px] md:text-[12px]'>
                      <Image src={usa} alt="loading" className='w-[20px] h-[20px] rounded-full' />
                      Oxcd40•4d6
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px] sm:w-[12px] md:w-[13px] lg:w-[14px] xl:w-[15px] 2xl:w-[16px] cursor-pointer' viewBox="0 0 16 16" fill="none">
                      <path d="M7.39905 2C4.96645 2.00437 3.6926 2.06409 2.87853 2.87815C2 3.75665 2 5.17059 2 7.99841C2 10.8263 2 12.2402 2.87853 13.1187C3.75705 13.9972 5.17102 13.9972 7.99898 13.9972C10.8268 13.9972 12.2408 13.9972 13.1194 13.1187C13.9334 12.3047 13.9932 11.0309 13.9976 8.59835" stroke="white" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M13.6527 2.34688L9.95312 6.03621M13.6527 2.34688C13.3233 2.01721 11.1049 2.04794 10.6359 2.05461M13.6527 2.34688C13.9819 2.67655 13.9513 4.8974 13.9446 5.3669" stroke="white" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </h3>
                    <h3 className='websisedsesser text-[10px] sm:text-[11px] md:text-[11px] opacity-75'>$56.78 B</h3>
                    <h3 className='websisedsesser text-[10px] sm:text-[11px] md:text-[11px] opacity-75'>15,076,624</h3>
                  </div>
                  <div className='flex items-center justify-between w-full p-[12px] sm:p-[13px] md:p-[14px] lg:p-[15px] xl:p-[16px] 2xl:p-[20px] border-b-[1px] border-[#ffffff0f]'>
                    <h3 className='websisedsesser text-[10px] sm:text-[11px] md:text-[12px] flex items-center gap-[4px]'>
                      <svg className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[20px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2.375" y="2.375" width="15.25" height="15.25" rx="5.625" stroke="white" stroke-opacity="0.16" stroke-width="0.75"/>
                      </svg> #003
                    </h3>
                    <h3 className='websisedsesser flex items-center gap-[8px] text-[10px] sm:text-[11px] md:text-[12px]'>
                      <Image src={chin} alt="loading" className='w-[20px] h-[20px] rounded-full' />
                      Ox2584m9cd7
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px] sm:w-[12px] md:w-[13px] lg:w-[14px] xl:w-[15px] 2xl:w-[16px] cursor-pointer' viewBox="0 0 16 16" fill="none">
                      <path d="M7.39905 2C4.96645 2.00437 3.6926 2.06409 2.87853 2.87815C2 3.75665 2 5.17059 2 7.99841C2 10.8263 2 12.2402 2.87853 13.1187C3.75705 13.9972 5.17102 13.9972 7.99898 13.9972C10.8268 13.9972 12.2408 13.9972 13.1194 13.1187C13.9334 12.3047 13.9932 11.0309 13.9976 8.59835" stroke="white" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M13.6527 2.34688L9.95312 6.03621M13.6527 2.34688C13.3233 2.01721 11.1049 2.04794 10.6359 2.05461M13.6527 2.34688C13.9819 2.67655 13.9513 4.8974 13.9446 5.3669" stroke="white" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </h3>
                    <h3 className='websisedsesser text-[10px] sm:text-[11px] md:text-[11px] opacity-75'>$5.78 B</h3>
                    <h3 className='websisedsesser text-[10px] sm:text-[11px] md:text-[11px] opacity-75'>13,583,136</h3>
                  </div><div className='flex items-center justify-between w-full p-[12px] sm:p-[13px] md:p-[14px] lg:p-[15px] xl:p-[16px] 2xl:p-[20px] border-b-[1px] border-[#ffffff0f]'>
                    <h3 className='websisedsesser text-[10px] sm:text-[11px] md:text-[12px] flex items-center gap-[4px]'>
                      <svg className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[20px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2.375" y="2.375" width="15.25" height="15.25" rx="5.625" stroke="white" stroke-opacity="0.16" stroke-width="0.75"/>
                      </svg> #004
                    </h3>
                    <h3 className='websisedsesser flex items-center gap-[8px] text-[10px] sm:text-[11px] md:text-[12px]'>
                      <Image src={canada} alt="loading" className='w-[20px] h-[20px] rounded-full' />
                      Oxf961...14ec
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px] sm:w-[12px] md:w-[13px] lg:w-[14px] xl:w-[15px] 2xl:w-[16px] cursor-pointer' viewBox="0 0 16 16" fill="none">
                      <path d="M7.39905 2C4.96645 2.00437 3.6926 2.06409 2.87853 2.87815C2 3.75665 2 5.17059 2 7.99841C2 10.8263 2 12.2402 2.87853 13.1187C3.75705 13.9972 5.17102 13.9972 7.99898 13.9972C10.8268 13.9972 12.2408 13.9972 13.1194 13.1187C13.9334 12.3047 13.9932 11.0309 13.9976 8.59835" stroke="white" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M13.6527 2.34688L9.95312 6.03621M13.6527 2.34688C13.3233 2.01721 11.1049 2.04794 10.6359 2.05461M13.6527 2.34688C13.9819 2.67655 13.9513 4.8974 13.9446 5.3669" stroke="white" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </h3>
                    <h3 className='websisedsesser text-[10px] sm:text-[11px] md:text-[11px] opacity-75'>$11.78 B</h3>
                    <h3 className='websisedsesser text-[10px] sm:text-[11px] md:text-[11px] opacity-75'>12,337,278</h3>
                  </div><div className='flex items-center justify-between w-full p-[12px] sm:p-[13px] md:p-[14px] lg:p-[15px] xl:p-[16px] 2xl:p-[20px] border-b-[1px] border-[#ffffff0f]'>
                    <h3 className='websisedsesser text-[10px] sm:text-[11px] md:text-[12px] flex items-center gap-[4px]'>
                      <svg className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[20px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2.375" y="2.375" width="15.25" height="15.25" rx="5.625" stroke="white" stroke-opacity="0.16" stroke-width="0.75"/>
                      </svg> #012
                    </h3>
                    <h3 className='websisedsesser flex items-center gap-[8px] text-[10px] sm:text-[11px] md:text-[12px]'>
                      <Image src={usa} alt="loading" className='w-[20px] h-[20px] rounded-full' />
                      Oxc74c.,.f84f
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-[11px] sm:w-[12px] md:w-[13px] lg:w-[14px] xl:w-[15px] 2xl:w-[16px] cursor-pointer' viewBox="0 0 16 16" fill="none">
                      <path d="M7.39905 2C4.96645 2.00437 3.6926 2.06409 2.87853 2.87815C2 3.75665 2 5.17059 2 7.99841C2 10.8263 2 12.2402 2.87853 13.1187C3.75705 13.9972 5.17102 13.9972 7.99898 13.9972C10.8268 13.9972 12.2408 13.9972 13.1194 13.1187C13.9334 12.3047 13.9932 11.0309 13.9976 8.59835" stroke="white" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M13.6527 2.34688L9.95312 6.03621M13.6527 2.34688C13.3233 2.01721 11.1049 2.04794 10.6359 2.05461M13.6527 2.34688C13.9819 2.67655 13.9513 4.8974 13.9446 5.3669" stroke="white" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </h3>
                    <h3 className='websisedsesser text-[10px] sm:text-[11px] md:text-[11px] opacity-75'>$11.78 B</h3>
                    <h3 className='websisedsesser text-[10px] sm:text-[11px] md:text-[11px] opacity-75'>11,174,593</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Pagefive;