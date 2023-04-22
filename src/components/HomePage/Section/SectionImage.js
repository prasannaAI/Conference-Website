import React from 'react';
import image from '../../../assets/images/meeting_image.webp'

function SectionImage() {
  return (
    <>
        <div className='w-[50%] bg-primary'>
            <div className='h-full bg-primary rounded-bl-[25rem] overflow-hidden'>
                <img src={image} alt='Conference Meeting Hall'></img>
            </div>
        </div>
    </>
  )
}

export default SectionImage;