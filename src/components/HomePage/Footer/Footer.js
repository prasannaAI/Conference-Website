import React from 'react';
import LocationIcon from '../../../assets/icons/location.svg'
import { useNavigate } from 'react-router-dom';

function Footer() {

  const navigate = useNavigate()

  return (
    <>
      <div className=''>
      <footer className="bg-textSecondaryColor body-font">
        <div className="container px-20 py-16  flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64  flex-shrink-0 md:mx-0  mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">Tailblocks</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
          </div>
          <div className="flex-grow flex flex-wrap justify-end md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            
            
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li>
                  <button className="text-textColor hover:text-primary"
                  onClick={() => navigate('registration')}>                  
                    Register</button>
                </li>
                <li>
                  <button className="text-textColor hover:text-primary"
                  onClick={() => navigate('agenda24')}>
                    Agenda</button>
                </li>
                <li>
                  <button className="text-textColor hover:text-primary"
                  onClick={() => navigate('committee')}
                  >Committee</button>
                </li>
                <li>
                  <button className="text-textColor hover:text-primary"
                  onClick={() => navigate('speakers')}>
                    Speakers</button>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav class="list-none mb-10">
                <li>
                  <button className="text-textColor hover:text-primary"
                  onClick={() => navigate('/')}>
                    Home
                    </button>
                </li>
                <li>
                  <button className="text-textColor hover:text-primary"
                  onClick={() => navigate('')}>
                    Contact
                    </button>
                </li>
                <li>
                  <button className="text-textColor hover:text-primary"
                  onClick={() => navigate('')}>
                    Supporters
                    </button>
                </li>
                <li>
                  <button className="text-textColor hover:text-primary"
                  onClick={() => navigate('')}>
                    Accommodation
                    </button>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-secondary">
          <div className="container mx-auto py-4 px-20 flex-col  justify-center sm:flex-row">
          <div className='flex justify-center px-20 mb-4 '>
        <img className='h-6 bg-black mr-2' src={LocationIcon} alt='location Icon' />
        <div className='text-primary'>Amrita Institute of Medical Sciences, Kochi, Kerala, India</div>
        </div>
            <div className='flex justify-center'>
            <p className="text-primary text-sm text-center sm:text-left">© 2020 Tailblocks </p>
            </div>            
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}

export default Footer;