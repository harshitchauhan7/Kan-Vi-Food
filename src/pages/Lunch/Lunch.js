import React from 'react';
import '../../styles/LunchStyle.css';

const LunchBreakKart = () => {
  return (
    <div className="lunchbreak-page">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-heading">Tiffin That Hits Home</h1>
        <h2 className="hero-subheading">Ghar jaisa khana, break jaisa sukoon!</h2>
        <p className="hero-description">
          Affordable, homely lunches delivered with love — straight from our kitchen to your office gate.
        </p>
        <div className="cta-buttons">
          <button className="cta-btn">👉 Order Now</button>
          <button className="cta-btn">View Menu</button>
        </div>
      </section>
      {/* About Us Section */}
      <section className="about">
        <h2 className="about-heading">What’s Lunch Break Kart?</h2>
        <div className="about-content">
          <p>
            Lunch Break Kart is your mid-day food buddy! Born out of the craving for<b>“ghar ka khana”</b> during hectic workdays,
            we serve up fresh, hygienic, and wholesome meals at <b>budget-friendly prices</b> — perfect for students, working professionals,
            and anyone missing maa ke haath ka taste.
            <br /><br />
            From dal-chawal to rajma-roti, we keep it simple, satisfying, and soulful. No fancy packaging, no confusing menus — 
            just good ol’ Indian meals, made the way it should be.
          </p>
          <img src="https://img.freepik.com/free-vector/boxed-lunch-man-illustration_1284-22202.jpg?t=st=1744697142~exp=1744700742~hmac=9aabf91734799c3cea6389b09b3bc207d69b44c6477eaa88a6b35c6d908ea511&w=740" alt="Lunch Break Kart" className="about-image" />
        </div>
      </section>

      {/* Why Choose Us - Updated Grid Version */}
      <section className="why-choose">
        <h2 className="section-title">Why Break Bread With Us?</h2>
        <div className="why-grid">
          <div className="why-item">🍛 <b><strong>Homestyle Taste</strong></b><br />Not hotel-style, not oily mess. We make it like home.</div>
          <div className="why-item">💸 <b><strong>Pocket-Friendly</strong></b><br />Starting at just ₹59. No kidding.</div>
          <div className="why-item">🛵 <b><strong>Quick Delivery</strong></b><br />Piping hot meals right when your stomach growls.</div>
          <div className="why-item">📅 <b><strong>Daily Changing Menu</strong></b><br />So you don’t get bored of the same old dal every day.</div>
          <div className="why-item">🙌 <b><strong>No Commitments</strong></b><br />Order one time or every day. No strings attached.</div>
        </div>
      </section>

      {/* How It Works - Clickable Cards */}
      <section className="how-it-works">
        <h2 className="section-title">Lunchtime Sorted in 3 Easy Steps</h2>
        <div className="how-grid">
          <a href="/menu" className="how-item">
            <b><strong>Check Today’s Menu</strong></b>
            <p>We update it every morning with fresh and tasty options.</p>
          </a>
          <a href="/order" className="how-item">
            <b><strong>Place Your Order</strong></b>
            <p>One tap and you're all set. No fuss, no queue!</p>
          </a>
          <a href="/pickup" className="how-item">
            <b><strong>Grab Your Meal</strong></b>
            <p>Delivered to your office or ready for pickup from our kart.</p>
          </a>
        </div>
        <p className="how-it-works-note">Lunch hour just got smarter (and tastier).</p>
      </section>

      {/* Today’s Tiffin Specials - Table Format */}
      <section className="specials">
        <h2 className="section-title">Today’s Tiffin Specials</h2>
        <table className="tiffin-table">
          <thead>
            <tr>
              <th>Dish</th>
              <th>Accompaniments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dal Makhani</td>
              <td>Jeera Rice + Salad</td>
            </tr>
            <tr>
              <td>Paneer Bhurji</td>
              <td>Roti + Pickle</td>
            </tr>
            <tr>
              <td>Mix Veg</td>
              <td>Paratha + Chutney</td>
            </tr>
          </tbody>
        </table>
        <button className="view-menu">👀 View Full Menu →</button>
      </section>

      {/* Customer Love */}
      <section className="testimonials">
        <h2 className="section-title">Voices From The Lunch Crowd</h2>
        <blockquote>“Just like maa used to make. And cheaper than a sandwich!” – Ravi, IT Professional</blockquote>
        <blockquote>“No fuss, no frills. Just perfect lunch every time.” – Sneha, HR Exec</blockquote>
        <blockquote>“After 2 weeks, I feel like part of their kitchen family!” – Arjun, Startup Guy</blockquote>
      </section>

      {/* Call to Action */}
      <section className="final-cta">
        <h2 className="cta-heading">Craving That Ghar Ka Swaad?</h2>
        <p className="cta-description">Lunch Break Kart is here to make your break better — tasty, thali-style, no drama.</p>
        <button className="cta-btn">👉 Tap to Order Now</button>
        <button className="cta-btn">Join Our WhatsApp Menu Group</button>
      </section>
    </div>
  );
};

export default LunchBreakKart;
