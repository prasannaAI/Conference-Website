import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Section = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage === 0 ? 1 : 0));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const images = ['/assets/clgImage/aims-kochi.jpg', '/assets/clgImage/aims-faridabad.jpeg',];

    return (
        <div className="relative h-screen">
            <Image
                src={images[currentImage]}
                alt="Conference"
                layout="fill"
                objectFit="cover"
                onLoad={() => setLoaded(true)}
                className={`${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out`}
            />
            <div className="absolute top-0 inset-0 bg-black/50 bg-gradient-to-r from-background to-transparent" />
            <div
                className="flex flex-col justify-center items-start z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-xl mx-auto px-6 "
            >
                <div className="text-white font-semibold text-4xl md:text-5xl 2xl:text-6xl flex flex-col">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <div>ISRS</div>
                        <div className="w-2 h-2 rounded-full bg-gray-600 mx-3 hidden md:block" />
                        <div className="whitespace-nowrap">Educational Course</div>
                    </div>
                    <div className="flex flex-col gap-2 h-1 w-32 mt-2 rounded-full bg-primary" />
                </div>
                <div className="flex flex-col items-start gap-4 mt-10">
                    <div className="text-2xl md:text-4xl flex">
                        <span className="text-white font-semibold">24 - 26 August 2023</span>
                    </div>
                    <div className="font-semibold">
                        <div className="flex items-start text-xl">
                            <div className="text-gray-200 font-normal">
                                <div>Amrita Institute of Medical Sciences,</div>
                                <div>Kochi, Kerala, India</div>
                            </div>
                        </div>
                    </div>
                    <div className="font-semibold lg:flex lg:flex-row">
                        <div>
                            <Link href="/registration">
                                <button className="bg-primary text-white px-4 py-2 rounded">
                                    Register Now
                                </button>
                            </Link>
                        </div>
                        <div className="lg:flex">
                            <a href="/assets/docs/Brochures&Agenda.pdf" download="Brochures & Agenda">
                                <button
                                    className="bg-primary text-white px-4 py-2 rounded flex items-center mt-4 lg:ml-4 lg:mt-0"
                                >
                                    <div>Download Brochure & Agenda</div>
                                    <Image
                                        src="/assets/icons/download-icon.svg"
                                        alt="chevron-right"
                                        width={25}
                                        height={25}
                                        className="ml-2"
                                    />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div
                        className="pt-20 lg:pt-10 xl:pt-20 text-left font-bold  md:text-lg text-color max-w-[600px] opacity-70"
                    >
                        SRS/SRT in Management of Benign Intracranial
                        Tumors, Skull Base Tumors, and Abdominal, Genitourinary,
                        and Gynecological Cancers; Modern Technologies for Radiosurgery
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;




