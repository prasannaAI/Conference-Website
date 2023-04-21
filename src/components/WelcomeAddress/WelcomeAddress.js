import React from 'react';
import WelcomeImg from '../../assets/images/politician-giving-his-speech-to-public.svg';

function WelcomeAddress() {
  return (
    <>
        <div className='bg-secondary px-20 mt-8 rounded-t-[12rem] '>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl  mb-4 mt-4 font-medium text-primary hover:text-lightBlue"> Welcome Address❤️
                    
                </h1>
                <div class=" leading-relaxed text-xl text-textSecondaryColor ms-2 ">
                Greetings! Herein, we are cordially inviting you to take part in the Educational Course of the International Stereotactic Radiosurgery Society (ISRS; www.ISRSy.org), which will be held in Kochi, Kerala, India, on August 24-26th, 2023. 
                Starting from December 2016, ISRS has launched its educational program with regular organization of courses with a purpose to disseminate knowledge on current applications of stereotactic irradiation in management of various neurosurgical and somatic diseases, and to provide continuous medical education in this field.{' '}
                <button className='underline hover:text-lightBlue'>More to Know</button>    
                </div>
                
                
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img class="object-cover object-center rounded" alt="Speaking in Meeting " src={WelcomeImg} />
                </div>
            </div>
            </section>
        </div>
    </>
  );
}

export default WelcomeAddress