// Placeholder for gallery filtering and lightbox helpers

export function filterImagesByCategory(images, category) {
  if (!category || category === "all") return images;
  return images.filter((img) => img.category === category);
}
