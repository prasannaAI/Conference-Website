import React from 'react';

import ProfileCard from '@/components/shared/ProfileCard';

function CommitteeMembers() {

  const data = [
    {
      id: 1,
      src: '/assets/images/Dr.-Haridas-M-Nair.jpg',
      name: 'Dr Haridas Nair,',
      department: ' Assistant Professor,',
      doctor: ' Radiation Oncology'
    },
    {
      id: 2,
      src: '/assets/images/Dr.-Ajay-Sasidharan.jpg',
      name: 'Dr Ajay Sasidharan,',
      department: ' Assistant Professor,',
      doctor: ' Radiation Oncology'
    },
    {
      id: 3,
      src: '/assets/images/Dr.-Pushpaja-K.U.jpg',
      name: 'Dr Pushpaja KU ,',
      department: 'Assistant Professor,',
      doctor: ' Radiation Oncology'
    },
    {
      id: 4,
      src: '/assets/images/Dr.-Nikhil-Krishna-Haridas.jpg',
      name: 'Dr Nikhil Krishna Haridas,',
      department: 'Assistant Professor,',
      doctor: ' Medical Oncology'
    },
    {
      id: 5,
      src: '/assets/images/Dr Rishabh1.jpeg',
      name: ' Dr Rishabh ,',
      department: 'Assistant Professor,',
      doctor: ' Radiation Oncology'
    },

  ];

 


  return (


      <div className="bg-white">
          <section className="py-8 px-6  body-font">
              <div className="container  mx-auto">
                  <div className="text-2xl font-bold text-gray-500/50 uppercase"> Organizing committee members </div>
                  <div className="grid lg:grid-cols-2 gap-8 mt-4 ">
                      {data.map((data, i) => (
                          <div key={i}>
                              <ProfileCard
                                  name={data?.name}
                                  designation={data?.department}
                                  bio={(
                                      <div className="leading-relaxed whitespace-nowrap text-gray-900  font-medium text-sm mt-1">
                                          {' '}
                                          {data?.doctor}
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

export default CommitteeMembers;