import React from 'react';
import Link from 'next/link';

const CommitteeSection = () => {

    const COMMITTEE_DATA = [
        {
            name: 'Dr. Debnarayan Dutta',
            designation: 'Director',
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
        {
            name: 'Dr Mikhail Chernov',
            designation: 'Co-Director',
            image: '/assets/images/profile.png',
            bio: (
                <>
                    Chairman,
                    {' '}
                    <br />
                    {' '}
                    Scientific Committee, ISRS Annex H,
                    <br />
                    {' '}
                    Chief Medical Physicist,
                    <br />
                    Amrita Institute of Medical Sciences, Kochi
                </>
            ),
        },
    ];

    return (
        <div className="bg-background">
            <section className="text-primary body-font">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex justify-between flex-col lg:flex-row items-start text-color mb-10">
                        <div className="text-6xl font-bold">Committee</div>
                        <div className="text-lg font-medium max-w-[500px] opacity-70 mt-8 lg:mt-0">
                            Our committee members have worked tirelessly to bring you a top-notch event, from
                            curating the sessions to organizing logistics. Get to know our committee members and
                            their contributions to make this conference a success.
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-between mt-6 -m-4">
                        {COMMITTEE_DATA.map((item, index) => (
                            <div key={index} className="p-4 lg:w-1/2">
                                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={item.image} />
                                    <div className="flex-grow sm:pl-8">
                                        <h2 className="text-color font-semibold text-xl">{item.name}</h2>
                                        <h3 className="text-gray-400 font-semibold mb-3">{item.designation}</h3>
                                        <p className="mb-4 text-color">
                                            {item.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end py-10 ">
                        <Link href="/speakers">
                            <div className="text-color hover:text-color border border-transparent bg-gray-500/30 transition duration-300 hover:bg-gray-500/20 py-4 px-6 rounded text-xl flex justify-between">
                                <div>See All Members</div>
                                <div className="ml-8">&rarr;</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CommitteeSection;