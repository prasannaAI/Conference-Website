import React from 'react';
import ProfileCard from "@/components/shared/ProfileCard";

function ScientificCommittee() {

    const data = [
        {
            id: 1,
            src: '/assets/images/Dr.-Sreehari-N.-R.jpg',
            name: 'Dr Mikhail Chernov,',
            department: 'Chairman,',
            doctor:'Scinetific Committee, ISRS',
        },
        {
            id: 2,
            src: '/assets/images/Dr.-Anoop-R.jpg',
            name: 'Dr Anoop R,',
            department: 'Associate Professor,',
            doctor:'Radiation Oncology',
        },
        {
          id: 3,
          src: '/assets/images/Dr.-Sreehari-N.-R.jpg',
          name: 'Dr Sreehari N R,',
          department: 'Associate Professor,',
          doctor:'Neurosurgery',          
        },
        {
          id: 4,
          src: '/assets/images/Dr.-Suhas-Udayakumaran.jpg',
          name: 'Dr Suhas Udayakumaran,',
          department: 'Professor,',
          doctor:'Neurosurgery',          
        },
        {
          id: 5,
          src: '/assets/images/Dr Vijayakumar D K.jpg',
          name: 'Dr Vijayakumar D K,',
          department: 'Prof & HOD,',
          doctor:'Surgical Oncology ',          
        },
        {
          id: 6,
          src: '/assets/images/Dr.-Dalvin-Thomas.jpg',
          name: 'Dr Dalvin Thomas, ',
          department: 'Assistant Professor,',
          doctor:'Neurosurgery ',          
        },
        {
          id: 7,
          src: 'assets/images/Dr.-Rakesh-M.jpg',
          name: 'Dr Rakesh M,  ',
          department: 'Assistant Professor,',
          doctor:'Medical Oncology ',          
        },
        {
          id: 8 ,
          src: ' assets/images/Dr.-Rajesh-Kannan.jpg',
          name: 'Dr Rajesh Kannan, ',
          department: 'Associate Professor,',
          doctor:'Radiology',
        },
        {
          id: 9,
          src: 'assets/images/Dr Sudhindran S.jpg',
          name: 'Dr Sudhindran S, ',
          department: 'Professor,',
          doctor:'Surgical Gastroenterology',          
        },
        {
          id: 10,
          src: 'assets/images/dr-appu.jpg',
          name: 'Dr Appu Thomas , ',
          department: 'Prof & HOD,',
          doctor:'Surgical urology',          
        },
        
    
      ];

  return (
      <div className="bg-white">
          <section className="py-8 px-6  body-font">
              <div className="container  mx-auto">
                  <div className="text-2xl font-bold text-gray-500/50 uppercase">  ISRS Scientific Committee </div>
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

export default ScientificCommittee;