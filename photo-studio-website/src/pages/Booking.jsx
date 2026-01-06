import React from "react";
import { Link } from "react-router-dom";
import BookingForm from "../components/forms/BookingForm.jsx";

/**
 * Booking Page Component
 *
 * Session booking page featuring:
 * - Page header with instructions
 * - Booking form with validation
 * - Clear call-to-action
 *
 * Form includes:
 * - Name input
 * - Phone number input
 * - Event date picker
 * - Message textarea
 *
 * Responsive design ensures form is usable on all devices.
 *
 * @component
 */
const Booking = () => {
  return (
    <section className="section booking-page">
      <div className="shell">
        {/* Page Header */}
        <div className="section__heading text-center">
          <span className="section__eyebrow">Reserve Your Date</span>
          <h1 className="section__title">Book Your Session</h1>
          <p className="section__description mx-auto">
            Choose your preferred date, time, and service. We'll confirm your
            booking as soon as possible and send you all the details you need.
          </p>
        </div>

        {/* Booking Form Component */}
        <div className="booking-page__form">
          <BookingForm />
        </div>

        {/* Additional Information */}
        <div className="booking-page__info text-center">
          <p className="text-muted">
            Have questions?{" "}
            <Link to="/contact" className="text-amber-400 hover:underline">
              Contact us
            </Link>{" "}
            for more information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;
