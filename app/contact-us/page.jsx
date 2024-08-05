'use client';

const whatsappNumber = '+447703483809';
const sendMessageToWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    sendMessageToWhatsApp(message);
};

export default function Page() {
    return (
        <div className="w-full bg-white py-4 sm:py-6 lg:py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-left mb-6">Contact Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Get in Touch</h2>
                        <p className="mb-6">
                            We are here to help you with any questions or concerns you may have. Please feel free to reach out to us using the contact information below.
                        </p>

                        <div className="mb-6">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Contact us about:</h3>
                            <ul className="list-disc list-inside mb-4">
                                <li>Children&#39;s Classes</li>
                                <li>Adult Classes</li>
                                <li>Private One-on-One Tuition</li>
                                <li>Any other dance-related inquiries</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Contact Details</h3>
                            <p className="mb-2">Phone: <a href="tel:+447703483809" className="text-blue-500 underline">+44 77034 83809</a></p>
                        </div>

                        <div className="mb-6">
                            <p className="mb-2">First Wedding Dance - you can also send an email to: <a href="mailto:felicity@learn2weddingdance.co.uk" className="text-blue-500 underline">felicity@learn2weddingdance.co.uk</a></p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-2">Send Us a Message on WhatsApp</h3>
                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <textarea
                                name="message"
                                rows="4"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Type your message here..."
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition duration-300"
                            >
                                Send WhatsApp Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
