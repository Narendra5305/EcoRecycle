import React from "react";
import "./pageCss/howItWorks.css";



const Step = ({ title, children, icon }) => (
    <div className="step">
      <h2 className="step-title">
        {icon} {title}
      </h2>
      <p className="step-description">{children}</p>
    </div>
  );
  
  // WhyChoose Component for displaying the "Why Choose EcoRecycle?" section
const WhyChoose = () => (
    <div className="why-choose-container">
      <h2 className="why-choose-title">Why Choose EcoRecycle?</h2>
      <ul className="why-choose-list">
        <li>Convenient Scheduling: Pick your time, and we'll handle the rest!</li>
        <li>Safe & Secure: Certified pickup teams, secure disposal, and data protection.</li>
        <li>Track Your Impact: See your recycling history and environmental contributions.</li>
        <li>Earn Rewards: Earn Green Points and make a positive impact on the planet.</li>
      </ul>
    </div>
  );
  
  // Main HowItWorks Component
const HowItWorks = () => {
    return (
      <div className="how-it-works-container">
        <h1 className="title">♻️ How EcoRecycle Works</h1>
        <p className="intro-text">
          At <strong>EcoRecycle</strong>, we are committed to making the process of recycling your e-waste as seamless and eco-friendly as possible. Here’s how it works:
        </p>
  
        <div className="steps-container">
          <Step title="Sign Up and Log In" icon="📝">
            Start by <strong>registering</strong> or <strong>logging in</strong> to your EcoRecycle account. This allows you to manage your scheduled pickups, track your recycling history, and earn rewards for your efforts.
          </Step>
  
          <Step title="Schedule Your Pickup" icon="🗓️">
            Once you're logged in:
            <ul className="step-list">
              <li>Select the e-waste you need to recycle (old phones, laptops, batteries, etc.).</li>
              <li>Choose your pickup location and preferred date and time for the collection.</li>
              <li>Our system will confirm availability and send you an instant pickup confirmation.</li>
            </ul>
          </Step>
  
          <Step title="Prepare Your E-Waste" icon="📦">
            Before the scheduled pickup:
            <ul className="step-list">
              <li>Pack your e-waste safely and securely in a box.</li>
              <li>Ensure that devices are properly prepared (remove batteries, wipe data where necessary).</li>
            </ul>
            You will receive a reminder notification 24 hours before the scheduled pickup.
          </Step>
  
          <Step title="Pickup and Verification" icon="🚛">
            On the day of your scheduled pickup, our trained pickup team will:
            <ul className="step-list">
              <li>Arrive within the time window you selected.</li>
              <li>Verify the items you have listed for recycling and collect them for safe disposal.</li>
            </ul>
          </Step>
  
          <Step title="Safe Recycling Process" icon="♻️">
            After collection, your e-waste will be sent to certified recycling centers where:
            <ul className="step-list">
              <li>Devices and components are dismantled, sorted, and recycled in compliance with environmental standards.</li>
              <li>If applicable, data on devices will be securely wiped to ensure privacy.</li>
            </ul>
          </Step>
  
          <Step title="Earn Green Points" icon="🏅">
            For every e-waste pickup, you’ll receive Green Points that you can use for:
            <ul className="step-list">
              <li>Discounts on future pickups.</li>
              <li>Contributions to eco-friendly initiatives.</li>
              <li>Rewarding environmentally-conscious behavior.</li>
            </ul>
          </Step>
        </div>
  
        {/* Why Choose Section */}
        <WhyChoose />
      </div>
    );
  };
  
  export default HowItWorks;