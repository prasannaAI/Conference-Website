import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {FiPhone} from 'react-icons/fi';
import {TbWorldWww} from 'react-icons/tb';
function Renai() {
    return(
        <div className=" flex justify-center p-1">
            <a href="https://perfecthandssolutions.com/RenaiBEPage/renai_cochin.html?_glCID=1307546720.1689585890" target="_blank">
                <div className="w-full max-w-xl rounded-lg overflow-hidden shadow-md bg-white">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <img
                                alt="Hotel"
                                src="/assets/hotel/renai.jpg"
                                className="object-cover object-center h-full w-full"
                            />
                        </div>
                        <div className="md:w-1/2 p-6">
                            <div className="font-medium uppercase text-lg font-bold whitespace-nowrap">
                                Renai Hotel
                            </div>
                            <div className="text-gray-600">Distance From Venue - 6km</div>
                            <div className="mt-2">
                                <div className="flex items-center mt-4 gap-2">
                                    <HiOutlineMail />
                                    <p className="text-gray-600 hover:underline">
                                        <a href="mailto:reserevations@pghr.in">reserevations@pghr.in</a>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-1">
                                <div className="flex items-center gap-2">
                                    <FiPhone />
                                    <a href="tel:0484 295 4463" className="text-gray-600 hover:underline">
                                        0484 295 4463
                                    </a>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="flex items-center">
                                    <TbWorldWww />
                                    <div className="ml-2">
                                        <a href="https://perfecthandssolutions.com/RenaiBEPage/renai_cochin.html?_glCID=1307546720.1689585890" target="_blank" className="text-gray-600 hover:underline">perfecthandssolutions.com</a>
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

export default Renai;