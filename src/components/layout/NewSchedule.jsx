import { newSchedule } from '@/lib/newScheduleConstants';

export function NewSchedule() {
  return (
    <section id='schedule' className=''>
      <h3 className='text-xl lg:text-3xl xl:text-4xl font-heading font-extrabold mb-1 text-center'>
        Schedule
      </h3>
      <div className='flex flex-col gap-6 w-1/2 justify-self-center'>
        {newSchedule.map((slot) => {
          return (
            <div className='grid grid-cols-2 border-b-4'>
              {slot.endTime ? (
                <p className='font-bold'>
                  {slot.startTime} - {slot.endTime}
                </p>
              ) : (
                <p className='font-bold'>{slot.startTime}</p>
              )}
              <ul className='text-end'>
                {slot.activities.map((activity) => {
                  return <li>{activity}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
