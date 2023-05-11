import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SPEAKER_DATA = [
    {
        name: 'Person',
        image: '/assets/images/personpic.jpg',
    },
    {
        name: 'Person',
        image: '/assets/images/personpic.jpg',
    },
    {
        name: 'Person',
        image: '/assets/images/personpic.jpg',
    },
    {
        name: 'Person',
        image: '/assets/images/personpic.jpg',
    },
];

const SpeakerSection = () => {

  return (
      <div className="bg-dark">
          <section className="text-primary body-font">
              <div className="container px-5 py-16 mx-auto">
                  <div className="flex justify-between item-center text-color">
                      <div className="text-6xl font-bold pb-10">Speakers</div>
                      <div className="text-lg font-medium pb-10 max-w-[500px] opacity-70">
                          Get inspired by our diverse lineup of speakers, who will share their unique insights
                          and experiences with you. Don`t miss the chance to learn from these renowned experts.
                      </div>
                  </div>
    
                  <div className="flex flex-wrap justify-between -m-4">
                      {SPEAKER_DATA.map((item, index) => (
                          <div key={index} className="p-4">
                              <div className="p-4 rounded-lg text-color border border-white/20">
                                  <Image width={300} height={300} className="rounded aspect-square object-cover object-center mb-6" src={item.image} alt="speaker" />
                                  <div className="flex flex-col items-center">
                                      <h2 className="text-lg font-semibold title-font mb-2">{item.name}</h2>
                                      <p className="leading-relaxed text-base opacity-60">
                                          Lorem Ipsum
                                      </p>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
                  <div className="flex justify-end py-10 ">
                      <Link href="/speakers">
                          <div className="text-color hover:text-color border border-transparent bg-gray-500/30 transition duration-300 hover:bg-gray-500/20 py-4 px-6 rounded text-xl flex justify-between">
                              <div>See All Speakers</div>
                              <div className="ml-8">&rarr;</div>
                          </div>
                      </Link>
                  </div>
              </div>
          </section>
      </div>
  );
};

export default SpeakerSection;