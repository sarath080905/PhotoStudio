import React from "react";
import { Link } from "react-router-dom";

/**
 * About Page Component
 *
 * Displays studio information including:
 * - Mission statement and approach
 * - Team overview
 * - Service delivery process
 *
 * Features responsive grid layout that adapts to screen size:
 * - Mobile: Single column
 * - Tablet: 2 columns
 * - Desktop: 3 columns
 *
 * @component
 */
const About = () => {
  // Studio values/features data
  const features = [
    {
      id: 1,
      icon: "🎯",
      title: "Approach",
      description:
        "Editorial direction paired with documentary intuition. We prompt, guide, and then let real moments unfold.",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      id: 2,
      icon: "👥",
      title: "Team",
      description:
        "A tight crew of photographers, lighting techs, and retouchers collaborating on every delivery.",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      id: 3,
      icon: "⚡",
      title: "Delivery",
      description:
        "Fast previews, calibrated color, and layered exports for web, print, and social—ready to publish.",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="section about-page">
      <div className="shell">
        {/* Page Header */}
        <div className="section__heading text-center">
          <span className="section__eyebrow">About Us</span>
          <h1 className="section__title">
            A studio built on light and empathy
          </h1>
          <p className="section__description mx-auto">
            We are photographers, retouchers, and producers who obsess over
            detail. Every session is guided, paced, and delivered to feel calm,
            intentional, and refined.
          </p>
        </div>

        {/* Features Grid - Responsive layout */}
        <div className="about-page__grid">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="about-page__card glass-card"
              aria-label={`${feature.title} information`}
            >
              {/* Icon Container */}
              <div
                className={`about-page__icon bg-gradient-to-br ${feature.gradient}`}
                aria-hidden="true"
              >
                <span className="text-2xl">{feature.icon}</span>
              </div>

              {/* Content */}
              <h3 className="about-page__card-title">{feature.title}</h3>
              <p className="about-page__card-description">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="about-page__cta">
          <Link to="/contact" className="about-page__cta-link">
            <button
              className="about-page__cta-button"
              aria-label="Contact the team"
            >
              <span className="about-page__cta-text">Meet the Team</span>
              <svg
                className="about-page__cta-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
