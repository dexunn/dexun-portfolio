import antalphaLogo from "../assets/antalpha.png";
import amdgLogo from "../assets/amdg.png";
import epsonLogo from "../assets/epson.png";
import nusBacLogo from "../assets/nus-bac.png";

function Experience() {
  const experiences = [
    {
      role: "Data Analyst Intern",
      company: "Antalpha",
      industry: "Fintech / Crypto",
      period: "Oct 2025 – Jan 2026",
      logo: antalphaLogo,
      bullets: [
        "Worked on internal quantitative analytics systems supporting portfolio monitoring and strategy evaluation.",
        "Interfaced directly with backtesting logic and rebalancing outputs to ensure interpretability.",
        "Maintained production data pipelines as new assets and assumptions were introduced.",
      ],
    },
    {
      role: "Data Analyst Assistant",
      company: "NUS Business Analytics Centre",
      industry: "Education",
      period: "Aug 2025 – Dec 2025",
      logo: nusBacLogo,
      bullets: [
        "Built adaptive Excel and Power Query pipelines for evolving reporting needs.",
        "Automated data transformations to reduce manual effort.",
        "Translated stakeholder requirements into usable analytical tools.",
      ],
    },
    {
      role: "Data Engineer Intern",
      company: "Advanced Medical & Dental Group",
      industry: "Healthcare",
      period: "May 2025 – Aug 2025",
      logo: amdgLogo,
      bullets: [
        "Designed operational dashboards used for day-to-day decision making.",
        "Built SQL and automation pipelines to standardise business data.",
        "Bridged technical systems and non-technical stakeholders.",
      ],
    },
    {
      role: "Data Analyst Intern",
      company: "Epson Singapore",
      industry: "Supply Chain",
      period: "Dec 2024 – May 2025",
      logo: epsonLogo,
      bullets: [
        "Supported supply chain and inventory analysis through structured reporting.",
        "Built Excel and Power BI workflows for operational monitoring.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      style={{
        position: "relative",
        padding: "6rem 0",
        borderTop: "1px solid #1f2933",
      }}
    >
      {/* styles unchanged */}
      <style>{`
        .timeline {
          position: relative;
          margin-top: 3rem;
          display: grid;
          gap: 2.5rem;
        }

        .raceLine {
          position: absolute;
          left: 34px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(
            to bottom,
            rgba(0,210,190,0.95),
            rgba(0,210,190,0.20)
          );
          filter: drop-shadow(0 0 10px rgba(0,210,190,0.35));
          z-index: 0;
        }

        .row {
          position: relative;
          padding-left: 92px;
          display: grid;
        }

        .dot {
          position: absolute;
          left: 34px;
          top: 28px;
          transform: translateX(-50%);
          width: 46px;
          height: 46px;
          border-radius: 999px;
          border: 2px solid #00d2be;
          overflow: hidden;
          background: #0b0f14;
          box-shadow: 0 0 18px rgba(0,210,190,0.55);
          z-index: 2;
          transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;
        }

        .dot::after {
          content: "";
          position: absolute;
          inset: -10px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(0,210,190,0.22), transparent 65%);
        }

        .dot img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card {
          padding: 1.75rem;
          border: 1px solid #1f2933;
          border-radius: 14px;
          background: rgba(255,255,255,0.02);
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .row:hover .card {
          transform: translateY(-4px);
          border-color: rgba(0,210,190,0.35);
          box-shadow:
            0 12px 36px rgba(0,0,0,0.42),
            0 0 24px rgba(0,210,190,0.12);
        }

        .row:hover .dot {
          transform: translateX(-50%) scale(1.07);
          box-shadow: 0 0 28px rgba(0,210,190,0.9);
        }

        .row.current .dot {
          box-shadow: 0 0 34px rgba(0,210,190,1);
        }

        @media (prefers-reduced-motion: reduce) {
          .card, .dot { transition: none !important; }
          .row:hover .card { transform: none !important; }
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
        LAP 02 · RACE STINTS
      </p>

      {/* Title */}
      <h2 style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>
        Experience
      </h2>

      {/* Timing line */}
      <div
        style={{
          height: "2px",
          width: "72px",
          background: "linear-gradient(to right, #00d2be, transparent)",
          borderRadius: "2px",
          marginBottom: "2.8rem",
        }}
      />

      <div className="timeline">
        <div className="raceLine" />

        {experiences.map((exp, idx) => (
          <div key={idx} className={`row ${idx === 0 ? "current" : ""}`}>
            <div className="dot">
              <img src={exp.logo} alt={exp.company} />
            </div>

            <div className="card">
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>
                {exp.role}
              </h3>

              <p style={{ color: "#9aa4af", fontSize: "0.95rem" }}>
                {exp.company} · {exp.industry}
              </p>

              <p
                style={{
                  color: "#6b7280",
                  fontSize: "0.85rem",
                  marginBottom: "1rem",
                }}
              >
                {exp.period}
              </p>

              <ul
                style={{
                  paddingLeft: "1.2rem",
                  lineHeight: 1.7,
                  color: "#cfd6dd",
                  margin: 0,
                }}
              >
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
