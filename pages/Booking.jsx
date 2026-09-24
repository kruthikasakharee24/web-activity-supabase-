import { useState } from "react";

function Booking() {

    const [name, setName] = useState("");
    const [tickets, setTickets] = useState("");
    async function handleBooking() {

        if (!name || !tickets || !stand || !venue || !place) {
            alert("Please fill all the details");
            return;
        }

        const { data, error } = await supabase
            .from("bookings")
            .insert([
            {
                name: name,
                tickets: Number(tickets),
                stand: stand,
                venue: venue,
                place: place
            }
            ]);

        if (error) {
            console.error(error);
            alert("Booking failed");
            return;
        }

        alert("Ticket booked successfully!");

        }
    }

    return (
        <main className="booking-page">

            <h1>Book Your Ticket</h1>

            <div className="booking-form">
                <label htmlFor="name">Name</label>

                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />

                <label htmlFor="tickets">Number of Tickets</label>

                <input
                    id="tickets"
                    type="number"
                    min="1"
                    value={tickets}
                    onChange={(e) => setTickets(e.target.value)}
                    placeholder="Enter number of tickets"
                />
            </div>

            <section className="booking-details">
                <h3>Booking Details</h3>

                <p>Name: <strong>{name || "-"}</strong></p>

                <p>Tickets: <strong>{tickets || "-"}</strong></p>
            </section>
            <label htmlFor="stand">Select Stand</label>

    <select
          id="stand"
           value={stand}
           onChange={(e) => setStand(e.target.value)}
        >
           <option value="">-- Select Stand --</option>
           <option value="General Stand">General Stand</option>
           <option value="VIP Stand">VIP Stand</option>
     </select>

     <label htmlFor="venue">Select Venue</label>

         <select
             id="venue"
             value={venue}
             onChange={(e) => setVenue(e.target.value)}
           >
           <option value="">-- Select Venue --</option>
           <option value="Wankhede Stadium">Wankhede Stadium</option>
           <option value="M. Chinnaswamy Stadium"> M. Chinnaswamy Stadium
                    </option>
        </select>
        <button onClick={handleBooking}>
                     Book Ticket
            </button>

        </main>
    );


export default Booking;

const [stand, setStand] = useState("");
const [venue, setVenue] = useState("");
