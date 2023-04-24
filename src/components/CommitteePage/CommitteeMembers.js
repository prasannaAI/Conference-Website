import React from 'react';

function CommitteeMembers() {

  const data = [
    {
      id: 1,
      src: 'https://dummyimage.com/720x400',
      name: 'Dr Haridas Nair,',
      department: ' Assistant Professor,',
      doctor: ' Radiation Oncology'
    },
    {
      id: 2,
      src: 'https://dummyimage.com/720x400',
      name: 'Dr Ajay Sasidharan,',
      department: ' Assistant Professor,',
      doctor: ' Radiation Oncology'
    },
    {
      id: 3,
      src: 'https://dummyimage.com/720x400',
      name: 'Dr Pushpaja KU ,',
      department: 'Assistant Professor,',
      doctor: ' Radiation Oncology'
    },
    {
      id: 4,
      src: 'https://dummyimage.com/720x400',
      name: 'Dr Nikhil Krishna Haridas,',
      department: 'Assistant Professor,',
      doctor: ' Medical Oncology'
    },
    {
      id: 5,
      src: 'https://dummyimage.com/720x400',
      name: ' Dr Rishabh ,',
      department: 'Assistant Professor,',
      doctor: ' Radiation Oncology'
    },

  ];

 


  return (
      <div>
          <div className="bg-white mt-4">
              <section className="text-textColor body-font">
                  <div className="container pt-8 px-20 mx-auto">
    
                      <div className="flex  justify-center">
                          <div className="text-2xl font-medium text-textColor uppercase"> Committee Members </div>
                      </div>
                      <div className="flex justify-center flex-wrap -m-4">
                          {data.map((data) => (
                              <div id={data.id} className="xl:w-1/4 md:w-1/2 p-4 text-center">
                                  <div className="bg-gray-100 p-6 rounded-lg">
                                      <img className="h-40 rounded w-full object-cover object-center mb-6" src={data.src} alt="content" />
                                      <h2 className="text-lg text-gray-900 font-medium title-font "> 
                                          {' '}
                                          {data.name}
                                          {' '}
                                      </h2>
                                      <h3 className="tracking-widest  text-sm text-gray-900  text-center font-medium  mt-2"> 
                                          {' '}
                                          { data.department}
                                          {' '}
                                      </h3>          
                                      <div className="leading-relaxed whitespace-nowrap text-gray-900  font-medium text-sm mt-1"> 
                                          {' '}
                                          {data.doctor}
                                          {' '}
                                      </div>
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

export default CommitteeMembers;