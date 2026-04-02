'use client';

import { useEffect, useRef } from 'react';

export default function HeroClouds({ city }) {
  const isToronto = city === 'toronto';
  const citySrc = isToronto
    ? '/hero/toronto%20skyline.png'
    : '/hero/hero-city.png';
  const cityAlt = isToronto ? 'Toronto skyline' : 'City skyline';
  /** Toronto asset is much taller than Vancouver at equal width; scale width so displayed height is slightly taller than hero-city.png. */
  const cityImgClassName = isToronto
    ? 'absolute bottom-4 z-10 left-1/2 -translate-x-1/2 w-[65%] xs:w-[46.1%] sm:w-[43.4%] md:w-[38.4%] lg:w-[33.2%] xl:w-[40.7%]'
    : 'absolute bottom-4 z-10 left-1/2 -translate-x-1/2 w-[95%] xs:w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[60%]';
  const cloudsRef = useRef(null);
  const cityRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const parallaxSpeed = 0.3;
          const cityParallaxSpeed = 0.15;

          if (cloudsRef.current) {
            cloudsRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
          }

          if (cityRef.current) {
            cityRef.current.style.transform = `translate(-50%, ${4 + scrolled * cityParallaxSpeed}px)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Moving clouds with parallax */}
      <div ref={cloudsRef} className="absolute inset-0 overflow-hidden rounded-3xl opacity-80">
        {/* Cloud 1 - Top left */}
        <img
          src="/background/cloud-2.svg"
          alt="Cloud"
          className="absolute top-[60%] left-[5%] h-[40px] xs:h-[48px] sm:h-[55px] md:h-[60px] lg:h-[80px] xl:h-[100px] w-auto animate-slide-1"
        />
        {/* Cloud 2 - Mid left */}
        <img
          src="/background/cloud-2.svg"
          alt="Cloud"
          className="absolute top-[55%] left-[25%] h-[35px] xs:h-[43px] sm:h-[50px] md:h-[55px] lg:h-[70px] xl:h-[90px] w-auto animate-slide-2"
        />
        {/* Cloud 3 - Bottom center */}
        <img
          src="/background/cloud-2.svg"
          alt="Cloud"
          className="absolute top-[60%] left-[50%] h-[30px] xs:h-[38px] sm:h-[45px] md:h-[50px] lg:h-[60px] xl:h-[80px] w-auto animate-slide-1"
        />
        {/* Cloud 4 - Top right */}
        <img
          src="/background/cloud-2.svg"
          alt="Cloud"
          className="absolute top-[50%] right-[15%] h-[38px] xs:h-[45px] sm:h-[52px] md:h-[58px] lg:h-[75px] xl:h-[95px] w-auto animate-slide-1"
        />
        {/* Cloud 5 - Mid right */}
        <img
          src="/background/cloud-2.svg"
          alt="Cloud"
          className="absolute top-[65%] right-[7%] h-[42px] xs:h-[50px] sm:h-[57px] md:h-[62px] lg:h-[85px] xl:h-[105px] w-auto animate-slide-2"
        />
      </div>

      {/* City background with parallax */}
      <img
        ref={cityRef}
        src={citySrc}
        alt={cityAlt}
        className={cityImgClassName}
      />

      {/* Bottom cloud - NO parallax */}
      <img
        src="/hero/bottom-cloud.svg"
        alt="Bottom cloud"
        className="absolute bottom-2 translate-y-1/2 z-10 w-[100%] xs:w-[100%] sm:w-[100%] md:w-[95%] lg:w-[85%] xl:w-[80%] left-1/2 -translate-x-1/2"
      />
    </>
  );
}
