export const metadata = {
    title: 'Children\'s Classes'
};

const danceClubs = ['TwinkleStars Ballet Club', 'BallroomJuniors Club', 'Street /Jazz Dance Club'];
const termDates = [
    { term: 'Term 2', dates: '23/02/24 - 30/03/24', duration: '5 weeks' },
    { term: 'Term 3', dates: '20/04/24 - 22/06/24', duration: '9 weeks' },
    { term: 'Term 4', dates: '24/08/24 - 12/10/24', duration: '7 weeks' }
];
const location = 'Inch Park Community Sports Club';

export default function Page() {
    return (
        <div>
            <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-left px-4">Children&apos;s Classes</h1>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div className="md:col-span-3 flex flex-col justify-center px-4">
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Join Our Dance Clubs</h2>
                            <p className="mb-4">
                                We are delighted to confirm that our TwinkleStars Ballet Club, BallroomJuniors Club, and Street /Jazz Dance Club are now running weekly at Inch Park Community Sports Club. Discover the joy of dance and let your child develop new skills in a fun and supportive environment. Our professional instructors are dedicated to providing top-notch dance education to children of all skill levels.
                            </p>
                            <ul className="list-disc list-inside mb-4">
                                {danceClubs.map(club => <li key={club}>{club}</li>)}
                            </ul>
                            <p className="mb-4">
                                For more information on class times, please contact us or visit our website. We look forward to welcoming your child to our dance community.
                            </p>
                        </div>
                        <div className="md:col-span-2 flex items-center justify-center">
                            <div className="relative w-full max-w-sm" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src="/images/childrenClasses.jpg"
                                    alt="Children's Dance Classes"
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
                                {termDates.map(({ term, dates, duration }) => (
                                    <li key={term}>{term}: {dates} ({duration})</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Location</h3>
                            <p className="mb-2">{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
