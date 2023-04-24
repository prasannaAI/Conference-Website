import React from 'react'
import AgendaItem from '@/components/AgendaPage/AgendaItem';

import {AGENDA_DAY_THREE} from "@/components/AgendaPage/data/AgendaDayThree";

function Agenda24() {
  return (
      <div className=" pt-32 px-20 pb-10 container m-auto" >
        <div className="text-color">
          <div className="text-2xl md:text-4xl font-bold mb-4 opacity-60 px-4 md:px-0">
            Day 3
            {' '}
            <span className="text-xl md:text-3xl font-medium border-l ml-4 pl-4"> 26th August 2023</span>
          </div>
          {AGENDA_DAY_THREE.map((agenda, index) => (
              <AgendaItem light agenda={agenda} key={index} />
          ))}
        </div>
      </div>
  );
}

export default Agenda24;