import React, { useState } from 'react';
import Image from 'next/image';

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

const sendContactForm = async (data: any) => {
    return fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json', Accept: 'application/json'},
    }).then((res) => {
        if (!res.ok) throw new Error('Failed to send message');
        return res.json();
    });
};

const Contact = () => {

  const [state, setState] = useState<any>({
      loading: false,
      error: null,
      success: false,
  });
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ loading: true, error: null, success: false });

        if (!form?.name || !form?.email || !form?.number || !form?.message) {
            setState({ loading: false, error: 'Please fill all the fields', success: false });
            return;
        }

        if (!/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/.test(form?.number)) {
          setState({ loading: false, error: 'Invalid number', success: false });
          return;
        }

        if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(form?.email)) {
            setState({ loading: false, error: 'Invalid email', success: false });
            return;
        }

        setState({ loading: true, error: null, success: false });

    try {
        const res = await sendContactForm(form);
        if (res?.success)
            setState({ loading: false, error: null, success: true });
      } catch (error) {
          console.error(error);
          setState({ loading: false, error: 'Failed to send message', success: false });
      }

  };

  return (
      <div className="pt-28 bg-gray-100 text-gray-500/50 text-lg 2xl:px-40 text-xl flex justify-center leading-6 md:leading-7 lg:leading-8">
          <div className="container px-4">
              <div className="flex flex-col md:flex-row py-10 justify-center items-center">
                  <div className="w-full md:w-1/2 lg:w-1/3 md:pr-8 h-full">
                      <section className="grid grid-cols-1  gap-3">
                          {data.map((data, i) => (
                              <div key={i} className="bg-white flex flex-col justify-between rounded-lg shadow">
                                  <div className="flex justify-between p-3">
                                      <div className="flex flex-col items-center w-full space-y-1">
                                          <div className="flex space-x-3">
                                              <h4 className="font-semibold text-gray-900">{data.Name}</h4>
                                          </div>
                                          <h5 className="text-sm text-gray-500 ">{data.College}</h5>
                                      </div>
                                  </div>
                                  <div className="grid grid-cols-1 text-sm p-3">
                                      <div className="flex justify-center border-t py-2 items-center space-x-1">
                                          <span className="opacity-60">
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="h-4 w-4"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke="#000"
                                              >
                                                  <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                  />
                                              </svg>
                                          </span>
                                          <a href={`mailto:${data.Mail}`} className="text-background">{data.Mail}</a>
                                      </div>
                                      <div className="flex justify-center border-t pt-2 items-center space-x-1">
                                          <span className="opacity-60">
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="h-3.5 w-3.5"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke="#000"
                                              >
                                                  <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                  />
                                              </svg>
                                          </span>
                                          <a href={`tel:${data.number}`} className="text-background">{data.number}</a>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </section>
                  </div>
                  <div className="w-full mt-4 md:mt-0 md:w-1/2">
                      {state?.success ? (
                          <div className="mb-5 text-background shadow-lg bg-white p-4 flex items-center justify-center flex-col  min-h-[400px] rounded-lg" id="formSuccess">
                              <div className="flex items-center justify-center mb-8">
                                  <Image src="/assets/icons/check.svg" alt="chevron-right" width={100} height={100} />
                              </div>
                              <div className="mb-4 md:mb-6 flex justify-center flex-col items-center">
                                  <span className="font-semibold">Your query has been submitted successfully. </span>
                                  <br />
                                  <span className="text-base opacity-60">
                                      We will get back to you soon.
                                  </span>
                              </div>
                          </div>
                      ) : (
                          <form onSubmit={handleSubmit} className="mb-5 text-background shadow-lg bg-white p-4 rounded-lg" id="contactForm" name="contactForm">
                              <div className="mb-4 md:mb-6">
                                  <div className="text-3xl text-gray-900 font-bold">Contact Us</div>
                                  <div className="text-sm text-gray-400">
                                      Any question or remark? Just write us a message
                                  </div>
                              </div>
                              <div className="mb-3">
                                  <label
                                      htmlFor="email"
                                      className="block mb-1 text-sm font-medium text-gray-900"
                                  >
                                      Your name
                                  </label>
                                  <input
                                      type="text"
                                      id="name"
                                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                      placeholder="John Doe"
                                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                                      required
                                  />
                              </div>
                              <div className="flex flex-col md:flex-row md:gap-3">
                                  <div className="mb-3 md:w-1/2">
                                      <label
                                          htmlFor="email"
                                          className="block mb-1 text-sm font-medium text-gray-900"
                                      >
                                          Your email
                                      </label>
                                      <input
                                          type="email"
                                          id="email"
                                          className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                          placeholder="john@mail.com"
                                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                                          required
                                      />
                                  </div>
                                  <div className="mb-3 md:w-1/2">
                                      <label
                                          htmlFor="email"
                                          className="block mb-1 text-sm font-medium text-gray-900"
                                      >
                                          Your contact number
                                      </label>
                                      <input
                                          type="tel"
                                          id="phone"
                                          className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                          placeholder="+91 9876XXXX10"
                                          onChange={(e) => setForm({ ...form, number: e.target.value })}
                                          required
                                      />
                                  </div>
                              </div>
                              <div className="mb-4">
                                  <label
                                      htmlFor="message"
                                      className="block mb-1 text-sm font-medium text-gray-900"
                                  >
                                      Your message
                                  </label>
                                  <textarea
                                      rows={7}
                                      id="message"
                                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                      placeholder="Leave a comment..."
                                  />
                              </div>
                              <div>
                                  <button 
                                      type="submit"
                                      className="bg-primary hover:text-lightBlue text-white font-bold py-2 px-4 rounded w-full md:w-auto"
                                      disabled={state?.loading}
                                  >
                                      {state?.loading ? (
                                          <div role="status">
                                              <svg
                                                  aria-hidden="true"
                                                  className="w-5 h-5 text-gray-200 animate-spin fill-blue-600"
                                                  viewBox="0 0 100 101"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                              >
                                                  <path
                                                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                      fill="currentColor"
                                                  />
                                                  <path
                                                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                      fill="currentFill"
                                                  />
                                              </svg>
                                              <span className="sr-only">Loading...</span>
                                          </div>
                                    ) : 'Submit'}
                                  </button>
                              </div>
                              {state?.error && (
                              <div className="text-red-500 text-sm mt-2">
                                  {state.error}
                              </div>
                            )}
                          </form>
                      )}
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Contact;
