import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {FiPhone} from 'react-icons/fi';
import {TbWorldWww} from 'react-icons/tb';
import {Disclosure} from '@headlessui/react';
import {ChevronUpIcon} from '@heroicons/react/20/solid';

function Emarald() {
    // @ts-ignore
    // @ts-ignore
    return (
        <div className=" flex justify-center p-1">
            <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-md bg-white">
                <div className="flex flex-col md:flex-row">

                    <div className="md:w-1/2">
                        <img
                            alt="Hotel"
                            src="/assets/hotel/EMARALD GROUP OF HOTELS & RESORTS.jpg"
                            className="object-cover object-center h-full w-full"
                        />
                    </div>
                    <div className="md:w-1/2 p-6">
                        <div className="font-medium uppercase text-lg font-bold whitespace-nowrap">
                            EMARALD GROUP OF HOTELS & RESORTS
                        </div>
                        <div className="text-gray-600">Distance From Venue - 10km</div>
                        <div className="mt-4">
                            <h3 className="font-medium">Deluxe Room </h3>
                            <p className="text-gray-600">Single - 2300 </p>
                            <p className="text-gray-600">Double - 2500 </p>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-medium">Junior Suite </h3>
                            <p className="text-gray-600">Single - 3300 </p>
                            <p className="text-gray-600">Double - 3500 </p>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-medium">ROYAL SUITE (4 PAX)</h3>
                            <p className="text-gray-600">Double - 4800 </p>
                        </div>
                        <div className="mt-2">
                            <div className="flex items-center mt-4 gap-2">
                                <HiOutlineMail />
                                <p className="text-gray-600 hover:underline">
                                    <a href="mailto:cochinreservations@emarald.in">cochinreservations@emarald.in</a>
                                </p>
                            </div>
                        </div>
                        <div className="mt-1">
                            <div className="flex items-center gap-2">
                                <FiPhone />
                                <a href="tel:0484 4054535" className="text-gray-600 hover:underline">
                                    0484 4054535
                                </a>
                            </div>
                        </div>
                        <div className="mt-1">
                            <div className="flex items-center gap-2">
                                <FiPhone />
                                <a href="tel: +91 9946555441" className="text-gray-600 hover:underline">
                                    +91 9946555441
                                </a>
                            </div>
                        </div>

                        <div className="mt-2">
                            <div className="flex items-center">
                                <TbWorldWww />
                                <div className="ml-2">
                                    <a href="https://www.emarald.in/vyttila-cochin" target="_blank" className="text-gray-600 hover:underline">www.emarald.in/vyttila-cochin</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-full px-4 pt-4">
                    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                        <Disclosure>
                            {({open}) => (
                                <>
                                    <Disclosure.Button
                                        className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                    >
                                        <span>General Terms and Conditions</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        <div>
                                            •	Complimentary welcome drink on arrival <br />
                                            •	Child 5-11 Years INR 500 per child (Without Extra Bed- Max 1 Child)<br />
                                            •	Children below 5 years will be complimentary (Max 2 Child)<br />
                                            •	Children above 12 years will be considered as an Extra person. (Rs 800/-)<br />
                                            •	Meal charges Breakfast INR.250/-, Lunch INR 500/-, Dinner INR 500/-<br />
                                            •	Xmas eve gala dinner =1500 Rs Per Pax is mandatory<br />
                                            •	New Year eve= 1500 Rs per pax is mandatory<br />
                                            •	“A recent government notification requires all Indian residents to carry proof of identity card at the time of check in. The proof of identity can either be guest’s driving license, passport or voter’s card”

                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                            {({open}) => (
                                <>
                                    <Disclosure.Button
                                        className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                    >
                                        <span>Cancellation Policy</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        <div>
                                            •	0-30 days prior to stay no refund will be done. <br />
                                            •	Above 30 days to arrival full payment refund<br />
                                            •	No refund for any reservation done between 20th December and 10th January

                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                            {({open}) => (
                                <>
                                    <Disclosure.Button
                                        className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                    >
                                        <span>Child Policy</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        <div>
                                            • Below 5 Yrs will be complimentary without extra bed. <br />
                                            • 5-12 yrs will be treated as child and will be charged as per rate guidelines <br />
                                            • Children above 12 yrs will be treated as adults.
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Emarald;