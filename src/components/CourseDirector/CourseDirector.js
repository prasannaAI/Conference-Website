import React from 'react';
import person from '../../assets/images/personpic.jpg'

function CourseDirector() {
  return (
    <>
        <div className='bg-secondary text-primary mt-4 p-20 rounded-b-[12rem]'>
        <section class="text-gray-600 body-font">
  <div class="container px-5  mx-auto relative"> 
    <div className='flex font-semibold text-2xl mb-4 ml-4'>
        Course Director 
    </div>
    <div className='absolute top-0 right-10 font-semibold text-2xl mb-4 ml-4'>
        Co-Director
    </div>
    <div class="flex flex-wrap -mx-4 -mb-10  text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={person} />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Dr Debnarayan Dutta</h2>
        <p class="leading-relaxed text-base text-textSecondaryColor">Prof & HOD,<br /> Radiation Oncology, <br /> 
        Amrita Institute of Medical Sciences, Kochi
        </p>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={person} />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Dr Mikhail Chernov</h2>
        <p class="leading-relaxed text-base text-textSecondaryColor">
          Chairman, <br/> Scientific Committee, ISRS Annex H, Chief Medical Physicist, <br/>
          Amrita Institute of Medical Sciences, Kochi </p>
      </div>
    </div>
  </div>
</section>
        </div>
    </>
  )
}

export default CourseDirector;