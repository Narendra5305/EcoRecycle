import React from 'react';
import './coponentCss/footer.css'; // Create a CSS file for styling if needed

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h1>EcoRecycle</h1>
                    <p>Making the planet greener, one step at a time.</p>
                </div>
                <div className="footer-links">
                    <div>
                        <h3>Company</h3>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/team">Our Team</a></li>
                            <li><a href="/careers">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/guides">Guides</a></li>
                            <li><a href="/support">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <ul>
                            <li>Email: info@ecorecycle.com</li>
                            <li>Phone: +123 456 7890</li>
                            <li>Address: 123 Green Street, EcoCity</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
                <div className="footer-newsletter">
                    <h3>Newsletter</h3>
                    <p>Subscribe to our newsletter to stay updated on our latest initiatives and tips for a greener planet.</p>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} EcoRecycle. All Rights Reserved.</p>
                <p>Privacy Policy | Terms of Service</p>
            </div>
        </footer>
    );
};

export default Footer;
