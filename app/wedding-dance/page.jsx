export const metadata = {
    title: 'Wedding Dance Classes'
};

export default function Page() {
    return (
        <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-left px-4">Wedding Dance Classes</h1>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="md:col-span-3 flex flex-col justify-center px-4">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Prepare for Your First Dance</h2>
                        <p className="mb-4">
                            At Learn 2 Wedding Dance, we provide private one-to-one and group dance lessons to help couples prepare for their First Wedding Dance. Whether you are a complete beginner or have some dance experience, our professional instructors will build your confidence step by step and ensure you look and feel great on the dance floor.
                        </p>
                        <p className="mb-4">
                            Our studio, located in Edinburgh, offers a state-of-the-art sound system and a sprung dance floor, providing a private and relaxed atmosphere for your lessons. Choose from a variety of dance packages tailored to suit your needs, from basic steps to fully choreographed routines.
                        </p>
                        <h3 className="text-xl sm:text-2xl font-semibold mb-2">Dance Packages</h3>
                        <ul className="list-disc list-inside mb-4">
                            <li>1 hour Wedding Dance Package: £80</li>
                            <li>2 hour Wedding Dance Package: £120</li>
                            <li>3 hour Wedding Dance Package: £150</li>
                            <li>4 hour Wedding Dance Package: £200</li>
                            <li>5 hour Wedding Dance Package: £250</li>
                        </ul>
                        <p className="mb-4">
                            For more details or to book your lessons, contact Felicity at <a href="tel:+447703483809">+44 77034 83809</a> or via email at <a href="mailto:felicity@learn2weddingdance.co.uk">felicity@learn2weddingdance.co.uk</a>.
                        </p>
                    </div>
                    <div className="md:col-span-2 flex items-center justify-center">
                        <div className="relative w-full max-w-sm" style={{ aspectRatio: '1/1' }}>
                            <img
                                src="/images/weddingDance.jpg"
                                alt="Wedding Dance"
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Studio Location</h3>
                            <p className="mb-2">Learn 2 Wedding Dance Studio</p>
                            <p className="mb-2">132 Captains Road</p>
                            <p className="mb-2">Edinburgh, EH17 8DU</p>
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Contact Information</h3>
                            <p className="mb-2">Phone: <a href="tel:+447703483809">+44 77034 83809</a></p>
                            <p className="mb-2">Email: <a href="mailto:felicity@learn2weddingdance.co.uk">felicity@learn2weddingdance.co.uk</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
