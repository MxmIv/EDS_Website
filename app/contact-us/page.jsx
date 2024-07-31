export const metadata = {
    title: 'Contact Us'
};

export default function Page() {
    const whatsappNumber = '+447703483809';
    const whatsappMessage = 'Hello, I would like to inquire about your dance classes.';

    return (
        <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-left px-4 mb-6">Contact Us</h1>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center px-4">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Get in Touch</h2>
                        <p className="mb-6">
                            We are here to help you with any questions or concerns you may have. Please feel free to reach out to us using the contact information below.
                        </p>

                        <div className="mb-6">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Contact us about:</h3>
                            <ul className="list-disc list-inside mb-4">
                                <li>Children`&#39;`s Classes</li>
                                <li>First Wedding Dance - you can also send an email to: <a href="mailto:felicity@learn2weddingdance.co.uk" className="text-blue-500 underline">felicity@learn2weddingdance.co.uk</a></li>
                                <li>Adult Classes</li>
                                <li>Private One-on-One Tuition</li>
                                <li>Any other dance-related inquiries</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Contact Details</h3>
                            <p className="mb-2">Phone: <a href="tel:+447703483809" className="text-blue-500 underline">+44 77034 83809</a></p>
                            <p className="mb-2">
                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                                    className="inline-flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/images/whatsapp-icon.png"
                                        alt="WhatsApp"
                                        className="w-6 h-6 mr-2"
                                    />
                                    Start WhatsApp Chat
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-sm" style={{ aspectRatio: '1/1' }}>
                            <img
                                src="/images/contactUs.jpg"
                                alt="Contact Us"
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
