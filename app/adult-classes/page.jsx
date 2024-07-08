export const metadata = {
    title: 'Adult Classes'
};

export default async function Page() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mt-8">Adult Classes</h1>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Discover the Joy of Dance</h2>
                        <p className="mb-4">
                            Join our vibrant and engaging Ballroom and Latin dance classes designed for adults of all skill levels! Whether you’re a complete beginner or looking to refine your moves, our professional instructors will guide you through a variety of dance styles, including:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Waltz</li>
                            <li>Tango</li>
                            <li>Foxtrot</li>
                            <li>Salsa</li>
                            <li>Cha-Cha</li>
                            <li>Rumba</li>
                        </ul>
                        <p className="mb-4">
                            Our classes provide a fantastic way to improve your fitness, boost your confidence, and meet new people. Experience the thrill of dancing to beautiful music in a friendly and supportive environment.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/images/adultClasses.jpg"
                            alt="Ballroom and Latin Dance"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
            <div className="relative w-screen left-1/2 right-1/2 sm:ml-[-50vw] sm:mr-[-50vw] ml-[-10vw] mr-[-10vw] bg-gray-100 p-4">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Term Dates</h3>
                        <ul className="list-disc list-inside mb-4">
                            <li>Summer Term: June 1st - August 15th</li>
                            <li>Autumn Term: September 1st - November 30th</li>
                            <li>Winter Term: January 5th - March 20th</li>
                            <li>Spring Term: April 1st - May 31st</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Pricing</h3>
                        <p className="mb-4">Price per class: £10</p>
                    </div>
                </div>
            </div>
        </>
    );
}
