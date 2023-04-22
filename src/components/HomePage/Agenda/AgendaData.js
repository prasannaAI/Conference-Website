import React from 'react';
import four from '../../../assets/icons/two.svg';
import two from '../../../assets/icons/four.svg';
import five from '../../../assets/icons/five.svg';
import zero from '../../../assets/icons/zero.svg';
import three from '../../../assets/icons/three.svg';
import { useNavigate } from 'react-router-dom';

function AgendaData() {

  const navigate = useNavigate();

  return (
    <>
        <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-2 mx-auto">
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <div className='flex w-8'>
            <img src={two}  alt='two number'/>
            <img src={four} alt='four number' />
        </div>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Radiosurgery: Basic Principles and Correct Terminology</h2>
        <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <button className="mt-3 text-indigo-500 inline-flex items-center hover:text-lightBlue"
         onClick={() => navigate('agenda24')}>
          Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Management of Vestibular Schwannomas</h2>
        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <button className="mt-3 text-indigo-500 inline-flex items-center hover:text-lightBlue"
        onClick={() => navigate('agenda25')}>
          Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <div className='flex w-8'>
            <img src={two}  alt='two number'/>
            <img src={five} alt='four number' />
        </div>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <div className='flex w-8'>
            <img src={zero}  alt='two number'/>
            <img src={three} alt='four number' />
        </div>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">SRS/SRT for Abdominal Cancers</h2>
        <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <button className="mt-3 text-indigo-500 inline-flex items-center hover:text-lightBlue"
        onClick={() => navigate('agenda3')}>
          Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
        </div>
    </>
  )
}

export default AgendaData;