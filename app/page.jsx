"use client"; // Ensure this is at the top

import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
    return (
        <main className="flex flex-col gap-0">
            <section className="relative w-full h-96">
                <Image
                    src="/images/mainpage_hall.jpg"
                    alt="Main Cover"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 text-center px-4">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md">Welcome to our dance
                        school!</h2>
                    <p className="mt-4 text-lg sm:text-xl text-white drop-shadow-md">We offer a variety of dance classes
                        for all ages and skill levels. Join us to learn, enjoy, and excel in dancing.</p>
                </div>
            </section>
            <div className="py-8"></div>
            <section className="flex flex-col gap-8 sm:gap-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <Link href="/adult-classes" legacyBehavior>
                            <a className="image-button flex flex-col items-center no-underline">
                                <Image src="/images/adultClasses.jpg" alt="Adult Classes" width={300} height={200}
                                       className="w-full max-w-xs" />
                                <h2 className="class-name text-2xl font-bold mt-4">Adult Classes</h2>
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link href="/children-classes" legacyBehavior>
                            <a className="image-button flex flex-col items-center no-underline">
                                <Image src="/images/childrenclasses.jpg" alt="Children Classes" width={300} height={200}
                                       className="w-full max-w-xs" />
                                <h2 className="class-name text-2xl font-bold mt-4">Children Classes</h2>
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link href="/wedding-dance" legacyBehavior>
                            <a className="image-button flex flex-col items-center no-underline">
                                <Image src="/images/WeddingClasses_compressed.jpg" alt="Wedding Dance" width={300}
                                       height={200} className="w-full max-w-xs" />
                                <h2 className="class-name text-2xl font-bold mt-4">First Wedding Dance</h2>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
