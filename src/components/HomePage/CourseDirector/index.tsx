import React from 'react';
import Link from 'next/link';

const CourseDirector = () => {

    const COMMITTEE_DATA = [
        {
            name: 'Dr Rakesh Jalali',
            designation: 'Director',
            image: '/assets/images/dr-rakesh-jalali.jpg',
            bio: (
                <>
                    Medical Director & HOD,
                    <br />
                    {' '}
                    Radiation Oncology,
                    <br />
                    Apollo Proton Centre, Chennai
                </>
            ),
        },

        {
            name: 'Dr. Debnarayan Dutta',
            designation: 'Co-Director',
            image: '/assets/images/Dr.-Debnarayan-Dutta.jpg',
            bio: (
                <>
                    Prof & HOD,
                    <br />
                    {' '}
                    Radiation Oncology,
                    <br />
                    Amrita Institute of Medical Sciences, Kochi
                </>
            ),
        },
    ];

    return (
        <div className="bg-gray-50">
            <section className="text-background body-font">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex justify-between flex-col lg:flex-row items-start mb-10">
                        <div className="text-6xl font-bold">Course Directors</div>

                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-between mt-6 -m-4">
                        {COMMITTEE_DATA.map((item, index) => (
                            <div key={index} className="p-4 lg:w-1/2">
                                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={item.image} />
                                    <div className="flex-grow sm:pl-8">
                                        <h2 className="text-gray-800 font-semibold text-xl">{item.name}</h2>
                                        <h3 className="text-gray-400 font-semibold mb-3">{item.designation}</h3>
                                        <p className="mb-4 text-gray-600">
                                            {item.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default CourseDirector;