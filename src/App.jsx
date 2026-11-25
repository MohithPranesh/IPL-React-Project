
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MatchCard from "./components/MatchCard";
import "./App.css";

function App() {
  const [selectedTeam, setSelectedTeam] = useState("All");

  const matches = [
    {
      id: 1,
      match: "CSK vs MI",
      teams: "Chennai Super Kings vs Mumbai Indians",
      date: "05-04-2026, 7:30 PM",
      venue: "Chennai",
      team: "CSK"
    },
    {
      id: 2,
      match: "RCB vs KKR",
      teams: "Royal Challengers Bengaluru vs Kolkata Knight Riders",
      date: "06-04-2026, 7:30 PM",
      venue: "Bengaluru",
      team: "RCB"
    },
    {
      id: 3,
      match: "SRH vs CSK",
      teams: "Sunrisers Hyderabad vs Chennai Super Kings",
      date: "07-04-2026, 7:30 PM",
      venue: "Hyderabad",
      team: "SRH"
    }
  ];

  const filteredMatches =
    selectedTeam === "All"
      ? matches
      : matches.filter((match) => match.team === selectedTeam);

  return (
    <>
      <Navbar />
      <Hero />

      <section id="matches" className="matches-section">
        <h2>IPL 2026 Match Schedule</h2>

        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
          <option value="All">All Teams</option>
          <option value="CSK">CSK</option>
          <option value="RCB">RCB</option>
          <option value="SRH">SRH</option>
        </select>

        <div className="match-grid">
          {filteredMatches.map((match) => (
            <MatchCard
              key={match.id}
              match={match.match}
              teams={match.teams}
              date={match.date}
              venue={match.venue}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;

