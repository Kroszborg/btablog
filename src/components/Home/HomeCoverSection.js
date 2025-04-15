import React from "react";
import Link from "next/link";

const HomeCoverSection = () => {
  return (
    <section className="w-full min-h-[70vh] bg-dark text-light flex items-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/90 z-10"></div>

      {/* Replace with actual background image */}
      <div
        className="absolute inset-0 bg-[url('/placeholder-basketball.jpg')] bg-cover bg-center"
        style={{ opacity: 0.6 }}
      ></div>

      <div className="container mx-auto px-5 sm:px-10 z-20 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Beyond the Arc
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-light/90">
            Your premiere source for NBA analysis, player stats, and team
            insights. Dive deep into the world of basketball with our expert
            coverage.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/articles"
              className="px-8 py-3 bg-accent text-light rounded-lg font-medium hover:bg-accentDark transition-colors"
            >
              Latest Articles
            </Link>
            <Link
              href="/stats-hub"
              className="px-8 py-3 border-2 border-light text-light rounded-lg font-medium hover:bg-light/10 transition-colors"
            >
              Stats Hub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCoverSection;
