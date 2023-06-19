import React from 'react';
import Link from 'next/link';

function DropdownBtn() {
    return (
        <div className="relative w-full">
            <div className="bg-gray-500/50  whitespace-nowrap text-color flex flex-col p-4 rounded-sm absolute top-0 right-0 ">
                <li className="container group mx-auto flex flex-col ">
                    <Link href="/travel">
                        <button className="pb-1 hover:text-gray-500 ">
                            Travel
                        </button>
                    </Link>
                    <Link href="/venue">
                        <button className="pb-1 hover:text-gray-500 ">
                            Venue
                        </button>
                    </Link>
                    <Link href="/contact ">
                        <button className="hover:text-gray-500 ">
                            Contact
                        </button>
                    </Link>
                </li>
            </div>
        </div>

    );
}

export default DropdownBtn;