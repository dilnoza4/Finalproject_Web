import React from 'react';
import './Services.css';

function Services() {
    return (
        <div className="services-container">
            <div className="services-hero">
                <h1>Our Services</h1>
                <p>Comprehensive mental health support for UCA students</p>
            </div>

            <div className="services-grid">
                <div className="service-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/1791/1791961.png" alt="Individual Counseling" />
                    <h2>Individual Counseling</h2>
                    <p>One-on-one sessions tailored to your specific needs and concerns.</p>
                    <ul>
                        <li>Stress Management</li>
                        <li>Anxiety & Depression</li>
                        <li>Academic Concerns</li>
                        <li>Personal Growth</li>
                    </ul>
                </div>

                <div className="service-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/1940/1940611.png" alt="Group Therapy" />
                    <h2>Group Therapy</h2>
                    <p>Supportive group sessions focusing on common challenges.</p>
                    <ul>
                        <li>Anxiety Support Group</li>
                        <li>Stress Management Workshop</li>
                        <li>Mindfulness Practice</li>
                        <li>Social Skills Development</li>
                    </ul>
                </div>

                <div className="service-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/2491/2491749.png" alt="Crisis Support" />
                    <h2>Crisis Support</h2>
                    <p>24/7 emergency mental health support for urgent situations.</p>
                    <ul>
                        <li>24/7 Helpline</li>
                        <li>Emergency Consultations</li>
                        <li>Crisis Intervention</li>
                        <li>Safety Planning</li>
                    </ul>
                </div>
            </div>

            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps-grid">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h3>Book Appointment</h3>
                        <p>Choose your preferred service and schedule a time that works for you.</p>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <h3>Initial Consultation</h3>
                        <p>Meet with a counselor to discuss your needs and create a plan.</p>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <h3>Begin Sessions</h3>
                        <p>Start your journey to better mental health with regular sessions.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;