import React from "react";
import "./pageCss/contactPage.css";

const ContactPage = () => {
    return (
        <div className="contact-container">
            <h1>Let's Make a Greener Tomorrow 🌍</h1>
            <p className="subtitle">
                Connect with us and contribute to a cleaner, more sustainable future.
            </p>

            <div className="info-grid">

                <div className="info-card">
                    <img
                        src="https://pics.clipartpng.com/Recycle_Symbol_PNG_Clip_Art-2136.png"
                        alt="Recycle Symbol"
                        className="info-img"
                    />
                    <h2>Recycle Responsibly ♻️</h2>
                    <p>
                        Recycling helps conserve resources, reduce pollution, and protect our planet.
                        Learn how to sort and recycle items the right way in your community.
                    </p>
                </div>

                <div className="info-card">
                    <img
                        src="https://www.pngplay.com/wp-content/uploads/6/Environment-Earth-Day-PNG-HD-Quality.png"
                        alt="Environment"
                        className="info-img"
                    />
                    <h2>Build a Better Environment 🌱</h2>
                    <p>
                        Small daily actions like reducing plastic, conserving water, and planting trees
                        can collectively make a huge impact on the planet. Be the change.
                    </p>
                </div>

                <div className="info-card">
                    <img
                        src="https://www.svgrepo.com/show/16760/chat.svg"
                        alt="Contact Icon"
                        className="info-img"
                    />
                    <h2>Get in Touch 💬</h2>
                    <p>
                        Got questions, ideas, or want to partner with us? Drop us a message—we’d love to
                        hear from you!
                        <br />
                        <strong>Email:</strong> <a href="mailto:contact@ecorecycle.com">contact@ecorecycle.com</a>
                        <br />
                        <strong>Phone:</strong> +1-800-555-RECYCLE
                    </p>
                </div>
            </div>

            <footer className="social-section">
                <h3>Follow Our Mission</h3>
                <div className="social-links">
                    <a href="https://www.facebook.com/ecorecycle" target="_blank" rel="noreferrer">Facebook</a>
                    <a href="https://www.twitter.com/ecorecycle" target="_blank" rel="noreferrer">Twitter</a>
                    <a href="https://www.instagram.com/ecorecycle" target="_blank" rel="noreferrer">Instagram</a>
                </div>
            </footer>
        </div>
    );
};

export default ContactPage;
