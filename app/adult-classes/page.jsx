export const metadata = {
    title: 'Adult Classes'
};

const danceStyles = ['Waltz', 'Tango', 'Foxtrot', 'Salsa', 'Cha-Cha', 'Rumba'];
const termDates = [
    { term: 'Summer', dates: 'June 1st - August 15th' },
    { term: 'Autumn', dates: 'September 1st - November 30th' },
    { term: 'Winter', dates: 'January 5th - March 20th' },
    { term: 'Spring', dates: 'April 1st - May 31st' }
];

export default function Page() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center my-8">Adult Classes</h1>

            {/* First section: Discover the Joy of Dance and Photo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Discover the Joy of Dance</h2>
                    <p className="mb-4">
                        Join our vibrant and engaging Ballroom and Latin dance classes designed for adults of all skill levels! Whether you're a complete beginner or looking to refine your moves, our professional instructors will guide you through a variety of dance styles, including:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        {danceStyles.map(style => <li key={style}>{style}</li>)}
                    </ul>
                    <p className="mb-4">
                        Our classes provide a fantastic way to improve your fitness, boost your confidence, and meet new people. Experience the thrill of dancing to beautiful music in a friendly and supportive environment.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img
                        src="/images/adultClasses.jpg"
                        alt="Ballroom and Latin Dance"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>

            {/* Second section: Gray box with Pricing and Terms */}
            <div className="bg-gray-100 -mx-4 sm:-mx-6 lg:-mx-8 p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold mb-2">Term Dates</h3>
                        <ul className="list-disc list-inside mb-4">
                            {termDates.map(({term, dates}) => (
                                <li key={term}>{term} Term: {dates}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold mb-2">Pricing</h3>
                        <p className="mb-4">Price per class: £10</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
