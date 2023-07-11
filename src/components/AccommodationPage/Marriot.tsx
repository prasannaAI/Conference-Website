import React, {useState} from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {HiOutlineMail} from 'react-icons/Hi';
import {FiPhone} from 'react-icons/Fi';
import {TbWorldWww} from 'react-icons/Tb';


function Marriot() {


    const [showPopover1, setShowPopover1] = useState(false);
    const [showPopover2, setShowPopover2] = useState(false);
    const [showPopover3, setShowPopover3] = useState(false);

    const handleMouseEnter1 = () => {
        setShowPopover1(true);
    };

    const handleMouseLeave1 = () => {
        setShowPopover1(false);
    };

    const handleTogglePopover1 = () => {
        setShowPopover1(!showPopover1);
    };
    const handleMouseEnter2 = () => {
        setShowPopover2(true);
    };

    const handleMouseLeave2 = () => {
        setShowPopover2(false);
    };

    const handleTogglePopover2 = () => {
        setShowPopover2(!showPopover2);
    };


    const handleMouseEnter3 = () => {
        setShowPopover3(true);
    };

    const handleMouseLeave3 = () => {
        setShowPopover3(false);
    };

    const handleTogglePopover3 = () => {
        setShowPopover3(!showPopover3);
    };


    return (
        <div className="flex justify-center p-1">

            <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-md bg-white relative">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img
                            alt="Hotel"
                            src="/assets/hotel/hotel.webp"
                            className="object-cover h-full w-full"
                        />
                    </div>
                    <div className="md:w-1/2 p-6">
                        <div className="font-medium uppercase text-lg font-bold whitespace-nowrap">
                            Marriott ⭐⭐⭐⭐⭐
                        </div>
                        <div className="text-gray-600">Distance From Venue - 1.6km</div>
                        <div className="mt-2">
                            <div className="flex gap-1 items-center">
                                <h3 className="font-medium">Deluxe Rooms</h3>
                                <div className="relative">
                                    <span className="text-red-500 cursor-pointer" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} onClick={handleTogglePopover1}>
                                        <AiOutlineInfoCircle color="black" className="mt-0.5" />
                                    </span>
                                    {showPopover1 && (
                                        <div className="absolute top-5 left-[-7rem] w-64 bg-white bg-white border-2 border-[#4997d0] rounded-lg shadow-sm py-2 px-3 z-10">
                                            <p>Inclusions - Buffet breakfast and Wifi</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-600">Single - 5750 + 12% Tax </p>
                            <p className="text-gray-600">Double - 6500 + 12% Tax </p>
                        </div>


                        <div className="mt-2">
                            <div className="flex gap-1 items-center">
                                <h3 className="font-medium">Executive Rooms </h3>
                                <div className="relative">
                                    <span className="text-red-500 cursor-pointer" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} onClick={handleTogglePopover2}>
                                        <AiOutlineInfoCircle color="black" className="mt-0.5" />
                                    </span>
                                    {showPopover2 && (
                                        <div className="absolute top-5 left-[-8rem] w-64 bg-white border-2 border-[#4997d0] rounded-lg shadow-sm py-2 px-3 z-10">
                                            <p>Inclusions - Buffet breakfast, Wifi, access to executive lounge and hi tea at the lounge</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-600">Single - 7500 + 12% Tax </p>
                            <p className="text-gray-600">Double - 8250 + 18% Tax </p>
                        </div>


                        <div className="mt-2">
                            <div className="flex gap-1 items-center">
                                <h3 className="font-medium"> Suite Rooms </h3>
                                <div className="relative">
                                    <span className="text-red-500 cursor-pointer" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} onClick={handleTogglePopover3}>
                                        <AiOutlineInfoCircle color="black" className="mt-0.5" />
                                    </span>
                                    {showPopover3 && (
                                        <div className="absolute top-5 left-[-6rem] w-64 bg-white bg-white border-2 border-[#4997d0] rounded-lg shadow-sm py-2 px-3 z-10">
                                            <p>Inclusions - Buffet breakfast, Wifi, access to executive lounge and hi tea at the lounge</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-600">Single - 13750 + 18% Tax </p>
                            <p className="text-gray-600">Double - 14500 + 18% Tax </p>
                        </div>


                        <div className="mt-2">
                            <div className="flex items-center mt-4 ">
                                <HiOutlineMail />
                                <div className="ml-2">
                                    <a href="mailto:Jamshi.muhammed@marriott.com " className="text-gray-600 hover:underline">Jamshi.muhammed@marriott.com </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center mt-2">
                            <HiOutlineMail />
                            <div className="ml-2">
                                <a href="mailto:mhrs.cokmc.reservation@marriott.com " className="text-gray-600 hover:underline">mhrs.cokmc.reservation@marriott.com </a>
                            </div>
                        </div>

                        <div className="mt-2">
                            <div className="flex items-center">
                                <FiPhone />
                                <div className="ml-2">
                                    <a href="tel:+91 85899 89036" className="text-gray-600 hover:underline">+91 85899 89036 </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2">
                            <div className="flex items-center">
                                <FiPhone />
                                <div className="ml-2">
                                    <a href="tel:+91 85899 89058" className="text-gray-600 hover:underline">+91 85899 89058</a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2">
                            <div className="flex items-center">
                                <TbWorldWww />
                                <div className="ml-2">
                                    <a href="https://www.marriott.com/en-us/hotels/cokmc-kochi-marriott-hotel/overview/" target="_blank" className="text-gray-600 hover:underline">www.marriott.com</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Marriot;

// <span className="text-gray-600">* Includes (Buffet Breakfast and wifi) </span>
//
