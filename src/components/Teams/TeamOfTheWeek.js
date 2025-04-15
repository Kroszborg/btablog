import React from "react";
import Link from "next/link";

const TeamOfTheWeek = () => {
  return (
    <section className="w-full bg-dark text-light py-10">
      <div className="container mx-auto px-5 sm:px-10">
        <h2 className="text-3xl font-bold mb-8">Team of the Week</h2>

        <div className="bg-darkBlue rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            <div className="text-gray-500 text-3xl">Team Logo</div>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Team Name</h3>
            <p className="text-sm text-gray-400 mb-4">Record: 32-23</p>
            <p className="mb-6">
              Highlights from their recent games and key player performances.
              The team has been on a winning streak, demonstrating excellent
              teamwork and defensive strategies that have put them at the top of
              their division.
            </p>
            <Link
              href="/teams/1"
              className="inline-block px-6 py-2 bg-accent text-light rounded-lg font-medium hover:bg-accentDark transition-colors"
            >
              View Team Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamOfTheWeek;
