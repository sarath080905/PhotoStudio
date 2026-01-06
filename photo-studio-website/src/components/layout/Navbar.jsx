import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

/**
 * Responsive Navigation Bar Component
 *
 * Features:
 * - Sticky header with backdrop blur effect
 * - Desktop: Horizontal navigation with CTA button
 * - Mobile: Hamburger menu with slide-in drawer
 * - Accessible: Keyboard navigation (Escape to close), ARIA labels
 * - Smooth transitions and hover effects
 *
 * @component
 */
function Navbar() {
  // State to control mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on Escape key press (accessibility)
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Navigation links data - centralized for easy maintenance
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/booking", label: "Booking" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Main Navigation Header */}
      <header className="navbar" role="banner">
        <div className="shell navbar__inner">
          {/* Brand Logo - Links to home */}
          <div className="navbar__brand">
            <span className="navbar__badge">Studio</span>
            <Link to="/" aria-label="Aperture Studio Home">
              Aperture Studio
            </Link>
          </div>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <nav
            className="navbar__links"
            aria-label="Main navigation"
            role="navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="navbar__link"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button - Hidden on mobile */}
          <div className="navbar__cta">
            <Link to="/booking" className="btn btn-primary">
              Book a Session
            </Link>
          </div>

          {/* Mobile Menu Toggle Button - Visible only on mobile */}
          <button
            type="button"
            className="navbar__toggle"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`navbar__hamburger ${isOpen ? "is-open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay & Drawer */}
      <div
        className={`navbar__mobile-overlay ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      >
        {/* Slide-in Drawer from Right */}
        <aside
          className={`navbar__mobile-drawer ${isOpen ? "is-open" : ""}`}
          role="dialog"
          aria-label="Mobile navigation menu"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header with Brand & Close Button */}
          <div className="navbar__drawer-header">
            <div className="navbar__brand">
              <span className="navbar__badge">Studio</span>
              <span>Aperture Studio</span>
            </div>
            <button
              type="button"
              className="navbar__close"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="navbar__mobile-links" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="navbar__mobile-link"
                onClick={() => setIsOpen(false)}
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          <div className="navbar__mobile-cta">
            <Link
              to="/booking"
              className="btn btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Book a Session
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Navbar;
