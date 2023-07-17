import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {FiPhone} from 'react-icons/fi';
import {TbWorldWww} from 'react-icons/tb';
function As() {
    return(
        <div className=" flex justify-center p-1">
            <a href="https://www.asventures.in/" target="_blank">
                <div className="w-full max-w-xl rounded-lg overflow-hidden shadow-md bg-white">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <img
                                alt="Hotel"
                                src="/assets/hotel/as inn.jpg"
                                className="object-cover object-center h-full w-full"
                            />
                        </div>
                        <div className="md:w-1/2 p-6">
                            <div className="font-medium uppercase text-lg font-bold whitespace-nowrap">
                                As Inn Hotel
                            </div>
                            <div className="text-gray-600">Distance From Venue - 3km</div>
                            <div className="mt-2">
                                <div className="flex items-center mt-4 gap-2">
                                    <HiOutlineMail />
                                    <p className="text-gray-600 hover:underline">
                                        <a href="mailto:ashomesekm@gmail.com">ashomesekm@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-1">
                                <div className="flex items-center gap-2">
                                    <FiPhone />
                                    <a href="tel:0484 295 4463" className="text-gray-600 hover:underline">
                                        0484 280 2447                                    </a>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="flex items-center">
                                    <TbWorldWww />
                                    <div className="ml-2">
                                        <a href="https://www.asventures.in/" target="_blank" className="text-gray-600 hover:underline">www.asventures.in</a>
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

export default As;