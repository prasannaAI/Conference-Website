import React from 'react';
import Link from 'next/link';

import FooterSection1 from '@/components/HomePage/Footer/section1';

const FOOTER_LINK1 = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Agenda',
        link: '/agenda',
    },
    {
        name: 'Speakers',
        link: '/speakers',
    },
    {
        name: 'Committee',
        link: '/committee',
    },
    {
        name: 'Registration',
        link: '/registration',
    }
];

const FOOTER_LINK2 = [
    {
        name: 'About',
        link: '/about',
    },
    {
        name: 'Contact',
        link: '/contact',
    },
    {
        name: 'Accommodation',
        link: '/accommodation',
    },
    {
        name: 'Venue',
        link: '/venue',
    }
];

const Footer = () => {
  return (
      <footer className="bg-background text-white flex flex-col body-font border-t border-gray-600">
          <div className="container mx-auto overflow-y-hidden pt-16 pb-8 flex h-full lg:items-start lg:flex-row lg:flex-nowrap flex-wrap flex-col">
              <FooterSection1 />
              <div className="lg:grid lg:grid-cols-3 w-full lg:mt-0 mt-20 flex justify-start flex-col md:flex-row">
                  <div className="col-span-2 flex gap-8 justify-center md:justify-end pr-5 min-w-64 md:text-left text-center">
                      <div className="px-4 text-left">
                          <div className="opacity-40 mb-3 text-sm font-normal">Quick Links</div>
                          <nav className="list-none mb-10">
                              {FOOTER_LINK1.map((item, index) => (
                                  <li key={index}>
                                      <Link
                                          className="text-textColor hover:text-primary"
                                          href={item.link}
                                      >
                                          {item.name}
                                      </Link>
                                  </li>
                          ))}
                          </nav>
                      </div>
                      <div className="text-left px-4">
                          <div className="opacity-40 text-sm font-normal mb-3 text-transparent">Quick Links</div>
                          <nav className="list-none mb-10">
                              {FOOTER_LINK2.map((item, index) => (
                                  <li key={index}>
                                      <Link
                                          className="text-textColor hover:text-primary"
                                          href={item.link}
                                      >
                                          {item.name}
                                      </Link>
                                  </li>
                          ))}
                          </nav>
                      </div>
                  </div>
                  <div className="font-semibold text-lg md:border-l border-gray-600 md:ml-5 mx-auto md:mx-0 md:pl-10 flex flex-col justify-center">
                      <div className="opacity-40 text-sm font-normal">Date & Venue</div>
                      <div>24 - 26 August, 2023</div>
                      <div className="mt-2">
                          Amrita Institute of Medical Sciences,
                          <br />
                          Kochi, Kerala, India
                      </div>
                  </div>
              </div>
          </div>
          <div className="flex justify-end mx-auto container py-6">
              <p className="text-gray-400 text-sm text-center sm:text-left">© All rights reserved</p>
          </div>
      </footer>
  );
};

export default Footer;