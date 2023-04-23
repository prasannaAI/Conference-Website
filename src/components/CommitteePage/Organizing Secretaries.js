import React from 'react';

function OrganizingSecretaries() {

    const data = [
        {
          id: 1,
          src: 'https://dummyimage.com/720x400',
          name: 'Dr Bhaskar Vishwanathan,',
          department: 'Professor & HOD, Radiation Oncology,',
          college: ' Amrita Institute of Medical Sciences,',
          place: ' Delhi-NCR',
        },
        {
          id: 2,
          src: 'https://dummyimage.com/720x400',
          name: 'Dr Ayyadurai R,',
          department: 'Professor , Neurosurgery,',
          college: ' Amrita Institute of Medical Sciences,',
          place: 'Kochi',
        },
        {
          id: 3,
          src: 'https://dummyimage.com/720x400',
          name: 'Dr Wesley M Jose, ',
          department: 'Professor , Medical Oncology,',
          college: 'Apollo Proton Centre,',
          place: 'Chennai',
        },
        {
          id: 4,
          src: 'https://dummyimage.com/720x400',
          name: 'Dr Sruthi K, ',
          department: 'Assistant Professor, Radiation Oncology,',
          college: 'Amrita Institute of Medical Sciences,',
          place: 'Kochi',
        },
    
      ];

  return (
      <div>
          <div className="bg-white text-secondary px-20 py-8 mt-4  ">
              <div className="flex justify-center font-medium uppercase pb-12 text-2xl">
                  <div >Organizing Secretaries</div>
              </div>
              <div className="flex flex-wrap  -m-4">
                  {data.map((data, i) => (
                      <div className="p-4 lg:w-1/2 flex justify-center" key={i}>
                          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                              <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={data.src} />
                              <div className="flex-grow sm:pl-8">
                                  <h2 className="title-font font-medium text-lg text-gray-900">{data.name}</h2>
                                  <h3 className="text-gray-500 mb-3"> 
                                      {' '}
                                      {data.department}
                                      {' '}
                                  </h3>
                                  <div className=" text-secondary">{data.college}</div>
                                  <div className=" text-secondary">{data.place}</div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div >
          </div>
      </div>
  );
}

export default OrganizingSecretaries;