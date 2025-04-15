import React from "react";
import Link from "next/link";

const NBATeams = () => {
  return (
    <section className="w-full bg-light dark:bg-dark text-dark dark:text-light py-12">
      <div className="container mx-auto px-5 sm:px-10 text-center">
        <h2 className="text-3xl font-bold mb-10">NBA Teams</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/teams/west"
            className="px-8 py-3 bg-nbaBlue text-light rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Western Conference
          </Link>

          <Link
            href="/teams/east"
            className="px-8 py-3 bg-nbaRed text-light rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            Eastern Conference
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NBATeams;
