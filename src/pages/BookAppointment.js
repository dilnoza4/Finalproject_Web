import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BookAppointment.css';

function BookAppointment() {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [bookedSlots, setBookedSlots] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        concerns: ''
    });

    // Mock data for booked slots
    useEffect(() => {
        const mockBookedSlots = {
            '2024-03-20': ['09:00', '10:00'],
            '2024-03-21': ['14:00', '15:00'],
        };
        setBookedSlots(mockBookedSlots);
    }, []);

    const timeSlots = [
        "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
        "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
    ];

    const services = [
        {
            id: 1,
            type: "Individual Counseling",
            description: "One-on-one counseling session for personal issues",
            duration: "30 minutes",
            price: "Free for UCA students",
            icon: "🤝"
        },
        {
            id: 2,
            type: "Academic Support",
            description: "Help with study-related stress and academic challenges",
            duration: "30 minutes",
            price: "Free for UCA students",
            icon: "📚"
        },
        {
            id: 3,
            type: "Crisis Support",
            description: "Immediate support for urgent situations",
            duration: "30 minutes",
            price: "Free for UCA students",
            icon: "🆘"
        }
    ];

    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    const isTimeSlotBooked = (date, time) => {
        const dateStr = formatDate(date);
        return bookedSlots[dateStr]?.includes(time);
    };

    const renderTimeSlots = () => {
        if (!selectedDate) return null;

        return (
            <div className="time-slots-container">
                <h3>Available Time Slots</h3>
                <div className="time-slots-grid">
                    {timeSlots.map((time) => {
                        const isBooked = isTimeSlotBooked(selectedDate, time);
                        return (
                            <button
                                key={time}
                                className={`time-slot ${isBooked ? 'booked' : ''} ${selectedTime === time ? 'selected' : ''}`}
                                onClick={() => !isBooked && setSelectedTime(time)}
                                disabled={isBooked}
                            >
                                {time}
                                {isBooked && <span className="booked-label">Booked</span>}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    };

    const renderStep2 = () => (
        <div className="booking-step">
            <h2>Select Date & Time</h2>
            <div className="calendar-section">
                <div className="calendar-wrapper">
                    <Calendar
                        onChange={setSelectedDate}
                        value={selectedDate}
                        minDate={new Date()}
                        maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
                        tileDisabled={({ date }) => date.getDay() === 0 || date.getDay() === 6}
                    />
                </div>
                {renderTimeSlots()}
            </div>
            <div className="step-buttons">
                <button onClick={() => setStep(1)}>Back</button>
                <button
                    className="next-btn"
                    disabled={!selectedTime || !selectedDate}
                    onClick={() => setStep(3)}
                >
                    Continue
                </button>
            </div>
        </div>
    );

    const renderStep1 = () => (
        <div className="booking-step">
            <h2>Select Type of Service</h2>
            <div className="services-grid">
                {services.map(service => (
                    <div
                        key={service.id}
                        className={`service-card ${selectedService?.id === service.id ? 'selected' : ''}`}
                        onClick={() => setSelectedService(service)}
                    >
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.type}</h3>
                        <p>{service.description}</p>
                        <div className="service-details">
                            <span>Duration: {service.duration}</span>
                            <span>{service.price}</span>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="next-btn"
                disabled={!selectedService}
                onClick={() => setStep(2)}
            >
                Continue
            </button>
        </div>
    );

    const renderStep3 = () => (
        <div className="booking-step">
            <h2>Your Information</h2>
            <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name *</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email *</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>Any specific concerns?</label>
                    <textarea
                        value={formData.concerns}
                        onChange={(e) => setFormData({...formData, concerns: e.target.value})}
                        rows="4"
                    />
                </div>
                <div className="step-buttons">
                    <button type="button" onClick={() => setStep(2)}>Back</button>
                    <button type="submit" className="submit-btn">Book Appointment</button>
                </div>
            </form>
        </div>
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            service: selectedService,
            date: selectedDate,
            time: selectedTime,
            ...formData
        });
        alert('Appointment booked successfully!');
    };

    return (
        <div className="booking-container">
            <div className="booking-progress">
                <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Service</div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Date & Time</div>
                <div className={`step ${step >= 3 ? 'active' : ''}`}>3. Your Details</div>
            </div>

            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
        </div>
    );
}

export default BookAppointment;