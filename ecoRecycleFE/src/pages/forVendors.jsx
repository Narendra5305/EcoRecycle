import React from "react";
import "./pageCss/forVendor.css"; 

const ForVendors = () => {
  return (
    <div className="vendor-landing-container">
      <header className="vendor-header">
        <h1 className="vendor-title">Welcome to EcoRecycle Vendor Partnership</h1>
        <p className="vendor-intro">
          Join us in our mission to make the world a greener place by partnering with EcoRecycle. Discover the facilities and benefits we provide to our valued vendors.
        </p>
      </header>

      <section className="vendor-services">
        <h2 className="services-title">What We Provide to Vendors</h2>
        <div className="services-list">
          <div className="service-item">
            <h3 className="service-title">Reliable Pickup Scheduling</h3>
            <p className="service-description">
              We offer a seamless and flexible scheduling system that allows vendors to choose convenient pickup times and locations for e-waste.
            </p>
          </div>

          <div className="service-item">
            <h3 className="service-title">Secure E-Waste Handling</h3>
            <p className="service-description">
              Our certified teams ensure that all e-waste is handled and transported safely, complying with environmental standards and best practices.
            </p>
          </div>

          <div className="service-item">
            <h3 className="service-title">Timely Payments</h3>
            <p className="service-description">
              Vendors receive prompt and transparent payments for their services, with access to payment history and earnings tracking.
            </p>
          </div>

          <div className="service-item">
            <h3 className="service-title">Performance Insights</h3>
            <p className="service-description">
              We provide detailed insights into your performance, allowing you to track the number of pickups, total earnings, and more.
            </p>
          </div>

          <div className="service-item">
            <h3 className="service-title">Rewards and Recognition</h3>
            <p className="service-description">
              We recognize and reward our top-performing vendors with incentives, bonuses, and exclusive offers to motivate and appreciate their efforts.
            </p>
          </div>
        </div>
      </section>

      <section className="vendor-benefits">
        <h2 className="benefits-title">Why Partner with EcoRecycle?</h2>
        <ul className="benefits-list">
          <li>Increased Exposure: Reach a larger audience with our platform's wide reach and eco-conscious community.</li>
          <li>Reliable Logistics: EcoRecycle handles all logistics to ensure smooth and hassle-free pickups.</li>
          <li>Environmental Impact: Be part of a green initiative that makes a real difference in reducing e-waste and promoting sustainability.</li>
          <li>Ongoing Support: Our support team is always ready to assist you with any questions or issues.</li>
          <li>Exclusive Partnerships: Get access to exclusive deals and collaborations that grow your business.</li>
        </ul>
      </section>

      <section className="cta-section">
        <h2 className="cta-title">Ready to Become a Vendor?</h2>
        <p className="cta-text">
          Join our network of trusted vendors and start making a positive impact on the planet today. Let's work together to recycle responsibly!
        </p>
        <button className="cta-button">Become a Vendor</button>
      </section>
    </div>
  );
};

export default ForVendors;
