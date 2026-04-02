'use client';

import { useState } from 'react';

const LEGEND_ITEMS_BY_FLOOR = {
  2: [
    {
      iconSrc: '/event-map/icons/volunteers-lounge-restricted.png',
      title: 'Volunteers lounge',
      note: 'restricted access',
    },
    {
      iconSrc: '/event-map/icons/community-lounge-food-drinks.png',
      title: 'Community lounge',
      note: 'food and drinks',
    },
    {
      iconSrc: '/event-map/icons/speakers-lounge-restricted.png',
      title: 'Speakers lounge',
      note: 'restricted access',
    },
    {
      iconSrc: '/event-map/icons/water-refill-station.png',
      title: 'Water refill station',
    },
    { iconSrc: '/event-map/icons/washrooms.png', title: 'Washrooms' },
    {
      iconSrc: '/event-map/icons/registration-tickets.png',
      title: 'Registration and tickets',
    },
    {
      iconSrc: '/event-map/icons/venue-map-schedule.png',
      title: 'Venue map and schedule',
    },
    {
      iconSrc: '/event-map/icons/entrance-exit.png',
      title: 'Entrance and exit',
    },
    {
      iconSrc: '/event-map/icons/lockers-1-dollar.png',
      title: 'Lockers',
      note: '$1',
    },
    {
      iconSrc: '/event-map/icons/community-stage.png',
      title: 'Community stage',
    },
    { iconSrc: '/event-map/icons/elevator.png', title: 'Elevator' },
  ],
  5: [
    {
      iconSrc: '/event-map/icons/ai-experience.png',
      title: 'Artificial Intelligence experience',
    },
    {
      iconSrc: '/event-map/icons/sound-visual-experience.png',
      title: 'Sound and visual experience',
    },
    {
      iconSrc: '/event-map/icons/no-food-drink-allowed.png',
      title: 'No food or drink allowed',
    },
    {
      iconSrc: '/event-map/icons/hackathon-teams-room.png',
      title: 'Hackathon teams room',
    },
    {
      iconSrc: '/event-map/icons/water-refill-station.png',
      title: 'Water refill station',
    },
    {
      iconSrc: '/event-map/icons/venue-map-schedule.png',
      title: 'Venue map and schedule',
    },
    {
      iconSrc: '/event-map/icons/lockers-1-dollar.png',
      title: 'Lockers',
      note: '$1',
    },
    {
      iconSrc: '/event-map/icons/quiet-area-phone-calls.png',
      title: 'Quiet area to take phone calls',
    },
    { iconSrc: '/event-map/icons/main-stage.png', title: 'Main stage' },
    {
      iconSrc: '/event-map/icons/cloud-security-experience.png',
      title: 'Cloud security experience',
    },
    { iconSrc: '/event-map/icons/elevator.png', title: 'Elevator' },
    {
      iconSrc: '/event-map/icons/after-party-entrance.png',
      title: 'After party entrance',
      note: 'restricted access',
    },
    { iconSrc: '/event-map/icons/washrooms.png', title: 'Washrooms' },
    {
      iconSrc: '/event-map/icons/cloud-chamber.png',
      title: 'Cloud chamber',
    },
  ],
};

export default function EventMap() {
  const [selectedFloor, setSelectedFloor] = useState(2); // 2nd floor (Floor 1), 5th floor (Floor 2)

  const legendItems = LEGEND_ITEMS_BY_FLOOR[selectedFloor] ?? [];

  return (
    <div id="event-map" className='mt-14 pt-8 pb-12 md:pt-16 md:pb-16'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-heroDate font-extrabold leading-none text-text-primary text-center mb-6 md:mb-12'>
          Event Map
        </h2>
        <p className='mx-auto max-w-[900px] text-gray-700 text-center text-lg mb-4 md:mb-12'>
          Vancouver · Science World
        </p>

        <div className='flex flex-wrap items-center justify-between gap-6 mb-8'>
          {/* Floor tabs */}
          <div className='inline-flex rounded-lg border-2 border-[#FF9900] overflow-hidden flex-shrink-0'>
            <button
              type='button'
              onClick={() => setSelectedFloor(2)}
              className={`px-3 py-1.5 text-sm md:text-base font-semibold transition-colors md:px-6 md:py-3 ${
                selectedFloor === 2
                  ? 'bg-[#FF9900] text-white'
                  : 'bg-white text-[#333E48] hover:bg-[#FFF3E0]'
              }`}>
              Floor 1
            </button>
            <button
              type='button'
              onClick={() => setSelectedFloor(5)}
              className={`px-3 py-1.5 text-sm md:text-base font-semibold transition-colors md:px-6 md:py-3 ${
                selectedFloor === 5
                  ? 'bg-[#FF9900] text-white'
                  : 'bg-white text-[#333E48] hover:bg-[#FFF3E0]'
              }`}>
              Floor 2
            </button>
          </div>

          {/* Download button (PDF not wired yet) */}
          <a
            href='/event-map/aws-floorplan.pdf'
            download
            className='h-10 px-4 py-2 rounded text-primary-foreground text-white bg-[#333E48] hover:bg-[#FF9900] max-w-64 flex-shrink-0'>
            Download Map
          </a>
        </div>

        <div className='bg-white rounded-xl overflow-hidden border border-[#333E48]/10 shadow-xl'>
          <img
            src={
              selectedFloor === 5
                ? '/event-map/floor-2.png'
                : '/event-map/floor-1.png'
            }
            alt='Event map'
            className='w-full h-auto'
          />
        </div>

        {/* Icon legend */}
        <div className='mt-10'>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-0 sm:gap-4'>
            {legendItems.map((item) => (
              <div
                key={`${item.title}-${item.note ?? ''}`}
                className='flex items-start gap-1.5 md:gap-3 bg-white rounded-lg p-1.5 md:p-3'>
                <img
                  src={item.iconSrc}
                  alt={item.title}
                  className='w-7 h-7 md:w-10 md:h-10 object-contain flex-shrink-0'
                />
                <div className='min-w-0'>
                  <p className='text-[11px] md:text-sm font-semibold text-[#333E48] leading-tight'>
                    {item.title}
                  </p>
                  {item.note && (
                    <p className='text-[10px] md:text-xs text-gray-500 leading-tight mt-0.5 md:mt-1'>
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
