// Renders a designed Woody "woord" (word) PNG as an image heading.
// name = file stem (e.g. "zelftappen"), color = "beige" | "rood".
export default function Woord({ name, color = "beige", alt = "", className = "" }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`woord ${className}`.trim()}
      src={`/gfx/word-${name}-${color}.png`}
      alt={alt}
      draggable={false}
    />
  );
}
