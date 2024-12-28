import React from "react";
import "./AppointmentList.css";

function AppointmentList({ appointments, onDelete }) {
    return (
        <div className="appointment-list">
            <h2>Appointments</h2>
            {appointments && appointments.length > 0 ? (
                <ul>
                    {appointments.map((appointment, index) => (
                        <li key={index}>
                            <div>
                                <strong>Name:</strong> {appointment.name}
                            </div>
                            <div>
                                <strong>Date:</strong> {appointment.date}
                            </div>
                            <button onClick={() => onDelete(index)} className="btn-danger">
                                Cancel
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No appointments yet!</p>
            )}
        </div>
    );
}

export default AppointmentList;
