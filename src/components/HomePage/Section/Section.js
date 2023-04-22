import React from 'react';
import SectionContent from './SectionContent';
import SectionImage from './SectionImage';

function Section() {
  return (
    <>
        <div className='flex'>
            <SectionContent />
            <SectionImage />
        </div>
    </>
  )
}

export default Section;