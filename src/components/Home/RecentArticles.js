// src/components/Home/RecentArticles.js
import React from "react";
import ArticleCard from "../Articles/ArticleCard";
import Link from "next/link";
import { mockArticles } from "@/src/data/mockData";

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
          {mockArticles.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
