import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {FiPhone} from 'react-icons/fi';
import {TbWorldWww} from 'react-icons/tb';

function Omnest() {
    return (
        <div className=" flex justify-center p-1">

            <div className="w-full max-w-xl rounded-lg overflow-hidden shadow-md bg-white">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img
                            alt="Hotel"
                            src="/assets/hotel/OMNEST.jpg"
                            className="object-cover object-left h-full w-full"
                        />
                    </div>
                    <div className="md:w-1/2 p-6 flex flex-col justify-center">
                        <div className="font-medium uppercase text-lg font-bold whitespace-nowrap">
                            Omnest
                        </div>
                        <div className="text-gray-600">Distance From Venue - 0.5km</div>
                        <div className="mt-4">
                            <h3 className="font-medium">Single Room AC - (1 person)</h3>
                            <p className="text-gray-600"> - 1650 (including GST for Special AIMS Rate) </p>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-medium">Double Room AC - (2 person)</h3>
                            <p className="text-gray-600"> - 2240 (including GST for AIMS Rate) </p>
                        </div>
                        <div className="mt-2">
                            <div className="flex items-center mt-4 gap-2">
                                <HiOutlineMail />
                                <p className="text-gray-600 hover:underline">
                                    <a href="mailto:info@omnest.in">info@omnest.in</a>
                                </p>
                            </div>
                        </div>
                        <div className="mt-1">
                            <div className="flex items-center gap-2">
                                <FiPhone />
                                <a href="tel:+91-75111 11239" className="text-gray-600 hover:underline">
                                    +91-75111 11239
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Omnest;