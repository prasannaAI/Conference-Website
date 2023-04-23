import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AGENDA_DATES = [
    {
        date: '24 AUG 2023',
        link: '/agenda/day-1',
    },
    {
        date: '25 AUG 2023',
        link: '/agenda/day-2',
    },
    {
        date: '26 AUG 2023',
        link: '/agenda/day-3',
    }
];

const AgendaSection = () => {

  return (
      <div className="flex justify-center items-center h-full">
          <section className="text-gray-600 body-font flex flex-col gap-4 max-w-[500px] w-full">
              {AGENDA_DATES.map((data, i) => (
                  <Link 
                      className="bg-background group border-gray-800 transition duration-200 border rounded hover:border-gray-500/80 flex items-center text-3xl py-4 px-8 text-color justify-between"
                      href={data.link}
                      key={i}
                  >
                      <div>
                          <div className="font-semibold">
                              <span className="opacity-40">Day</span>
                              <span className="ml-5 opacity-80 group-hover:opacity-100 text-3xl">{i+1}</span>
                          </div>
                          <div className="text-base opacity-70 mt-2">
                              {data.date}
                          </div>
                      </div>
                      <div className="opacity-40 group-hover:opacity-100">
                          <Image src="/assets/icons/chevron-right.svg" alt="chevron-right" width={30} height={30} />
                      </div>
                  </Link>
              ))}
          </section>
      </div>
  );
};

export default AgendaSection;