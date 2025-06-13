'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image4 from './image/image4.png';
import slide2 from './image/image103512.png';
import slide3 from './image/image3 (2).png';
import slide4 from './image/image4 (2).png';
import slide5 from './image/image5 (2).png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation, Autoplay } from 'swiper/modules';;



gsap.registerPlugin(ScrollTrigger);





const Pagethree = () => {
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
                start: 'top 80%',
                end: 'bottom 100%', // Adjusted for smoother completion
                scrub: 0.8,
              },
            });

            // Main wrapper animation (left to right)
            tl.fromTo(
              wrapperRef.current,
              { x: -200, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 2,
                ease: 'power3.out',
              },
              0 // Start at timeline's beginning
            );

            // First grid item (text content) animation (left to right)
            tl.fromTo(
              gridItem1Ref.current,
              { x: 200, opacity: 0, scale: 0.95 },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 2,
                ease: 'power3.out',
              },
              0.1 // Slight stagger
            );

            // Second grid item (image) animation (faster right to left)
            tl.fromTo(
              acquireRef.current,
              { x: 150, opacity: 0, scale: 0.95 },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 2, // Faster animation
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
        <div id='Ecosystem' ref={wrapperRef} className='relative py-[50px] md:py-[58px] lg:py-[80px] xl:py-[110px] 2xl:py-[140px] sm:px-0 px-6'>
          {/* <Image src={slide2} alt="Background Image" className='absolute inset-0 w-full h-full object-cover' /> */}
          {/* <div className='w-1/3 absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 goadsgvedfevg h-1/3 -z-[1]'></div> */}
            <div  className='relative container mx-auto '>
                <div className='flex items-center justify-center flex-col'>
                  <span className='regulariteems text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] py-1 sm:py-2 lg:py-3 border-[1px] border-[#d84a0e80] rounded-[90px] '>THE SNAPPER ADVANTAGE</span>
                  <h2 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[50px] snpergameaws pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]  pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]  text-center'>Unlock the Full Power of <br/> On-Chain Trading</h2>
                  <p className='nofaching text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px] text-center '>Snapper isn’t just another Telegram bot or dashboard. It’s a fundamentally new way to interact with DeFi — 
                   <br/> deeply integrated, fully autonomous, and built for speed, security, and flexibility.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-6 gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]'>
                  <div className="col-span-4 relative">
                    <svg className='w-full absolute bottom-0 left-0' viewBox="0 0 767 163" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="767" height="190" fill="url(#paint0_linear_461_28668)"/>
                    <defs>
                    <linearGradient id="paint0_linear_461_28668" x1="383.5" y1="0" x2="383.5" y2="190" gradientUnits="userSpaceOnUse">
                    <stop stop-opacity="0"/>
                    <stop offset="1"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    <Image src={image4} alt="Snapper Ecosystem" className='w-full h-auto' />
                  </div> 
                  <div className="col-span-2 w-full ml-3 sm:ml-0 constwaisnder  p-[8px] lg:p-[12px] flex items-center justify-between flex-col">
                    <div className='row-span-3 backgroiundignws flex  p-[8px] lg:p-[12px]flex items-center justify-start gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] w-full'>
                      <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="71" height="71" rx="35.5" fill="white" fill-opacity="0.04"/>
