
import { useState } from "react";
import { supabase } from "../supabase";

function MatchCard({ matchId, match, teams, date, venue, availableSeats }) {
  const [customerName, setCustomerName] = useState("");
  const [tickets, setTickets] = useState(1);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function bookTickets() {
    if (!customerName.trim() || tickets < 1) {
      setMessage("Enter your name and ticket quantity.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { data: matchData, error: fetchError } = await supabase
      .from("matches")
      .select("available_seats")
      .eq("id", matchId)
      .single();

    if (fetchError || !matchData) {
      setMessage("Could not find match.");
      setLoading(false);
      return;
    }

    if (matchData.available_seats < tickets) {
      setMessage("Not enough seats available.");
      setLoading(false);
      return;
    }

    const { error: updateError } = await supabase
      .from("matches")
      .update({
        available_seats: matchData.available_seats - tickets
      })
      .eq("id", matchId);

    if (updateError) {
      setMessage(updateError.message);
      setLoading(false);
      return;
    }

    const { error: bookingError } = await supabase
      .from("bookings")
      .insert([{
        match_id: matchId,
        customer_name: customerName.trim(),
        tickets: tickets
      }]);

    if (bookingError) {
      await supabase
        .from("matches")
        .update({
          available_seats: matchData.available_seats
        })
        .eq("id", matchId);

      setMessage("Booking failed: " + bookingError.message);
    } else {
      setMessage("Tickets booked successfully!");
      setCustomerName("");
      setTickets(1);
    }

    setLoading(false);
  }

  return (
    <div className="match-card">
      <h3>{match}</h3>
      <p>Teams: {teams}</p>
      <p>Date: {date}</p>
      <p>Venue: {venue}</p>
      <p>Available Seats: {availableSeats}</p>

      <input
        type="text"
        placeholder="Enter your name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />

      <input
        type="number"
        min="1"
        value={tickets}
        onChange={(e) =>
          setTickets(Math.max(1, Number(e.target.value)))
        }
      />

      <button onClick={bookTickets} disabled={loading}>
        {loading ? "Booking..." : "Book Tickets"}
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default MatchCard;



