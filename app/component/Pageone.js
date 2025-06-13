'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import image2 from './image/backgrundtexxt.png';

gsap.registerPlugin(ScrollTrigger);

const Pageone = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    // Check if the screen width is greater than 768px (non-mobile)
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      // Animation for text elements (fade in down)
      gsap.from(textRef.current, {
        opacity: 0,
        y: -50, // Start above and move down
        duration: 1.5,
        ease: 'power2.out',
      });

      // Animation for buttons (fade in down)
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: -50, // Start above and move down
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Animation for image (fade in down)
      gsap.from(imageRef.current, {
        opacity: 0,
        y: -50, // Start above and move down
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });
    }
  }, []);

  // GSAP animation effect for items (fade in down)
  useEffect(() => {
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            y: -50, // Start above and move down
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
    <div ref={buttonRef} className='relative'>
      <div className='w-full container mx-auto'>
        <Image
          src={image2}
          alt='herobottom image is loading'
          className='w-full h-auto object-cover mt-[-100px]'
          ref={imageRef}
        />
      </div>
    </div>
  );
};

export default Pageone;