import MatchCard from "./MatchCard";

function Matches() {
  const matches = [
    {
      id: 1,
      match: "CSK vs MI",
      teams: "Chennai Super Kings vs Mumbai Indians",
      date: "05-04-2026, 7:30 PM",
      venue: "Chennai",
    },
    {
      id: 2,
      match: "RCB vs KKR",
      teams: "Royal Challengers Bengaluru vs Kolkata Knight Riders",
      date: "06-04-2026, 7:30 PM",
      venue: "Bengaluru",
    },
    {
      id: 3,
      match: "SRH vs CSK",
      teams: "Sunrisers Hyderabad vs Chennai Super Kings",
      date: "07-04-2026, 7:30 PM",
      venue: "Hyderabad",
    },
  ];

  return (
    <section id="matches">
      <h2>IPL 2026 Match Schedule</h2>

      <div className="match-grid">
        {matches.map((item) => (
          <MatchCard
            key={item.id}
            match={item.match}
            teams={item.teams}
            date={item.date}
            venue={item.venue}
          />
        ))}
      </div>
    </section>
  );
}

export default Matches;