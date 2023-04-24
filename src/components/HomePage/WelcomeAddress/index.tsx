import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Greetings! Herein, we are cordially inviting you to take part in the Educational Course of the International Stereotactic Radiosurgery Society (ISRS; www.ISRSy.org), which will be held in Kochi, Kerala, India, on August 24-26th, 2023.


const About = () => {
  return (
      <div className="bg-background text-color py-20 container mx-auto px-6 ">

              <section className="text-gray-400 bg-gray-900 body-font">
                  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
                      <div
                          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                          <h1 className="title-font sm:text-4xl text-3xl  mb-4 mt-4 font-medium text-color ">
                              Welcome Address

                          </h1>
                          <div className=" leading-relaxed text-xl text-textSecondaryColor ms-2 ">
                              Greetings! Herein, we are cordially inviting you to take part in the Educational Course of
                              the International Stereotactic Radiosurgery Society (ISRS; www.ISRSy.org), which will be
                              held in Kochi, Kerala, India, on August 24-26th, 2023.
                              Starting from December 2016, ISRS has launched its educational program with regular
                              organization of courses with a purpose to disseminate knowledge on current applications of
                              stereotactic irradiation in management of various neurosurgical and somatic diseases, and
                              to provide continuous medical education in this field.{' '}<br/>
                              <Link href='/welcomeAddress'>
                              <button className='underline font-bold hover:text-lightBlue'>
                                  Know More
                              </button>
                              </Link>
                          </div>

                      </div>
                      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                          <img className="object-cover object-center rounded" alt="Speaking in Meeting "
                               src="/assets/images/public.svg" />
                      </div>
                  </div>
              </section>

      </div>
  );
};

export default About;