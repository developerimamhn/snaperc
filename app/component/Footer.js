'use client'


import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import logo from "./image/logo.png";
import image1 from './image/image1 (2).png';
// import Image from 'next/image';


gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
  
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
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    useEffect(() => {
      // Example of animating elements when they come into view
      gsap.fromTo('.feature', 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.feature',
            start: 'top 100%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
  
      // Example of animating the button with scale and opacity
      gsap.fromTo('.buttonaudit-3', 
        { opacity: 0, scale: 0.8 }, 
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'ease-in-out',
          scrollTrigger: {
            trigger: '.buttonaudit-3',
            start: 'top 100%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
    }, []);
  
    const [isTranslated, setIsTranslated] = useState(false);
  
    const handleClick = () => {
      setIsTranslated(true);
      setTimeout(() => {
        setIsTranslated(false);
      }, 200);
    };


    const iconRefs = useRef([]);

  useEffect(() => {
    // GSAP entrance animation for icons
    gsap.fromTo(
      iconRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );
  }, []);

  // Handle hover animation with GSAP
  const handleMouseEnter = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1.2,
      rotate: 10,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const socialLinks = [
    { href: 'https://twitter.com', icon: 'twitter' },
    { href: 'https://linkedin.com', icon: 'linkedin' },
    { href: 'https://facebook.com', icon: 'facebook' },
    { href: 'https://telegram.org', icon: 'telegram' },
  ];
  
    return (
        <div id='Support' className='relative'>
          <Image className="w-full absolute bottom-[0%] sm:top-[30%] left-0 z-[-2] brightness-animation" src={image1} alt="loading ..."/>
          <svg className="w-full absolute bottom-0 left-0 z-[-2]" viewBox="0 0 1920 195" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0016 149.2C21.2016 165.8 25.3016 177.5 34.3016 184.3C43.3016 191.1 55.6016 194.5 71.2016 194.5C76.2016 194.5 81.5016 193.9 87.1016 192.7C92.9016 191.5 98.1016 189.6 102.702 187C107.302 184.2 111.102 180.7 114.102 176.5C117.302 172.1 118.902 166.7 118.902 160.3C118.902 154.3 117.402 149.3 114.402 145.3C111.602 141.3 107.802 138 103.002 135.4C98.4016 132.6 93.0016 130.3 86.8016 128.5C80.6016 126.5 74.2016 124.6 67.6016 122.8C62.8016 121.6 57.1016 120 50.5016 118C43.9016 115.8 37.5016 112.7 31.3016 108.7C25.1016 104.5 19.8016 99.1 15.4016 92.5C11.2016 85.9 9.10156 77.5 9.10156 67.3C9.10156 57.7 10.9016 48.8 14.5016 40.6C18.1016 32.4 23.3016 25.4 30.1016 19.6C36.9016 13.6 45.2016 8.99999 55.0016 5.79999C65.0016 2.39999 76.3016 0.699998 88.9016 0.699998C100.102 0.699998 110.602 1.89999 120.402 4.29999C130.202 6.69999 138.702 10.6 145.902 16C153.102 21.4 158.702 28.5 162.702 37.3C166.702 45.9 168.502 56.5 168.102 69.1H132.102C131.902 55.7 128.202 46.1 121.002 40.3C113.802 34.3 102.902 31.3 88.3016 31.3C85.7016 31.3 82.1016 31.6 77.5016 32.2C72.9016 32.8 68.3016 34.2 63.7016 36.4C59.1016 38.6 55.1016 41.8 51.7016 46C48.3016 50 46.6016 55.6 46.6016 62.8C46.6016 68 47.8016 72.3 50.2016 75.7C52.6016 79.1 55.8016 82 59.8016 84.4C64.0016 86.8 68.8016 88.8 74.2016 90.4C79.6016 92 85.3016 93.5 91.3016 94.9C98.9016 96.9 106.502 99.1 114.102 101.5C121.902 103.9 128.902 107.3 135.102 111.7C141.502 115.9 146.602 121.5 150.402 128.5C154.402 135.5 156.402 144.6 156.402 155.8C156.402 164.2 154.802 172.5 151.602 180.7C148.402 188.9 143.202 196.3 136.002 202.9C129.002 209.5 119.802 214.9 108.402 219.1C97.2016 223.1 83.5016 225.1 67.3016 225.1C54.7016 225.1 43.3016 223.6 33.1016 220.6C22.9016 217.8 14.2016 213.4 7.00156 207.4C0.00156301 201.2 -5.39844 193.3 -9.19844 183.7C-12.7984 174.1 -14.3984 162.6 -13.9984 149.2H22.0016ZM311.333 5.79999H352.433L418.133 165.7H418.733L451.433 5.79999H488.933L444.533 220H403.433L337.433 61H336.833L304.433 220H266.933L311.333 5.79999ZM683.537 5.79999H723.137L760.337 220H722.237L713.537 163.3H628.337L595.337 220H555.137L683.537 5.79999ZM696.437 43.6H695.837L644.237 134.8H709.637L696.437 43.6ZM914.108 5.79999H1000.21C1011.41 5.79999 1020.81 6.99999 1028.41 9.39999C1036.01 11.6 1042.31 14.6 1047.31 18.4C1052.31 22 1056.11 26.2 1058.71 31C1061.51 35.6 1063.51 40.3 1064.71 45.1C1065.91 49.9 1066.61 54.6 1066.81 59.2C1067.01 63.8 1067.11 67.8 1067.11 71.2C1067.11 71.4 1066.91 73.2 1066.51 76.6C1066.31 80 1065.41 84.2 1063.81 89.2C1062.41 94 1060.11 99.3 1056.91 105.1C1053.71 110.7 1049.21 116 1043.41 121C1037.61 125.8 1030.21 129.8 1021.21 133C1012.41 136.2 1001.51 137.8 988.508 137.8H924.308L907.208 220H869.708L914.108 5.79999ZM930.608 107.2H987.308C995.708 107.2 1002.61 106 1008.01 103.6C1013.61 101 1017.91 97.7 1020.91 93.7C1024.11 89.7 1026.31 85.3 1027.51 80.5C1028.91 75.5 1029.61 70.6 1029.61 65.8C1029.61 62.8 1029.11 59.6 1028.11 56.2C1027.31 52.8 1025.61 49.6 1023.01 46.6C1020.61 43.6 1017.01 41.2 1012.21 39.4C1007.61 37.4 1001.51 36.4 993.908 36.4H945.308L930.608 107.2ZM1204.21 5.79999H1290.31C1301.51 5.79999 1310.91 6.99999 1318.51 9.39999C1326.11 11.6 1332.41 14.6 1337.41 18.4C1342.41 22 1346.21 26.2 1348.81 31C1351.61 35.6 1353.61 40.3 1354.81 45.1C1356.01 49.9 1356.71 54.6 1356.91 59.2C1357.11 63.8 1357.21 67.8 1357.21 71.2C1357.21 71.4 1357.01 73.2 1356.61 76.6C1356.41 80 1355.51 84.2 1353.91 89.2C1352.51 94 1350.21 99.3 1347.01 105.1C1343.81 110.7 1339.31 116 1333.51 121C1327.71 125.8 1320.31 129.8 1311.31 133C1302.51 136.2 1291.61 137.8 1278.61 137.8H1214.41L1197.31 220H1159.81L1204.21 5.79999ZM1220.71 107.2H1277.41C1285.81 107.2 1292.71 106 1298.11 103.6C1303.71 101 1308.01 97.7 1311.01 93.7C1314.21 89.7 1316.41 85.3 1317.61 80.5C1319.01 75.5 1319.71 70.6 1319.71 65.8C1319.71 62.8 1319.21 59.6 1318.21 56.2C1317.41 52.8 1315.71 49.6 1313.11 46.6C1310.71 43.6 1307.11 41.2 1302.31 39.4C1297.71 37.4 1291.61 36.4 1284.01 36.4H1235.41L1220.71 107.2ZM1493.4 5.79999H1649.4L1642.8 38.2H1523.7L1512 94.3H1622.4L1616.1 124.9H1505.4L1492.5 187.6H1612.5L1605.9 220H1449L1493.4 5.79999ZM1790.37 103.3H1845.27C1861.47 103.3 1873.77 100 1882.17 93.4C1890.77 86.6 1895.07 76.9 1895.07 64.3C1895.07 58.5 1893.97 53.8 1891.77 50.2C1889.77 46.4 1886.97 43.5 1883.37 41.5C1879.77 39.5 1875.67 38.2 1871.07 37.6C1866.47 36.8 1861.67 36.4 1856.67 36.4H1804.17L1790.37 103.3ZM1772.37 5.79999H1865.07C1869.67 5.79999 1875.77 6.19999 1883.37 6.99999C1890.97 7.79999 1898.37 9.99999 1905.57 13.6C1912.97 17.2 1919.27 22.7 1924.47 30.1C1929.87 37.3 1932.57 47.4 1932.57 60.4C1932.57 77.4 1928.27 90.7 1919.67 100.3C1911.07 109.7 1899.17 115.8 1883.97 118.6V119.2C1892.97 122.6 1898.97 127.7 1901.97 134.5C1905.17 141.1 1906.77 148.9 1906.77 157.9C1906.77 165.3 1906.17 172.7 1904.97 180.1C1903.77 187.5 1903.27 194.9 1903.47 202.3C1903.47 205.3 1903.67 208.3 1904.07 211.3C1904.67 214.3 1905.77 217.2 1907.37 220H1868.07C1867.07 217.2 1866.37 214.5 1865.97 211.9C1865.77 209.3 1865.67 206.5 1865.67 203.5C1865.67 195.5 1866.27 187.7 1867.47 180.1C1868.67 172.3 1869.27 164.5 1869.27 156.7C1869.27 150.5 1868.07 145.7 1865.67 142.3C1863.47 138.9 1860.47 136.5 1856.67 135.1C1852.87 133.5 1848.57 132.6 1843.77 132.4C1838.97 132 1834.07 131.8 1829.07 131.8H1784.37L1766.07 220H1727.97L1772.37 5.79999Z" fill="url(#paint0_linear_418_63284)"/>
<defs>
<linearGradient id="paint0_linear_418_63284" x1="960.5" y1="6" x2="960.5" y2="220" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.04"/>
<stop offset="1" stop-color="white" stop-opacity="0.16"/>
</linearGradient>
</defs>
</svg>

            <div className='sm:px-0 px-6 py-[50px] md:py-[58px] lg:py-[80px] xl:py-[110px] 2xl:py-[140px] border-t-[1px] border-[#ffffff1a] w-full flex items-center jusity-center flex-col gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]'>
                <h3 className='exoisnasd text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>@ AllCopyright Snapper</h3>
                <p className="extasiscuting text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px] sm:w-[42%] text-center">
                The first fully integrated on-chain trading experience. No dashboards, no delays — Snapper empowers you to trade directly from your favorite DeFi sites like Dexscreener, Dextools and more.
                </p>
                <div className='flex items-center justify-cennter gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]'>
                    <div className='w-[24px] md:w-[32px] lg:w-[36px] xl:w-[40px] 2xl:w-[50px] bopaddcionsa h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[50px] flex items-center justify-center cursor-pointer'>
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[26px]' viewBox="0 0 27 26" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.25 22.75L15.6242 11.385L15.6373 11.3957L22.513 3.25H20.2153L14.6142 9.88L10.1662 3.25H4.14017L11.2595 13.8607L3.75 22.75H6.04768L12.2749 15.3737L17.224 22.75H23.25ZM9.25577 5.02272L19.9552 20.9773H18.1344L7.42632 5.02272H9.25577Z" fill="white"/>
                      </svg>
                    </div>
                    <div className='w-[24px] md:w-[32px] lg:w-[36px] xl:w-[40px] 2xl:w-[50px] bopaddcionsa h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[50px] flex items-center justify-center cursor-pointer'>
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[26px]' viewBox="0 0 27 26" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3625 6.3662C13.3254 7.29051 9.25277 9.20586 3.14647 12.1103C2.15493 12.541 1.63472 12.9622 1.58759 13.3739C1.50728 14.0713 2.3068 14.3459 3.3926 14.7174C3.54098 14.7689 3.6946 14.8204 3.8517 14.8776C4.9218 15.2568 6.36022 15.7009 7.10736 15.718C7.78643 15.7332 8.54404 15.4283 9.38021 14.8032C15.085 10.5971 18.03 8.47212 18.215 8.42638C18.3459 8.39398 18.5275 8.35206 18.6497 8.47212C18.7719 8.59028 18.7597 8.81517 18.7475 8.87615C18.6671 9.24397 15.5354 12.4248 13.912 14.0713C13.4057 14.584 13.0479 14.948 12.9745 15.0319C12.8104 15.2168 12.6428 15.3941 12.4822 15.5636C11.4872 16.608 10.7436 17.3932 12.5241 18.674C13.3795 19.2895 14.0638 19.7983 14.7463 20.3053C15.4918 20.8599 16.2354 21.4126 17.199 22.1025C17.4434 22.2778 17.6773 22.4588 17.906 22.6361C18.7736 23.3126 19.5539 23.9187 20.5176 23.8234C21.0762 23.7662 21.6557 23.1926 21.949 21.4792C22.642 17.4275 24.0071 8.65317 24.323 5.03595C24.3423 4.73562 24.3306 4.43388 24.2882 4.1364C24.2627 3.89614 24.1556 3.67507 23.9879 3.51702C23.7383 3.29404 23.3508 3.2464 23.1762 3.25021C22.3889 3.26545 21.1808 3.72474 15.3625 6.3662Z" fill="white"/>
                      </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;