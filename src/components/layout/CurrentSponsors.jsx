import { currentSponsors } from '@/lib/sponsorsConstants';

export function CurrentSponsors() {
  return (
    <section className='text-center px-2'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#01A88D] mb-6 md:mb-8 text-center'>
        Sponsors
      </h2>
      <div className='flex flex-row flex-nowrap justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto overflow-x-auto pb-2 [scrollbar-width:thin]'>
        {currentSponsors.map((sponsor, index) => (
          <img
            key={index}
            className='h-16 sm:h-20 md:h-24 lg:h-28 w-auto max-w-[min(32vw,260px)] object-contain flex-shrink-0'
            src={sponsor.logo}
            alt={sponsor.alt}
          />
        ))}
      </div>
    </section>
  );
}
