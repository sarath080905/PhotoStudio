import React from "react";
import { Link } from "react-router-dom";
import servicesData from "../MainSorce/JsonFiles/servicesData.json";
import { FaCameraRetro, FaUsers, FaRing, FaBuilding } from "react-icons/fa";

/**
 * Services Page Component
 *
 * Displays all photography services offered:
 * - Portrait photography
 * - Event photography
 * - Wedding photography
 * - Commercial photography
 *
 * Features:
 * - Responsive grid layout (1 col mobile, 2 col tablet, 4 col desktop)
 * - Icon-based visual hierarchy
 * - Service highlights list
 * - Clear call-to-action
 *
 * @component
 */

// Icon mapping for service types
const iconMap = {
  FaCameraRetro,
  FaUsers,
  FaRing,
  FaBuilding,
};

const Services = () => {
  return (
    <section className="section services-page">
      <div className="shell">
        {/* Page Header */}
        <div className="section__heading text-center">
          <h1 className="section__title">Our Photography Services</h1>
          <p className="section__description mx-auto">
            Thoughtfully crafted photography services focused on quality,
            creativity, and storytelling. Each session is tailored to capture
            your unique vision.
          </p>
        </div>

        {/* Services Grid - Responsive layout */}
        <div className="services-page__grid">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <article
                key={service.id}
                className="services-page__card glass-card"
                aria-label={`${service.title} service details`}
              >
                {/* Service Icon */}
                <div className="services-page__icon" aria-hidden="true">
                  {Icon && (
                    <Icon
                      className="services-page__icon-svg"
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Service Title */}
                <h3 className="services-page__title">{service.title}</h3>

                {/* Service Description */}
                <p className="services-page__description">
                  {service.description}
                </p>

                {/* Service Highlights */}
                <ul
                  className="services-page__highlights"
                  aria-label="Service highlights"
                >
                  {service.highlights.map((item, index) => (
                    <li key={index} className="services-page__highlight-item">
                      <span
                        className="services-page__bullet"
                        aria-hidden="true"
                      >
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="services-page__cta text-center">
          <Link to="/booking">
            <button
              className="btn btn-primary"
              aria-label="View packages and book a session"
            >
              View Packages & Book Your Session
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
