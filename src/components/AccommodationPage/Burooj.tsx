import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {FiPhone} from 'react-icons/fi';

function Burooj() {
    return (
        <div className=" flex justify-center p-1">
            <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-md bg-white">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img
                            alt="Hotel"
                            src="/assets/hotel/BUROOJ LUXURY HOTEL.jpg"
                            className="object-cover object-center h-full w-full"
                        />
                    </div>
                    <div className="md:w-1/2 p-6">
                        <div className="font-medium uppercase text-lg font-bold whitespace-nowrap">
                            Burooj
                        </div>
                        <div className="text-gray-600">Distance From Venue - 3km</div>
                        <div className="mt-4">
                            <h3 className="font-medium">AC Room </h3>
                            <p className="text-gray-600"> Single - 1800 </p>
                            <p className="text-gray-600"> Double - 2000 </p>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-medium">Delux Twin/King </h3>
                            <p className="text-gray-600">Single Room - 2300</p>
                            <p className="text-gray-600">Double Room - 2500</p>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-medium">Executive Room </h3>
                            <p className="text-gray-600">Single - 2800</p>
                            <p className="text-gray-600">Double - 3000</p>
                        </div>

                        <div className="mt-2">
                            <div className="flex items-center mt-4 gap-2">
                                <HiOutlineMail />
                                <p className="text-gray-600 hover:underline">
                                    <a href="mailto:buroojhotel@gmail.com">buroojhotel@gmail.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="mt-1">
                            <div className="flex items-center gap-2">
                                <FiPhone />
                                <a href="tel:+91- 8089 35 7667" className="text-gray-600 hover:underline">
                                    +91- 8089 35 7667
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Burooj;