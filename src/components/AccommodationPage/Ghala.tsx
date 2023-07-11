import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {FiPhone} from 'react-icons/fi';
import {TbWorldWww} from 'react-icons/tb';
function Ghala() {
    return(
        <div className="flex justify-center p-1 ">
            <a href="https://ghalaagroup.com/hotels/ghala-residency-kochi" target="_blank">
                <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-md  bg-white">
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
                                <div className="flex items-center mt-4 gap-2">
                                    <HiOutlineMail />
                                    <p className="text-gray-600 hover:underline">
                                        <a href="mailto:ghalaresidencymail@gmail.com">ghalaresidencymail@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-1">
                                <div className="flex items-center gap-2">
                                    <FiPhone />
                                    <a href="tel:+91 8089360727" className="text-gray-600 hover:underline">
                                        +91 8089360727
                                    </a>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="flex items-center">
                                    <TbWorldWww />
                                    <div className="ml-2">
                                        <a href="https://ghalaagroup.com/hotels/ghala-residency-kochi" target="_blank" className="text-gray-600 hover:underline">www.ghalaagroup.com</a>
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

export default Ghala;