import React from 'react';
import Image from 'next/image';

const Section = () => {
  return (
      <div className="flex h-screen px-4 container mx-auto">
          <Image src="/assets/images/bgi-cover.jpg" alt="Conference" fill className="object-cover" />
          <div className="absolute top-0 inset-0 bg-black/50 h-full w-full bg-gradient-to-r from-background to-transparent" />
          <div className="flex flex-col justify-center items-start z-10 mt-32">
              <div className="text-white font-semibold text-4xl md:text-6xl flex flex-col">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 ">
                      <div>ISRS</div>
                      <div className="h-2 w-2 rounded-full bg-gray-600 mx-3 hidden md:block" />
                      <div className="whitespace-nowrap">Educational Course</div>
                  </div>
                  <div className="flex flex-col gap-2 h-1 w-32 mt-2 rounded-full bg-primary" />
              </div>
              <div className="flex flex-col items-start gap-4 mt-10">
                  <div className="text-2xl md:text-4xl flex">
                      <span className="text-white font-semibold">24 - 26 August</span>
                  </div>
                  <div className="font-semibold">
                      <div className="flex items-start text-xl">
                          <div className="text-gray-200 font-normal">
                              <div>Amrita Institute of Medical Sciences,</div>
                              <div>Kochi, Kerala, India</div>
                          </div>
                      </div>
                  </div>
                  <div className="font-semibold">
                      <button className="bg-primary text-white px-4 py-2 rounded">Register Now</button>
                  </div>
                  
                  <div className="pt-20 text-left uppercase md:text-2xl text-color max-w-[600px] opacity-60">
                      SRS/SRT in Management of Benign Intracranial
                      Tumors, Skull Base Tumors, and Abdominal, Genitourinary,
                      and Gynecological Cancers; Modern Technologies for Radiosurgery
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Section;