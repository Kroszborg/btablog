import React from "react";
import Link from "next/link";
import { StatsIcon } from "@/src/components/Icons";

export const metadata = {
  title: "Stats Hub | Beyond the Arc",
  description:
    "Access comprehensive NBA statistics, player rankings, and team performance metrics.",
};

const StatsHubPage = () => {
  return (
    <main className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light">
      {/* Header */}
      <section className="py-12 bg-dark text-light">
        <div className="container mx-auto px-5 sm:px-10">
          <div className="flex items-center mb-4">
            <StatsIcon className="w-10 h-10 mr-4 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold">Stats Hub</h1>
          </div>
          <p className="text-xl text-light/80 max-w-3xl">
            Your one-stop destination for comprehensive NBA statistics, player
            rankings, and team performance metrics.
          </p>
        </div>
      </section>

      {/* Stats Categories */}
      <section className="py-12">
        <div className="container mx-auto px-5 sm:px-10">
          <h2 className="text-3xl font-bold mb-10">Statistics Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Stats */}
            <div className="bg-white dark:bg-darkBlue rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-nbaBlue flex items-center justify-center">
                <span className="text-light text-2xl font-bold">
                  Team Stats
                </span>
              </div>
              <div className="p-6">
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Comprehensive team statistics including offensive and
                  defensive ratings, pace, scoring, and more.
                </p>
                <Link
                  href="/stats-hub/teams"
                  className="inline-block px-6 py-2 bg-nbaBlue text-light rounded-lg font-medium hover:bg-blue-800 transition-colors"
                >
                  View Team Stats
                </Link>
              </div>
            </div>

            {/* Player Stats */}
            <div className="bg-white dark:bg-darkBlue rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-accent flex items-center justify-center">
                <span className="text-light text-2xl font-bold">
                  Player Stats
                </span>
              </div>
              <div className="p-6">
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Individual player statistics including scoring, efficiency,
                  advanced metrics, and performance trends.
                </p>
                <Link
                  href="/stats-hub/players"
                  className="inline-block px-6 py-2 bg-accent text-light rounded-lg font-medium hover:bg-accentDark transition-colors"
                >
                  View Player Stats
                </Link>
              </div>
            </div>

            {/* Standings */}
            <div className="bg-white dark:bg-darkBlue rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-nbaRed flex items-center justify-center">
                <span className="text-light text-2xl font-bold">Standings</span>
              </div>
              <div className="p-6">
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Current NBA standings by conference and division, including
                  win-loss records and playoff positioning.
                </p>
                <Link
                  href="/stats-hub/standings"
                  className="inline-block px-6 py-2 bg-nbaRed text-light rounded-lg font-medium hover:bg-red-800 transition-colors"
                >
                  View Standings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Rankings */}
      <section className="py-12 bg-gray-100 dark:bg-darkBlue/30">
        <div className="container mx-auto px-5 sm:px-10">
          <h2 className="text-3xl font-bold mb-10">Conference Rankings</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Western Conference */}
            <div className="bg-white dark:bg-darkBlue rounded-lg shadow-md overflow-hidden">
              <div className="bg-nbaBlue py-4 px-6">
                <h3 className="text-xl text-light font-bold">
                  Western Conference
                </h3>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="py-3 text-left">Rank</th>
                      <th className="py-3 text-left">Team</th>
                      <th className="py-3 text-center">W</th>
                      <th className="py-3 text-center">L</th>
                      <th className="py-3 text-center">PCT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3">1</td>
                      <td className="py-3">Thunder</td>
                      <td className="py-3 text-center">48</td>
                      <td className="py-3 text-center">20</td>
                      <td className="py-3 text-center">.706</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3">2</td>
                      <td className="py-3">Grizzlies</td>
                      <td className="py-3 text-center">42</td>
                      <td className="py-3 text-center">26</td>
                      <td className="py-3 text-center">.618</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3">3</td>
                      <td className="py-3">Nuggets</td>
                      <td className="py-3 text-center">40</td>
                      <td className="py-3 text-center">28</td>
                      <td className="py-3 text-center">.588</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3">4</td>
                      <td className="py-3">Rockets</td>
                      <td className="py-3 text-center">38</td>
                      <td className="py-3 text-center">30</td>
                      <td className="py-3 text-center">.559</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3">5</td>
                      <td className="py-3">Lakers</td>
                      <td className="py-3 text-center">36</td>
                      <td className="py-3 text-center">32</td>
                      <td className="py-3 text-center">.529</td>
                    </tr>
                    <tr>
                      <td className="py-3">6</td>
                      <td className="py-3">Clippers</td>
                      <td className="py-3 text-center">34</td>
                      <td className="py-3 text-center">34</td>
                      <td className="py-3 text-center">.500</td>
                    </tr>
                  </tbody>
                </table>

                <div className="mt-6 text-right">
                  <Link
                    href="/stats-hub/standings/west"
                    className="text-nbaBlue hover:underline font-medium"
                  >
                    View Full Standings →
                  </Link>
                </div>
              </div>
            </div>

            {/* Eastern Conference */}
            <div className="bg-white dark:bg-darkBlue rounded-lg shadow-md overflow-hidden">
              <div className="bg-nbaRed py-4 px-6">
                <h3 className="text-xl text-light font-bold">
                  Eastern Conference
                </h3>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="py-3 text-left">Rank</th>
                      <th className="py-3 text-left">Team</th>
                      <th className="py-3 text-center">W</th>
                      <th className="py-3 text-center">L</th>
                      <th className="py-3 text-center">PCT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3">1</td>
                      <td className="py-3">Cavaliers</td>
                      <td className="py-3 text-center">47</td>
                      <td className="py-3 text-center">21</td>
                      <td className="py-3 text-center">.691</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3">2</td>
                      <td className="py-3">Celtics</td>
                      <td className="py-3 text-center">45</td>
                      <td className="py-3 text-center">23</td>
                      <td className="py-3 text-center">.662</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3">3</td>
                      <td className="py-3">Knicks</td>
                      <td className="py-3 text-center">43</td>
                      <td className="py-3 text-center">25</td>
                      <td className="py-3 text-center">.632</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3">4</td>
                      <td className="py-3">Pacers</td>
                      <td className="py-3 text-center">40</td>
                      <td className="py-3 text-center">28</td>
                      <td className="py-3 text-center">.588</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3">5</td>
                      <td className="py-3">Bucks</td>
                      <td className="py-3 text-center">38</td>
                      <td className="py-3 text-center">30</td>
                      <td className="py-3 text-center">.559</td>
                    </tr>
                    <tr>
                      <td className="py-3">6</td>
                      <td className="py-3">Pistons</td>
                      <td className="py-3 text-center">34</td>
                      <td className="py-3 text-center">34</td>
                      <td className="py-3 text-center">.500</td>
                    </tr>
                  </tbody>
                </table>

                <div className="mt-6 text-right">
                  <Link
                    href="/stats-hub/standings/east"
                    className="text-nbaRed hover:underline font-medium"
                  >
                    View Full Standings →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Leaders */}
      <section className="py-12">
        <div className="container mx-auto px-5 sm:px-10">
          <h2 className="text-3xl font-bold mb-10">League Leaders</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Points Per Game */}
            <div className="bg-white dark:bg-darkBlue rounded-lg shadow-md overflow-hidden">
              <div className="bg-accent py-3 px-6">
                <h3 className="text-lg text-light font-bold">
                  Points Per Game
                </h3>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <span className="w-6 text-center mr-3">1.</span>
                    <span>Player Name</span>
                  </div>
                  <div>
                    <span className="font-semibold">30.1</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <span className="w-6 text-center mr-3">2.</span>
                    <span>Player Name</span>
                  </div>
                  <div>
                    <span className="font-semibold">29.8</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <span className="w-6 text-center mr-3">3.</span>
                    <span>Player Name</span>
                  </div>
                  <div>
                    <span className="font-semibold">28.5</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <span className="w-6 text-center mr-3">4.</span>
                    <span>Player Name</span>
                  </div>
                  <div>
                    <span className="font-semibold">27.9</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <span className="w-6 text-center mr-3">5.</span>
                    <span>Player Name</span>
                  </div>
                  <div>
                    <span className="font-semibold">27.4</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rebounds Per Game */}
            <div className="bg-white dark:bg-darkBlue rounded-lg shadow-md overflow-hidden">
              <div className="bg-accent py-3 px-6">
                <h3 className="text-lg text-light font-bold">
                  Rebounds Per Game
                </h3>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <span className="w-6 text-center mr-3">1.</span>
                    <span>Player Name</span>
                  </div>
                  <div>
                    <span className="font-semibold">12.6</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <span className="w-6 text-center mr-3">2.</span>
                    <span>Player Name</span>
                  </div>
                  <div>
                    <span className="font-semibold">12.2</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <span className="w-6 text-center mr-3">3.</span>
                    <span>Player Name</span>
                  </div>
                  <div>
                    <span className="font-semibold">11.9</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <span className="w-6 text-center mr-3">4.</span>
                    <span>Player Name</span>
                  </div>
                  <div>
                    <span className="font-semibold">10.8</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <span className="w-6 text-center mr-3">5.</span>
                    <span>Player Name</span>
                  </div>
                  <div>
                    <span className="font-semibold">10.5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Assists Per Game */}
            <div className="bg-white dark:bg-darkBlue rounded-lg shadow-md overflow-hidden">
              <div className="bg-accent py-3 px-6">
                <h3 className="text-lg text-light font-bold">
                  Assists Per Game
                </h3>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <span className="w-6 text-center mr-3">1.</span>
                    <span>Player Name</span>
                  </div>
                  <div>
                    <span className="font-semibold">11.2</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <span className="w-6 text-center mr-3">2.</span>
                    <span>Player Name</span>
                  </div>
                  <div>
                    <span className="font-semibold">10.5</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <span className="w-6 text-center mr-3">3.</span>
                    <span>Player Name</span>
                  </div>
                  <div>
                    <span className="font-semibold">9.8</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <span className="w-6 text-center mr-3">4.</span>
                    <span>Player Name</span>
                  </div>
                  <div>
                    <span className="font-semibold">8.9</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <span className="w-6 text-center mr-3">5.</span>
                    <span>Player Name</span>
                  </div>
                  <div>
                    <span className="font-semibold">8.4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/stats-hub/leaders"
              className="inline-block px-8 py-3 bg-accent text-light rounded-lg font-medium hover:bg-accentDark transition-colors"
            >
              View All Leaders
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StatsHubPage;
