import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Booking Form Component
 *
 * Handles session booking submissions with:
 * - Name input (required)
 * - Phone number input (required)
 * - Event date picker (required)
 * - Message textarea (optional)
 *
 * Features:
 * - Form validation
 * - Accessible form labels
 * - Responsive design
 * - Error handling
 *
 * @component
 */
function BookingForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.eventDate) {
      newErrors.eventDate = "Event date is required";
    } else {
      const selectedDate = new Date(formData.eventDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.eventDate = "Event date cannot be in the past";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success - Redirect or show success message
      alert("Booking request submitted successfully! We'll contact you soon.");
      navigate("/");
    } catch (error) {
      console.error("Booking submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="form booking-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Booking request form"
    >
      {/* Name Input */}
      <div className="form__group">
        <label htmlFor="name" className="form__label">
          Full Name{" "}
          <span className="form__required" aria-label="required">
            *
          </span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={`form__input ${errors.name ? "form__input--error" : ""}`}
          aria-required="true"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <span id="name-error" className="form__error" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      {/* Phone Input */}
      <div className="form__group">
        <label htmlFor="phone" className="form__label">
          Phone Number{" "}
          <span className="form__required" aria-label="required">
            *
          </span>
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your phone number"
          className={`form__input ${errors.phone ? "form__input--error" : ""}`}
          aria-required="true"
          aria-invalid={errors.phone ? "true" : "false"}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <span id="phone-error" className="form__error" role="alert">
            {errors.phone}
          </span>
        )}
      </div>

      {/* Event Date Input */}
      <div className="form__group">
        <label htmlFor="eventDate" className="form__label">
          Event Date{" "}
          <span className="form__required" aria-label="required">
            *
          </span>
        </label>
        <input
          id="eventDate"
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          min={new Date().toISOString().split("T")[0]}
          className={`form__input ${errors.eventDate ? "form__input--error" : ""}`}
          aria-required="true"
          aria-invalid={errors.eventDate ? "true" : "false"}
          aria-describedby={errors.eventDate ? "eventDate-error" : undefined}
        />
        {errors.eventDate && (
          <span id="eventDate-error" className="form__error" role="alert">
            {errors.eventDate}
          </span>
        )}
      </div>

      {/* Message Textarea */}
      <div className="form__group">
        <label htmlFor="message" className="form__label">
          Message <span className="form__optional">(Optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your event, special requirements, or any questions"
          rows="5"
          className="form__textarea"
          aria-describedby="message-help"
        />
        <span id="message-help" className="form__help">
          Share any details about your event or special requests
        </span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary form__submit"
        disabled={isSubmitting}
        aria-label="Submit booking request"
      >
        {isSubmitting ? "Submitting..." : "Submit Booking Request"}
      </button>
    </form>
  );
}

export default BookingForm;
