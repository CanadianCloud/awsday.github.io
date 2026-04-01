import { newSchedule } from '@/lib/newScheduleConstants';

export function NewSchedule() {
  return (
    <section
      id='schedule'
      className='w-full pt-16 md:pt-24 pb-24 md:pb-32 bg-white text-[#333E48]'>
      <div className='container px-4 md:px-6 m-auto max-w-6xl'>
        <h2 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-10'>
          Schedule
        </h2>

        <div className='flex flex-col gap-4 sm:gap-6 w-full max-w-3xl mx-auto'>
          {newSchedule.map((slot) => (
            <div
              key={`${slot.startTime}-${slot.endTime ?? ''}-${slot.activities?.[0] ?? ''}`}
              className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border-b border-gray-200 pb-3 sm:pb-4'>
              <p className='font-bold text-sm sm:text-lg leading-snug'>
                {slot.endTime
                  ? `${slot.startTime} - ${slot.endTime}`
                  : slot.startTime}
              </p>
              <ul className='text-left sm:text-right'>
                {slot.activities.map((activity, idx) => (
                  <li
                    key={activity}
                    className={
                      idx === 0
                        ? 'font-extrabold text-sm sm:text-lg leading-snug sm:whitespace-nowrap'
                        : 'text-sm sm:text-base text-gray-600 leading-snug sm:whitespace-nowrap'
                    }>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
