// src/components/Teams/TeamCard.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const TeamCard = ({ team }) => {
  return (
    <Link href={`/teams/${team.id}`}>
      <div className="bg-darkBlue rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
        <div className="relative h-48 w-full">
          <Image
            src={team.logo}
            alt={`${team.name} team`}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-light">{team.name}</h3>
          <p className="text-sm text-gray-400">Record: {team.record}</p>
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
