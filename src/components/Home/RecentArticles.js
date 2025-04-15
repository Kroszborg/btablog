import React from "react";
import ArticleCard from "../Articles/ArticleCard";
import Link from "next/link";

// Mock data for articles
const mockArticles = [
  {
    id: 1,
    title: "Understanding the Trade Deadline: What to Expect",
    excerpt:
      "A comprehensive guide to the NBA trade deadline and what it means for teams...",
    imageUrl: "/placeholder-article.jpg",
    category: "Analysis",
    author: "Adrian Jones",
    date: "April 12, 2025",
  },
  {
    id: 2,
    title: "Player Spotlight: Rising Stars of the Season",
    excerpt:
      "Breaking down the performance of this season's breakout players...",
    imageUrl: "/placeholder-article.jpg",
    category: "Player Analysis",
    author: "Maria Rodriguez",
    date: "April 10, 2025",
  },
  {
    id: 3,
    title: "Playoff Picture: Who's In, Who's Out",
    excerpt:
      "Analyzing team standings and playoff scenarios as the regular season winds down...",
    imageUrl: "/placeholder-article.jpg",
    category: "Playoffs",
    author: "Derek Wilson",
    date: "April 8, 2025",
  },
];

const RecentArticles = () => {
  return (
    <section className="w-full bg-light dark:bg-dark text-dark dark:text-light py-12">
      <div className="container mx-auto px-5 sm:px-10">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Recent Articles</h2>
          <Link
            href="/articles"
            className="text-accent dark:text-accentDark font-medium hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
