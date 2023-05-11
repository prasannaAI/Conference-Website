import React, {useRef, useEffect, useState, MouseEventHandler} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

import DropdownBtn from './DropdownBtn';

const MOBILELINKS = [
    {
        name: 'Speakers',
        link: '/speakers',
    },
    {
        name: 'Day - 1',
        link: '/agenda/day-1',
    },
    {
        name: 'Day - 2',
        link: '/agenda/day-2',
    },
    {
        name: 'Day - 3',
        link: '/agenda/day-3',
    },

    {
        name: 'Committee',
        link: '/committee',
    },
    {
        name: 'Registration',
        link: '/registration',
    }
];

const DESKTOPLINKS = [
    {
        name: 'Speakers',
        link: '/speakers',
    },
    {
        name: 'Agenda',
        link: '',
    },
    {
        name: 'Committee',
        link: '/committee',
    },
    {
        name: 'Registration',
        link: '/registration',
    }
];

const MobileTopbar = ({ open }: {open: boolean}) => {

    useEffect(() => {
        if (open)
            document.body.classList.add('overflow-hidden');
        else
            document.body.classList.remove('overflow-hidden');
        
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [open]);



    return (
        <div className={`absolute top-0 text-color bg-background h-20 z-50 right-0 bottom-0 left-0 overflow-y-hidden h-screen w-full transform ${open ? '-translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-start filter px-5 drop-shadow-md bg-background h-20">
                <Link href="/">
                    <img
                        width={150}
                        height={80}
                        className="bg-white p-2  lg:mt-0 rounded shadow object-cover object-center rounded"
                        alt="Speaking in Meeting "
                        src="/assets/logo/Logo.jpg"
                    />
                </Link>
            </div>
            <div className="pt-20 bg-background" />
            <div
                className="flex flex-col"
                style={{
                    backgroundImage: 'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(1, 4, 37, 0.4) 70%, rgba(1, 4, 37, 0.65) 100%), url(/assets/images/bgi-cover.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {MOBILELINKS.map((link, i) => (
                    <div key={i} className="py-6 bg-background hover:bg-transparent border-b border-opacity-20 text-xl px-10 transition duration-500" >
                        <Link
                            href={link.link}
                            className={`flex whitespace-nowrap p-1 transition
                                lg:hover:scale-110 duration-300 ease-in-out
                                 $router.pathname === link.link && 'font-semibold'}
                            `}
                            scroll={false}
                        >
                            {link.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};


const Topbar = () => {

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    const dropdownRef = useRef(null);

    // @ts-ignore
    const handleWindowClick = (event) => {
        // @ts-ignore
        if (dropdownRef.current && !dropdownRef.current?.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleWindowClick);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleWindowClick);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const router = useRouter();

    return (
        <nav className={`z-50 absolute w-full text-color ${scrolled ? 'bg-background border-b-2' : router.route === '/' ? 'bg-transparent' : 'bg-background'}`}>
            <MobileTopbar open={open} />
            <div className="mx-auto container px-0 sm:px-6 flex items-center h-24">
                <div className="w-1/4 ml-5 md:ml-0 flex items-center">
                    <Link href="/">

                        <img
                            width={180}
                            height={80}
                            className="bg-white p-2 pr-4 lg:mt-0 rounded shadow object-cover object-center rounded"
                            alt="Speaking in Meeting "
                            src="/assets/logo/Logo.jpg"
                        />
                    </Link>

                </div>
                <div className="w-3/4 flex justify-end items-center">

                    <div
                        className="z-50 flex relative mr-5 w-6 h-6 flex-col justify-between items-center md:hidden"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        {/* hamburger button */}
                        <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-2.5' : ''}`} />
                        <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? '!w-0' : 'w-full'}`} />
                        <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-2.5' : ''}`} />
                    </div>

                    <div className="hidden md:flex md:pl-5">
                        <ul className="flex gap-4 text-textColor">
                            {DESKTOPLINKS.map((link, i) =>
                                link.name==='Agenda' ? (
                                    <div key={i} ref={dropdownRef}>
                                        <button
                                            className=" flex items-center"
                                            onClick={handleClick}
                                        >
                                            Agenda
                                            <img className={` h-8 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} src="/assets/icons/down-arrow.svg" alt="dropIcon" />
                                        </button>
                                        {isOpen ? <DropdownBtn /> : ''}

                                    </div>
                                ) : (
                                    <li key={i} className=" group mx-auto">
                                        <Link
                                            href={link.link}
                                            className={`flex whitespace-nowrap p-1 transition border-b border-transparent hover:border-color
                                            duration-300 ease-in-out
                                            $router.pathname === link.link && 'font-semibold'}
                                        `}
                                            scroll={false}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Topbar;