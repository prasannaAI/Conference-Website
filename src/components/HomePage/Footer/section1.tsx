import Link from 'next/link';
import React from 'react';

const FooterSection1 = () => {
    return (
        <div className="flex-shrink-0 md:mx-0  mx-auto text-center lg:text-left">
            <a className="flex font-semibold items-center lg:justify-start justify-center">
                <span className="text-2xl">ISRS - Educational Course</span>
            </a>
            <p className="mt-2 text-sm text-gray-500 mx-auto max-w-[400px]">
                The International Stereotactic Radiosurgery Society (ISRS) was founded as an international,
                non-profit organization in 1991 and is dedicated advancing the field of stereotactic radiosurgery
                through research, education and multidisciplinary collaboration.
            </p>
            <div className="flex gap-5 lg:justify-start justify-center pt-10">
                {/* Facebook */}
                <Link
                    className="text-gray-400"
                    href="https://www.facebook.com/The-International-Stereotactic-Radiosurgery-Society-ISRS-194428258057/"
                >
                    <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </Link>
                {/* Twitter */}
                <Link
                    href="https://twitter.com/ISRSy"
                    className="text-gray-400"
                >
                    <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                        ></path>
                    </svg>
                </Link>
                {/* Youtube */}
                <Link
                    href="https://www.youtube.com/channel/UCDhYUov4JgGmo0864aNfk3g"
                    className="text-gray-400"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        id="youtube"
                    >
                        <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"></path>
                    </svg>
                </Link>
                {/* LinkedIn */}
                <Link
                    href="https://www.linkedin.com/company/international-stereotactic-radiosurgery-society-isrs/"
                    className="text-gray-400"
                >
                    <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        />
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default FooterSection1;