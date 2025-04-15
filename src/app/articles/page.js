// src/app/articles/page.js
import React from "react";
import ArticleCard from "@/src/components/Articles/ArticleCard";
import Link from "next/link";
import Image from "next/image";
import { mockArticles } from "@/src/app/data/mockdata";

// Categories for filtering
const categories = [
  "All",
  "Analysis",
  "News",
  "Playoffs",
  "Player Analysis",
  "Coaching",
  "Draft",
  "Analytics",
  "Defense",
];

export const metadata = {
  title: "Articles | Beyond the Arc",
  description:
    "Read the latest NBA news, analysis, and insights from our basketball experts.",
};

const ArticlesPage = () => {
  return (
    <main className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light">
      {/* Header */}
      <section className="py-12 bg-dark text-light">
        <div className="container mx-auto px-5 sm:px-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Articles</h1>
          <p className="text-xl text-light/80 max-w-3xl">
            Dive into our collection of in-depth NBA analysis, news, and
            insights from our team of basketball experts.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-5 sm:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full md:w-80 py-2 px-4 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-light dark:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto overflow-x-auto">
              <div className="flex space-x-2 min-w-max">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      category === "All"
                        ? "bg-accent text-light dark:bg-accentDark"
                        : "bg-gray-200 text-dark hover:bg-gray-300 dark:bg-gray-700 dark:text-light dark:hover:bg-gray-600"
                    } transition-colors`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-10">
        <div className="container mx-auto px-5 sm:px-10">
          <div className="bg-white dark:bg-darkBlue rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={mockArticles[0].imageUrl}
                  alt={mockArticles[0].title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6 md:p-10 flex flex-col">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent/10 text-accent dark:bg-accentDark/10 dark:text-accentDark rounded-full">
                    Featured
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  <Link
                    href="/articles/1"
                    className="hover:text-accent dark:hover:text-accentDark transition-colors"
                  >
                    {mockArticles[0].title}
                  </Link>
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {mockArticles[0].excerpt} We break down potential moves, cap
                  implications, and how trades might affect the playoff race.
                </p>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="mr-4">
                    <span>By {mockArticles[0].author}</span>
                  </div>
                  <div>
                    <span>{mockArticles[0].date}</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <Link
                    href="/articles/1"
                    className="inline-block px-6 py-2 bg-accent text-light rounded-lg font-medium hover:bg-accentDark transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-10">
        <div className="container mx-auto px-5 sm:px-10">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockArticles.slice(1).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-1">
              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-white dark:bg-darkBlue text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent dark:bg-accentDark text-light font-medium">
                1
              </button>

              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-white dark:bg-darkBlue text-dark dark:text-light font-medium border border-gray-300 dark:border-gray-600">
                2
              </button>

              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-white dark:bg-darkBlue text-dark dark:text-light font-medium border border-gray-300 dark:border-gray-600">
                3
              </button>

              <span className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400">
                ...
              </span>

              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-white dark:bg-darkBlue text-dark dark:text-light font-medium border border-gray-300 dark:border-gray-600">
                8
              </button>

              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-white dark:bg-darkBlue text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArticlesPage;
