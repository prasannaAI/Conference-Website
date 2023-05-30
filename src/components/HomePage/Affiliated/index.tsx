import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const AffiliatedLogo = () => {

    const logo = [
        {
            id:2,
            src:'/assets/logo/AROI LOGO.png'
        },
        {
            id:1,
            src:'/assets/logo/Isonocon.png',
            className: 'object-contain max-h-[90px]'
        },
        {
            id:3,
            src:'/assets/logo/cochin-oncology-group.png',
            className: 'object-contain max-h-[200px]'
        },
        {
            id:4,
            src:'/assets/logo/BSBCS-logo.jpg'
        },
        {
            id:5,
            src:'/assets/logo/nsi-logo.jpg'
        },
        {
            id:6,
            src:'/assets/logo/issfn.jpg'
        },
        {
            id:7,
            src:'/assets/logo/accuray-logo.jpg'
        },
        {
            id:8,
            src:'/assets/logo/zap-logo.jpg',
            className:'object-contain max-h-[120px] w-1/5'
        }
    ];


    return(
        <div>
            <div className="bg-white text-gray-700/40 py-12  px-6">
                <div className="container mx-auto">
                    <div className="text-xl md:text-2xl lg:text-3xl text-center font-bold"> Affiliated By </div>
                    <div className="flex flex-wrap justify-center items-center pt-8 gap-8">
                        {logo.map((item) => (
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


            <div className="flex justify-center border-t-2 bg-background text-color p-4">

                <div className="font-semibold text-gray-600">
                    {' '}
                    Organized by
                    {' '}
                    {' '}
                </div>
                <span className="border-r mx-1 sm:mx-4" />
                <div className="text-gray-300/90">  Amrita Institute of Medical Sciences, Kochi & Delhi-NCR </div>
            </div>



        </div>

    );

};

export default AffiliatedLogo;