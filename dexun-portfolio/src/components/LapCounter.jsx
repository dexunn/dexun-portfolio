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
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          const found = laps.find((l) => l.id === id);
          if (found) setCurrentLap(found.lap);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-25% 0px -25% 0px",
      }
    );

    laps.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    // ✅ fallback: bottom of page = lap 04
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (nearBottom) setCurrentLap(4);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const lapText = String(currentLap).padStart(2, "0");

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
      LAP {lapText} / 04
    </div>
  );
}

export default LapCounter;
