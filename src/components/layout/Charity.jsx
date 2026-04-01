import React from 'react';
import { getCharitySectionContent } from '@/lib/eventConstants';

function Charity({ city }) {
  const content = getCharitySectionContent(city);

  return (
    <div className='w-full mx-auto p-6 md:p-8 lg:p-12 bg-white'>
      <div className='container flex flex-col items-center gap-4 rounded-2xl border-2 border-dashed py-10 px-6 mx-auto px-auto '>
        <div className='flex justify-center mb-6'>
          <img
            src='/charity/handWithHearth.svg'
            alt='hand outlined in red with heart in it'
          />
        </div>

        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-6 md:mb-8 text-center'>
          All Profits Donated to Local Charity
        </h2>

        <div className='text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto text-center space-y-4'>
          {content.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>

        <div className='mb-8 md:mb-10'>
          <img
            className='max-w-[220px] sm:max-w-xs md:max-w-sm lg:max-w-md h-auto mx-auto'
            src={content.logoSrc}
            alt={content.logoAlt}
          />
        </div>

        <a
          href={content.ctaHref}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-[#DD344C] hover:bg-red-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 lg:py-4 lg:px-10 rounded-lg text-base md:text-lg max-w-72 text-center'>
          {content.ctaLabel}
        </a>
      </div>
    </div>
  );
}

export default Charity;
