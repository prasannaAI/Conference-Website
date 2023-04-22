import React from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  return (
    <>
        <div className='bg-primary p-8'>
            <section class="text-gray-600 body-font">
                <div class="container  mx-auto">
                    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                    <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-textColor">
                     Industry leaders and experts at the forefront of innovation and gain valuable insights to enhance your professional development.
                    </h1>
                    <button class="flex-shrink-0 text-white bg-indigo-500 border-2 py-2 px-8 focus:outline-none hover:text-lightBlue rounded text-2xl mt-10 sm:mt-0"
                    onClick={() => navigate('registration')}>
                      Register 🎗️ </button>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Register;