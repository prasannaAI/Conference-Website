import React from 'react';

const AccommodationPage = () => {


    return (
        <div className=" pt-24 bg-white text-background px-6">


            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-gray-600 mb-4 uppercase">Accommodation</h1>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">

                    {/*1st hotel*/}

                    <a href="https://www.marriott.com/en-us/hotels/cokmc-kochi-marriott-hotel/overview/" target="_blank">
                        <div className="flex justify-center mt-4">
                            <div className="w-full max-w-xl rounded-lg overflow-hidden shadow-md bg-white">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/2">
                                        <img
                                            alt="Hotel"
                                            src="/assets/hotel/hotel.webp"
                                            className="object-cover  h-full w-full"
                                        />
                                    </div>
                                    <div className="md:w-1/2 p-6">
                                        <div className="font-medium uppercase text-lg font-bold whitespace-nowrap">
                                            Marriott ⭐⭐⭐⭐⭐
                                        </div>
                                        <div className="text-gray-600">Distance From Venue - 1.6km</div>
                                        <div className="mt-2">
                                            <h3 className="font-medium">Single Room</h3>
                                            <p className="text-gray-600"> - 5750 + 12% Tax (Price per day) </p>
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="font-medium">Double Room</h3>
                                            <p className="text-gray-600"> - 6500 + 12% Tax (Price per day) </p>
                                        </div>
                                        <div className="mt-2">
                                            <div className="flex items-center mt-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 64 64"
                                                    id="email"
                                                    className="h-4 w-4 mr-2"
                                                >
                                                    <path
                                                        fill="#222"
                                                        d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"
                                                    ></path>
                                                    <path
                                                        fill="#222"
                                                        d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"
                                                    ></path>
                                                    <path
                                                        fill="#222"
                                                        d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"
                                                    ></path>
                                                </svg>
                                                <p className="text-gray-600">
                                                    <a href="mailto:Frinal.Sunny@marriott.com">Frinal.Sunny@marriott.com</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <div className="flex items-center">
                                                <img src="/assets/icons/phone.svg" className="h-4 w-4 mr-2" />
                                                <p className="text-gray-600">
                                                    +91 8589989058
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>


                    {/*3 hotel*/}
                    <a href="http://hi-lux.co.in/" target="_blank">
                        <div className="flex justify-center mt-4">
                            <div className="w-full max-w-xl rounded-lg overflow-hidden shadow-md bg-white">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/2">
                                        <img
                                            alt="Hotel"
                                            src="/assets/hotel/Hilux.jpg"
                                            className="object-cover object-left h-full w-full"
                                        />
                                    </div>
                                    <div className="md:w-1/2 p-6">
                                        <div className="font-medium uppercase text-lg font-bold whitespace-nowrap">
                                            Hilux Inn
                                        </div>
                                        <div className="text-gray-600">Distance From Venue - 1km</div>
                                        <div className="mt-2">
                                            <h3 className="font-medium">Deluxe Room (Single)</h3>
                                            <p className="text-gray-600"> - 1800 (Price per day) </p>
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="font-medium">2BHK Apartment</h3>
                                            <p className="text-gray-600"> - 3000 (Price per day) </p>
                                        </div>
                                        <div className="mt-2">
                                            <div className="flex items-center mt-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 64 64"
                                                    id="email"
                                                    className="h-4 w-4 mr-2"
                                                >
                                                    <path
                                                        fill="#222"
                                                        d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"
                                                    ></path>
                                                    <path
                                                        fill="#222"
                                                        d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"
                                                    ></path>
                                                    <path
                                                        fill="#222"
                                                        d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"
                                                    ></path>
                                                </svg>
                                                <p className="text-gray-600">
                                                    <a href="mailto:hiluxinn1@gmail.com">hiluxinn1@gmail.com</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <div className="flex items-center">
                                                <img src="/assets/icons/phone.svg" className="h-4 w-4 mr-2" />
                                                <p className="text-gray-600">
                                                    +91 8086077333
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>


                    {/* fourth hotel */}
                    <a href="http://www.holidayinn.com/cochin" target="_blank">
                        <div className="flex justify-center mt-4">
                            <div className="w-full max-w-xl rounded-lg overflow-hidden shadow-md bg-white">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/2">
                                        <img src="/assets/hotel/holiday-inn-cochin.jpg" alt="Hotel" className="object-cover object-left h-full w-full" />
                                    </div>
                                    <div className="md:w-1/2 p-6">
                                        <div className="font-medium uppercase text-lg font-bold whitespace-nowrap" >
                                            Holiday
                                            Inn
                                            ⭐⭐⭐⭐⭐
                                        </div>
                                        <div className="text-gray-600">Distance From Venue - 5.3km</div>
                                        <div className="mt-2">
                                            <h3 className="font-medium">Superior Room (Single)</h3>
                                            <p className="text-gray-600"> - 4500 + Tax (Price per day) </p>
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="font-medium">Superior Room (Double)</h3>
                                            <p className="text-gray-600"> - 5000 + Tax (Price per day) </p>
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="font-medium">Deluxe Room (Single)</h3>
                                            <p className="text-gray-600"> - 6500 + Tax (Price per day) </p>
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="font-medium">Deluxe Room (Double)</h3>
                                            <p className="text-gray-600"> - 7000 + Tax (Price per day) </p>
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="font-medium">Executive Room (Single)</h3>
                                            <p className="text-gray-600"> - 8500 + Tax (Price per day) </p>
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="font-medium">Executive Room (Double)</h3>
                                            <p className="text-gray-600"> - 9000 + Tax (Price per day) </p>
                                        </div>
                                        <div className="mt-2">
                                            <div className="flex items-center mt-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 64 64"
                                                    id="email"
                                                    className="h-4 w-4 mr-2"
                                                >
                                                    <path
                                                        fill="#222"
                                                        d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"
                                                    ></path>
                                                    <path
                                                        fill="#222"
                                                        d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"
                                                    ></path>
                                                    <path
                                                        fill="#222"
                                                        d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"
                                                    ></path>
                                                </svg>
                                                <p className="text-gray-600">
                                                    <a href="mailto:reservation.hic@ihg.com">reservation.hic@ihg.com</a>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 64 64"
                                                id="email"
                                                className="h-4 w-4 mr-2"
                                            >
                                                <path
                                                    fill="#222"
                                                    d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"
                                                ></path>
                                                <path
                                                    fill="#222"
                                                    d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"
                                                ></path>
                                                <path
                                                    fill="#222"
                                                    d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"
                                                ></path>
                                            </svg>
                                            <p className="text-gray-600">
                                                {/*<a href="mailto:reservation.hic@ihg.com">reservation.hic@ihg.com</a>*/}
                                                <a href="mailto:ardra.v@hicochin.com">ardra.v@hicochin.com</a>
                                            </p>
                                        </div>

                                        <div className="mt-1">
                                            <div className="flex items-center ">
                                                <img src="/assets/icons/phone.svg" className="h-4 w-4 mr-2" />
                                                <p className="text-gray-600">
                                                    +91 484 419 9000
                                                </p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="flex items-center ">
                                                <img src="/assets/icons/phone.svg" className="h-4 w-4 mr-2" />
                                                <p className="text-gray-600">
                                                    +1-800-111000
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>


                    {/*2 hotel*/}

                    <a href="https://ghalaagroup.com/hotels/ghala-residency-kochi" target="_blank">
                        <div className="flex justify-center mt-4">
                            <div className="w-full max-w-xl rounded-lg overflow-hidden shadow-md bg-white">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/2">
                                        <img
                                            alt="Hotel"
                                            src="/assets/hotel/ghala-hotel%20.jpg"
                                            className="object-cover  h-full w-full"
                                        />
                                    </div>
                                    <div className="md:w-1/2 p-6">
                                        <div className="font-medium uppercase text-lg font-bold whitespace-nowrap">
                                            Ghala Residency
                                        </div>
                                        <div className="text-gray-600">Distance From Venue - 0.5km</div>
                                        <div className="mt-2">
                                            <h3 className="font-medium">Deluxe Room (Single)</h3>
                                            <p className="text-gray-600"> - 2000 (Price per day) </p>
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="font-medium">Royal Deluxe Room (Double)</h3>
                                            <p className="text-gray-600"> - 2350 (Price per day) </p>
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="font-medium">Twin Bird Room</h3>
                                            <p className="text-gray-600"> - 2650 (Price per day) </p>
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="font-medium">Royal Suite</h3>
                                            <p className="text-gray-600"> - 2850 (Price per day) </p>
                                        </div>
                                        <div className="mt-2">
                                            <div className="flex items-center mt-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 64 64"
                                                    id="email"
                                                    className="h-4 w-4 mr-2"
                                                >
                                                    <path
                                                        fill="#222"
                                                        d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"
                                                    ></path>
                                                    <path
                                                        fill="#222"
                                                        d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"
                                                    ></path>
                                                    <path
                                                        fill="#222"
                                                        d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"
                                                    ></path>
                                                </svg>
                                                <p className="text-gray-600">
                                                    <a href="mailto:ghalaresidencymail@gmail.com">ghalaresidencymail@gmail.com</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <div className="flex items-center">
                                                <img src="/assets/icons/phone.svg" className="h-4 w-4 mr-2" />
                                                <p className="text-gray-600">
                                                    +91 8089360727
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>


                </div>

            </div>
        </div>
    );
};
export default AccommodationPage;


