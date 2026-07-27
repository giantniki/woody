"use client";

import { useEffect, useState } from "react";
import { rotatingIcons } from "@/components/icons";

// Cycles through the icon set every 500ms — the changing icon in the hero lockup.
export default function RotatingIcon({ className }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((prev) => (prev + 1) % rotatingIcons.length);
    }, 500);
    return () => clearInterval(id);
  }, []);

  const Icon = rotatingIcons[i];
  return <Icon className={className} />;
}
