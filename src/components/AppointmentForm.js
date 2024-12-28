import React, { useState } from "react";
import Calendar from "react-calendar";
import "./AppointmentForm.css";

function AppointmentForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState(new Date());
    const [availableSlots, setAvailableSlots] = useState({
        '2024-12-05': ['10:00 AM', '11:00 AM', '1:00 PM'], // Example available slots
        '2024-12-06': ['9:00 AM', '2:00 PM'],
        '2024-12-07': [],
    });

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && date) {
            alert(`Appointment booked for ${name} on ${date.toDateString()}`);
            setName("");
            setEmail("");
            setDate(new Date());
        } else {
            alert("Please fill in all fields.");
        }
    };

    const formatDate = (date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    };

    const selectedDate = formatDate(date);

    return (
        <form className="appointment-form" onSubmit={handleSubmit}>
            <h2>Book Your Appointment</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <Calendar
                    onChange={handleDateChange}
                    value={date}
                    minDate={new Date()} // Prevent past date selection
                />
                <p>Selected date: {selectedDate}</p>
            </div>
            <div className="available-slots">
                <h3>Available Slots for {selectedDate}</h3>
                {availableSlots[selectedDate] ? (
                    <ul>
                        {availableSlots[selectedDate].map((slot, index) => (
                            <li key={index}>{slot}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No slots available for this date</p>
                )}
            </div>
            <button type="submit" className="btn-primary">Book Appointment</button>
        </form>
    );
}

export default AppointmentForm;
