import React from "react";
import Link from "next/link";
import TeamCard from "@/src/components/Teams/TeamCard";
import { westernTeams, easternTeams } from "@/src/data/mockData";

export const metadata = {
  title: "NBA Teams | Beyond the Arc",
  description:
    "Explore all NBA teams with their current standings, records, and latest news.",
};

const TeamsPage = () => {
  return (
    <main className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light">
      <section className="py-12 bg-dark text-light">
        <div className="container mx-auto px-5 sm:px-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NBA Teams</h1>
          <p className="text-xl text-light/80 max-w-3xl">
            Explore all 30 NBA teams, divided by conference and division. Check
            team records, stats, and latest news.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-5 sm:px-10">
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-nbaBlue rounded-full mr-3"></div>
              <h2 className="text-3xl font-bold">Western Conference</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {westernTeams.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-nbaRed rounded-full mr-3"></div>
              <h2 className="text-3xl font-bold">Eastern Conference</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {easternTeams.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamsPage;
