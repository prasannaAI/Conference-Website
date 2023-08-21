import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import AgendaSection from './AgendaData';

const Agenda = () => {
  return (
      <div className="bg-backgroundDark text-color">
          <div className="mx-auto container py-16 px-6 ">
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
                      <div className="flex justify-start py-10 ">
                          <a href="/assets/docs/FinalAgendaonly.pdf" download="Agenda" >
                              <div className="text-color hover:text-color border border-transparent bg-gray-500/30 transition duration-300 hover:bg-gray-500/20 py-4 px-6 rounded text-xl flex justify-between">
                                  <div> Download Agenda </div>
                                  <div className="ml-8">
                                      <Image src="/assets/icons/download-icon.svg" alt="chevron-right" width={30} height={30} />
                                  </div>
                              </div>
                          </a>
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