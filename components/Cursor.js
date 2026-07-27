"use client";

import { useEffect, useRef } from "react";

// Custom cursor: the word "Woo" follows the pointer (Cara de Vaca hides the real
// cursor and trails a small graphic — here the graphic is the word).
export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip on touch / coarse pointers.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.body.classList.add("has-woo-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      el.style.opacity = "1";
    };
    const onLeave = () => (el.style.opacity = "0");
    const onDown = () => el.classList.add("is-down");
    const onUp = () => el.classList.remove("is-down");

    // Grow when hovering interactive elements.
    const onOver = (e) => {
      const interactive = e.target.closest("a, button, [data-cursor]");
      el.classList.toggle("is-hover", Boolean(interactive));
    };

    const tick = () => {
      // easing for a smooth trailing feel
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("has-woo-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="woo-cursor" ref={ref} aria-hidden="true">
      Woo
    </div>
  );
}
