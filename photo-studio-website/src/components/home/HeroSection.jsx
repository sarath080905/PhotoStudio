function HeroSection() {
  return (
    <section className="hero">
      <div className="shell hero__grid">
        <div className="hero__copy">
          <div className="pill">Award-winning studio • Since 2012</div>
          <h1>
            Cinematic photography for people who love honest, luminous stories.
          </h1>
          <p>
            We blend editorial direction with documentary intuition to deliver
            galleries full of feeling. From portraits to brand launches, every
            frame is crafted with intention.
          </p>
          <div className="hero__actions">
            <button className="btn btn-primary">Book a Session</button>
            <button className="btn btn-secondary">View Portfolio</button>
          </div>
          <div className="hero__stats">
            <div className="stat">
              <div className="stat__value">1.2K+</div>
              <div className="stat__label">Sessions captured</div>
            </div>
            <div className="stat">
              <div className="stat__value">4.9★</div>
              <div className="stat__label">Client satisfaction</div>
            </div>
            <div className="stat">
              <div className="stat__value">24hr</div>
              <div className="stat__label">Preview delivery</div>
            </div>
          </div>
        </div>
        <div className="hero__panel">
          <div className="glass-card hero__panel-inner">
            <div className="panel__eyebrow">Studio Moodboard</div>
            <div className="panel__grid">
              <div className="panel__tile panel__tile--warm">Golden hour</div>
              <div className="panel__tile panel__tile--cool">Midnight blue</div>
              <div className="panel__tile panel__tile--mono">Soft mono</div>
              <div className="panel__tile panel__tile--accent">Amber glow</div>
            </div>
            <p className="panel__note">
              Lighting-first approach with seamless direction and retouching for
              editorial-ready delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
