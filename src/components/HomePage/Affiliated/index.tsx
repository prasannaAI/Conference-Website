import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

const AffiliatedLogo = () => {

    const logo = [
        {
            id:1,
            src:'/assets/images/logo.gif',
            link:'https://www.isrsy.org/en/'
        },
        {
            id:2,
            src:'/assets/logo/Isonocon.png',
            className: 'object-contain max-h-[90px]'
        },
        {
            id:3,
            src:'/assets/logo/issfn.jpg'
        },
        {
            id:7,
            src:'/assets/logo/nsi-logo.jpg',
            className: '!   w-1/8'
        },
        {
            id:4,
            src:'/assets/logo/cochin-oncology-group.png',
            className: 'object-contain max-h-[200px]'
        },
        {
            id:5,
            src:'/assets/logo/BSBCS-logo.jpg'
        },
        {
            id:6,
            src:'/assets/logo/AROI LOGO.png'
        },
    ];


    return(
        <div>
            <div className="bg-white text-gray-700/40 py-12  px-6">
                <div className="container mx-auto">
                    <div className="text-xl md:text-2xl lg:text-3xl text-center font-bold"> Affiliated By </div>
                    <div className="flex flex-wrap justify-center items-center pt-8 gap-8">
                        {logo.map((item) => item?.link ? (
                            <Link href={item?.link} key={item?.id} className="w-1/5">
                                <Image
                                    alt="logo"
                                    className={clsx([
                                    'object-contain max-h-[150px]',
                                    item.className
                                ])}
                                    height={200}
                                    width={300}
                                    src={item.src}
                                />
                            </Link>
                                ) : (
                                    <Image
                                        key={item.id}
                                        alt="logo"
                                        className={clsx([
                                            'object-contain max-h-[150px] w-1/5',
                                            item.className
                                        ])}
                                        height={200}
                                        width={300}
                                        src={item.src}
                                    />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );

};

export default AffiliatedLogo;