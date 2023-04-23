import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const LINKS = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Agenda',
        link: '/agenda',
    },
    {
        name: 'Speakers',
        link: '/speakers',
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
                <Link className="text-xl font-semibold" href="/">ISRS - Educational Course</Link>
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
                {LINKS.map((link, i) => (
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
    
    const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const router = useRouter();

    return (
        <nav className={`z-50 absolute w-full text-color ${scrolled ? 'bg-background border-b-2' : router.route === '/' ? 'bg-transparent' : 'bg-background'}`}>
            <MobileTopbar open={open} />
            <div className="mx-auto container flex items-center h-20">
                <div className="w-1/4 ml-5 md:ml-0 flex items-center">
                    <Link className="text-2xl font-bold whitespace-nowrap" href="/">ISRS - Educational Course</Link>
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
                        <ul className="flex gap-8 text-textColor">
                            {LINKS.map((link, i) => (
                                <li key={i} className="container group mx-auto">
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
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Topbar;