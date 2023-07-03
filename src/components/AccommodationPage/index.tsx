import React from 'react';

const AccommodationPage = () => {

    const data = [
        {
            id: 1,
            src:'/assets/hotel/hotel.webp',
            hotel: 'Marriott ⭐⭐⭐⭐⭐',
            distance: '1.6 Km',
            single: ' - 5750+ 12% Tax',
            double: ' - 6500 + 12 % Tax',
        },
        {
            id: 2,
            src:'/assets/hotel/Holiday-inn.webp',
            hotel: 'Holiday Inn ⭐⭐⭐⭐⭐',
            distance: '5.3 Km',
            single: ' - 4500 + Tax',
            double: ' - 5000 + Tax',

        },
    ];

    return (
        <div className=" pt-24 bg-white text-background px-6">


            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4">Accommodation</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    {data.map((data, i) => (
                        <div key={data.id} className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                            <img
                                alt="Home"
                                src={data.src}
                                className="h-56 w-full rounded-md object-fill"
                            />
                            <div className="mt-2">
                                <div className="font-medium uppercase text-lg font-bold">{data.hotel}</div>
                                <div className="text-gray-600">Distance From Venue - {data.distance}</div>
                            </div>
                            <div className="mt-2">
                                <h3 className="font-medium">Single Room   </h3>
                                <p className="text-gray-600"> {data.single} (Price per day) </p>
                            </div>
                            <div className="mt-2">
                                <h3 className="font-medium">Double Room </h3>
                                <p className="text-gray-600"> {data.double} (Price per day) </p>
                            </div>
                        </div>
                    ))}
                    {/* Add more hotel entries here if needed */}
                </div>
            </div>


        </div>
    );
};
export default AccommodationPage;