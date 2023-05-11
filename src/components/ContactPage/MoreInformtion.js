import React from 'react';


function MoreInformation() {
  const data = [
    {
      Name: 'Dr Debnarayan Dutta',
      College: 'Professor & HOD, Radiation Oncology',
      Mail: 'debnarayan@aims.amrita.edu',
      number: '9884234290',
      border: 1,
    },
    {
      Name: 'Dr Sruti K',
      College: 'Assistant Professor, radiation Oncology',
      Mail: ' srutik@aims.amrita.edu',
      number: '9901894921',
      border: 1,
    },
    {
      Name: 'Ms Raji Menon',
      College: 'Conference secretariat',
      Mail: ' isrs2023@aims.amrita.edu ',
      number: '+91 484 2851234',
      border: 0,
    },
  ];

  return (
      <div className="bg-gray-50 pt-20 p-8">
          <div className="flex text-2xl ">
              <div className="text-2xl font-bold text-gray-500/50 uppercase"> Contact Us </div>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  p-10">
              {data.map((data, i) => (
                  <div className="bg-gray-500/50 rounded-lg shadow" key={i}>
                      <div className="flex justify-between p-5">
                          <div className="space-y-1">
                              <div className="flex space-x-3">
                                  <h4 className="font-semibold text-color">{data.Name}</h4>

                              </div>
                              <h5 className="text-sm text-gray-400 ">{data.College}</h5>
                          </div>
                      </div>
                      <div className="grid grid-cols-1   text-sm">
                          <div className="py-3 flex justify-center items-center space-x-2 ">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="#fff"
                              >
                                  <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  />
                              </svg>
                              <span className="text-color">{data.Mail}</span>
                          </div>
                          <div className="py-2 flex justify-center items-center space-x-2">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="#fff"
                              >
                                  <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                  />
                              </svg>
                              <span className="text-color">{data.number}</span>
                          </div>
                      </div>
                  </div>
        ))}
          </section>
      </div>
  );
}

export default MoreInformation;

