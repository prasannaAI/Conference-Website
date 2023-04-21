import React from 'react';
import logo from '../../assets/icons/logo.svg';
import DropdownBtn from '../TopBar/DropdownBtn'

function TopBar() {
  return (
    <>
        <div className='flex bg-primary border-b-[0.1rem] p-8 px-20 items-center justify-between '>
            <div >
                <img src={logo} alt='Logo For Website'/>
            </div>
            <div className='flex gap-8 text-textColor'>
                <button className='hover:text-lightBlue'>SPEAKERS</button>
                <button className='hover:text-lightBlue'>SCHEDULE</button>
                <button className='hover:text-lightBlue'>SPONSORS</button>
                <button className='hover:text-lightBlue'>CONTACT</button>
                <button className='hover:text-lightBlue'> REGISTRATION </button>
                {/* {<DropdownBtn />} */}
            </div>
        </div>
    </>
  )
}

export default TopBar