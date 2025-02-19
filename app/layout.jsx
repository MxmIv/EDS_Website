import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: 'Edinburgh Dance School | EDC',
        default: 'Edinburgh Dance School'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
        <head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playwrite+BE+VLG:wght@100..400&display=swap" rel="stylesheet" />
        </head>
        <body className="antialiased text-black bg-white">
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-col w-full grow">
                {children}
            </div>
            <Footer />
        </div>
        </body>
        </html>
    );
}
