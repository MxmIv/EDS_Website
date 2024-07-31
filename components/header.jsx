"use client"; // This will ensure the component is treated as a client component

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import edinburghDanceSchoolLogo from 'public/edinburghDanceSchool.svg'; // Ensure the correct path to your logo image

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    const navItems = [
        { href: '/adult-classes', linkText: 'Adult Classes' },
        { href: '/children-classes', linkText: 'Children\'s Classes' },
        { href: '/wedding-dance', linkText: 'Wedding Dance Classes' },
        { href: '/contact-us', linkText: 'Contact Us' } // Added Contact Us link
    ];

    return (
        <nav className="relative flex flex-wrap items-center justify-between gap-4 px-4 sm:px-4 lg:px-6 pt-4 pb-4 sm:pt-8 md:pb-4 bg-white z-10">
            <Link href="/" legacyBehavior>
                <a>
                    <Image src={edinburghDanceSchoolLogo} alt="Edinburgh Dance School Logo" className="w-48 h-auto" />
                </a>
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
            <div className={`absolute top-full left-0 w-full bg-white text-black lg:static lg:w-auto lg:bg-transparent lg:flex lg:items-center lg:gap-x-4 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
                {!!navItems?.length && (
                    <ul className="flex flex-col lg:flex-row gap-x-4 gap-y-1 lg:gap-y-0 p-4 lg:p-0">
                        {navItems.map((item, index) => (
                            <li key={index} onClick={handleMenuItemClick}>
                                <Link href={item.href} legacyBehavior>
                                    <a className="relative block px-4 py-2 text-black transition hover:text-gray-700 lg:px-3 lg:py-2 no-underline after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r from-[#20A6DF] via-[#1D509F] to-[#25A6DF] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100">
                                        {item.linkText}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}
