import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", lap: 1 },
  { id: "experience", lap: 2 },
  { id: "tech", lap: 3 },
  { id: "projects", lap: 4 },
];

export default function useActiveSection() {
  const [activeId, setActiveId] = useState("about");
  const [activeLap, setActiveLap] = useState(1);

  useEffect(() => {
    const updateActive = () => {
      const viewportCenter = window.innerHeight * 0.5;

      let closest = null;
      let minDistance = Infinity;

      SECTIONS.forEach(({ id, lap }) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closest = { id, lap };
        }
      });

      if (closest) {
        setActiveId(closest.id);
        setActiveLap(closest.lap);
      }

      // Bottom-of-page safety (mobile Safari fix)
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 6;

      if (nearBottom) {
        setActiveId("projects");
        setActiveLap(4);
      }
    };

    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    updateActive(); // run once

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return { activeId, activeLap };
}
