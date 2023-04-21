import React from 'react';
import person from '../../assets/images/personpic.jpg'
import handIcon from '../../assets/icons/hand.svg'

function SpeakerSection() {
  return (
    <>
        <div className='bg-dark'>
        <section className="text-primary body-font">
     <div className="container px-5 pt-12 mx-auto">
        <div className='flex justify-center'> 
            <div className='text-3xl font-medium pb-10 hover:text-lightBlue'> Speakers </div>
        </div>
    
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-4 rounded-lg border-2 border-white">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src={person} alt="content" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Person</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-4 rounded-lg border-2 border-white">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src={person} alt="content" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Person</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-4 rounded-lg border-2 border-white">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src={person} alt="content" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Person</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-4 rounded-lg border-2 border-white">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src={person} alt="content" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Person</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
        <div className='flex justify-center py-10 '>
            <button className=' flex items-center p-4 outline rounded ' >
            <div className='text-primary hover:text-lightBlue'> See All Speakers </div> 
            <div className='h-6 ml-4 bg-primary rounded' >
            <img className='h-full' src={handIcon} slt='Hand sign' ></img>
            </div>
            </button>
        </div>
  </div>
</section>
</div>
    </>
  )
}

export default SpeakerSection;