// src/components/Articles/ArticleCard.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white dark:bg-darkBlue rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <Link href={`/articles/${article.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover object-center"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent/10 text-accent dark:bg-accentDark/10 dark:text-accentDark rounded-full">
            {article.category}
          </span>
        </div>

        <Link href={`/articles/${article.id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-accent dark:hover:text-accentDark transition-colors">
            {article.title}
          </h3>
        </Link>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {article.excerpt}
        </p>

        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <div className="mr-4">
            <span>By {article.author}</span>
          </div>
          <div>
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
