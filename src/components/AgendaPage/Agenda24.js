import React from 'react'
import AgendaItem from '@/components/AgendaPage/AgendaItem';
import {AGENDA_DAY_ONE} from "@/components/AgendaPage/data/AgendaDayOne";

function Agenda24() {
  return (
    <div className=" pt-16 px-20 pb-10 container m-auto " >
      <div className=" text-color">
          <div className=" flex flex-col justify-between md:flex-row py-20 ">
              <div className="text-2xl md:text-4xl font-bold mb-4 opacity-60 px-4 md:px-0"> AGENDA </div>
              <div className="text-2xl md:text-4xl font-bold mb-4 opacity-60 px-4 md:px-0">
                  Day 1
                  {' '}
                  <span className="text-xl md:text-3xl font-medium border-l ml-4 pl-4"> 24th August 2023</span>
              </div>
          </div>
        {AGENDA_DAY_ONE.map((agenda, index) => (
            <AgendaItem light agenda={agenda} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Agenda24;