import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/home/HeroSection.jsx";
import TestimonialsSlider from "../components/home/TestimonialsSlider.jsx";
import PricingPreview from "../components/home/PricingPreview.jsx";

/**
 * Home Page Component
 *
 * Main landing page featuring:
 * - Hero section with CTA
 * - Hero section with stats and moodboard
 * - Client testimonials
 * - Pricing preview
 *
 * All sections are responsive and stack vertically on mobile.
 *
 * @component
 */
const Home = () => {
  return (
    <div className="section-stack">
      {/* Hero Introduction Section */}
      <section className="home-page">
        <div className="shell">
          <h1 className="home-page__title">
            Capture Your Best Moments with{" "}
            <span className="text-amber-400">Aperture Studio</span>
          </h1>
          <p className="home-page__description">
            Modern portrait, event, and brand photography with studio-grade
            lighting and meticulous retouching. We craft galleries that feel
            cinematic, intimate, and unforgettable.
          </p>
          <Link to="/booking" className="home-page__cta">
            <button
              className="cta-button"
              aria-label="Book a photography session"
            >
              Book a Session
            </button>
          </Link>
        </div>
      </section>

      {/* Main Hero Section with Stats */}
      <HeroSection />

      {/* Client Testimonials Section */}
      <TestimonialsSlider />

      {/* Pricing Packages Preview */}
      <PricingPreview />
    </div>
  );
};

export default Home;
