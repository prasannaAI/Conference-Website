import React from 'react';

import ProfileCard from '@/components/shared/ProfileCard';

function NationalFaculties() {


    const data = [
        {
            id: 1,
            image: '/assets/images/dr-rakesh-jalali.jpg',
            name: 'Dr Rakesh Jalali',
            country: 'India',
        },
        {
            id: 2,
            name: 'Dr. Debnarayan Dutta',
            image: '/assets/images/Dr.-Debnarayan-Dutta.jpg',
            country: 'India',
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
                                <ProfileCard
                                    name={data?.name}
                                    designation={data?.country}
                                    image={data?.image}
                                    key={i}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NationalFaculties;