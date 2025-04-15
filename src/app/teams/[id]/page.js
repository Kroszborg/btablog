import React from "react";
import Link from "next/link";
import ArticleCard from "@/src/components/Articles/ArticleCard";

// Mock data for teams
const teams = [
  {
    id: 1,
    name: "Thunder",
    fullName: "Oklahoma City Thunder",
    record: "48-20",
    conference: "West",
    division: "Northwest",
    logo: "/placeholder-team.jpg",
    description:
      "The Oklahoma City Thunder have been a surprise contender this season, with their young core developing faster than expected. Led by their dynamic guard play and improved defense, they have established themselves as one of the top teams in the Western Conference.",
  },
  {
    id: 2,
    name: "Grizzlies",
    fullName: "Memphis Grizzlies",
    record: "42-26",
    conference: "West",
    division: "Southwest",
    logo: "/placeholder-team.jpg",
    description:
      'The Memphis Grizzlies continue to embody their "Grit and Grind" mentality, combining physical defense with explosive offense. Despite dealing with injuries to key players, they remain a formidable opponent and are positioned for another playoff run.',
  },
  // Add more team data as needed
];

// Mock data for related articles
const relatedArticles = [
  {
    id: 1,
    title: "Thunder's Rise: Breaking Down Their Success",
    excerpt:
      "Analyzing how the Thunder have exceeded expectations this season...",
    imageUrl: "/placeholder-article.jpg",
    category: "Analysis",
    author: "James Thompson",
    date: "April 14, 2025",
  },
  {
    id: 2,
    title: "Key Players to Watch in Upcoming Matchups",
    excerpt:
      "A look at the stars who will determine the outcome of crucial games...",
    imageUrl: "/placeholder-article.jpg",
    category: "Preview",
    author: "Sarah Chen",
    date: "April 12, 2025",
  },
  {
    id: 3,
    title: "Playoff Scenarios: What Each Win Means",
    excerpt: "Breaking down the playoff implications of upcoming games...",
    imageUrl: "/placeholder-article.jpg",
    category: "Playoffs",
    author: "Marcus Johnson",
    date: "April 10, 2025",
  },
];

export async function generateMetadata({ params }) {
  const team = teams.find((t) => t.id === parseInt(params.id)) || {
    name: "Team",
    fullName: "NBA Team",
  };
  return {
    title: `${team.fullName} | Beyond the Arc`,
    description: `Get the latest news, stats, and analysis for the ${team.fullName}. Check their current standing, upcoming games, and player performances.`,
  };
}

const TeamDetailPage = ({ params }) => {
  const teamId = parseInt(params.id);
  const team = teams.find((t) => t.id === teamId) || teams[0];

  return (
    <main className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light">
      {/* Team Header */}
      <section className="py-12 bg-dark text-light">
        <div className="container mx-auto px-5 sm:px-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-xl">Team Logo</span>
              </div>
            </div>

            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {team.fullName}
              </h1>
              <div className="mb-4">
                <span className="inline-block px-4 py-1 bg-accent/20 text-light rounded-full mr-3">
                  {team.conference}ern Conference
                </span>
                <span className="inline-block px-4 py-1 bg-accent/20 text-light rounded-full">
                  {team.division} Division
                </span>
              </div>
              <p className="text-xl mb-4">
                Current Record: <span className="font-bold">{team.record}</span>
              </p>
              <p className="text-light/80 max-w-3xl">{team.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-5 sm:px-10">
          <h2 className="text-3xl font-bold mb-8">Team Stats</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-darkBlue p-6 rounded-lg shadow-md text-center">
              <p className="text-accent dark:text-accentDark text-3xl font-bold mb-2">
                114.2
              </p>
              <p className="text-gray-600 dark:text-gray-300">PPG</p>
            </div>

            <div className="bg-white dark:bg-darkBlue p-6 rounded-lg shadow-md text-center">
              <p className="text-accent dark:text-accentDark text-3xl font-bold mb-2">
                108.5
              </p>
              <p className="text-gray-600 dark:text-gray-300">Opponent PPG</p>
            </div>

            <div className="bg-white dark:bg-darkBlue p-6 rounded-lg shadow-md text-center">
              <p className="text-accent dark:text-accentDark text-3xl font-bold mb-2">
                47.8%
              </p>
              <p className="text-gray-600 dark:text-gray-300">FG%</p>
            </div>

            <div className="bg-white dark:bg-darkBlue p-6 rounded-lg shadow-md text-center">
              <p className="text-accent dark:text-accentDark text-3xl font-bold mb-2">
                37.2%
              </p>
              <p className="text-gray-600 dark:text-gray-300">3P%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Players */}
      <section className="py-12 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-5 sm:px-10">
          <h2 className="text-3xl font-bold mb-8">Key Players</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-darkBlue rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Player Photo</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">Player Name</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  #1 | Point Guard
                </p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-accent dark:text-accentDark text-xl font-bold">
                      24.6
                    </p>
                    <p className="text-xs">PPG</p>
                  </div>
                  <div>
                    <p className="text-accent dark:text-accentDark text-xl font-bold">
                      5.2
                    </p>
                    <p className="text-xs">RPG</p>
                  </div>
                  <div>
                    <p className="text-accent dark:text-accentDark text-xl font-bold">
                      7.8
                    </p>
                    <p className="text-xs">APG</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-darkBlue rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Player Photo</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">Player Name</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  #14 | Shooting Guard
                </p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-accent dark:text-accentDark text-xl font-bold">
                      21.3
                    </p>
                    <p className="text-xs">PPG</p>
                  </div>
                  <div>
                    <p className="text-accent dark:text-accentDark text-xl font-bold">
                      4.4
                    </p>
                    <p className="text-xs">RPG</p>
                  </div>
                  <div>
                    <p className="text-accent dark:text-accentDark text-xl font-bold">
                      3.2
                    </p>
                    <p className="text-xs">APG</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-darkBlue rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Player Photo</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">Player Name</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  #22 | Power Forward
                </p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-accent dark:text-accentDark text-xl font-bold">
                      18.7
                    </p>
                    <p className="text-xs">PPG</p>
                  </div>
                  <div>
                    <p className="text-accent dark:text-accentDark text-xl font-bold">
                      9.8
                    </p>
                    <p className="text-xs">RPG</p>
                  </div>
                  <div>
                    <p className="text-accent dark:text-accentDark text-xl font-bold">
                      2.1
                    </p>
                    <p className="text-xs">APG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12">
        <div className="container mx-auto px-5 sm:px-10">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamDetailPage;
