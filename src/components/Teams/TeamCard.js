import React from "react";
import Link from "next/link";
import Image from "next/image";

const TeamCard = ({ team }) => {
  return (
    <Link href={`/teams/${team.id}`}>
      <div className="bg-darkBlue rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
        <div className="bg-gray-200 h-48 flex items-center justify-center">
          <div className="text-gray-500 text-2xl">Team Logo</div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{team.name}</h3>
          <p className="text-sm text-gray-400">Record: {team.record}</p>
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
