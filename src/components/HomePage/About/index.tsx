import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Greetings! Herein, we are cordially inviting you to take part in the Educational Course of the International Stereotactic Radiosurgery Society (ISRS; www.ISRSy.org), which will be held in Kochi, Kerala, India, on August 24-26th, 2023.


const About = () => {
  return (
      <div className="bg-background text-color py-20 container mx-auto px-6 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col">
                  <div className="text-6xl font-bold">
                      About us
                  </div>
                  <div className="leading-relaxed text-xl mt-8 ">
                      <div className="w-full">
                          <div className="opacity-70">
                              Starting from December 2016, ISRS has launched its educational program with regular organization
                              of courses with a purpose to disseminate knowledge on current applications of stereotactic
                              irradiation in management of various neurosurgical and somatic diseases, and to provide
                              continuous medical education in this field.
                          </div>
                          <br />
                          <br />
                          <Link
                              className="font-semibold text-white"
                              target="_blank"
                              href="https://www.isrsy.org/"
                          >
                              Learn more 
                              {' '}
                              <span className="ml-2">&rarr;</span>
                          </Link>
                      </div>
                  </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end min-w-[300px]">
                  <div>
                      <Image
                          width={400}
                          height={250}
                          className="bg-white p-2 mt-16 lg:mt-0 rounded shadow object-cover object-center rounded"
                          alt="Speaking in Meeting "
                          src="/assets/images/logo.gif"
                      />
                  </div>
              </div>
          </div>
      </div>
  );
};

export default About;