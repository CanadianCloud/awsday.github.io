import { currentSponsors } from '@/lib/sponsorsConstants';

export function CurrentSponsors() {
  return (
    <section className='text-center px-2'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#01A88D] mb-6 md:mb-8 text-center'>
        Sponsors
      </h2>
      <div className='grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-8 md:grid-cols-4 md:gap-x-8 md:gap-y-0 max-w-5xl mx-auto px-1'>
        {currentSponsors.map((sponsor, index) => (
          <div
            key={index}
            className='h-16 sm:h-20 md:h-24 lg:h-28 flex items-center justify-center'>
            <img
              className='max-h-full w-full max-w-[min(42vw,200px)] md:max-w-[min(32vw,260px)] mx-auto object-contain'
              src={sponsor.logo}
              alt={sponsor.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