<rect x="0.5" y="0.5" width="70" height="70" rx="35" stroke="white" stroke-opacity="0.12"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.5005 26.6935L37.1268 30.5621L41.3086 30.9133L38.1319 33.6555L39.0901 37.7412L35.5005 35.5673L31.9109 37.7412L32.8692 33.6555L29.6924 30.9133L33.8742 30.5621L35.5005 26.6935ZM47.0917 39.4436C46.3306 38.5037 44.9114 38.4298 44.056 39.2784L38.9777 44.3169C38.3217 44.9677 38.1909 45.8809 38.3107 46.7973L38.5145 48.357L46.0657 50.3804C46.1302 49.5469 46.4422 48.8041 47.1038 48.0925L49.8656 45.1217C50.4945 44.4452 50.8485 43.6725 50.8485 42.7487L50.8487 31.3318C50.8487 30.3131 50.0151 29.4798 48.9963 29.4796C47.9776 29.4796 47.144 30.3131 47.144 31.3318L47.1438 38.0388C48.9131 38.7549 49.3698 41.0685 48.0168 42.411L45.3041 45.1025C45.0592 45.346 44.6632 45.3449 44.4196 45.1001C44.1761 44.8552 44.1772 44.4592 44.4221 44.2157L47.1348 41.5242C47.691 40.9725 47.6946 40.0661 47.1438 39.5109C47.1268 39.4937 47.1093 39.471 47.0917 39.4436ZM37.8928 49.489L46.7791 51.8701C46.9958 51.9282 47.1257 52.153 47.0677 52.3697L46.6276 54.0121C46.5696 54.2287 46.3447 54.3586 46.1279 54.3005L37.2416 51.9194C37.0249 51.8614 36.895 51.6365 36.953 51.4198L37.3931 49.7775C37.4512 49.5608 37.6761 49.431 37.8928 49.489ZM23.9094 39.4436C23.8917 39.471 23.8743 39.4937 23.8573 39.5108C23.3064 40.0659 23.3101 40.9723 23.8663 41.5241L26.579 44.2155C26.8239 44.4591 26.8249 44.8551 26.5814 45.0999C26.3379 45.3448 25.9419 45.3459 25.697 45.1023L22.9843 42.4109C21.6311 41.0684 22.0879 38.7547 23.8572 38.0386L23.857 31.3317C23.857 30.313 23.0234 29.4795 22.0047 29.4795C20.986 29.4796 20.1523 30.313 20.1523 31.3317L20.1525 42.7486C20.1525 43.6724 20.5065 44.4451 21.1354 45.1215L23.8973 48.0923C24.5589 48.804 24.8709 49.5467 24.9353 50.3802L32.4866 48.3569L32.6904 46.7972C32.8101 45.8808 32.6793 44.9677 32.0233 44.3167L26.945 39.2782C26.0897 38.4298 24.6705 38.5037 23.9094 39.4436ZM33.1083 49.489C33.325 49.431 33.5499 49.5608 33.608 49.7775L34.048 51.4198C34.106 51.6365 33.9762 51.8614 33.7595 51.9194L24.8731 54.3005C24.6564 54.3586 24.4315 54.2287 24.3734 54.0121L23.9334 52.3697C23.8753 52.153 24.0051 51.9281 24.2219 51.8701L33.1083 49.489ZM36.5876 20.045H37.6502C37.8852 20.0451 38.029 19.7743 37.8787 19.5797L35.729 16.7979C35.6133 16.6481 35.3879 16.6481 35.2722 16.7979L33.1225 19.5797C32.9721 19.7744 33.116 20.0451 33.3511 20.045H34.4135L34.4135 23.6082C35.1421 23.5264 35.8592 23.5264 36.5878 23.6082L36.5876 20.045ZM42.8066 23.4206H43.8691C44.1042 23.4207 44.248 23.1499 44.0977 22.9554L41.9479 20.1734C41.8322 20.0237 41.6068 20.0237 41.4911 20.1734L39.3413 22.9553C39.191 23.1498 39.3349 23.4207 39.5699 23.4205H40.6323V25.0243C41.4473 25.5374 42.1801 26.1688 42.8066 26.8947V23.4206ZM30.3687 23.4206H31.4312C31.6662 23.4207 31.8101 23.1499 31.6597 22.9554L29.5101 20.1734C29.3944 20.0237 29.1689 20.0237 29.0532 20.1734L26.9035 22.9553C26.7531 23.1498 26.897 23.4207 27.132 23.4205H28.1944V26.8945C28.8209 26.1687 29.5538 25.5372 30.3687 25.0243V23.4206ZM35.5005 24.8011C30.8658 24.8011 27.1087 28.5583 27.1087 33.1929C27.1087 37.8276 30.8658 41.5848 35.5005 41.5848C40.1352 41.5848 43.8924 37.8277 43.8924 33.1929C43.8924 28.5582 40.1352 24.8011 35.5005 24.8011Z" fill="#EA3D30"/>
                      </svg>

                      <h2 className='text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] snpergameaws  text-lef !font-medium !leading-[150%]'>Advantages of on <br/> Dexscreener</h2>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='' width="8" height="200" viewBox="0 0 6 115" fill="none">
  <path d="M3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333ZM3 109.333C1.52724 109.333 0.333329 110.527 0.333328 112C0.333328 113.473 1.52724 114.667 3 114.667C4.47275 114.667 5.66666 113.473 5.66666 112C5.66666 110.527 4.47275 109.333 3 109.333ZM3 3L2.5 3L2.5 112L3 112L3.5 112L3.5 3L3 3Z" fill="white" fill-opacity="0.2"/>
