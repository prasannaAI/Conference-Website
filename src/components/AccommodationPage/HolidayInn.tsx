import React from 'react';
import {HiOutlineMail} from 'react-icons/Hi';
import {FiPhone} from 'react-icons/Fi';
import {TbWorldWww} from 'react-icons/Tb';
function HolidayInn() {



    return(
        <div className="flex justify-center sm:p-1">
            <a href="http://www.holidayinn.com/cochin" target="_blank">
                <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-md bg-white">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <img src="/assets/hotel/holiday-inn-cochin.jpg" alt="Hotel" className="object-cover object-left h-full w-full" />
                        </div>
                        <div className="md:w-1/2 p-6">
                            <div className="font-medium uppercase text-lg font-bold whitespace-nowrap" >
                                HolidayInn
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
                                    <HiOutlineMail />
                                    <div className="ml-2">
                                        <a href="mailto:reservation.hic@ihg.com" className="text-gray-600 hover:underline">reservation.hic@ihg.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center mt-2">
                                <HiOutlineMail />
                                <div className="ml-2">
                                    <a href="mailto:ardra.v@hicochin.com" className="text-gray-600 hover:underline">ardra.v@hicochin.com</a>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="flex items-center">
                                    <FiPhone />
                                    <div className="ml-2">
                                        <a href="tel:+91 484 419 9000" className="text-gray-600 hover:underline">+91 484 419 9000</a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="flex items-center">
                                    <FiPhone />
                                    <div className="ml-2">
                                        <a href="tel:+1-800-111000" className="text-gray-600 hover:underline">+1-800-111000</a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="flex items-center">
                                    <TbWorldWww />
                                    <div className="ml-2">
                                        <a href="http://www.holidayinn.com/cochin" target="_blank" className="text-gray-600 hover:underline">www.holidayinn.com</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default HolidayInn;