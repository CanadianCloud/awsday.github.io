'use client';
import { Suspense } from 'react';
import { AWS_EVENT_CONFIG } from '@/lib/eventConstants';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NonProfit from '@/components/layout/NonProfit';
import MapAndSchedule from '@/components/layout/MapAndSchedule';
import EventMap from '@/components/layout/EventMap';
import { useSearchParams } from 'next/navigation';

function AboutCity() {
  const searchParams = useSearchParams();
  const city = searchParams?.get('city');
  const isToronto = city === 'toronto';

  return (
    <div className=''>
      <Header />
      <main className='flex-1 bg-white'>
        <div className='pt-24'>
          <div className=' mx-auto px-4 md:px-6 max-w-4xl'>
            {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-heroDate font-extrabold leading-none text-text-primary text-center mb-8">
              About AWS Community Day
            </h1>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-xl text-gray-600 leading-relaxed">
                {AWS_EVENT_CONFIG.description}
              </p>
            </div> */}
          </div>
        </div>
        {!isToronto && <MapAndSchedule />}
        <NonProfit showCpca={true}>{!isToronto && <EventMap />}</NonProfit>
      </main>
      <Footer />
    </div>
  );
}

export default function AboutPage() {
  // Fix Next.js static export: useSearchParams must be inside a Suspense boundary.
  return (
    <Suspense fallback={<div />}>
      <AboutCity />
    </Suspense>
  );
}
