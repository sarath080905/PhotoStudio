import testimonialsData from "../../MainSorce/JsonFiles/testimonials.json";

function TestimonialsSlider() {
  const { testimonials } = testimonialsData;

  return (
    <section className="section">
      <div className="shell">
        <div className="section__heading">
          <span className="section__eyebrow">Kind Words</span>
          <h2 className="section__title">Clients who trust the process</h2>
          <p className="section__description">
            Human-first direction, fast delivery, and galleries built to last.
            Here is what recent clients shared.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <article key={index} className="testimonial-card glass-card">
              <p className="testimonial-quote">“{item.quote}”</p>

              <div className="testimonial-meta">
                <span className="testimonial-name">{item.name}</span>
                <span className="testimonial-role">{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSlider;
