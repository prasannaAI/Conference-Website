import React from 'react';

function CourseDirector() {
  return (
      <div className="bg-white text-background ">
          <div className="py-8 flex flex-col container mx-auto px-6 ">
              <div className="flex pb-12 text-2xl mt-20">
                  <div className="text-4xl md:text-6xl font-bold">Committee</div>
              </div>
              <div className="flex flex-wrap justify-center  md:mt-8">
                  <div className=" lg:w-1/2  flex justify-start">
                      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/assets/images/dr-rakesh-jalali.jpg" />
                          <div className="flex-grow sm:pl-8">
                              <h2 className="title-font font-medium text-lg text-gray-900">Dr Rakesh Jalali</h2>
                              <h3 className="text-gray-500 mb-3">Director</h3>
                              <p className="mb-4 text-textSecondaryColor">
                                  Medical Director & HOD,
                                  {' '}
                                  <br />
                                  {' '}
                                  Radiation Oncology,
                                  <br />
                                  {' '}
                                  Apollo Proton Centre, Chennai
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className=" lg:w-1/2 flex">
                      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/assets/images/Dr.-Debnarayan-Dutta.jpg" />
                          <div className="flex-grow sm:pl-8">
                              <h2 className="title-font font-medium text-lg text-gray-900">Dr Debnarayan Dutta</h2>
                              <h3 className="text-gray-500 mb-3">  Co-Director </h3>
                              <p className="mb-4 text-textSecondaryColor">
                                  Prof & HOD,
                                  <br />
                                  {' '}
                                  Radiation Oncology,
                                  <br />
                                  Amrita Institute of Medical Sciences, Kochi
                              </p>
                          </div>
                      </div>
                  </div>

              </div >
          </div>
      </div>
  );
}

export default CourseDirector;