import Link from 'next/link';

// Removed unnecessary imports
// import { Card } from 'components/card';
// import { RandomQuote } from 'components/random-quote';
// import { Markdown } from 'components/markdown';
// import { ContextAlert } from 'components/context-alert';
// import { getNetlifyContext } from 'utils';

// Removed unused context variable and explainer content
// const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            {/* Main Photo and Description */}
            <section className="flex flex-col items-center gap-4">
                <img src="/path/to/main-photo.jpg" alt="Dance School" className="w-full max-w-2xl" />
                <p className="text-xl text-center">Welcome to our dance school! We offer a variety of dance classes for all ages and skill levels. Join us to learn, enjoy, and excel in dancing.</p>
            </section>
            {/* Classes Columns */}
            <section className="flex flex-col gap-8 sm:gap-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {/* Adult Classes */}
                    <div className="flex flex-col items-center">
                        <img src="/path/to/adult-classes-photo.jpg" alt="Adult Classes" className="w-full max-w-xs" />
                        <h2 className="text-2xl font-bold mt-4">Adult Classes</h2>
                        <p className="text-lg">Join our adult dance classes to learn new moves, stay fit, and have fun.</p>
                        <Link href="/adult-classes" className="btn btn-primary mt-4">Read More</Link>
                    </div>
                    {/* Children Classes */}
                    <div className="flex flex-col items-center">
                        <img src="/path/to/children-classes-photo.jpg" alt="Children Classes" className="w-full max-w-xs" />
                        <h2 className="text-2xl font-bold mt-4">Children Classes</h2>
                        <p className="text-lg">Our children dance classes are perfect for young dancers to explore and enjoy dancing.</p>
                        <Link href="/children-classes" className="btn btn-primary mt-4">Read More</Link>
                    </div>
                    {/* Wedding Dance */}
                    <div className="flex flex-col items-center">
                        <img src="/path/to/wedding-dance-photo.jpg" alt="Wedding Dance" className="w-full max-w-xs" />
                        <h2 className="text-2xl font-bold mt-4">Wedding Dance</h2>
                        <p className="text-lg">Prepare for your big day with our special wedding dance classes.</p>
                        <Link href="/wedding-dance" className="btn btn-primary mt-4">Read More</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
