import React from 'react';
import AgendaImg from '../../assets/images/AgendaSVG.svg'
import AgendaData from './AgendaData';

function Agenda() {
  return (
    <>
        <div className='flex justify-center pt-8'>
            <div className='text-4xl font-medium hover:text-lightBlue'>Agenda</div>
        </div>
        <div className='flex w-full  px-20 pt-8'>
            <div className='w-5/12  flex justify-center'> 
                <img className='w-3/4 h-full' src={AgendaImg} alt='AgendaImage'/>
            </div>
            <div className='w-[60%] '>
                {<AgendaData/>}
            </div>
        </div>
    </>
  )
}

export default Agenda