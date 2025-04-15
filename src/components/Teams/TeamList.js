import React from "react";
import TeamCard from "./TeamCard";
import Link from "next/link";

const teams = [
  {
    id: 1,
    name: "Team Name",
    record: "25-30",
    imageUrl: "/placeholder-team.jpg",
  },
  {
    id: 2,
    name: "Team Name",
    record: "30-25",
    imageUrl: "/placeholder-team.jpg",
  },
  {
    id: 3,
    name: "Team Name",
    record: "28-27",
    imageUrl: "/placeholder-team.jpg",
  },
  {
    id: 4,
    name: "Team Name",
    record: "35-20",
    imageUrl: "/placeholder-team.jpg",
  },
];

const TeamList = () => {
  return (
    <section className="w-full bg-dark text-light py-12">
      <div className="container mx-auto px-5 sm:px-10">
        <h2 className="text-3xl font-bold mb-8">Teams</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/teams"
            className="inline-block px-6 py-3 bg-accent text-light rounded-lg font-medium hover:bg-accentDark transition-colors"
          >
            View All Teams
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamList;
