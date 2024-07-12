// components/ImageButton.js

import Link from 'next/link';
import Image from 'next/image';

export default function ImageButton({ href, src, alt, title }) {
    return (
        <Link href={href} legacyBehavior>
            <a className="image-button flex flex-col items-center no-underline relative">
                <Image src={src} alt={alt} width={300} height={200} className="w-full max-w-xs" />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center">
                    <h2 className="text-2xl font-bold text-white drop-shadow-md">{title}</h2>
                </div>
            </a>
        </Link>
    );
}
