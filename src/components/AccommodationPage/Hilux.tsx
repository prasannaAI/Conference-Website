import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {FiPhone} from 'react-icons/fi';
import {TbWorldWww} from 'react-icons/tb';
function Hilux() {
    return(
        <div className=" flex justify-center p-1">
            <a href="http://hi-lux.co.in/" target="_blank">
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
                                <div className="flex items-center mt-4 gap-2">
                                    <HiOutlineMail />
                                    <p className="text-gray-600 hover:underline">
                                        <a href="mailto:hiluxinn1@gmail.com">hiluxinn1@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-1">
                                <div className="flex items-center gap-2">
                                    <FiPhone />
                                    <a href="tel:+91 8086077333" className="text-gray-600 hover:underline">
                                        +91 8086077333
                                    </a>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="flex items-center">
                                    <TbWorldWww />
                                    <div className="ml-2">
                                        <a href="http://hi-lux.co.in/" target="_blank" className="text-gray-600 hover:underline">hi-lux.co.in</a>
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

export default Hilux;