import React from "react";
import TeamList from "../components/Teams/TeamList";
import TeamOfTheWeek from "../components/Teams/TeamOfTheWeek";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import RecentArticles from "../components/Home/RecentArticles";
import NBATeams from "../components/Teams/NBATeams";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection />
      <TeamOfTheWeek />
      <NBATeams />
      <RecentArticles />
    </main>
  );
}
