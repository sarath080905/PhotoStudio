import packageData from "../../MainSorce/JsonFiles/package.json";

function PricingPreview() {
  const packages = packageData.packages;

  return (
    <section className="section">
      <div className="shell">
        <div className="section__heading">
          <span className="section__eyebrow">Packages</span>
          <h2 className="section__title">
            Thoughtful coverage for every story
          </h2>
          <p className="section__description">
            Transparent, flexible collections with direction, lighting, and
            expert retouching included.
          </p>
        </div>

        <div className="pricing-grid">
          {packages.map((pack, index) => (
            <article key={index} className="pricing-card glass-card">
              {pack.badge && (
                <span className="pricing-card__badge">{pack.badge}</span>
              )}

              <h3 className="pricing-card__title">{pack.title}</h3>
              <div className="pricing-card__price">{pack.price}</div>
              <p className="pricing-card__detail">{pack.detail}</p>

              <button className="btn btn-secondary">View details</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPreview;
