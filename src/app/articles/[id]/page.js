import React from "react";
import Link from "next/link";
import ArticleCard from "@/src/components/Articles/ArticleCard";

// Mock data for articles
const articles = [
  {
    id: 1,
    title: "Understanding the Trade Deadline: What to Expect",
    excerpt:
      "A comprehensive guide to the NBA trade deadline and what it means for teams...",
    content: `
      <p>The trade deadline is a pivotal moment in the NBA season. Teams are constantly evaluating their rosters and looking for ways to improve. In this article, we will explore the implications of the trade deadline, what fans can expect, and how it might affect the playoff race.</p>
      
      <h2>What Happens at the Trade Deadline?</h2>
      
      <p>Teams have until the deadline to finalize trades, and many are looking to bolster their chances for a playoff run. Some teams may look to offload contracts, while others enjoy may seek to acquire key players to make a push.</p>
      
      <p>As the clock ticks down, rumors will fly and expectations will be sky-high. Will their team make a significant move? The excitement is palpable, and this year promises to be no different.</p>
      
      <h2>Impact on Playoff Contenders</h2>
      
      <p>Contending teams often look to add that final piece to push them over the top. Whether it's a sharpshooter, defensive specialist, or playmaking guard, the right acquisition can transform a team's chances. This year, several teams are just one piece away from becoming legitimate championship threats.</p>
      
      <p>Meanwhile, teams on the bubble must decide whether to push for the playoffs or begin rebuilding. These decisions can shape a franchise for years to come and are not taken lightly by front offices.</p>
      
      <h2>Players to Watch</h2>
      
      <p>Several high-profile players have been mentioned in trade rumors. From disgruntled stars to veterans on rebuilding teams, the market is ripe with talent that could be on the move. Keep an eye on these situations as the deadline approaches.</p>
      
      <p>Young talents on struggling teams are also prime candidates for trades. Teams looking to accelerate their rebuilds may be willing to part with future assets to acquire these promising players.</p>
      
      <h2>Conclusion</h2>
      
      <p>The trade deadline represents both opportunity and risk for NBA teams. The right move can catapult a team into contention, while a miscalculation can set a franchise back years. As fans, we can only wait and see which teams make the boldest and smartest moves this season.</p>
    `,
    imageUrl: "/placeholder-article.jpg",
    category: "Analysis",
    author: "Adrian Jones",
    authorTitle: "Basketball Analyst | Expert on NBA Trades",
    date: "April 12, 2025",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Player Spotlight: Rising Stars of the Season",
    excerpt:
      "Breaking down the performance of this season's breakout players...",
    content: "Full content for article 2 would go here...",
    imageUrl: "/placeholder-article.jpg",
    category: "Player Analysis",
    author: "Maria Rodriguez",
    authorTitle: "Player Development Specialist",
    date: "April 10, 2025",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Playoff Picture: Who's In, Who's Out",
    excerpt:
      "Analyzing team standings and playoff scenarios as the regular season winds down...",
    content: "Full content for article 3 would go here...",
    imageUrl: "/placeholder-article.jpg",
    category: "Playoffs",
    author: "Derek Wilson",
    authorTitle: "Senior NBA Analyst",
    date: "April 8, 2025",
    readTime: "7 min read",
  },
];

// Related articles
const relatedArticles = [
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
  {
    id: 4,
    title: "Deep Dive: Evolution of the Modern NBA Offense",
    excerpt:
      "Exploring how offensive strategies have transformed over the past decade...",
    imageUrl: "/placeholder-article.jpg",
    category: "Analysis",
    author: "Sarah Chen",
    date: "April 6, 2025",
  },
];

export async function generateMetadata({ params }) {
  const article =
    articles.find((a) => a.id === parseInt(params.id)) || articles[0];

  return {
    title: `${article.title} | Beyond the Arc`,
    description: article.excerpt,
  };
}

