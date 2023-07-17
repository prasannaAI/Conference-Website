import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {FiPhone} from 'react-icons/fi';
import {TbWorldWww} from 'react-icons/tb';
function Aura() {
    return(
        <div className=" flex justify-center p-1">
            <a href="http://www.auraonekochi.com/" target="_blank">
                <div className="w-full max-w-xl rounded-lg overflow-hidden shadow-md bg-white">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <img
                                alt="Hotel"
                                src="/assets/hotel/Aura one hotel (1).jpg"
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <div className="md:w-1/2 p-6">
                            <div className="font-medium uppercase text-lg font-bold whitespace-nowrap">
                                Aura One Hotel                            </div>
                            <div className="mt-2">
                                <div className="flex items-center mt-4 gap-2">
                                    <HiOutlineMail />
                                    <p className="text-gray-600 hover:underline">
                                        <a href="mailto:info@auraonekochi.com">info@auraonekochi.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-1">
                                <div className="flex items-center gap-2">
                                    <FiPhone />
                                    <a href="tel:+96 568 727 23" className="text-gray-600 hover:underline">
                                        +96 568 727 23
                                    </a>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="flex items-center">
                                    <TbWorldWww />
                                    <div className="ml-2">
                                        <a href="http://www.auraonekochi.com/" target="_blank" className="text-gray-600 hover:underline">www.auraonekochi.com</a>
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

export default Aura;