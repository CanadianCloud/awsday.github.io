import { currentSponsors } from '@/lib/sponsorsConstants';

export function CurrentSponsors() {
  return (
    <section className='text-center px-2'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#01A88D] mb-6 md:mb-8 text-center'>
        Sponsors
      </h2>
      <div className='max-w-5xl mx-auto px-1'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6 md:gap-x-8 py-1 items-center justify-items-center'>
          {currentSponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.website}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Visit ${sponsor.name} website`}
              className='h-16 sm:h-20 md:h-24 lg:h-28 flex items-center justify-center w-full rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#01A88D] focus-visible:ring-offset-2 hover:opacity-90 transition-opacity'
            >
              <img
                className='max-h-full w-full max-w-[min(42vw,200px)] md:max-w-[min(32vw,260px)] mx-auto object-contain'
                src={sponsor.logo}
                alt={sponsor.alt}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
