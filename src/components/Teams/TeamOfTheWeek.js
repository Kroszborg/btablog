// src/components/Teams/TeamOfTheWeek.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const TeamOfTheWeek = () => {
  return (
    <section className="w-full bg-dark text-light py-10">
      <div className="container mx-auto px-5 sm:px-10">
        <h2 className="text-3xl font-bold mb-8">Team of the Week</h2>

        <div className="bg-darkBlue rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-64 w-full">
            <Image
              src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&q=80"
              alt="Cleveland Cavaliers"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Cleveland Cavaliers</h3>
            <p className="text-sm text-gray-400 mb-4">Record: 47-21</p>
            <p className="mb-6">
              The Cavaliers have been impressive this week, winning all four
              games on their road trip. Donovan Mitchell averaged 28.5 points
              while shooting 52% from the field, and the team's defense held
              opponents to just 98 points per game. Their ball movement and team
              chemistry have been off the charts.
            </p>
            <Link
              href="/teams/7"
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
