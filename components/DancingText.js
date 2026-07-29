// Splits text into per-letter spans with a jaunty, "dancing" baseline —
// each letter gets its own small rotation + vertical offset. Values are
// deterministic (seeded by letter index) so server and client render the
// same markup (no hydration mismatch). `\n` starts a new line.

function seeded(n) {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s); // 0..1, stable
}

export default function DancingText({ text, intensity = 1, className }) {
  const lines = String(text).split("\n");
  let idx = 0;

  return (
    <span className={className ? `dt ${className}` : "dt"}>
      {lines.map((line, li) => (
        <span className="dt-line" key={li}>
          {Array.from(line).map((ch, ci) => {
            if (ch === " ") {
              idx++;
              return (
                <span className="dt-space" key={ci}>
                  {" "}
                </span>
              );
            }
            const rot = (seeded(idx) * 2 - 1) * 9 * intensity;
            const ty = (seeded(idx + 97) * 2 - 1) * 7 * intensity;
            const tx = (seeded(idx + 211) * 2 - 1) * 1.5 * intensity;
            idx++;
            return (
              <span
                className="dt-char"
                key={ci}
                style={{
                  transform: `translate(${tx.toFixed(2)}px, ${ty.toFixed(
                    2
                  )}px) rotate(${rot.toFixed(2)}deg)`,
                }}
              >
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
