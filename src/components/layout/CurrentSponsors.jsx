import { currentSponsors } from '@/lib/sponsorsConstants';

export function CurrentSponsors() {
  return (
    <section className='text-center px-2'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#01A88D] mb-6 md:mb-8 text-center'>
        Sponsors
      </h2>
      <div className='max-w-5xl mx-auto px-1'>
        <div className='flex items-center justify-center gap-x-6 gap-y-6 flex-wrap md:flex-nowrap md:gap-x-8 overflow-x-auto md:overflow-visible py-1'>
        {currentSponsors.map((sponsor, index) => (
          <div
            key={index}
            className='h-16 sm:h-20 md:h-24 lg:h-28 flex items-center justify-center shrink-0'>
            <img
              className='max-h-full w-full max-w-[min(42vw,200px)] md:max-w-[min(32vw,260px)] mx-auto object-contain'
              src={sponsor.logo}
              alt={sponsor.alt}
            />
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
