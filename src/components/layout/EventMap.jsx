"use client"

import { useState } from "react"

const LEGEND_ITEMS_BY_FLOOR = {
  2: [
    {
      iconSrc: "/event-map/icons/volunteers-lounge-restricted.png",
      title: "Volunteers lounge",
      note: "restricted access",
    },
    {
      iconSrc: "/event-map/icons/community-lounge-food-drinks.png",
      title: "Community lounge",
      note: "food and drinks",
    },
    {
      iconSrc: "/event-map/icons/speakers-lounge-restricted.png",
      title: "Speakers lounge",
      note: "restricted access",
    },
    {
      iconSrc: "/event-map/icons/water-refill-station.png",
      title: "Water refill station",
    },
    { iconSrc: "/event-map/icons/washrooms.png", title: "Washrooms" },
    {
      iconSrc: "/event-map/icons/registration-tickets.png",
      title: "Registration and tickets",
    },
    {
      iconSrc: "/event-map/icons/venue-map-schedule.png",
      title: "Venue map and schedule",
    },
    {
      iconSrc: "/event-map/icons/entrance-exit.png",
      title: "Entrance and exit",
    },
    {
      iconSrc: "/event-map/icons/lockers-1-dollar.png",
      title: "Lockers",
      note: "1 dollar",
    },
    {
      iconSrc: "/event-map/icons/community-stage.png",
      title: "Community stage",
    },
    { iconSrc: "/event-map/icons/elevator.png", title: "Elevator" },
  ],
  5: [
    { iconSrc: "/event-map/icons/ai-experience.png", title: "Artificial Intelligence experience" },
    {
      iconSrc: "/event-map/icons/sound-visual-experience.png",
      title: "Sound and visual experience",
    },
    {
      iconSrc: "/event-map/icons/no-food-drink-allowed.png",
      title: "No food or drink allowed",
    },
    {
      iconSrc: "/event-map/icons/hackathon-teams-room.png",
      title: "Hackathon teams room",
    },
    {
      iconSrc: "/event-map/icons/water-refill-station.png",
      title: "Water refill station",
    },
    {
      iconSrc: "/event-map/icons/venue-map-schedule.png",
      title: "Venue map and schedule",
    },
    {
      iconSrc: "/event-map/icons/lockers-1-dollar.png",
      title: "Lockers",
      note: "1 dollar",
    },
    {
      iconSrc: "/event-map/icons/quiet-area-phone-calls.png",
      title: "Quiet area to take phone calls",
    },
    { iconSrc: "/event-map/icons/main-stage.png", title: "Main stage" },
    {
      iconSrc: "/event-map/icons/cloud-security-experience.png",
      title: "Cloud security experience",
    },
    { iconSrc: "/event-map/icons/elevator.png", title: "Elevator" },
    {
      iconSrc: "/event-map/icons/after-party-entrance.png",
      title: "After party entrance",
    },
    { iconSrc: "/event-map/icons/washrooms.png", title: "Washrooms" },
    {
      iconSrc: "/event-map/icons/cloud-chamber.png",
      title: "Cloud chamber",
    },
  ],
}

export default function EventMap() {
  const [selectedFloor, setSelectedFloor] = useState(2) // 2nd floor (Floor 1), 5th floor (Floor 2)

  const legendItems = LEGEND_ITEMS_BY_FLOOR[selectedFloor] ?? []

  return (
    <div className='mt-14 py-12 md:py-16'>
      <div className='mx-auto px-4 md:px-6'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-heroDate font-extrabold leading-none text-text-primary text-center mb-6 md:mb-12'>
          Event Map
        </h2>
        <p className="mx-auto max-w-[900px] text-gray-700 text-center text-lg mb-4 md:mb-12">
          Vancouver · Science World
        </p>

        <div className='flex flex-wrap items-center justify-between gap-6 mb-8'>
          {/* Floor tabs */}
          <div className='inline-flex rounded-lg border-2 border-[#FF9900] overflow-hidden flex-shrink-0'>
            <button
              type='button'
              onClick={() => setSelectedFloor(2)}
              className={`px-4 py-2 text-sm font-semibold transition-colors md:px-6 md:py-3 ${
                selectedFloor === 2
                  ? "bg-[#FF9900] text-white"
                  : "bg-white text-[#333E48] hover:bg-[#FFF3E0]"
              }`}
            >
              Floor 1
            </button>
            <button
              type='button'
              onClick={() => setSelectedFloor(5)}
              className={`px-4 py-2 text-sm font-semibold transition-colors md:px-6 md:py-3 ${
                selectedFloor === 5
                  ? "bg-[#FF9900] text-white"
                  : "bg-white text-[#333E48] hover:bg-[#FFF3E0]"
              }`}
            >
              Floor 2
            </button>
          </div>

          {/* Download button (PDF not wired yet) */}
          <a
            href='/event-map/cloud-summit-floorplan.pdf'
            download
            className='h-10 px-4 py-2 rounded text-white font-semibold bg-[#333E48] hover:bg-[#E88800] transition-colors max-w-64 md:h-auto md:px-8 md:py-4 md:rounded-lg flex-shrink-0'
          >
            Download Map PDF
          </a>
        </div>

        <div className='bg-white rounded-xl overflow-hidden border border-[#333E48]/10 shadow-xl'>
          <img
            src={
              selectedFloor === 5
                ? "/event-map/floor-2.png"
                : "/event-map/floor-1.png"
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
                key={`${item.title}-${item.note ?? ""}`}
                className='flex items-start gap-3 bg-white rounded-lg p-3'
              >
                <img
                  src={item.iconSrc}
                  alt={item.title}
                  className='w-10 h-10 object-contain flex-shrink-0'
                />
                <div className='min-w-0'>
                  <p className='text-sm font-semibold text-[#333E48] leading-tight'>
                    {item.title}
                  </p>
                  {item.note && (
                    <p className='text-xs text-gray-500 leading-tight mt-1'>
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
  )
}

