const shots = [
  { title: "Editorial Portrait", tag: "Portrait" },
  { title: "Sunset Vows", tag: "Wedding" },
  { title: "Brand Still Life", tag: "Commercial" },
  { title: "City Night Walk", tag: "Street" },
  { title: "Studio Light Study", tag: "Portrait" },
  { title: "Seaside Ceremony", tag: "Wedding" },
];

function GalleryGrid() {
  return (
    <div className="gallery-grid">
      {shots.map((shot) => (
        <article key={shot.title} className="gallery-card glass-card">
          <div className="gallery-card__thumb">
            <span className="gallery-card__tag">{shot.tag}</span>
          </div>
          <div className="gallery-card__title">{shot.title}</div>
        </article>
      ))}
    </div>
  );
}

export default GalleryGrid;
