import React from 'react';
import Link from 'next/link';

const WelcomeAddress = () => {
    return (
        <div className="pt-20 bg-gray-50">
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6  lg:px-8">
                    <div className="max-w-full">
                        <h2 className="text-3xl text-gray-600  font-bold flex justify-center uppercase sm:text-4xl">
                            Welcome Address
                        </h2>
                    </div>

                    <div className="mt-8 grid grid-cols-1  gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative flex justify-center  h-64 overflow-hidden sm:h-80 lg:h-full">

                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <img
                                    className="object-cover object-center rounded"
                                    alt="Speaking in Meeting "
                                    src="/assets/images/public.svg"
                                />
                            </div>
                        </div>

                        <div className="lg:pt-16">
                            <article className="space-y-4 text-gray-600">
                                <p>
                                    Greetings! Herein, we are cordially inviting you to take part in the Educational
                                    Course of the International Stereotactic Radiosurgery Society (ISRS; www.ISRSy.org),
                                    which will be held in Kochi, Kerala, India, on August 24-26th, 2023.
                                </p>

                                <p>
                                    Starting from December 2016, ISRS has launched its educational program with regular
                                    organization of courses with a purpose to disseminate knowledge on current
                                    applications of stereotactic irradiation in management of various neurosurgical and
                                    somatic diseases, and to provide continuous medical education in this field. By this
                                    time, 19 such events were organized in various countries (Brazil, China, Egypt,
                                    Finland, Georgia, Hungary, Italy, Latvia, Russia, Switzerland, UK). Although in
                                    2020-2021 our activities were interrupted owed to the worldwide COVID pandemic, now
                                    we are going to restore it, and for the first time are organizing the ISRS
                                    Educational Course in South India, in the beautiful state of Kerala.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-background text-color p-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <p className="mb-3  ">
                            The Course is intended for radiation oncologists,
                            neurosurgeons, medical physicists, residents, and students interested in increasing their
                            knowledge
                            in the field of radiosurgery and stereotactic radiotherapy. The event will be organized in
                            collaboration with the International Stereotactic Radiosurgery Society (ISRS) and Amrita
                            Institute
                            of Medical Sciences, Kochi and Delhi-NCR with affiliation from Indian Society of
                            Neurooncology
                            (ISNO). This program will be mainly dedicated to the applications of stereotactic
                            irradiation for
                            management of benign intracranial tumors, skull base tumors, and genitourinary malignancies,
                            as well
                            as to some of the fundamentals of the physics behind our discipline.
                            {' '}
                        </p>
                        <p className="mb-3 ">
                            This knowledge will be handed down by renowned
                            experts in the field that have kindly agreed to participate and share their experience with
                            the
                            Course attendees. Free and open discussions on the highlighted topics are planned with
                            encouragement
                            of any participant to take part in it and express his/her own opinion. In addition, we are
                            planning
                            special sessions with highlight of individual clinical cases with consideration of different
                            options
                            for their management. Overall, it will be a great opportunity to interchange experiences
                            that will
                            surely provide personal and collective growth in our day-to-day clinical practice. Most
                            radiosurgical platforms will be well represented giving a unique opportunity to integrate
                            the
                            lessons learned to most centers that practice stereotactic irradiation..
                        </p>
                    </div>


                </div>
            </div>

            <div className="bg-gray-50 text-gray-600 p-8">
                <div className="container mx-auto">
                    <div className="text-2xl font-bold pb-8 flex justify-center  sm:text-4xl">
                        <div>God&apos;s Own Country</div>
                        <div>❤️</div>
                    </div>
                    <div className="mb-3 ">
                        Kochi is a vibrant and very pleasant city, and Kerala
                        is known as an important tourist destination for back waters and ayurveda. Blessings from our
                        beloved
                        Amma with enrich the learning experience and her philosophy of spreading knowledge will be the
                        spirit of
                        our educational course as well. Through your valuable participation and integration of the selfless
                        divine blessings we shall strive to leave behind the wonderful gift of knowledge in the field of
                        radiosurgery, the wisdom and experience to pursue excellence in our discipline so we can give our
                        patients the best results, thus enhancing quality of life.

                        We look forward to seeing you in Kochi, Kerala and wish you a stimulating and productive
                        participation
                        in the ISRS Educational Course as well as an enjoyable stay.

                    </div>
                    <div className="flex justify-end  ">
                        <Link href="/travel">
                            <div className="text-gray-600 hover:text-gray-800 border border-transparent bg-gray-500/30 transition duration-300 hover:bg-gray-500/20 py-4 px-6 rounded text-xl flex justify-between">
                                <div> Explore Kochi </div>
                                <div className="ml-8">&rarr;</div>
                            </div>
                        </Link>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default WelcomeAddress;