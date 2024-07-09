"use client"; // Ensure this is at the top

import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16 px-4 sm:px-6 lg:px-8">
            <style jsx>{`
                .image-button {
                    display: inline-block;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .image-button:hover {
                    transform: scale(1.05);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
            `}</style>
            <section className="flex flex-col items-center gap-4">
                <p className="text-lg sm:text-xl text-center">Welcome to our dance school! We offer a variety of dance classes for all ages and skill levels. Join us to learn, enjoy, and excel in dancing.</p>
            </section>
            <section className="flex flex-col gap-8 sm:gap-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <Link href="/adult-classes" legacyBehavior>
                            <a className="image-button">
                                <Image src="/images/adultClasses.jpg" alt="Adult Classes" width={300} height={200} className="w-full max-w-xs" />
                            </a>
                        </Link>
                        <h2 className="text-2xl font-bold mt-4">Adult Classes</h2>
                        <p className="text-base sm:text-lg">Join our adult dance classes to learn new moves, stay fit, and have fun.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link href="/children-classes" legacyBehavior>
                            <a className="image-button">
                                <Image src="/images/childrenclasses.jpg" alt="Children Classes" width={300} height={200} className="w-full max-w-xs" />
                            </a>
                        </Link>
                        <h2 className="text-2xl font-bold mt-4">Children Classes</h2>
                        <p className="text-base sm:text-lg">Our children's dance classes are perfect for young dancers to explore and enjoy dancing.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link href="/wedding-dance" legacyBehavior>
                            <a className="image-button">
                                <Image src="/images/WeddingClasses_compressed.jpg" alt="Wedding Dance" width={300} height={200} className="w-full max-w-xs" />
                            </a>
                        </Link>
                        <h2 className="text-2xl font-bold mt-4">Wedding Dance</h2>
                        <p className="text-base sm:text-lg">Prepare for your big day with our special wedding dance classes.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
