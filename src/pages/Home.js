import React from "react";
import "./Home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to UCA Counseling Services</h1>
                    <p>Your journey to mental wellness starts here.</p>
                </div>
            </section>

            {/* Why Counseling Matters */}
            <section className="why-counseling">
                <h2>Why Counseling Matters</h2>
                <div className="benefits-grid">
                    <div className="benefit-item">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/4463/4463538.png"
                            alt="Benefit 1"
                        />
                        <h3>Confidential Support</h3>
                        <p>Discuss your concerns in a private and safe environment.</p>
                    </div>
                    <div className="benefit-item">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3220/3220454.png"
                            alt="Benefit 2"
                        />
                        <h3>Personal Growth</h3>
                        <p>Learn valuable skills to improve your emotional well-being.</p>
                    </div>
                    <div className="benefit-item">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2107/2107951.png"
                            alt="Benefit 3"
                        />
                        <h3>Stress Management</h3>
                        <p>Find effective strategies for managing stress and anxiety.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Carousel */}
            <section className="testimonials-section">
                <h2>What Our Students Are Saying</h2>
                <Carousel>
                    <div>
                        <p>
                            "The counseling service at UCA has truly helped me find balance and
                            feel more confident." — Student A
                        </p>
                    </div>
                    <div>
                        <p>
                            "Dr. [Name] is understanding, kind, and professional. Highly
                            recommend!" — Student B
                        </p>
                    </div>
                    <div>
                        <p>
                            "Thanks to the counseling sessions, I've learned to manage my
                            stress effectively." — Student C
                        </p>
                    </div>
                </Carousel>
            </section>

            {/* Quick Facts */}
            <section className="quick-facts">
                <h2>Quick Mental Health Facts</h2>
                <ul>
                    <li>1 in 4 students experience mental health issues.</li>
                    <li>Regular counseling can improve academic performance.</li>
                    <li>Taking time for self-care is crucial for overall health.</li>
                </ul>
            </section>
        </div>
    );
}

export default Home;
