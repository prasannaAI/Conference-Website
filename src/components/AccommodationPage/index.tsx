import React, { useState, useEffect } from 'react';

import Marriot from '@/components/AccommodationPage/Marriot';
import HolidayInn from '@/components/AccommodationPage/HolidayInn';
import Hilux from '@/components/AccommodationPage/Hilux';
import Ghala from '@/components/AccommodationPage/Ghala';

const AccommodationPage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState(null);

    // @ts-ignore
    const toggleModal = (hotel) => {
        setModalVisible(!modalVisible);
        setSelectedHotel(hotel);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedHotel(null);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.classList.contains('modal-overlay')) {
                closeModal();
            }
        };

        if (modalVisible) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling on the background
            window.addEventListener('click', handleOutsideClick);
        } else {
            document.body.style.overflow = ''; // Restore scrolling on the background
            window.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.body.style.overflow = ''; // Restore scrolling on unmount
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [modalVisible]);

    const renderHotelComponent = () => {
        if (selectedHotel === 'marriot') {
            return <Marriot />;
        } else if (selectedHotel === 'holidayInn') {
            return <HolidayInn />;
        } else if (selectedHotel === 'hilux') {
            return <Hilux />;
        } else if (selectedHotel === 'ghala') {
            return <Ghala />;
        } else {
            return null;
        }
    };

    return (
        <div className="pt-24 bg-white text-background px-6">
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-gray-600 mb-4 uppercase">Accommodation</h1>
                <div className="flex justify-evenly flex-col gap-4 sm:flex-row ">
                    {/* Hotel cards */}
                    <div className="cursor-pointer " onClick={() => toggleModal('holidayInn')}>
                        <div className="w-full max-w-xl p-4 rounded-lg overflow-hidden shadow-md bg-white transition duration-300 ease-in-out transform hover:scale-105">
                            <img
                                alt="Holiday Inn"
                                className="w-full h-56 object-cover rounded-lg mb-4"
                                src="/assets/hotel/edited-holiday.jpg"
                            />
                            <div className="flex flex-col items-center xl:flex-row xl:justify-center gap-0.5 ">
                                <h3 className="text-lg font-semibold">Holiday Inn</h3>
                                <div className="mt-0.5">⭐⭐⭐⭐⭐</div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer" onClick={() => toggleModal('marriot')}>
                        <div className="w-full max-w-xl p-4 rounded-lg overflow-hidden shadow-md bg-white transition duration-300 ease-in-out transform hover:scale-105">
                            <img
                                alt="Marriot"
                                className="w-full h-56 object-cover rounded-lg mb-4"
                                src="/assets/hotel/hotel.webp"
                            />
                            <div className="flex flex-col items-center  md:flex-row md:justify-center gap-0.5 ">
                                <h3 className="text-lg font-semibold">Marriot</h3>
                                <div className="mt-0.5">⭐⭐⭐⭐⭐</div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer" onClick={() => toggleModal('hilux')}>
                        <div className="w-full max-w-xl p-4 rounded-lg overflow-hidden shadow-md bg-white transition duration-300 ease-in-out transform hover:scale-105">
                            <img
                                alt="Hilux"
                                className="w-full h-56 object-cover rounded-lg mb-4"
                                src="/assets/hotel/hilux.jpg"
                            />
                            <div className="flex justify-center">
                                <h3 className="text-lg font-semibold">Hilux</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer" onClick={() => toggleModal('ghala')}>
                        <div className="w-full max-w-xl p-4 rounded-lg overflow-hidden shadow-md bg-white transition duration-300 ease-in-out transform hover:scale-105">
                            <img
                                alt="Ghala Residency"
                                className="w-full h-56 object-cover rounded-lg mb-4"
                                src="/assets/hotel/ghala-hotel%20.jpg"
                            />
                            <div className="flex justify-center">
                                <h3 className="text-lg font-semibold">Ghala Residency</h3>
                            </div>
                        </div>
                    </div>

                    {/* Main modal */}
                    {modalVisible && (
                        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
                            {/* Background overlay */}
                            <div
                                className="fixed inset-0 bg-black opacity-50 modal-overlay"
                                onClick={closeModal}
                            ></div>

                            {/* Modal content */}
                            <div className="relative bg-white rounded-lg shadow-md overflow-y-auto max-h-[80vh] ">
                                {renderHotelComponent()}
                            </div>
                        </div>
                    )}
                </div>




            </div>
        </div>
    );
};

export default AccommodationPage;
