import React from 'react';
import Link from 'next/link';

function DropdownBtn() {
    return (
        <div className='relative w-full'>
            <div className='bg-gray-500/50  whitespace-nowrap text-color flex flex-col p-4 rounded-sm absolute top-0 right-0 '>
                <li className="container group mx-auto flex flex-col ">
                    <Link href="/agenda/day-1">
                    <button className="pb-1 hover:text-gray-500 ">
                        Day - 1
                    </button>
                </Link>
                    <Link href="/agenda/day-2">
                        <button className="pb-1 hover:text-gray-500 ">
                            Day - 2
                        </button>
                    </Link>
                    <Link href="/agenda/day-3 ">
                        <button className="hover:text-gray-500 ">
                            Day - 3
                        </button>
                    </Link>
                </li>
            </div>
        </ div>

    );
}

export default DropdownBtn