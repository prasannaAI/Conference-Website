import React from 'react';
import person from '../../../assets/images/personpic.jpg';
import dr from '../../../assets/images/Dr.-Debnarayan-Dutta.jpg';

function CourseDirector() {
  return (
    <>
        <div className='bg-secondary text-primary mt-4 p-20 rounded-b-[12rem]'>
      <div class="flex flex-wrap  -m-4">
            <div class="p-4 lg:w-1/2 flex justify-center">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={dr} />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">Dr Debnarayan Dutta</h2>
                  <h3 class="text-gray-500 mb-3">  Course Director </h3>
                  <p class="mb-4 text-textSecondaryColor">Prof & HOD,<br /> Radiation Oncology, <br /> 
                  Amrita Institute of Medical Sciences, Kochi</p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2  flex justify-center">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={person} />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">Dr Mikhail Chernov</h2>
                  <h3 class="text-gray-500 mb-3">Co-Director</h3>
                  <p class="mb-4 text-textSecondaryColor">
                  Chairman, <br/> Scientific Committee, ISRS Annex H,<br /> Chief Medical Physicist, <br/>
                  Amrita Institute of Medical Sciences, Kochi
                  </p>
                </div>
              </div>
            </div>
            </div >
        </div>
    </>
  )
}

export default CourseDirector;