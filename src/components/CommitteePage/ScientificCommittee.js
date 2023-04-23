import React from 'react';

function ScientificCommittee() {

    const data = [
        {
          id: 1,
          src: 'https://dummyimage.com/720x400',
          name: 'Dr Prem Nair,',
          department: 'Associate Professor, ',
          doctor:'Radiation Oncology',
        },
        {
          id: 2,
          src: 'https://dummyimage.com/720x400',
          name: 'Dr Sreehari N R,',
          department: 'Associate Professor,',
          doctor:'Neurosurgery',          
        },
        {
          id: 3,
          src: 'https://dummyimage.com/720x400',
          name: 'Dr Suhas Udayakumaran,',
          department: 'Professor,',
          doctor:'Neurosurgery',          
        },
        {
          id: 4,
          src: 'https://dummyimage.com/720x400',
          name: 'Dr Vijayakumar D K,',
          department: 'Prof & HOD,',
          doctor:'Surgical Oncology ',          
        },
        {
          id: 5,
          src: 'https://dummyimage.com/720x400',
          name: 'Dr Dalvin Thomas, ',
          department: 'Assistant Professor,',
          doctor:'Neurosurgery ',          
        },
        {
          id: 6,
          src: 'https://dummyimage.com/720x400',
          name: 'Dr Rakesh M,  ',
          department: 'Assistant Professor,',
          doctor:'Medical Oncology ',          
        },
        {
          id: 7,
          src: 'https://dummyimage.com/720x400',
          name: 'Dr Rajesh Kannan, ',
          department: 'Assistant Professor,',
          doctor:'Associate Professor',          
        },
        {
          id: 8,
          src: 'https://dummyimage.com/720x400',
          name: 'Dr Sudhindran S , ',
          department: 'Professor,',
          doctor:'Surgical Gastroenterology',          
        },
        {
          id: 9,
          src: 'https://dummyimage.com/720x400',
          name: 'Dr Appu Thomas , ',
          department: 'Prof & HOD,',
          doctor:'Surgical urology',          
        },
        
    
      ];

  return (
      <div>
          <div className="bg-secondary ml-4 rounded-l-[12rem]">
              <section className="text-textSecondaryColor body-font">
                  <div className="container pt-8 px-20 mx-auto">
    
                      <div className="flex  justify-center">
                          <div className="text-2xl font-medium text-primary uppercase"> Scientific Committee </div>
                      </div>
                      <div className="flex justify-center flex-wrap -m-4">
                          {data.map((data) => (
                              <div id={data.id} className="xl:w-1/4 md:w-1/2 pl-4 pt-4 pr-4 text-center">
                                  <div className="bg-gray-100 p-6 rounded-lg">
                                      <img className="h-40 rounded w-full object-cover object-center mb-4" src={data.src} alt="content" />
                                      <h2 className="text-lg text-gray-900 font-medium title-font whitespace-nowrap "> 
                                            {' '}
                                            {data.name}
                                            {' '}
                                        </h2>
                                      <h3 className="tracking-widest  text-sm text-gray-900  text-center font-medium  "> 
                                            {' '}
                                            { data.department}
                                            {' '}
                                        </h3>
                                      <h4 className="tracking-widest  text-sm text-gray-900  text-center font-medium  "> 
                                            {' '}
                                            { data.doctor}
                                            {' '}
                                        </h4>
                                  </div>
                              </div>
    ))}
                      </div>
                  </div>
              </section>
          </div>
      </div>
  );
}

export default ScientificCommittee;