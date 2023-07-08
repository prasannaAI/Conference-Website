import React from 'react';

import ProfileCard from '@/components/shared/ProfileCard';

function InternationalFaculties() {


    const data = [
        {
            id: 1,
            name: 'Professor Amr El-Shahaby',
            bio: (
                <>
                    Department of Neurosurgery,
                    {' '}
                    <br />
                    {' '}
                    Ain Shams University, Cairo Gamma Knife Center,
                    <br />
                    {' '}
                    Nasser Institute,

                </>
            ),
            image: '/assets/faculty/edit_Amr El-Shehaby.jpg',
            country: 'Cairo, Egypt',
            flag:'/assets/countryflags/egypt.png',
        },
        {
            id: 2,
            name: 'Professor EnMin Wang',
            bio: (
                <>
                    Department of Neurosurgery,
                    {' '}
                    <br />
                    {' '}
                    CyberKnife Center, Huashan Hospital,
                    <br />
                    {' '}
                    Fudan University,
                </>
            ),
            image: '/assets/faculty/(12) EnMin Wang.jpg',
            country: 'Shanghai, China',
            flag:'/assets/countryflags/Flag-China.webp',
        },
        {
            id: 3,
            name: 'Professor Elitsa Encheva',
            bio: (
                <>
                    Head of the Radiotherapy Department,
                    {' '}
                    <br />
                    {' '}
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    University Hospital "St. Marina",
                    <br />
                    {' '}
                    Medical University Varna,
                </>
            ),
            image: '/assets/faculty/(4) Elitsa Encheva.jpg',
            country: 'Varna, Bulgaria',
            flag:'/assets/countryflags/Bulgaria.png',
        },
        {
            id: 4,
            name: 'Dr. Ferenc Lakosi',
            bio: (
                <>
                    Head of the Radiotherapy Department,
                    {' '}
                    <br />
                    {' '}
                    Somogy County Kaposi Mór Teaching Hospital,
                </>
            ),
            image: '/assets/faculty/(7) Ferenc Lakosi.JPG',
            country: 'Kaposvar, Hungary',
            flag:'/assets/countryflags/Flag-Hungary.webp',
        },
        {
            id: 5,
            name: 'Professor Selcuk Peker',
            bio: (
                <>
                    Chairman of the Department of Neurosurgery,
                    {' '}
                    <br />
                    {' '}
                    Chief of the Gamma Knife Radiosurgery Center,
                    <br />
                    {' '}
                    Koç University School of Medicine,
                </>
            ),
            image: '/assets/faculty/(11) Selcuk Peker.jpg',
            country: 'Istanbul, Turkey',
            flag:'/assets/countryflags/Flag_of_Turkey.png',
        },
        {
            id: 6,
            name: 'Professor Ian McCutcheon',
            bio: (
                <>
                    Department of Neurosurgery,
                    {' '}
                    <br />
                    {' '}
                    The University of Texas MD Anderson Cancer Center,
                </>
            ),
            image: '/assets/faculty/(8) Ian McCutcheon.jpg',
            country: 'Houston, TX, USA',
            flag:'/assets/countryflags/usa.png',
        },
        {
            id: 7,
            name: 'Dr. Pavel Ivanov',
            bio: (
                <>
                    Head of the Radiosurgery Department,
                    {' '}
                    <br />
                    {' '}
                    Medical Institute named after Dr. Berezin Sergey (MIBS),
                </>
            ),
            image: '/assets/faculty/(5) Pavel Ivanov.jpg',
            country: 'St. Petersburg, Russia',
            flag:'/assets/countryflags/Flag_of_Russia.png',
        },
        {
            id: 8,
            name: 'Dr. Maris Mezeckis',
            bio: (
                <>
                    Radiation Oncologist,
                    {' '}
                    <br />
                    {' '}
                    Radiosurgery Center “Sigulda”,
                </>
            ),
            image: '/assets/faculty/edit_mark.jpg',
            country: 'Sigulda, Latvia',
            flag:'/assets/countryflags/Latvia.png',
        },
        {
            id: 9,
            name: 'Dr. Mikhail Chernov',
            bio: (
                <>
                    Department of Neurosurgery,
                    {' '}
                    <br />
                    {' '}
                    Tokyo Women’s Medical University Adachi Medical Center,
                </>
            ),
            image: '/assets/images/dr-mikhael.png',
            country: 'Tokyo, Japan',
            flag:'/assets/countryflags/Japan.png',
            flagSecond:'/assets/countryflags/Flag_of_Russia.png'
        },
        {
            id: 10,
            name: 'Professor Sean P. Collins',
            bio: (
                <>
                    Director of the CyberKnife Prostate Program,
                    {' '}
                    <br />
                    {' '}
                    MedStar Georgetown University Hospital and School of Medicine,
                </>
            ),
            image: '/assets/faculty/(2) Sean P. Collins.jpg',
            country: 'Washington DC, USA',
            flag:'/assets/countryflags/usa.png',

        },
        {
            id: 11,
            name: 'Dr. Rupesh Kotecha',
            bio: (
                <>
                    Chief of Radiosurgery,
                    {' '}
                    <br />
                    {' '}
                    Department of Radiation Oncology,
                    {' '}
                    <br />
                    {' '}
                    Miami Cancer Institute,
                </>
            ),
            image: '/assets/faculty/(6) Rupesh Kotecha.jpg',
            country: 'Miami, FL, USA',
            flag:'/assets/countryflags/usa.png',

        },
        {
            id: 12,
            name: 'Professor Xinyu Yang',
            bio: (
                <>
                    Department of Neurosurgery,
                    {' '}
                    <br />
                    {' '}
                    Tianjin Medical University General Hospital,
                </>
            ),
            image: '/assets/faculty/(13) Xinyu Yang - 2.jpg',
            country: 'Tianjin, China',
            flag:'/assets/countryflags/Flag-China.webp',
        },
        {
            id: 13,
            name: 'Professor Yoshimasa Mori',
            bio: (
                <>
                    Director of the Center for Advanced Image-Guided Radiotherapy,
                    {' '}
                    <br />
                    {' '}
                    Shin-Yurigaoka General Hospital,
                </>
            ),
            image: '/assets/faculty/(10) Yoshimasa Mori.jpg',
            country: 'Kawasaki, Kanagawa, Japan',
            flag:'/assets/countryflags/Japan.png',

        },
        {
            id: 14,
            name: 'Dr. Ali Niyaf',
            bio: (
                <>
                    Consultant Neurosurgeon,
                    {' '}
                    <br />
                    {' '}
                    ADK Hospital,
                </>
            ),
            image: '/assets/faculty/Ali Niyaf.jpg',
            country: 'Male, Maldives',
            flag:'/assets/countryflags/Flag-Maldives.webp',

        },
        {
            id: 15,
            name: 'Prof Qamruzzaman Chowdhury',
            bio: (
                <>
                    Director,
                    {' '}
                    <br />
                    {' '}
                    Labaid Speciality Hospital,
                </>
            ),
            image: '/assets/faculty/Qamruzzaman Chowdhury.jpg',
            country: 'Dhaka, Bangladesh',
            flag:'/assets/countryflags/Flag_of_Bangladesh.png',

        },
        {
            id: 16,
            name: 'Dr Davis Miles',
            bio: (
                <>
                    Director,
                    {' '}
                    <br />
                    {' '}
                    Zapp Radiosurgery System,
                </>
            ),
            image: '/assets/faculty/Qamruzzaman Chowdury.jpg',
            country: 'England, UK',
            flag:'/assets/countryflags/uk-flag.png',

        },
    ];

    // @ts-ignore
    return (
        <div className="bg-gray-200/100 pt-20">
            <section className="py-8 px-6  body-font">
                <div className="container pt-8 mx-auto">
                    <div className="text-4xl font-bold text-gray-500/50 mb-8"> International Faculties</div>
                    <div className="grid lg:grid-cols-2 gap-8 mt-4 ">
                        {data.map((data, i) => (
                            <div key={i}>
                                <div className=" bg-gray-200/100 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-top sm:mb-0 mb-4" src={data.image} />
                                    <div className="flex-grow sm:pl-4 mr-4">
                                        <h2 className="title-font font-medium text-lg text-gray-900">{data.name}</h2>
                                        {data.bio && (
                                            <p className="text-gray-800">
                                                {data.bio}
                                            </p>
                                        )}
                                        <div className="flex justify-center md:justify-start mb-3">
                                            <h3 className="text-gray-500 ">{data.country}</h3>
                                            <img alt="Country Flags" className="ml-2 mt-1" width={30} height={25} src={data.flag} />
                                            {data.name === 'Dr. Mikhail Chernov' && (
                                                <img src={data.flagSecond} className="ml-2 mt-1" width={30} height={25} alt="Country Flags" />
                                            )}
                                        </div>
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

export default InternationalFaculties;