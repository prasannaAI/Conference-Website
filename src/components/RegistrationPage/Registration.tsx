import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

const sendRegistrationForm = async (data: any) => {
    return fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json', Accept: 'application/json'},
    }).then((res) => {
        if (!res.ok) throw new Error('Failed to send message');
        return res.json();
    });
};

const Registration = () => {
    
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        number: '',
        place: '',
        speciality: '',
        institution: '',
        designation: '',
        registrationType: '',
    });

    const [state, setState] = useState<any>({
        loading: false,
        error: null,
        success: false,
    });

    const [currentImage, setCurrentImage] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const images = ['/assets/clgImage/aims-kochi.jpg', '/assets/clgImage/aims-faridabad.jpeg',];

    useEffect(() => {
        const registration = localStorage.getItem('ISRS-Registration');
        if (registration)
            setState({ loading: false, error: null, success: true });
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage === 0 ? 1 : 0));
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setState({ loading: true, error: null, success: false });

        if (!form?.name || !form?.email || !form?.number || !form?.place || !form?.speciality || !form?.institution || !form?.designation || !form?.registrationType) {
            setState({ loading: false, error: 'Please fill all the fields', success: false });
            return;
        }

        // if (!/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/.test(form?.number)) {
        //     setState({ loading: false, error: 'Invalid number', success: false });
        //     return;
        // }

        if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(form?.email)) {
            setState({ loading: false, error: 'Invalid email', success: false });
            return;
        }

        setState({ loading: true, error: null, success: false });

        try {
            const res = await sendRegistrationForm(form);
            if (res?.success) {
                localStorage.setItem('ISRS-Registration', 'true');
                setState({ loading: false, error: null, success: true });
            }
        } catch (error) {
            console.error(error);
            setState({ loading: false, error: 'Failed to send message', success: false });
        }
    };

    const PAYMENT_LINKS = [
        {
            id: 1,
            name: 'Indian Delegates',
            link: 'https://aoap.amrita.edu/gateway/index/event-pay-kh?ekey=ISRSIDBJ',
        },
        {
            id: 3,
            name: 'SAARC Country Delegates',
            link: 'https://aoap.amrita.edu/gateway/index/event-pay-am-razor?ekey=ISRS1'
        },
        {
            id: 4,
            name: 'Other Country Delegates',
            link: 'https://aoap.amrita.edu/gateway/index/event-pay-am-razor?ekey=ISRS2'
        },
        {
            id: 5,
            name: 'ISRS Members',
            link: 'https://aoap.amrita.edu/gateway/index/event-pay-am-razor?ekey=ISRS3'
        },
    ];

  return (
      <div className="text-color bg-gray-100 pt-20 relative">
          <Image
              src={images[currentImage]}
              alt="Conference"
              layout="fill"
              objectFit="cover"
              onLoad={() => setLoaded(true)}
              className={`${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity z-10 h-full duration-1000 ease-in-out`}
          />
          <div className="absolute top-0 inset-0 bg-black/50 bg-gradient-to-t from-background/20 to-transparent z-20" />
          <div className="container mx-auto py-20 flex flex-col lg:flex-row items-center justify-center z-50 relative">
              <div className="max-w-lg mx-auto space-y-1 text-center bg-white text-black p-8 shadow-lg rounded-lg">
                  <div className="flex flex-col items-start gap-5">
                      {PAYMENT_LINKS.map((link) => (
                          <div key={link.id}>
                              <Link href={link?.link} className="text-left">
                                  <span className="text-blue-500 underline">
                                      Payment Link
                                  </span>
                                  {' '}
                                  for&nbsp;
                                  <strong>{link?.name}</strong>
                              </Link>
                          </div>
                        ))}
                  </div>
              </div>
              <div className="px-4 mt-6 w-full md:w-auto lg:mt-0">
                  {state?.success ? (
                      <div className="mb-5 text-background shadow-lg bg-white p-4 flex items-center justify-center flex-col  min-h-[400px] rounded-lg" id="formSuccess">
                          <div className="flex items-center justify-center mb-8">
                              <Image src="/assets/icons/check.svg" alt="chevron-right" width={100} height={100} />
                          </div>
                          <div className="mb-4 px-10 md:mb-6 flex justify-center flex-col items-center">
                              <span className="font-semibold">Your registration has been submitted successfully. </span>
                              <br />
                              <span className="text-base opacity-60">
                                  We will get back to you soon.
                              </span>
                          </div>
                      </div>
                      ) : (
                          <form onSubmit={handleSubmit} className="mb-5 text-background shadow-lg bg-white p-4 rounded-lg" id="registrationForm" name="registrationForm">
                              <div className="mb-4 md:mb-6">
                                  <div className="text-3xl text-gray-900 font-bold">Register</div>
                                  <div className="text-sm text-gray-400">
                                      Join us for the ISRS Educational Course 2023
                                  </div>
                              </div>
                              <div className="mb-3">
                                  <label
                                      htmlFor="name"
                                      className="block mb-1 text-sm font-medium text-gray-900"
                                  >
                                      Name
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
                              <div className="mb-3">
                                  <label
                                      htmlFor="designation"
                                      className="block mb-1 text-sm font-medium text-gray-900"
                                  >
                                      Designation
                                  </label>
                                  <input
                                      type="text"
                                      id="name"
                                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                      placeholder="Surgeon"
                                      onChange={(e) => setForm({ ...form, designation: e.target.value })}
                                      required
                                  />
                              </div>
                              <div className="mb-3">
                                  <label
                                      htmlFor="speciality"
                                      className="block mb-1 text-sm font-medium text-gray-900"
                                  >
                                      Speciality
                                  </label>
                                  <select
                                      id="speciality"
                                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                      onChange={(e) => setForm({ ...form, speciality: e.target.value })}
                                      required
                                  >
                                      <option value="">Select Speciality</option>
                                      <option value="Radiation Oncology">Radiation Oncology</option>
                                      <option value="Neurosurgery">Neurosurgery</option>
                                      <option value="Clinical Oncologist">Clinical Oncologist</option>
                                      <option value="Medical Physicist">Medical Physicist</option>
                                      <option value="Others">Others</option>
                                  </select>
                              </div>
                              <div className="flex flex-col md:flex-row md:gap-3">
                                  <div className="mb-3 md:w-1/2">
                                      <label
                                          htmlFor="email"
                                          className="block mb-1 text-sm font-medium text-gray-900"
                                      >
                                          Email
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
                                          Mobile number
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
                                      htmlFor="institution_name"
                                      className="block mb-1 text-sm font-medium text-gray-900"
                                  >
                                      Institution Name
                                  </label>
                                  <input
                                      type="text"
                                      id="institution_name"
                                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                      placeholder="Institution Name"
                                      onChange={(e) => setForm({ ...form, institution: e.target.value })}
                                      required
                                  />
                              </div>
                              <div className="mb-4">
                                  <label
                                      htmlFor="place"
                                      className="block mb-1 text-sm font-medium text-gray-900"
                                  >
                                      Place
                                  </label>
                                  <input
                                      type="text"
                                      id="place"
                                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                      placeholder="Mumbai"
                                      onChange={(e) => setForm({ ...form, place: e.target.value })}
                                      required
                                  />
                              </div>
                              <div className="mb-4">
                                  <label
                                      htmlFor="registration_type"
                                      className="block mb-1 text-sm font-medium text-gray-900"
                                  >
                                      Registration Type
                                  </label>
                                  <select
                                      id="registration_type"
                                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                      onChange={(e) => setForm({ ...form, registrationType: e.target.value })}
                                      required
                                  >
                                      <option value="">Select Registration Type</option>
                                      <option value="Students">Students</option>
                                      <option value="Indian Delegates">Indian Delegates</option>
                                      <option value="SAARC delegates">SAARC delegates</option>
                                      <option value="Other country delegates">Other country delegates</option>
                                      <option value="ISRS members">ISRS members</option>
                                  </select>
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
                              ) : 'Register'}
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
  );
};

export default Registration;