
import React, { useEffect } from 'react';
import './pageCss/landingPage.css';




const HeroSection = () => {

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user){
      localStorage.clear();
    }
    
  });


  return (
    <section className="hero">
      <div className="hero-cont-1">
        <h1>Eco-Friendly Recycling, Right From Your Doorstep</h1>
        <p>Book recycling pickups with trusted vendors in seconds. Together, let’s build a cleaner and greener tomorrow.</p>
        <div className="hero-buttons">
          <button className="primary">Schedule a Pickup</button>
        </div>
      </div>
      <div className="hero-cont-2">
        <img src="https://www.pngall.com/wp-content/uploads/2016/06/Environment-Download-PNG.png" alt="EcoRecycle" className="hero-image" />
      </div>
      
    </section>
  );
};

// const HowItWorks = () => {
//   return (
//     <section className="how-it-works" id="how">
//       <h2>How It Works</h2>
//       <div className="steps">
//         <div>📍 Enter Your Location</div>
//         <div>♻️ Select What to Recycle</div>
//         <div>📅 Choose Time Slot</div>
//         <div>🚛 Pickup by Trusted Vendor</div>
//       </div>
//     </section>
//   );
// };

// const VendorSection = () => {
//   return (
//     <section className="vendor-section" id="vendor">
//       <h2>For Pickup Partners</h2>
//       <p>Join our network of responsible recycling vendors. Get requests, manage schedules, and help keep your city clean — while growing your business.</p>
//       <button className="primary">Register as Vendor</button>
//     </section>
//   );
// };

// const WhyEcoRecycle = () => {
//   return (
//     <section className="why" id="why">
//       <h2>Why EcoRecycle?</h2>
//       <ul>
//         <li>✅ Simple Scheduling</li>
//         <li>✅ Verified Vendors</li>
//         <li>✅ Real-Time Tracking</li>
//         <li>✅ Eco Impact Reports</li>
//       </ul>
//     </section>
//   );
// };

// const Footer = () => {
//   return (
//     <footer className="footer" id="contact">
//       <p>© 2025 EcoRecycle. All rights reserved.</p>
//       <nav>
//         <a href="#">About</a>
//         <a href="#">FAQ</a>
//         <a href="#">Terms</a>
//         <a href="#">Privacy</a>
//       </nav>
//     </footer>
//   );

// };


const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      {/* <HowItWorks />
      <VendorSection />
      <WhyEcoRecycle /> */}
    </div>
  );
};

export default LandingPage;
