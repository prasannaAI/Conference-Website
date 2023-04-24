import React from 'react';

import ProfileCard from '@/components/shared/ProfileCard';

function OrganizingChairman() {

    const data = [
        {
          id: 1,
          src: '/assets/images/Dr-Sajesh-K-Menon.jpg',
          name: 'Dr Sajesh Menon,',
          department: 'Prof & HOD, Neurosurgery,',
          college: ' Amrita Institute of Medical Sciences,',
          place: ' Kochi',
        },
        {
          id: 2,
          src: '/assets/images/Dr.-K.-Pavithran.jpg',
          name: 'Dr Pavithran K,',
          department: 'Prof & HOD, Medical Oncology,',
          college: ' Amrita Institute of Medical Sciences,',
          place: 'Kochi',
        },
        {
          id: 3,
          src: '/assets/images/dr-rakesh-jalali.jpg',
          name: 'Dr Rakesh Jalali, ',
          department: 'Medical Director,',
          college: 'Apollo Proton Centre,',
          place: 'Chennai',
        },
    
      ];

  return (

      <div className="bg-white">
          <section className="py-8 px-6  body-font">
              <div className="container  mx-auto">
                  <div className="text-2xl font-bold text-gray-500/50 uppercase"> Organizing Chairman </div>
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

export default OrganizingChairman;