'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <footer className="bg-gray-100 text-black py-8 sm:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center space-y-4">
                    <p className="text-sm">
                        <Link href="/privacy-policy" legacyBehavior>
                            <a className="underline">Privacy Policy</a>
                        </Link>
                    </p>
                    <p className="text-sm">
                        © 2024 Edinburgh Dance School. All rights reserved.
                    </p>
                    <p className="text-sm">
                        Telephone: <a href="tel:+447703483809" className="underline">+44 77034 83809</a>
                    </p>
                    <p className="text-sm">
                        Address: 132 Captains Road, Edinburgh, EH17 8DU, United Kingdom
                    </p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <Link href="https://www.facebook.com/EdinburghDance/" passHref legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500 transition duration-300">
                                <FontAwesomeIcon icon={faFacebookF} size="2x" />
                            </a>
                        </Link>
                        <Link href="https://wa.me/447703483809" passHref legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer" className="text-black hover:text-green-500 transition duration-300">
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/edinburghdanceschool/?hl=en-gb" passHref legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-500 transition duration-300">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
