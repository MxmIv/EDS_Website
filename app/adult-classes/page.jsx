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
const classTime = 'Thursday: 8.15pm - 9.15pm';
const pricing = '£10 per class';

export default function Page() {
    return (
        <div>
            <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-primary font-display">ADULT CLASSES</h1>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div className="md:col-span-3 flex flex-col justify-center px-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Discover the Joy of Dance</h2>
                            <p className="mb-4">
                                Join our vibrant and engaging Ballroom and Latin dance classes designed for adults of
                                all skill levels! Whether you are a complete beginner or looking to refine your moves,
                                our professional instructors will guide you through a variety of dance styles,
                                including:
                            </p>
                            <ul className="list-disc list-inside mb-4">
                                {danceStyles.map(style => <li key={style}>{style}</li>)}
                            </ul>
                            <p className="mb-4">
                                Our classes provide a fantastic way to improve your fitness, boost your confidence, and
                                meet new people. Experience the thrill of dancing to beautiful music in a friendly and
                                supportive environment.
                            </p>
                        </div>
                        <div className="md:col-span-2 flex items-center justify-center">
                            <div className="relative w-full max-w-sm" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src="/images/adultClasses.jpg"
                                    alt="Ballroom and Latin Dance"
                                    className="w-full h-full object-cover rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Term Dates</h3>
                            <ul className="list-disc list-inside mb-4">
                                {termDates.map(({ term, dates }) => (
                                    <li key={term}>{term} Term: {dates}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Class Information</h3>
                            <p className="mb-2">Price: {pricing}</p>
                            <p className="mb-2">Time: {classTime}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
    ;
}
