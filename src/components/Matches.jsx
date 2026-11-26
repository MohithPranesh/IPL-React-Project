
import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import MatchCard from "./MatchCard";

function Matches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMatches();

    const channel = supabase
      .channel("matches-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "matches" },
        () => fetchMatches()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function fetchMatches() {
    const { data, error } = await supabase
      .from("matches")
      .select("*");

    if (error) {
      console.error("Error fetching matches:", error.message);
    } else {
      setMatches(data || []);
    }

    setLoading(false);
  }

  return (
    <section id="matches">
      <h2>IPL 2026 Match Schedule</h2>

      {loading ? (
        <p>Loading matches...</p>
      ) : (
        <div className="match-grid">
          {matches.map((item) => (
            <MatchCard
              matchId={item.id}
              availableSeats={item.available_seats}
              key={item.id}
              match={item.match}
              teams={item.teams}
              date={item.date}
              venue={item.venue}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Matches;

