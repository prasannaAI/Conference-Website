import React from "react";

function Contact() {

  const data = [
    {
      Name: "Dr Debnarayan Dutta",
      College: "Professor & HOD, Radiation Oncology",
      Mail: "debnarayan@aims.amrita.edu",
      number: "9884234290",
      border: 1,
    },
    {
      Name: "Dr Sruti K",
      College: "Assistant Professor, radiation Oncology",
      Mail: " srutik@aims.amrita.edu",
      number: "9901894921",
      border: 1,
    },
    {
      Name: "Ms Raji Menon",
      College: "Conference secretariat",
      Mail: " isrs2023@aims.amrita.edu ",
      number: "+91 484 2851234",
      border: 0,
    },
  ];

  return (
    <>
      <div className="pt-28  lg:px-24  bg-gray-50 text-gray-500/50 text-lg 2xl:px-40 text-xl flex justify-center leading-6 md:leading-7 lg:leading-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
            <div className="w-full md:w-6/12 lg:w-6/12 md:pr-8">
              <h3 className="text-2xl md:text-4xl lg:text-5xl  font-bold  uppercase mb-4 md:mb-6 lg:mb-8">
                Contact Us
              </h3>
              <section className="grid grid-cols-1  gap-3 ">
                {data.map((data) => (

                    <div className="bg-gray-500/50 rounded-lg shadow">
                      <div className="flex justify-between p-3">
                        <div className="space-y-1">
                          <div className="flex space-x-3">
                            <h4 className="font-semibold text-gray-900">{data.Name}</h4>

                          </div>
                          <h5 className="text-sm text-gray-500 ">{data.College}</h5>
                        </div>
                      </div>
                      <div className="grid grid-cols-1  content- text-sm">
                        <div className=" flex justify-center items-center space-x-2 ">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                               stroke="#000">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                          </svg>
                          <span className='text-gray-700'>{data.Mail}</span>
                        </div>
                        <div className="     flex justify-center items-center space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                               stroke="#000">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                          </svg>
                          <span className='text-gray-700'>{data.number}</span>
                        </div>
                      </div>
                    </div>
                ))}
              </section>




            </div>
            <div className="w-full pt-4 md:w-6/12 lg:w-6/12 mt-16">
              <form className="mb-5" id="contactForm" name="contactForm">
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full p-2 rounded border bg-gray-500/20 border-gray-600"
                    name="name"
                    id="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full p-2 rounded border border-gray-600  bg-gray-500/20"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full p-2 rounded border border-gray-600 bg-gray-500/20"
                    name="subject"
                    id="subject"
                    placeholder="Contact Number"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="w-full p-2 rounded border border-gray-600 bg-gray-500/20"
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <button className="bg-blue-500 hover:text-lightBlue text-white font-bold py-2 px-4 rounded w-full md:w-auto">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
