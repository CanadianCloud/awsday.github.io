import React from 'react';
import ZoomableImage from '../ui/zoomable-image';

export default function Venue() {
  return (
    <section className='w-full bg-muted py-12 md:py-20' id='location'>
      <div className='container px-4 md:px-6 m-auto'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2 z-10'>
            <div className='inline-block rounded-lg bg-[#0E6A65] text-white px-3 py-1 text-sm'>
              Location
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Venue Information
            </h2>
            <p className='max-w-[900px] px-4 m-auto pb-10 drop-shadow-[2px_3px_3px_rgba(255,255,255,0.75)] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              The Playhouse is a polished, cozy and intimate venue, located
              directly across the road from Amazon AWS's new amazing office at
              "The Post". It can accommodate up to 700 guests for talks on the
              main stage, as well as 2 levels of demo's, workshops and sponsor
              booths in the lobby area.
            </p>

            <div className='flex md:flex-row w-screen flex-col justify-center px-6 '>
              <img
                src='/location/venue.png'
                alt='Venue'
                className='rounded-lg shadow-lg md:max-w-[70%] object-cover md:mb-0 mb-6'
              />
              <div className='flex flex-row md:flex-col justify-center md:justify-between items-center md:ml-5 md:max-w-[30%] md:w-fit w-full'>
                <div className='relative overflow-hidden rounded-lg shadow-lg h-fit max-w-[200px] mx-3 md:my-1'>
                  <ZoomableImage url='/maps/level-1.png' />
                  <div className='absolute bottom-0 left-0 bg-primary px-4 py-2 text-primary-foreground font-medium'>
                    Level 1
                  </div>
                </div>
                <div className='relative overflow-hidden rounded-lg shadow-lg h-fit max-w-[200px] mx-3 md:my-1'>
                  <ZoomableImage url='/maps/level-2.png' />
                  <div className='absolute bottom-0 left-0 bg-primary px-4 py-2 text-primary-foreground font-medium'>
                    Level 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
