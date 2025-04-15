// src/components/Home/HomeCoverSection.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomeCoverSection = () => {
  return (
    <section className="w-full min-h-[70vh] bg-dark text-light flex items-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/90 z-10"></div>

      {/* Basketball court background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
          alt="Basketball court"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
      </div>

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
