import Image from 'next/image';
import Link from 'next/link';
import githubLogo from 'public/images/github-mark-white.svg';
import edsLogo from 'public/edsLogo.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Adult Classes', href: '/adult-classes' },
    { linkText: 'Children Classes', href: '/children-classes'},
    { linkText: 'Wedding Dance', href: '/wedding-dance'}
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center justify-between gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/">
                <Image src={edsLogo} alt="Edinburgh Dance School Logo" className="w-56 h-auto" />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2"
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
                    <Image src={githubLogo} alt="GitHub logo" className="w-7" />
                </Link>
            </div>
        </nav>
    );
}
