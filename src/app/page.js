'use client';
import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import Activities from '@/components/layout/Activities';
import HackerRivals from '@/components/layout/HackerRivals';
import Sponsors from '@/components/layout/Sponsors';
import Footer from '@/components/layout/Footer';
import About from '@/components/layout/About';
import NonProfit from '@/components/layout/NonProfit';
import Charity from '@/components/layout/Charity';
import { CurrentSponsors } from '@/components/layout/CurrentSponsors';
import Schedule from '@/components/layout/Schedule';
import { NewSchedule } from '@/components/layout/NewSchedule';
import EventMap from '@/components/layout/EventMap';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

function HomeCity() {
  const searchParams = useSearchParams();
  const city = searchParams?.get('city');
  const isToronto = city === 'toronto';

  return (
    <>
      <Header />
      <Hero city={city} />
      <main className='flex-1 bg-white -z-10'>
        <Activities />
        {!isToronto && <NewSchedule />}
        <HackerRivals />

        <Charity city={city} />

        {!isToronto && <CurrentSponsors></CurrentSponsors>}

        <Sponsors />
        <NonProfit showCpca={true}>{!isToronto && <EventMap />}</NonProfit>
      </main>
      <Footer />
    </>
  );
}

export default function Home() {
  // Keep existing window-resize logic (even if width isn't currently used).
  useWindowSize();

  // Fix Next.js static export: useSearchParams must be inside a Suspense boundary.
  return (
    <Suspense fallback={<div className='' />}>
      <HomeCity />
    </Suspense>
  );
}
