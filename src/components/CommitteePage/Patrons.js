import React from 'react';

import ProfileCard from '@/components/shared/ProfileCard';

function Patrons() {


  const data = [
    {
      id: 1,
      src: 'https://dummyimage.com/720x400',
      name: 'Dr Prem Nair',
      department: 'Provost',
      college: ' Amrita Vishwa Vidyapeetham',
      place: '',
    },
    {
      id: 2,
      src: 'https://dummyimage.com/720x400',
      name: 'Dr Sanjeev Singh',
      department: 'Medical Director',
      college: ' Amrita Institute of Medical Sciences',
      place: 'Delhi-NCR',
    },
    {
      id: 3,
      src: 'https://dummyimage.com/720x400',
      name: 'Dr Gireesh Kumar K.P',
      department: 'Principal',
      college: ' Amrita Institute of Medical Sciences',
      place: 'Kochi',
    },

  ];

  return (
      <div className="bg-white">
          <section className="py-8 px-6 md:px-0 body-font">
              <div className="container pt-8 mx-auto">
                  <div className="text-2xl font-bold text-gray-500/50"> PATRONS </div>
                  <div className="grid md:grid-cols-2 gap-8 mt-4 pb-20">
                      {data.map((data, i) => (
                          <div key={i}>
                              <ProfileCard
                                  name={data?.name}
                                  designation={data?.department}
                                  bio={(
                                      <div className="leading-relaxed whitespace-nowrap text-gray-900  font-medium text-sm mt-1">
                                          {' '}
                                          {data?.college}
                                          {' '}
                                          {data?.place}
                                      </div>
                                  )}
                                  image={data?.src}
                                  key={i}
                              />
                          </div>
                      ))}
                  </div>
              </div>
          </section>
      </div>
  );
}

export default Patrons;