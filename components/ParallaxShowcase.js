"use client";

import { useEffect, useRef } from "react";
import { showcase } from "@/lib/content";
import DancingText from "@/components/DancingText";

export default function ParallaxShowcase({ dancing = false }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const layers = Array.from(root.querySelectorAll("[data-speed]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = null;

    const update = () => {
      raf = null;
      const vh = window.innerHeight;
      for (const layer of layers) {
        const triplet = layer.closest(".triplet");
        const rect = triplet.getBoundingClientRect();
        // Distance of the triplet's centre from the viewport centre (px).
        const delta = vh / 2 - (rect.top + rect.height / 2);
        const speed = parseFloat(layer.dataset.speed);
        layer.style.transform = `translate3d(0, ${(delta * speed).toFixed(1)}px, 0)`;
      }
    };

    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="showcase" ref={rootRef} aria-label="Ontdek onze formule">
      {showcase.map((item, i) => (
        <article
          key={item.id}
          className={`triplet ${i % 2 === 0 ? "triplet--right" : "triplet--left"}`}
        >
          {/* back photo — moves slowest */}
          <div className="layer layer--back" data-speed="0.10">
            <div
              className="photo"
              style={{ backgroundImage: `url(${item.back})` }}
            />
          </div>

          {/* front photo — moves opposite / faster */}
          <div className="layer layer--front" data-speed="-0.16">
            <div
              className="photo"
              style={{ backgroundImage: `url(${item.front})` }}
            />
          </div>

          {/* foreground lockup — transparent, pops the most */}
          <div className="layer layer--lockup" data-speed="0.26">
            <h2 className="lockup-text">
              {dancing ? (
                <DancingText text={item.lockup} intensity={1.7} />
              ) : (
                item.lockup
                  .split("\n")
                  .map((line, li) => <span key={li}>{line}</span>)
              )}
            </h2>
          </div>

          <div className="triplet__caption" data-speed="0.06">
            {item.caption.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
