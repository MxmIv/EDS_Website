import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            {/* Main Photo and Description */}
            <section className="flex flex-col items-center gap-4">
                <img src="/path/to/main-photo.jpg" alt="Dance School" className="w-full max-w-2xl" />
                <p className="text-xl text-center">Welcome to our dance school! We offer a variety of dance classes for all ages and skill levels. Join us to learn, enjoy, and excel in dancing.</p>
            </section>
            {/* Classes Columns */}
            <section className="flex flex-col gap-8 sm:gap-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold">Adult Classes</h2>
                        <p className="text-lg">Join our adult dance classes to learn new moves, stay fit, and have fun.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold">Children Classes</h2>
                        <p className="text-lg">Our children dance classes are perfect for young dancers to explore and enjoy dancing.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold">Wedding Dance</h2>
                        <p className="text-lg">Prepare for your big day with our special wedding dance classes.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

