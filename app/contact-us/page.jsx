export const metadata = {
    title: 'Contact Us'
};

export default function Page() {
    const whatsappNumber = '+447703483809';
    const whatsappMessage = 'Hello, I would like to inquire about your dance classes.';

    return (
        <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-left px-4">Contact Us</h1>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center px-4">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Get in Touch</h2>
                        <p className="mb-4">
                            We are here to help you with any questions or concerns you may have. Please feel free to reach out to us using the contact information below.
                        </p>
                        <p className="mb-4">Phone: <a href="tel:+447703483809">+44 77034 83809</a></p>
                        <p className="mb-4">Email: <a href="mailto:felicity@learn2weddingdance.co.uk">felicity@learn2weddingdance.co.uk</a></p>
                        <p className="mb-4">Address: 132 Captains Road, Edinburgh, EH17 8DU, United Kingdom</p>
                        <p className="mb-4">WhatsApp: <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} className="text-blue-500 underline">Chat with us on WhatsApp</a></p>
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
