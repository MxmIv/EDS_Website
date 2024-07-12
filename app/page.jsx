"use client"; // Ensure this is at the top

import Image from 'next/image';
import ImageButton from '/components/ImageButton';

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
            <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">About Us</h2>
                    <p className="mt-4 text-lg sm:text-xl text-gray-600">
                        Here at the school girls and boys learn together in a fun and relaxed atmosphere under the guidance of expert teachers who have a passion for dance. Our ambition is for all students to leave the class smiling and looking forward to the next moment when they get to dance with us again.
                    </p>
                    <p className="mt-4 text-lg sm:text-xl text-gray-600">
                        We have our own private dance studio in Edinburgh which is dedicated to our Scottish Wedding industry award-winning company Learn 2 Wedding Dance.
                    </p>
                    <p className="mt-4 text-lg sm:text-xl text-gray-600">
                        We now have a brand new timetable for our children`&#39;s dance classes every Saturday morning featuring the magical TwinkleStars Ballet Club and our very popular BallroomJuniors Club. Our classes are open to all children throughout the year and everyone is welcome.
                    </p>
                </div>
            </section>
            <div className="py-8"></div>
            <section className="flex flex-col gap-8 sm:gap-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <ImageButton href="/adult-classes" src="/images/adultClasses.jpg" alt="Adult Classes" title="Adult Classes" />
                    <ImageButton href="/children-classes" src="/images/childrenclasses.jpg" alt="Children Classes" title="Children Classes" />
                    <ImageButton href="/wedding-dance" src="/images/WeddingClasses_compressed.jpg" alt="Wedding Dance" title="First Wedding Dance" />
                </div>
            </section>
        </main>
    );
}
