'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTally } from '@/hooks/useTally';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const cityFromUrl = searchParams?.get('city');
  const [selectedCity, setSelectedCity] = useState(
    cityFromUrl === 'toronto' ? 'toronto' : 'vancouver',
  );
  const logoSrc =
    selectedCity === 'toronto'
      ? '/header-logo-toronto.png'
      : '/header-logo-vancouver.png';
  const logoAlt =
    selectedCity === 'toronto'
      ? 'AWS Community Day Toronto'
      : 'AWS Community Day Vancouver';
  const getTicketsUrl =
    selectedCity === 'toronto'
      ? 'https://luma.com/0xpa2rxj'
      : 'https://luma.com/cloudsummit26';
  useTally();

  useEffect(() => {
    // Keep dropdown synced when URL changes (back/forward).
    setSelectedCity(cityFromUrl === 'toronto' ? 'toronto' : 'vancouver');
  }, [cityFromUrl]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setHasScrolled(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCityChange = (e) => {
    const nextCity = e.target.value; // 'vancouver' | 'toronto'
    setSelectedCity(nextCity);

    const params = new URLSearchParams(searchParams?.toString() || '');
    params.set('city', nextCity);

    router.push(`${pathname}?${params.toString()}`);

    // Close mobile menu after selection.
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`bg-white sticky top-0 z-50 flex justify-center transition-shadow duration-300 ${hasScrolled ? 'shadow-md' : ''}`}>
      <div className='w-[95%]'>
        <nav
          className={`flex items-center justify-between transition-all duration-300 ${hasScrolled ? 'h-16 sm:h-18 md:h-20 lg:h-[80px]' : 'h-20 sm:h-24 md:h-28 lg:h-[115px]'}`}>
          <Link
            href='/'
            className='flex items-center justify-start flex-1 md:flex-none'>
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={431}
              height={49}
              className={`w-auto transition-all duration-300 ${hasScrolled ? 'h-6 sm:h-8 md:h-9 lg:h-10' : 'h-8 sm:h-10 md:h-11 lg:h-12'}`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-2 md:gap-3 lg:gap-6 xl:gap-8 2xl:gap-12'>
            <div className='flex items-center gap-3'>
              <span className='text-sm font-body font-extrabold text-gray-700 whitespace-nowrap'>
                Select Location:
              </span>
              <select
                value={selectedCity}
                onChange={handleCityChange}
                className='bg-black/70 text-white border border-white/20 rounded-xl px-3 py-1.5 text-sm md:text-base font-heroDate font-extrabold cursor-pointer'
                aria-label='Select location'>
                <option value='vancouver'>Vancouver</option>
                <option value='toronto'>Toronto</option>
              </select>
            </div>
            <a
              href={getTicketsUrl}
              target='_blank'
              className='bg-[#FF9900] hover:bg-[#E88800] text-white text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-[16px] font-heroDate font-extrabold px-2 py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-3 rounded-lg transition-colors whitespace-nowrap'>
              Get Tickets
            </a>
          </div>

          {/* Mobile location selector (always visible; menu overlay stays just the links) */}
          <div className='md:hidden flex items-center gap-2'>
            <select
              value={selectedCity}
              onChange={handleCityChange}
              className='bg-black/70 text-white border border-white/20 rounded-xl px-3 py-1.5 text-sm font-heroDate font-extrabold cursor-pointer'
              aria-label='Select location'>
              <option value='vancouver'>Vancouver</option>
              <option value='toronto'>Toronto</option>
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden flex flex-col space-y-1.5 p-2'
            aria-label='Toggle menu'>
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span
              className={`block w-6 h-0.5 bg-text-primary ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-40 w-screen overflow-hidden transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'} ${hasScrolled ? 'top-16 sm:top-18' : 'top-20 sm:top-24'}`}>
        {/* Backdrop */}
        <div
          className='absolute inset-0 bg-black bg-opacity-50'
          onClick={() => setIsMenuOpen(false)}></div>

        {/* Menu Content */}
        <div className='absolute top-0 inset-x-0 bg-white z-50 w-full overflow-hidden'>
          <div className='flex flex-col space-y-3 py-4 px-6 w-full box-border'>
            <a
              href={getTicketsUrl}
              target='_blank'
              className='bg-[#FF9900] hover:bg-[#E88800] text-white text-sm font-heroDate font-extrabold px-4 py-2 rounded-lg transition-colors text-center block'
              onClick={() => setIsMenuOpen(false)}>
              Get Tickets
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
