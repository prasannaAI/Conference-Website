import React from "react";

const AffiliatedLogo = () => {

    const logo = [
        {
            id:1,
            src:'/assets/logo/Isonocon.png'
        },
        {
            id:2,
            src:'/assets/logo/AROI LOGO.png'
        },
        {
            id:3,
            src:'/assets/logo/cochin-oncology-group.png'
        }
    ]


    return(
        <div>
        <div className="bg-gray-50 text-gray-700/40 py-12  px-6">
            <div className="container mx-auto">
            <div className="text-xl md:text-2xl lg:text-3xl text-center font-bold"> Affiliated By </div>
                <div className="flex justify-evenly  pt-8">
                    {logo.map(( item ) => (
                        <img key={item.id} alt="logo" className="object-contain w-[15%]" src={item.src} />
                    ))}
                    </div>
                </div>
            </div>


            <div className="flex justify-center border-t-2 bg-background text-color p-4">

                <div className="font-semibold text-gray-600"> Organized by  {' '} </div>
                <span className="border-r mx-1 sm:mx-4" />
                <div className='text-gray-300/90'>  Amrita Institute of Medical Sciences, Kochi & Delhi-NCR </div>
            </div>



        </div>

    );

}

export default AffiliatedLogo;