const ArticleDetailPage = ({ params }) => {
  const articleId = parseInt(params.id);
  const article = articles.find((a) => a.id === articleId) || articles[0];

  return (
    <main className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light">
      {/* Article Header */}
      <section className="py-12 bg-dark text-light">
        <div className="container mx-auto px-5 sm:px-10">
          <div className="mb-6">
            <Link
              href="/articles"
              className="flex items-center text-light/80 hover:text-light transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Articles
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent/20 text-light rounded-full">
                {article.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center text-light/80 mb-8">
              <div className="mr-6 mb-2">
                <span>By {article.author}</span>
              </div>
              <div className="mr-6 mb-2">
                <span>{article.date}</span>
              </div>
              <div className="mb-2">
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-5 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="bg-white dark:bg-darkBlue rounded-lg shadow-md overflow-hidden">
                <div className="h-96 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-xl">Featured Image</span>
                </div>

                <div className="p-6 sm:p-10">
                  <div
                    className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-a:text-accent dark:prose-a:text-accentDark prose-img:rounded-lg"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />

                  <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                      <div>
                        <h3 className="font-bold text-lg">{article.author}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {article.authorTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Comments</h3>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-darkBlue rounded-lg shadow-md p-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h4 className="font-semibold mr-2">User13842</h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            1 day ago
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          Great article! I can't wait to see what happens at the
                          trade deadline.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-darkBlue rounded-lg shadow-md p-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h4 className="font-semibold mr-2">User5678</h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            2 days ago
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          Do you think there should trade for a big player?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-darkBlue rounded-lg shadow-md p-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h4 className="font-semibold mr-2">User9012</h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            3 days ago
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          This was very informative. Thanks for the breakdown!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add Comment Form */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Leave a Comment</h4>
                  <form>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      rows="4"
                      placeholder="Write your comment..."
                    ></textarea>
                    <button
                      type="submit"
                      className="mt-4 px-6 py-2 bg-accent text-light rounded-lg font-medium hover:bg-accentDark transition-colors"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                {/* Related Articles */}
                <div className="bg-white dark:bg-darkBlue rounded-lg shadow-md overflow-hidden mb-8">
                  <div className="bg-accent dark:bg-accentDark py-4 px-6">
                    <h3 className="text-lg text-light font-bold">
                      Related Articles
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {relatedArticles.map((relatedArticle) => (
                        <div
                          key={relatedArticle.id}
                          className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0"
                        >
                          <Link href={`/articles/${relatedArticle.id}`}>
                            <h4 className="font-bold mb-2 hover:text-accent dark:hover:text-accentDark transition-colors">
                              {relatedArticle.title}
                            </h4>
                          </Link>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <span>By {relatedArticle.author}</span>
                            <span className="mx-2">•</span>
                            <span>{relatedArticle.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Trending Tags */}
                <div className="bg-white dark:bg-darkBlue rounded-lg shadow-md overflow-hidden">
                  <div className="py-4 px-6 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-bold">Trending Tags</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href="/articles?tag=trades"
                        className="px-3 py-1 bg-gray-200 text-dark dark:bg-gray-700 dark:text-light rounded-full text-sm hover:bg-accent hover:text-light dark:hover:bg-accentDark transition-colors"
                      >
                        Trades
                      </Link>
                      <Link
                        href="/articles?tag=playoffs"
                        className="px-3 py-1 bg-gray-200 text-dark dark:bg-gray-700 dark:text-light rounded-full text-sm hover:bg-accent hover:text-light dark:hover:bg-accentDark transition-colors"
                      >
                        Playoffs
                      </Link>
                      <Link
                        href="/articles?tag=rookies"
                        className="px-3 py-1 bg-gray-200 text-dark dark:bg-gray-700 dark:text-light rounded-full text-sm hover:bg-accent hover:text-light dark:hover:bg-accentDark transition-colors"
                      >
                        Rookies
                      </Link>
                      <Link
                        href="/articles?tag=analysis"
                        className="px-3 py-1 bg-gray-200 text-dark dark:bg-gray-700 dark:text-light rounded-full text-sm hover:bg-accent hover:text-light dark:hover:bg-accentDark transition-colors"
                      >
                        Analysis
                      </Link>
                      <Link
                        href="/articles?tag=stats"
                        className="px-3 py-1 bg-gray-200 text-dark dark:bg-gray-700 dark:text-light rounded-full text-sm hover:bg-accent hover:text-light dark:hover:bg-accentDark transition-colors"
                      >
                        Stats
                      </Link>
                      <Link
                        href="/articles?tag=injuries"
                        className="px-3 py-1 bg-gray-200 text-dark dark:bg-gray-700 dark:text-light rounded-full text-sm hover:bg-accent hover:text-light dark:hover:bg-accentDark transition-colors"
                      >
                        Injuries
                      </Link>
                      <Link
                        href="/articles?tag=draft"
                        className="px-3 py-1 bg-gray-200 text-dark dark:bg-gray-700 dark:text-light rounded-full text-sm hover:bg-accent hover:text-light dark:hover:bg-accentDark transition-colors"
                      >
                        Draft
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArticleDetailPage;
