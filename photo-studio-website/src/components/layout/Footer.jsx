import React from "react";
import { Link } from "react-router-dom";

/**
 * Footer Component
 *
 * Global footer displayed on all pages featuring:
 * - Copyright information
 * - Contact email link
 * - Social media links (placeholder)
 *
 * Responsive design ensures footer adapts to all screen sizes.
 *
 * @component
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="shell footer__inner">
        {/* Copyright Information */}
        <div className="footer__copyright">
          <p>
            &copy; {currentYear} Aperture Studio. Crafted with light and story.
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer__links">
          <a
            href="mailto:hello@aperture.studio"
            className="footer__link"
            aria-label="Send email to Aperture Studio"
          >
            hello@aperture.studio
          </a>
          <span className="footer__separator" aria-hidden="true">
            •
          </span>
          <span className="footer__social">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="Visit our Instagram"
            >
              Instagram
            </a>
            {" / "}
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="Visit our Behance"
            >
              Behance
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
