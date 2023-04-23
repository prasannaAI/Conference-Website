import React from 'react';

import ProfileCard from '@/components/shared/ProfileCard';

function OrganizingChairman() {

    const data = [
        {
          id: 1,
          src: 'https://dummyimage.com/720x400',
          name: 'Dr Sajesh Menon,',
          department: 'Prof & HOD, Neurosurgery,',
          college: ' Amrita Institute of Medical Sciences,',
          place: ' Kochi',
        },
        {
          id: 2,
          src: 'https://dummyimage.com/720x400',
          name: 'Dr Pavithran K,',
          department: 'Prof & HOD, Medical Oncology,',
          college: ' Amrita Institute of Medical Sciences,',
          place: 'Kochi',
        },
        {
          id: 3,
          src: 'https://dummyimage.com/720x400',
          name: 'Dr Rakesh Jalali, ',
          department: 'Medical Director,',
          college: 'Apollo Proton Centre,',
          place: 'Chennai',
        },
    
      ];

  return (
      <div className="text-primary bg-color">
          <section className="mx-auto container body-font">
              <div className="container px-20  mx-auto">
                  <div className="flex flex-col text-center w-full my-8 pt-4">
                      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 uppercase">Organizing Chairman</h1>
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center -m-4">
                      {data.map((data, i) => (
                          <div key={i} className="p-4 lg:w-1/4 md:w-1/2">
                              <ProfileCard
                                  name={data?.name}
                                  designation={data?.department}
                                  image={data?.src}
                                  bio={(
                                      <div className="leading-relaxed whitespace-nowrap text-gray-900  font-medium text-sm mt-1">
                                          {' '}
                                          {data?.college}
                                          {' '}
                                          {data?.place}
                                      </div>
                                  )}
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