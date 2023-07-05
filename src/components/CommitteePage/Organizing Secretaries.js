import React from 'react';

import ProfileCard from '@/components/shared/ProfileCard';

function OrganizingSecretaries() {

    const data = [
        {
          id: 1,
          src: '/assets/images/dr-bhaskar-vishwanathan.jpg',
          name: 'Dr Bhaskar Vishwanathan,',
          department: 'Professor & HOD, Radiation Oncology,',
          college: ' Amrita Institute of Medical Sciences,',
          place: ' Delhi-NCR',
        },
        {
          id: 2,
          src: '/assets/images/Dr.-Ayyadurai-R.jpg',
          name: 'Dr Ayyadurai R,',
          department: 'Professor , Neurosurgery,',
          college: ' Amrita Institute of Medical Sciences,',
          place: 'Kochi',
        },
        {
          id: 3,
          src: '/assets/images/Dr Wesley M Jose.jpg',
          name: 'Dr Wesley M Jose, ',
          department: 'Professor , Medical Oncology,',
          college: 'Amrita Institute of Medical Sciences,',
          place: 'Kochi',
        },
        {
          id: 4,
          src: '/assets/images/Dr.-Sruthi-K.jpg',
          name: 'Dr Sruthi K, ',
          department: 'Assistant Professor, Radiation Oncology,',
          college: 'Amrita Institute of Medical Sciences,',
          place: 'Kochi',
        },
    
      ];

  return (
      <div className="bg-white">
          <section className="py-8 px-6  body-font">
              <div className="container  mx-auto">
                  <div className="text-2xl font-bold text-gray-500/50 uppercase"> Organizing Secretaries </div>
                  <div className="grid lg:grid-cols-2 gap-8 mt-4 ">
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

export default OrganizingSecretaries;