import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

/**
 * Contact Page Component
 *
 * Contact information page featuring:
 * - Contact details (phone, email, location)
 * - Business hours
 * - Call-to-action for booking
 *
 * Responsive two-column layout:
 * - Mobile: Stacked vertically
 * - Desktop: Side-by-side
 *
 * @component
 */
const Contact = () => {
  // Contact information data
  const contactInfo = [
    {
      id: 1,
      icon: FaPhoneAlt,
      label: "Phone",
      value: "+1 (234) 567-890",
      href: "tel:+1234567890",
      type: "phone",
    },
    {
      id: 2,
      icon: FaEnvelope,
      label: "Email",
      value: "info@aperturestudio.com",
      href: "mailto:info@aperturestudio.com",
      type: "email",
    },
    {
      id: 3,
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "123 Creative Street, New York, USA",
      href: null,
      type: "location",
    },
  ];

  return (
    <section className="section contact-page">
      <div className="shell">
        {/* Page Header */}
        <div className="section__heading text-center">
          <span className="section__eyebrow">Get in Touch</span>
          <h1 className="section__title">Contact Us</h1>
          <p className="section__description mx-auto">
            Have questions, want to collaborate, or ready to book a session?
            We'd love to hear from you. Reach out and let's create something
            beautiful together.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="contact-page__grid">
          {/* Contact Information Card */}
          <div className="contact-page__info-card glass-card">
            <h2 className="contact-page__info-title">Contact Information</h2>

            {/* Contact Details List */}
            <div className="contact-page__details">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const isLink = item.href !== null;

                return (
                  <div
                    key={item.id}
                    className="contact-page__detail-item"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    <div className="contact-page__icon" aria-hidden="true">
                      <Icon className="contact-page__icon-svg" />
                    </div>
                    <div className="contact-page__detail-content">
                      <p className="contact-page__detail-label">{item.label}</p>
                      {isLink ? (
                        <a
                          href={item.href}
                          className="contact-page__detail-link"
                          aria-label={`${item.label} link`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="contact-page__detail-text">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Business Hours */}
            <div className="contact-page__hours">
              <p className="contact-page__hours-text">
                Available Monday – Saturday, 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="contact-page__cta">
            <h3 className="contact-page__cta-title">
              Ready to book your session?
            </h3>
            <p className="contact-page__cta-description">
              Let's capture moments that last forever. Reach out today and
              reserve your date. We're here to make your vision come to life.
            </p>
            <Link to="/booking">
              <button
                className="btn btn-primary"
                aria-label="Book a photography session"
              >
                Book a Session
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
