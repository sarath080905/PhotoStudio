import React from "react";
import { Link } from "react-router-dom";
import GalleryGrid from "../components/gallery/GalleryGrid.jsx";
import Lightbox from "../components/gallery/Lightbox.jsx";

/**
 * Gallery Page Component
 *
 * Portfolio showcase page featuring:
 * - Page header with description
 * - Gallery grid with photography samples
 * - Lightbox component for image viewing
 * - Call-to-action for booking
 *
 * Responsive design ensures gallery adapts to all screen sizes:
 * - Mobile: Single column
 * - Tablet: 2 columns
 * - Desktop: 3+ columns
 *
 * @component
 */
const Gallery = () => {
  return (
    <section className="section gallery-page">
      <div className="shell">
        {/* Page Header */}
        <div className="section__heading text-center">
          <span className="section__eyebrow">Portfolio</span>
          <h1 className="section__title">Portfolio Gallery</h1>
          <p className="section__description mx-auto">
            Browse our favorite shots from recent sessions and events. Each
            image tells a story, capturing moments that last forever.
          </p>
        </div>

        {/* Call to Action */}
        <div className="gallery-page__cta text-center">
          <Link to="/booking">
            <button
              className="btn btn-primary"
              aria-label="Book your photography session"
            >
              Book Your Session
            </button>
          </Link>
        </div>

        {/* Gallery Grid Component */}
        <div className="gallery-page__content">
          <GalleryGrid />
        </div>

        {/* Lightbox Component for Image Viewing */}
        <Lightbox />
      </div>
    </section>
  );
};

export default Gallery;
