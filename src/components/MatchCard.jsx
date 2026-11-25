
function MatchCard({ match, teams, date, venue }) {
  return (
    <div className="match-card">
      <h3>{match}</h3>
      <p>Teams: {teams}</p>
      <p>Date: {date}</p>
      <p>Venue: {venue}</p>
      <button>Book Tickets</button>
    </div>
  );
}

export default MatchCard;
