import React from 'react';

function CourseDirector() {
  return (
      <div className="bg-secondary text-primary px-20 py-8 ml-4 rounded-l-[12rem]">
          <div className="flex justify-center font-medium pb-12 text-2xl">
              <div >COMMITTEE</div>
          </div>
          <div className="flex flex-wrap  -m-4">
              <div className="p-4 lg:w-1/2 flex justify-center">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/assets/images/Dr.-Debnarayan-Dutta.jpg" />
                      <div className="flex-grow sm:pl-8">
                          <h2 className="title-font font-medium text-lg text-gray-900">Dr Debnarayan Dutta</h2>
                          <h3 className="text-gray-500 mb-3">  Course Director </h3>
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
              <div className="p-4 lg:w-1/2  flex justify-center">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/assets/images/personpic.jpg" />
                      <div className="flex-grow sm:pl-8">
                          <h2 className="title-font font-medium text-lg text-gray-900">Dr Mikhail Chernov</h2>
                          <h3 className="text-gray-500 mb-3">Co-Director</h3>
                          <p className="mb-4 text-textSecondaryColor">
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
                          </p>
                      </div>
                  </div>
              </div>
          </div >
      </div>
  );
}

export default CourseDirector;