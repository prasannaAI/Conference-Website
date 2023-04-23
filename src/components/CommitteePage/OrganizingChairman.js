import React from 'react';

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
      <div className="mr-4">
          <section className="text-primary bg-dark body-font rounded-r-[12rem]">
              <div className="container px-20  mx-auto">
                  <div className="flex flex-col text-center w-full my-8 pt-4">
                      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 uppercase">Organizing Chairman</h1>
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center -m-4">
                      {data.map((data) => (
                          <div id={data.id} className="p-4 lg:w-1/4 md:w-1/2">
                              <div className="h-full flex flex-col items-center text-center">
                                  <img alt="team" className="flex-shrink-0 rounded-lg w-full h-40 object-cover object-center mb-4" src={data.src} />
                                  <div className="w-full">
                                      <h2 className="title-font font-medium text-lg text-gray-900">{data.name}</h2>
                                      <h3 className="text-gray-500 "> 
                                          {' '}
                                          {data.department}
                                          {' '}
                                      </h3>
                                      <div className="whitespace-nowrap"> 
                                          {' '}
                                          {data.college}
                                          {' '}
                                      </div>
                                      <div className="mb-4"> 
                                          {' '}
                                          {data.place}
                                          {' '}
                                      </div>
                                  </div>
                              </div>
                          </div>
                        ))}
                  </div>
              </div>
          </section>
      </div>
  );
}

export default OrganizingChairman;