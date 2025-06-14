"use client";


import React,{useEffect,useState,useRef} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';


const faqs = [
  {
    id: 1,
    question: "How does Snapper work?",
    answer:
      "Snapper is a browser extension that lets you trade on-chain directly from DeFi sites. No Telegram, no dashboards — just click, sign, and swap.",
  },
  {
    id: 2,
    question: "Why is Snapper safer than other trading bots?",
    answer:
      "Staking is incredibly simple! Just link your wallet in the staking section, and then choose the amount you wish to stake.",
  },
  {
    id: 3,
    question: "What chains does Snapper support?",
    answer:
      "The presale will conclude once the target funding is reached or when we officially announce its end. Rest assured, you'll get all the latest updates and key information through our Telegram and X (formerly Twitter) channels. Don't wait too long - secure your place in this exciting project before it's too late!",
  },
  {
    id: 4,
    question: "Can I use Snapper on mobile?",
    answer:
      "The launch will take place on Rydium, and you can track the progress and price on platforms like Dextool or Dexscreener. Be sure to follow along as the excitement builds - this is a launch you how not want to miss!",
  },
];




const Pagesix = () => {
    const [openFaq, setOpenFaq] = useState(faqs[0].id); // First item always open

  const toggleFaq = (id) => {
    setOpenFaq((prev) => (prev === id ? null : id)); // Always keeps one open
  };

    useEffect(() => {
        const ctx = gsap.context(() => {
          gsap.from(".section7", {
            y: 100,
            duration: 2,
            scrollTrigger: {
              trigger: ".section7",
              start: 'top 85%',
              end: 'top 40%',
              scrub: 2,
            },
          });
        });
      
        ScrollTrigger.refresh();
        return () => ctx.revert();
      }, []);




      // hhsvs



      const itemRefs = useRef([]);
      
        useEffect(() => {
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
                duration: 0.3,
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
        }, []);
    return (
        <div id='Community' className='section7 relative -mt-[1] sm:px-0 px-6 pb-[50px] md:pb-[58px] lg:pb-[80px] xl:pb-[110px] 2xl:pb-[140px] voerflow'>
          {/* <div className=' w-full h-full absolute top-0 left-0 z-[-2]' ></div> */}
          
            <div className='px-[24px] sm:px-0 container mx-auto pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[80px]'>
                <div className='relative pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[73px]'>
                </div>
                <div className='mt-[24px] sm:mt-[32px] md:mt-[36px] lg:mt-[40px] xl:mt-[48px] 2xl:mt-[64px]'>
                    <div className='flex  justify-center items-start sm:flex-row flex-col gap-[16px] '>
                    <div className='flex items-start jusitfy-start flex-col pb-6 sm:pb-0'>
                        <span className='regulariteems text-[10px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] px-[14px] sm:px-[15px] md:px-[16px] 
                        lg:px-[20px] xl:px-[24px] 2xl:px-[32px] py-1 sm:py-2 lg:py-3 border-[1px] border-[#d84a0e80] rounded-[90px] inline-block text-left'>REFERRAL</span>
                        <h2 className='howtobue text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[50px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] !text-left'>Everything You Need to Know</h2>
                    </div>
                    <div className="w-full flex flex-col gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]">

                    {faqs.map((faq, index) => (
                        <div key={faq.id} ref={(el) => (itemRefs.current[index] = el)}  className="benifitsepepe p-[13px] sm:p-[14px] md:p-[15px] lg:p-[16px] xl:p-[20px] 2xl:p-[24px] w-full border-b-[1px] border-[#1F1C29]">
                        <div onClick={() => toggleFaq(faq.id)} className="flex items-center justify-between w-full cursor-pointer">
                            <div className="whatisextass text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px]">
                            {faq.question}
                            </div>
                            <div  className="group cursor-pointer">
                            <svg className={`w-[20px] sm:w-[24px] md:w-[32px] lg:w-[36px] xl:w-[40px] 2xl:w-[46px] cursor-pointer transition-transform duration-300 ${
                                openFaq === faq.id ? "rotate-180" : "rotate-0"
                                }`}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#B4B3B7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </div>
                        </div>
                        {openFaq === faq.id && (
                            <p className="extasiscuting text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px] sm:w-[72%] ">
                            {faq.answer}
                            </p>
                        )}
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagesix;