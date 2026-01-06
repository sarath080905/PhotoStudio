import React, { useState } from "react";

/**
 * Contact Form Component
 *
 * Handles general contact inquiries with:
 * - Name input (required)
 * - Email input (required, validated)
 * - Phone number input (optional)
 * - Message textarea (required)
 *
 * Features:
 * - Email validation
 * - Form validation
 * - Accessible form labels
 * - Responsive design
 * - Error handling
 *
 * @component
 */
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
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

      // Success - Show success message
      alert("Message sent successfully! We'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="form contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
      {/* Name Input */}
      <div className="form__group">
        <label htmlFor="contactName" className="form__label">
          Full Name{" "}
          <span className="form__required" aria-label="required">
            *
          </span>
        </label>
        <input
          id="contactName"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={`form__input ${errors.name ? "form__input--error" : ""}`}
          aria-required="true"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "contactName-error" : undefined}
        />
        {errors.name && (
          <span id="contactName-error" className="form__error" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      {/* Email Input */}
      <div className="form__group">
        <label htmlFor="contactEmail" className="form__label">
          Email{" "}
          <span className="form__required" aria-label="required">
            *
          </span>
        </label>
        <input
          id="contactEmail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={`form__input ${errors.email ? "form__input--error" : ""}`}
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "contactEmail-error" : undefined}
        />
        {errors.email && (
          <span id="contactEmail-error" className="form__error" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      {/* Phone Input (Optional) */}
      <div className="form__group">
        <label htmlFor="contactPhone" className="form__label">
          Phone <span className="form__optional">(Optional)</span>
        </label>
        <input
          id="contactPhone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your phone number"
          className={`form__input ${errors.phone ? "form__input--error" : ""}`}
          aria-invalid={errors.phone ? "true" : "false"}
          aria-describedby={errors.phone ? "contactPhone-error" : undefined}
        />
        {errors.phone && (
          <span id="contactPhone-error" className="form__error" role="alert">
            {errors.phone}
          </span>
        )}
      </div>

      {/* Message Textarea */}
      <div className="form__group">
        <label htmlFor="contactMessage" className="form__label">
          Message{" "}
          <span className="form__required" aria-label="required">
            *
          </span>
        </label>
        <textarea
          id="contactMessage"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          rows="6"
          className={`form__textarea ${errors.message ? "form__input--error" : ""}`}
          aria-required="true"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "contactMessage-error" : undefined}
        />
        {errors.message && (
          <span id="contactMessage-error" className="form__error" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary form__submit"
        disabled={isSubmitting}
        aria-label="Send message"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;
