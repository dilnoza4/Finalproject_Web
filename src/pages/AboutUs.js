import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-container">
            <div className="about-hero">
                <h1>About UCA Counseling</h1>
                <p>Supporting student mental health and well-being since 2016</p>
            </div>

            <div className="about-content">
                <section className="mission-section">
                    <h2>Our Mission</h2>
                    <p>We are committed to providing high-quality mental health services to help students thrive academically and personally. Our goal is to create a campus culture that promotes mental health awareness and reduces stigma.</p>
                    <div className="mission-stats">
                        <div className="stat-item">
                            <h3>1000+</h3>
                            <p>Students Helped</p>
                        </div>
                        <div className="stat-item">
                            <h3>24/7</h3>
                            <p>Crisis Support</p>
                        </div>
                        <div className="stat-item">
                            <h3>98%</h3>
                            <p>Satisfaction Rate</p>
                        </div>
                    </div>
                </section>

                <section className="services-section">
                    <h2>Our Services</h2>
                    <div className="services-grid">
                        <div className="service-item">
                            <i className="fas fa-user-friends"></i>
                            <h3>Individual Counseling</h3>
                            <p>One-on-one sessions tailored to your needs</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-users"></i>
                            <h3>Group Therapy</h3>
                            <p>Supportive group sessions for shared experiences</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-brain"></i>
                            <h3>Mental Health Workshops</h3>
                            <p>Educational sessions on various mental health topics</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-heart"></i>
                            <h3>Crisis Support</h3>
                            <p>24/7 emergency mental health assistance</p>
                        </div>
                    </div>
                </section>

                <section className="team-section">
                    <h2>Our Team</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src="https://randomuser.me/api/portraits/women/76.jpg" alt="Dr. Moik Alisher" />
                            <h3>Dr. Moik Alisher</h3>
                            <p>Counseling Psychologist</p>
                            <div className="member-details">
                                <p>Ph.D. in Clinical Psychology</p>
                                <p>10+ years experience</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sultonbegim Khujasolieva" />
                            <h3>Sultonbegim Khujasolieva</h3>
                            <p>Intern</p>
                            <div className="member-details">
                                <p>M.A. in Counseling Psychology</p>
                                <p>Specializes in student support</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Asma Husayni" />
                            <h3>Asma Husayni</h3>
                            <p>Mental Health Intern</p>
                            <div className="member-details">
                                <p>B.A. in Psychology</p>
                                <p>Focus on youth counseling</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="values-section">
                    <h2>Our Values</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <i className="fas fa-user-shield"></i>
                            <h3>Confidentiality</h3>
                            <p>We maintain strict confidentiality and create a safe space for our students.</p>
                        </div>
                        <div className="value-item">
                            <i className="fas fa-globe"></i>
                            <h3>Inclusivity</h3>
                            <p>We welcome and support students from all backgrounds and walks of life.</p>
                        </div>
                        <div className="value-item">
                            <i className="fas fa-award"></i>
                            <h3>Excellence</h3>
                            <p>We strive to provide the highest quality of care and support.</p>
                        </div>
                    </div>
                </section>

                <section className="contact-section">
                    <h2>Get in Touch</h2>
                    <div className="contact-info">
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <h3>Emergency Contact</h3>
                            <p>24/7 Crisis Line: +996 221 153 227 </p>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <h3>Email Us</h3>
                            <p>counseling@ucentralasia.org</p>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <h3>Visit Us</h3>
                            <p>UCA Naryn Campus, Naryn, Kyrgyzstan</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutUs;