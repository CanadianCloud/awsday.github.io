import React from 'react';

export default function Team() {
  return (
    <section
      className='w-full py-12 md:py-20 relative overflow-hidden bg-blue'
      id='team'
      style={{
        backgroundImage: "url('/background/yellow-paint-bg.png')",
      }}>
      <div className='absolute -z-20 bottom-0 w-full'>
        <LottieSplash color='pink' />
      </div>
      <div className='container px-4 md:px-6 m-auto'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2 '>
            <div className='inline-block rounded-lg bg-[#3d43fe] text-white px-3 py-1 text-sm relative'>
              <div className='absolute -z-10 -top-52 -left-36'>
                <LottieDownSplash />
              </div>
              Team
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Who's Behind the Event
            </h2>
            <p className='max-w-[900px] m-auto px-4 pb-10  text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Putting an event together can be a daunting task, but with the
              right people, anything is possible! The 2024 team is excited to
              welcome you to AWS Day!
            </p>
            <div className='w-full hidden relative md:flex flex-row flex-wrap justify-center z-20'>
              <div className='w-screen h-[50%] bg-black absolute z-10'></div>
              <div className='w-screen h-[50%] bg-white absolute z-10 bottom-0'></div>
              {teamMap}
            </div>
            <div className='w-screen md:hidden z-30'>{teamMobileMap}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
