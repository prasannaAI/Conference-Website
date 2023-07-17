import React, {useState, useEffect} from 'react';

import Marriot from '@/components/AccommodationPage/Marriot';
import HolidayInn from '@/components/AccommodationPage/HolidayInn';
import Hilux from '@/components/AccommodationPage/Hilux';
import Ghala from '@/components/AccommodationPage/Ghala';
import Omnest from '@/components/AccommodationPage/Omnest';
import Burooj from '@/components/AccommodationPage/Burooj';
import Emarald from '@/components/AccommodationPage/Emarald';
import Ginger from '@/components/AccommodationPage/Ginger';
import Luminar from '@/components/AccommodationPage/Luminar';
import Aura from '@/components/AccommodationPage/Auro';
import Renai from '@/components/AccommodationPage/Renai';
import As from '@/components/AccommodationPage/As';

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
        }else if (selectedHotel === 'omnest') {
            return <Omnest />;
        } else if (selectedHotel === 'burooj') {
            return <Burooj />;
        }else if (selectedHotel === 'emarald') {
            return <Emarald />;
        }else if (selectedHotel === 'ginger') {
            return <Ginger />;
        }else if (selectedHotel === 'luminar') {
            return <Luminar />;
        }else if (selectedHotel === 'aura') {
            return <Aura />;
        } else if (selectedHotel === 'renai') {
            return <Renai />;
        } else if (selectedHotel === 'as') {
            return <As />;
        } else {
            return null;
        }
    };


    const data = [
        {
            id: 1,
            name: 'Hilux',
            src: '/assets/hotel/Hilux.jpg',
            toggleModal: 'hilux'
        },
        {
            id: 2,
            name: 'Ghala Residency',
            src: '/assets/hotel/ghala-hotel%20.jpg',
            toggleModal: 'ghala'
        },
        {
            id: 3,
            name: 'Omnest',
            src: '/assets/hotel/OMNEST.jpg',
            toggleModal: 'omnest'
        },
        {
            id: 4,
            name: 'Burooj Luxury Hotel',
            src: '/assets/hotel/BUROOJ LUXURY HOTEL.jpg',
            toggleModal: 'burooj'
        },
        {
            id: 5,
            name: 'Emarald Group Of Hotels & Resorts',
            src: '/assets/hotel/EMARALD GROUP OF HOTELS & RESORTS.jpg',
            toggleModal: 'emarald'
        },
        {
            id: 8,
            name: 'Ginger',
            src: '/assets/hotel/ginger hotel.webp',
            toggleModal: 'ginger'
        },
        {
            id: 7,
            name: 'Luminara Suites',
            src: '/assets/hotel/Luminar suites.jpg',
            toggleModal: 'luminar'
        },
        {
            id: 6,
            name: 'Aura One Hotel',
            src: '/assets/hotel/Aura one hotel (1).jpg',
            toggleModal: 'aura'
        },
        {
            id: 10,
            name: 'Renai Hotel',
            src: '/assets/hotel/renai.jpg',
            toggleModal: 'renai'
        },
        {
            id: 9,
            name: 'As Inn',
            src: '/assets/hotel/as inn.jpg',
            toggleModal: 'as'
        }
    ];


    return (
        <div className="pt-24 bg-white text-background px-6">
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-gray-600 mb-4 uppercase">Accommodation</h1>
                <div className="grid grid-rows-4 grid-rows-none gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {/* Hotel cards */}
                    <div className="cursor-pointer " onClick={() => toggleModal('holidayInn')}>
                        <div
                            className="w-full max-w-xl p-4 rounded-lg overflow-hidden shadow-md bg-white transition duration-300 ease-in-out transform hover:scale-105"
                        >
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
                        <div
                            className="w-full max-w-xl p-4 rounded-lg overflow-hidden shadow-md bg-white transition duration-300 ease-in-out transform hover:scale-105"
                        >
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

                    {data.map((data, i) => (
                        <div key={data.id} className="cursor-pointer" onClick={() => toggleModal(data.toggleModal)}>
                            <div
                                className="w-full max-w-xl p-4 rounded-lg overflow-hidden shadow-md bg-white transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <img
                                    alt="Hotel name"
                                    className="w-full h-56 object-cover rounded-lg mb-4"
                                    src={data.src}
                                />
                                <div className="flex justify-center">
                                    <h3 className="text-lg font-semibold">{data.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}

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
    )
        ;
};

export default AccommodationPage;

