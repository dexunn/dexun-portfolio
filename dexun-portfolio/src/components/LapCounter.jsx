import { useEffect, useState } from "react";

const laps = [
  { id: "about", lap: 1 },
  { id: "experience", lap: 2 },
  { id: "tech", lap: 3 },
  { id: "projects", lap: 4 },
];

function LapCounter() {
  const [currentLap, setCurrentLap] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      let closest = null;
      let closestDistance = Infinity;

      laps.forEach(({ id, lap }) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closest = lap;
        }
      });

      if (closest !== null) {
        setCurrentLap(closest);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // run once on mount
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "5.5rem",
        right: "1.5rem",
        fontFamily: "monospace",
        fontSize: "0.7rem",
        letterSpacing: "0.2em",
        color: "#00d2be",
        opacity: 0.65,
        zIndex: 40,
        pointerEvents: "none",
      }}
    >
      LAP {String(currentLap).padStart(2, "0")} / 04
    </div>
  );
}

export default LapCounter;
