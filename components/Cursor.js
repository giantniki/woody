"use client";

import { useEffect, useRef } from "react";

// Custom cursor (Cara de Vaca style): the real cursor is hidden and a Woody
// graphic trails the pointer. It swaps shape on click (→ klaveren suit) and
// grows on photo hover (→ beeldmerk ring). Default mark = the "Woo" lockup.
export default function Cursor({ variant }) {
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

    // Grow over photos; a lighter "link" state over other interactive elements.
    const PHOTO =
      "img, .photo, .hero__tile, .v2-ed__tile, .agenda__preview, [data-cursor='photo']";
    const onOver = (e) => {
      const t = e.target;
      const overPhoto = t.closest(PHOTO);
      const overLink = t.closest("a, button, [data-cursor]");
      el.classList.toggle("is-photo", Boolean(overPhoto));
      el.classList.toggle("is-hover", Boolean(overLink) && !overPhoto);
    };

    const tick = () => {
      // easing for a smooth trailing feel
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
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
    <div
      className={`woo-cursor${variant ? ` woo-cursor--${variant}` : ""}`}
      ref={ref}
      aria-hidden="true"
    >
      {/* eslint-disable @next/next/no-img-element */}
      <img className="woo-cursor__ic woo-cursor__ic--default" src="/gfx/woo.png" alt="" />
      <img
        className="woo-cursor__ic woo-cursor__ic--photo"
        src="/gfx/beeldmerk1-beige.svg"
        alt=""
      />
      <img
        className="woo-cursor__ic woo-cursor__ic--click"
        src="/gfx/klaveren-beige.png"
        alt=""
      />
      {/* eslint-enable @next/next/no-img-element */}
    </div>
  );
}
