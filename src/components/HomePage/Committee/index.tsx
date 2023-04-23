import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const SpeakerSection = () => {

    const COMMITTEE_DATA = [
        {
            name: 'Dr. Debnarayan Dutta',
            designation: 'Director',
            image: '/assets/images/Dr.-Debnarayan-Dutta.jpg',
            bio: () => (
                <>
                    Prof & HOD,
                    <br />
                    {' '}
                    Radiation Oncology,
                    <br />
                    Amrita Institute of Medical Sciences, Kochi
                </>
            ),
        },
        {
            name: 'Dr Mikhail Chernov',
            designation: 'Co-Director',
            image: '/assets/images/personpic.jpg',
            bio: () => (
                <>
                    Chairman,
                    {' '}
                    <br />
                    {' '}
                    Scientific Committee, ISRS Annex H,
                    <br />
                    {' '}
                    Chief Medical Physicist,
                    <br />
                    Amrita Institute of Medical Sciences, Kochi
                </>
            ),
        },
    ];

    return (
        <div className="bg-backgroundDark">
            <section className="text-primary body-font">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex justify-between item-center text-color">
                        <div className="text-6xl font-bold pb-10">Committee</div>
                        <div className="text-lg font-medium pb-10 max-w-[500px] opacity-70">
                            Get inspired by our diverse lineup of speakers, who will share their unique insights
                            and experiences with you. Don't miss the chance to learn from these renowned experts.
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

// export default SpeakerSection;

const CourseDirector = () => {
  return (
      <div className="bg-background text-color mt-4 p-20">
          <div className="flex flex-wrap -m-4 container mx-auto">
              <div className="flex justify-between item-center w-full text-color">
                  <div className="text-6xl font-bold pb-10">Committee</div>
                  <div className="text-lg font-medium pb-10 max-w-[500px] opacity-70">
                      Get inspired by our diverse lineup of speakers, who will share their unique insights
                      and experiences with you. Don't miss the chance to learn from these renowned experts.
                  </div>
              </div>
              <div className="p-4 lg:w-1/2 flex justify-center">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/assets/images/Dr.-Debnarayan-Dutta.jpg" />
                      <div className="flex-grow sm:pl-8">
                          <h2 className="title-font font-semibold text-xl">Dr Debnarayan Dutta</h2>
                          <h3 className="text-gray-400 font-semibold mb-3">Course Director</h3>
                          <p className="mb-4 text-textSecondaryColor">

                          </p>
                      </div>
                  </div>
              </div>
              <div className="p-4 lg:w-1/2  flex justify-center">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/assets/images/personpic.jpg" />
                      <div className="flex-grow sm:pl-8">
                          <h2 className="title-font font-medium text-lg text-gray-900">Dr Mikhail Chernov</h2>
                          <h3 className="text-gray-500 mb-3">Co-Director</h3>
                          <p className="mb-4 text-textSecondaryColor">

                          </p>
                      </div>
                  </div>
              </div>
          </div >
      </div>
  );
};

export default CourseDirector;