import React from 'react';
import LocationIcon from '../../../assets/icons/location.svg'

function SectionContent() {
  return (
    <>
        <div className='w-[50%] bg-primary p-8 mt-4 px-20'>
            <div className='mt-4 flex-col'>
                <div className='text-secondary italic text-6xl flex'>
                    <div>
                        ISR
                    </div>
                    <div className='text-lightBlue'>
                        A
                    </div>
                </div>
                <div className='mt-1 text-3xl text-[#103869]'>
                    Educational Course
                </div>
                <div className='mt-4 text-xl text-[#3c4856]'>
                “SRS/SRT in Management of Benign Intracranial
                Tumors, Skull Base Tumors, and Abdominal, Genitourinary,
                and Gynecological
                Cancers; Modern Technologies for Radiosurgery”
                </div>
                <div className='text-secondary mt-8 flex '>
                    <div className='text-5xl'>2023</div>
                    <div className='text-xl ml-2 '>August 24 - 26</div>
                </div>
                <div className='mt-8 font-semibold'>
                    <div className=' text-textColor flex items-center'>                         
                        <img className='h-6 bg-black ml-1' src={LocationIcon} alt='location Icon' />                        
                    <div className='text-[#3c4856] ml-1'>Amrita Institute of Medical Sciences, Kochi, Kerala, INDIA</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SectionContent;