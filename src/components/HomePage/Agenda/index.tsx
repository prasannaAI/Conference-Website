import React from 'react';

import AgendaSection from './AgendaData';

const Agenda = () => {
  return (
      <div className="bg-backgroundDark text-color">
          <div className="mx-auto container py-16 px-6 md:px-0">
              <div className="flex">
              </div>
              <div className="flex w-full grid md:grid-cols-2">
                  <div>
                      <div className="text-6xl font-bold">Agenda</div>
                      <div className="leading-relaxed mt-8 max-w-[500px]">
                          The event is a three-day conference that promises to be a captivating and informative
                          experience. With a wide variety of sessions featuring eminent personalities and industry experts,
                          attendees can expect to gain valuable insights and knowledge.
                      </div>
                  </div>
                  <div className="mt-10 md:mt-0">
                      <AgendaSection />
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Agenda;