import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: 'EDS',
        default: 'Edinburgh Dance School'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
        <head>
            <link rel="icon" href="/favicon.svg" sizes="any" />
        </head>
        <body className="antialiased text-black bg-white">
        <div className="flex flex-col min-h-screen px-6 sm:px-12">
            <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                <Header />
                <div className="grow">{children}</div>
                <Footer />
            </div>
        </div>
        </body>
        </html>
    );
}
