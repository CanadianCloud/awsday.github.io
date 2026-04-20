import { currentSponsors } from '@/lib/sponsorsConstants';

export function CurrentSponsors() {
  return (
    <section className='text-center px-2'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#01A88D] mb-6 md:mb-8 text-center'>
        Sponsors
      </h2>
      <div className='max-w-6xl mx-auto px-1'>
        <div className='flex flex-wrap justify-center py-1'>
          {currentSponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.website}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Visit ${sponsor.name} website`}
              className='w-1/3 lg:w-1/4 p-2 sm:p-3 md:p-4 h-16 sm:h-20 md:h-24 lg:h-28 flex items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#01A88D] focus-visible:ring-offset-2 hover:opacity-90 transition-opacity'
            >
              <img
                className='max-h-full w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[220px] mx-auto object-contain'
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
