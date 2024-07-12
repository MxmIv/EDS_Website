import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-gray-200 text-black pt-8 pb-12 sm:pt-3 sm:pb-10 text-center mt-8">
            <p className="text-sm mb-4">
                <Link href="/privacy-policy" className="underline">Privacy Policy</Link>
            </p>
            <p className="text-sm">
                © 2024 Edinburgh Dance School. All rights reserved.
            </p>
            <p className="text-sm">
                Telephone: +44 1234 567890
            </p>
            <p className="text-sm">
                Address: 123 Dance Street, Edinburgh, EH1 2AB, United Kingdom
            </p>
        </footer>
    );
}
