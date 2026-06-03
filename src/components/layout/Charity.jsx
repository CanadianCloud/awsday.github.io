import React from 'react';
import { getCharitySectionContent } from '@/lib/eventConstants';
import { Heart, Target, TrendingUp } from 'lucide-react';

function Charity({ city }) {
  const content = getCharitySectionContent(city);

  return (
    <div className='w-full mx-auto py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-red-50'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl'>
        {/* Main Card */}
        <div className='bg-white rounded-3xl shadow-xl overflow-hidden border border-red-100'>
          {/* Header Section with Icon */}
          <div className='bg-gradient-to-r from-red-500 to-red-600 pt-10 pb-8 px-6'>
            <div className='flex justify-center mb-4'>
              <div className='w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center'>
                <Heart className='w-10 h-10 text-white fill-white' strokeWidth={2} />
              </div>
            </div>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center leading-tight'>
              100% of Profits
              <span className='block mt-2'>Support Local Charity</span>
            </h2>
          </div>

          {/* Content Section */}
          <div className='p-6 md:p-10 lg:p-12'>
            {/* Stats/Impact Section */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
              <div className='text-center p-6 bg-red-50 rounded-xl'>
                <Target className='w-8 h-8 text-red-500 mx-auto mb-2' strokeWidth={2} />
                <p className='text-2xl md:text-3xl font-bold text-red-600 mb-1'>$10,000</p>
                <p className='text-sm text-gray-600'>Fundraising Goal</p>
              </div>
              <div className='text-center p-6 bg-red-50 rounded-xl'>
                <Heart className='w-8 h-8 text-red-500 mx-auto mb-2' strokeWidth={2} />
                <p className='text-2xl md:text-3xl font-bold text-red-600 mb-1'>100%</p>
                <p className='text-sm text-gray-600'>Community-Driven</p>
              </div>
              <div className='text-center p-6 bg-red-50 rounded-xl'>
                <TrendingUp className='w-8 h-8 text-red-500 mx-auto mb-2' strokeWidth={2} />
                <p className='text-2xl md:text-3xl font-bold text-red-600 mb-1'>Local</p>
                <p className='text-sm text-gray-600'>Impact & Support</p>
              </div>
            </div>

            {/* Description */}
            <div className='text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto space-y-4'>
              {content.paragraphs.map((text, i) => (
                <p key={i} className='text-center'>{text}</p>
              ))}
            </div>

            {/* Charity Logo */}
            <div className='mb-8 bg-gray-50 rounded-2xl p-8'>
              <img
                className='max-w-[220px] sm:max-w-xs md:max-w-sm lg:max-w-md h-auto mx-auto'
                src={content.logoSrc}
                alt={content.logoAlt}
              />
            </div>

            {/* CTA Button */}
            <div className='flex justify-center'>
              <a
                href={content.ctaHref}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-10 md:py-5 md:px-12 rounded-xl text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5'>
                {content.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charity;
