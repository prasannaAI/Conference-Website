import React from 'react';

import ProfileCard from '@/components/shared/ProfileCard';

function NationalFaculties() {


    const data = [
        {
            id: 1,
            image: '/assets/images/dr-rakesh-jalali.jpg',
            name: 'Dr Rakesh Jalali',
            bio: (
                <>
                    Medical Director &
                    {' '}
                    <br />
                    {' '}
                    Head of Radiation Oncology Department,
                    {' '}
                    <br />
                    {' '}
                    Apollo Proton Centre,
                </>
            ),
            country: 'Chennai, India',
        },
        {
            id: 2,
            name: 'Dr. Debnarayan Dutta',
            bio: (
                <>
                    Head of Radiation Oncology Department,
                    {' '}
                    <br />
                    {' '}
                    Amrita Institute of Medical Sciences,
                </>
            ),
            image: '/assets/images/Dr.-Debnarayan-Dutta.jpg',
            country: 'Kochi, India',
        },
    ];

    return (
        <div className="bg-white pb-20 pt-4">
            <section className="py-8 px-6  body-font">
                <div className="container pt-8 mx-auto">
                    <div className="text-4xl font-bold text-gray-500/50 mb-8"> National Faculties </div>
                    <div className="grid lg:grid-cols-2 gap-8 mt-4 ">
                        {data.map((data, i) => (
                            <div key={i}>
                                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={data.image} />
                                    <div className="flex-grow sm:pl-4 mr-4">
                                        <h2 className="title-font font-medium text-lg text-gray-900">{data.name}</h2>
                                        {data.bio && (
                                            <p className="text-gray-800">
                                                {data.bio}
                                            </p>
                                        )}
                                        <h3 className="text-gray-500 mb-3">{data.country}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NationalFaculties;