</svg>
                    <div className='row-span-1 w-full bordingeinsawsd  px-[24px] sm:px-[32px] md:px-[36px] lg:px-[40px] xl:px-[48px] 2xl:px-[64px] py-[12px] sm:py-[13px] md:py-[14px] lg:py-[15px] xl:py-[16px] 2xl:py-[20px] flex items-center justify-center'>
                      <p className='nofaching text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-center'>Improved Trade Execution</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="200" viewBox="0 0 6 115" fill="none">
  <path d="M3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333ZM3 109.333C1.52724 109.333 0.333329 110.527 0.333328 112C0.333328 113.473 1.52724 114.667 3 114.667C4.47275 114.667 5.66666 113.473 5.66666 112C5.66666 110.527 4.47275 109.333 3 109.333ZM3 3L2.5 3L2.5 112L3 112L3.5 112L3.5 3L3 3Z" fill="white" fill-opacity="0.2"/>
</svg>
                    <div className='row-span-3 w-full spacingsasdfsed p-[8px] lg:p-[12px] flex items-center justify-start gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] '>
                      <svg className='w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[71px]' viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="71" height="71" rx="35.5" fill="white" fill-opacity="0.1"/>
                      <rect x="0.5" y="0.5" width="70" height="70" rx="35" stroke="white" stroke-opacity="0.12"/>
                      <g clip-path="url(#clip0_418_63007)">
                      <path d="M23.644 39.1885H30.9017V37.6569C30.9017 35.0432 28.7829 32.9243 26.1691 32.9243H20.7326C18.1189 32.9243 16 35.0432 16 37.6569V45.0466H23.644V39.1885Z" fill="white"/>
                      <path d="M23.451 30.5314C26.4766 30.5314 28.9293 28.0787 28.9293 25.0531C28.9293 22.0274 26.4766 19.5747 23.451 19.5747C20.4254 19.5747 17.9727 22.0274 17.9727 25.0531C17.9727 28.0787 20.4254 30.5314 23.451 30.5314Z" fill="white"/>
                      <path d="M25.9277 41.4722H29.855V53.4667H25.9277V41.4722Z" fill="white"/>
                      <path d="M43.8226 40.1215H42.2473V36.412C42.2473 34.2601 40.5029 32.5156 38.3509 32.5156C37.4614 32.5156 36.7404 33.2367 36.7404 34.1262V37.9507L34.9167 40.1215L32.1387 41.4725V53.467L34.6979 54.9899H43.8226C45.9523 54.9899 47.6787 53.2635 47.6787 51.1338V43.9776C47.6787 41.848 45.9523 40.1215 43.8226 40.1215Z" fill="white"/>
                      <path d="M34.3516 21.1507C36.4153 22.4695 38.1733 24.2274 39.4921 26.2912C40.8108 24.2274 42.5687 22.4695 44.6326 21.1507C42.5688 19.832 40.8108 18.0741 39.4921 16.0103C38.1733 18.0741 36.4153 19.832 34.3516 21.1507Z" fill="white"/>
                      <path d="M54.9997 29.3895C52.936 28.0707 51.178 26.3128 49.8592 24.249C48.5405 26.3128 46.7825 28.0708 44.7188 29.3895C46.7825 30.7082 48.5404 32.4661 49.8592 34.5299C51.178 32.4661 52.9359 30.7082 54.9997 29.3895Z" fill="white"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_418_63007">
                      <rect width="39" height="39" fill="white" transform="translate(16 16)"/>
                      </clipPath>
                      </defs>
                      </svg>
                      <h2 className='text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] snpergameaws text-left !font-medium !leading-[150%]'>Streanmaned User<br/> Experience</h2>
                    </div>
                  </div>
                </div>
                <p className='nofaching text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px] text-center sm:px-[5%] pt-[16px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[40px]'>With Snapper, your trades never touch an external server. Everything is signed and sent directly from your device to the blockchain. No delays, no trust as- sumptions. Snapper works wherever you already do — on Dexscreener, Dex- tools, GeckoTerminal, or any other DeFi site. It floats on top, always ready to deploy your next move. <br/> <br/>Snapper also protects your transactions on Ethereum mainnet with native MEV shielding via block builders like Titan and Beaver. On L2s, it uses ultra- optimized routing through the 0x API — without paying their extra 0.15% fee.</p>
                <span className='fixnbgadsigoansd text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] block'>Snapper isn’t just a faster bot — it’s a smarter protocol layer for the new wave of on-chain traders.</span>
            </div>
        </div>
    );
};

export default Pagethree;