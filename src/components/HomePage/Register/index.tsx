import React from 'react';
import Link from 'next/link';

const Register = () => {

  return (
      <div className="bg-primary p-4 md:p-8">
          <div className="container mx-auto px-6">
              <div className="flex flex-col justify-between lg:flex-row sm:items-center items-start mx-auto">
                  <div className="text-2xl sm:text-4xl font-bold text-color">
                      <span>ISRS</span>
                      <span className="border-r mx-2 sm:mx-4" />
                      <span className="opacity-80">Educational Course</span>
                  </div>
                  <div className="flex items-center flex-col w-full md:w-auto sm:flex-row gap-8 lg:mt-0 justify-center md:justify-start mt-8">
                      <div>
                          <span className="text-2xl font-bold text-color">24 - 26 August</span>
                          <div className="text-lg font-bold text-color/70 flex">
                              <div>Amrita Institute of Medical Sciences, Kochi</div>
                          </div>
                      </div>
                      <div>
                          <Link
                              href="/registration"
                              className="bg-backgroundDark border-0 text-color font-bold py-2 px-8 focus:outline-none hover:bg-backgroundDark/80 rounded text-lg"
                          >
                              Register
                          </Link>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  );
};

export default Register;