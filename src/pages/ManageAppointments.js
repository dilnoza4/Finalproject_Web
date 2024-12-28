import React, { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import "./ManageAppointments.css";

function ManageAppointments() {
    const [appointments, setAppointments] = useState([
        { name: "John Doe", date: "2024-12-05" },
        { name: "Jane Smith", date: "2024-12-06" },
    ]);

    const handleDelete = (index) => {
        const updatedAppointments = appointments.filter((_, i) => i !== index);
        setAppointments(updatedAppointments);
    };

    return (
        <div className="manage-appointments">
            <h1>Manage Your Appointments</h1>
            <p>
                Below is a list of your current appointments. You can cancel an appointment if you need to make changes.
            </p>
            <AppointmentList appointments={appointments} onDelete={handleDelete} />
        </div>
    );
}

export default ManageAppointments;
