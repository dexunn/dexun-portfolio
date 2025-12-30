import useActiveSection from "../hooks/useActiveSection";

function LapCounter() {
  const { activeLap } = useActiveSection();

  return (
    <div
      style={{
        position: "fixed",
        top: "5.5rem",
        right: "1.25rem",
        fontFamily: "monospace",
        fontSize: "0.7rem",
        letterSpacing: "0.2em",
        color: "#00d2be",
        opacity: 0.65,
        zIndex: 40,
        pointerEvents: "none",
      }}
    >
      LAP {String(activeLap).padStart(2, "0")} / 04
    </div>
  );
}

export default LapCounter;
