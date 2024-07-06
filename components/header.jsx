"use client"; // Ensure this is at the top

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import edinburghDanceSchoolLogo from 'public/edinburghDanceSchool.svg';
import edsLogo from 'public/edsLogo.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Adult Classes', href: '/adult-classes' },
    { linkText: 'Children Classes', href: '/children-classes' },
    { linkText: 'Wedding Dance', href: '/wedding-dance' }
];

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="relative flex flex-wrap items-center justify-between gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/">
                <Image src={edinburghDanceSchoolLogo} alt="Edinburgh Dance School Logo" className="w-56 h-auto" />
            </Link>
            <button
                className="block lg:hidden p-2 rounded focus:outline-none focus:ring z-20"
                onClick={toggleMenu}
            >
                <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
            </button>
            <div className={`absolute top-full left-0 w-full bg-white text-black lg:relative lg:flex lg:bg-transparent lg:text-white lg:flex-row lg:items-center lg:gap-x-4 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
                {!!navItems?.length && (
                    <ul className="flex flex-col lg:flex-row gap-x-4 gap-y-1 lg:gap-y-0 p-4 lg:p-0">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="block px-4 py-2 transition hover:bg-gray-200 lg:hover:bg-transparent lg:px-3 lg:py-2"
                                >
                                    {item.linkText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="flex-grow justify-end hidden lg:flex lg:mr-1">
                    <Link
                        href="https://github.com/netlify-templates/next-platform-starter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={edsLogo} alt="GitHub logo" className="w-7" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
