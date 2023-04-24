import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Section = () => {
  return (
      <div className="flex h-screen px-4 container mx-auto px-6">
          <Image src="/assets/images/bgi-cover.jpg" alt="Conference" fill className="object-cover" />
          <div className="absolute top-0 inset-0 bg-black/50 h-full w-full bg-gradient-to-r from-background to-transparent" />
          <div className="flex flex-col justify-center items-start z-10 pb-10 pt-10 lg:pt-28 xl:pt-10 mt-10">
              <div className="text-white font-semibold text-4xl md:text-5xl 2xl:text-6xl flex flex-col">
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <div>ISRS</div>
                      <div className="w-2 h-2 rounded-full bg-gray-600 mx-3 hidden md:block" />
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
                      <Link href="/registration">
                      <button  className="bg-primary text-white px-4 py-2 rounded">Register Now</button>
                      </Link>
                  </div>
                  
                  <div className="pt-20 lg:pt-10 xl:pt-20 text-left font-bold  md:text-lg text-color max-w-[600px] opacity-60">
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