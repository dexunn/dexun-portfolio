function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid #1f2933",
      }}
    >
      {/* component-scoped styles */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }

        .liveDot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00d2be;
          box-shadow: 0 0 8px rgba(0,210,190,0.9);
          animation: pulse 1.4s ease-in-out infinite;
          flex-shrink: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .liveDot {
            animation: none;
          }
        }
      `}</style>

      {/* LAP subtitle */}
      <p
        style={{
          color: "#00d2be",
          letterSpacing: "0.14em",
          fontSize: "0.75rem",
          fontFamily: "monospace",
          marginBottom: "0.4rem",
        }}
      >
        LAP 01 · FORMATION
      </p>

      {/* Section title */}
      <h2 style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>
        About
      </h2>

      {/* Timing line */}
      <div
        style={{
          height: "2px",
          width: "64px",
          background: "linear-gradient(to right, #00d2be, transparent)",
          borderRadius: "2px",
          marginBottom: "2.8rem",
        }}
      />

      {/* Race Radio Panel */}
      <div
        style={{
          position: "relative",
          maxWidth: "760px",
          padding: "2.2rem 2.4rem 2.2rem 3rem",
          borderRadius: "16px",
          border: "1.5px solid #1f2933",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        {/* Radio channel bar */}
        <span
          style={{
            position: "absolute",
            left: "1.2rem",
            top: "1.4rem",
            bottom: "1.4rem",
            width: "3px",
            background: "linear-gradient(to bottom, #00d2be, transparent)",
            borderRadius: "2px",
          }}
        />

        {/* Radio metadata */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1.3rem",
            fontFamily: "monospace",
            fontSize: "0.8rem",
            letterSpacing: "0.08em",
            color: "#9aa4af",
          }}
        >
          <span className="liveDot" />
          <span style={{ color: "#00d2be" }}>LIVE</span>
          <span>ENGINEER → DRIVER</span>
          <span>|</span>
          <span>RADIO CHECK</span>
        </div>

        {/* Transmission text */}
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.7,
            marginBottom: "1.2rem",
            color: "#e5e7eb",
          }}
        >
          Data Science & Analytics undergraduate at NUS.
          Hands-on experience building production-grade data pipelines,
          dashboards, and machine learning systems.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: "#cfd6dd",
          }}
        >
          Focused on reliability, clarity, and engineering data systems people can trust.
        </p>
      </div>
    </section>
  );
}

export default About;
