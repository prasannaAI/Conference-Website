import React from 'react';

import ProfileCard from '@/components/shared/ProfileCard';

function InternationalFaculties() {


    const data = [
        {
            id: 1,
            name: 'Professor Amr El-Shahaby',
            image: '/assets/faculty/Amr El-Shehaby.jpg',
            country: 'Cairo, Egypt',
        },
        {
            id: 2,
            name: 'Professor EnMin Wang',
            image: '/assets/faculty/(12) EnMin Wang.jpg',
            country: 'Shanghai, China',
        },
        {
            id: 3,
            name: 'Professor Elitsa Encheva',
            image: '/assets/faculty/(4) Elitsa Encheva.jpg',
            country: 'Varna, Bulgaria',
        },
        {
            id: 4,
            name: 'Dr. Ferenc Lakosi',
            image: '/assets/faculty/(7) Ferenc Lakosi.JPG',
            country: 'Kaposvar, Hungary',
        },
        {
            id: 5,
            name: 'Professor Selcuk Peker',
            image: '/assets/faculty/(11) Selcuk Peker.jpg',
            country: 'Istanbul, Turkey',
        },
        {
            id: 6,
            name: 'Professor Ian McCutcheon',
            image: '/assets/faculty/(8) Ian McCutcheon.jpg',
            country: 'Houston, TX, USA',
        },
        {
            id: 7,
            name: 'Dr. Pavel Ivanov',
            image: '/assets/faculty/(5) Pavel Ivanov.jpg',
            country: 'St. Petersburg, Russia',
        },
        {
            id: 8,
            name: 'Dr. Maris Mezeckis',
            image: '/assets/faculty/(9) Maris Mezeckis.jpg',
            country: 'Sigulda, Latvia',
        },
        {
            id: 9,
            name: 'Dr. Mikhail Chernov',
            image: '/assets/images/dr-mikhael.png',
            country: 'Tokyo, Japan',
        },
        {
            id: 10,
            name: 'Professor Phil Collins',
            image: '/assets/faculty/(2) Sean P. Collins.jpg',
            country: 'Washington DC, USA',
        },
        {
            id: 11,
            name: 'Dr. Rupesh Kotecha',
            image: '/assets/faculty/(6) Rupesh Kotecha.jpg',
            country: 'Miami, FL, USA',
        },
        {
            id: 12,
            name: 'Professor Xinyu Yang',
            image: '/assets/faculty/(13) Xinyu Yang.jpg',
            country: 'Tianjin, China',
        },
        {
            id: 13,
            name: 'Professor Yoshimasa Mori',
            image: '/assets/faculty/(10) Yoshimasa Mori.jpg',
            country: 'Tokyo, Japan',
        },
    ];

    return (
        <div className="bg-white pt-20">
            <section className="py-8 px-6  body-font">
                <div className="container pt-8 mx-auto">
                    <div className="text-4xl font-bold text-gray-500/50 mb-8"> International Faculties </div>
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

export default InternationalFaculties;