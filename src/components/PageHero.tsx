import React from 'react';

interface PageHeroProps {
    title: string;
    children: React.ReactNode;
}

const PageHero = ({ title, children }: PageHeroProps) => {
    return (
        <section className="flex flex-col items-center justify-start bg-[url('/hero-pattern.png')] bg-center px-4 py-4 xs:px-16 xl:px-32 3xl:py-8 gap-3">
            <h2 className="py-16 text-4xl font-semibold md:text-5xl md:py-32 xl:text-6xl 2xl:text-7xl">
                {title}
            </h2>
            {children}
        </section>
    );
};

export default PageHero;
