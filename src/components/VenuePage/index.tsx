import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const VenuePage = () => {
  return(
      <div className="pt-24 text-color">
          <div className="relative">
              <Image
                  src="/assets/clgImage/AIMS.jpg"
                  alt="Amrita Kochi"
                  className="w-screen min-h-[55vh] max-h-[90vh] object-cover object-bottom"
                  width={1000}
                  height={500}
              />
              <div
                  className="bg-white md:absolute bottom-0 gap-6 left-1/2 transform md:-translate-x-1/2 p-8 flex flex-col md:flex-row justify-between items-start md:items-center w-full z-10 shadow-md"
              >
                  <div className="order-1 md:order-1">
                      <h2 className="text-black/40 title-font">Venue</h2>
                      <p className="leading-relaxed text-black font-semibold">
                          Amrita Institute of Medical Sciences,
                          <br />
                          Kochi, Kerala,
                          India
                      </p>
                  </div>
                  <div className="order-3 md:order-2 md:mx-auto">
                      <Link href="#aims-kochi" className="text-black/50 flex flex-col items-center gap-2">
                          View in Map
                          <Image src="/assets/icons/chevrons-down.svg" alt="chevron-down" width={20} height={20} className="opacity-40 animate-bounce" />
                      </Link>
                  </div>
                  <div className="order-2 md:order-3">
                      <h2 className="text-black/40 title-font">Date</h2>
                      <p className="leading-relaxed text-black font-semibold">
                          24 - 26 August, 2023
                      </p>
                  </div>
              </div>
          </div>
          <section className="body-font h-[80vh] relative" id="aims-kochi">
              <div className="absolute inset-0 bg-gray-300">
                  <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="map"
                      scrolling="no"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.7924088060586!2d76.29080461479448!3d10.033982192827843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d95e11d781d%3A0x5c13731499791506!2sAIMS%20Kochi!5e0!3m2!1sen!2sin!4v1683747012245!5m2!1sen!2sin"
                  ></iframe>
              </div>
          </section>
      </div>
  );
};

export default VenuePage;