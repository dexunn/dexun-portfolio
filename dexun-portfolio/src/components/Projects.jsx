function Projects() {
    const projects = [
      {
        title: "Volleyball Game Optimisation System",
        meta: "Group Project",
        type: "BACKEND · OPTIMISATION",
        sectors: [
          {
            label: "S1 · MODELLING",
            text: "Collaborated on designing and implementing a CP-SAT optimisation model using Google OR-Tools to balance playtime, skill distribution, and rest constraints.",
          },
          {
            label: "S2 · BACKEND",
            text: "Collaborated on backend architecture and helped expose optimisation logic via a Flask REST API.",
          },
          {
            label: "S3 · PIPELINE",
            text: "Worked with the team to build validated data pipelines and containerised services using Docker.",
          },
        ],
        outcome:
          "Significantly reduced infeasible schedules compared to heuristic approaches.",
        tech: [
          "Python",
          "Google OR-Tools",
          "Flask",
          "Docker",
          "Constraint Programming",
        ],
        github: "https://github.com/seanpohjj/dsa3101-2510-game-02",
      },
      {
        title: "ML Smart Portfolio Rebalancer",
        meta: "Group Project",
        type: "MACHINE LEARNING · FINANCE",
        sectors: [
          {
            label: "S1 · FORECASTING",
            text: "Collaborated on implementing an EGARCH + XGBoost hybrid model for volatility forecasting.",
          },
          {
            label: "S2 · SIMULATION",
            text: "Worked with the team to build Monte Carlo simulations evaluating asset allocations and rebalancing strategies.",
          },
          {
            label: "S3 · VISUALISATION",
            text: "Contributed to a Streamlit dashboard for interactive portfolio analysis and experimentation.",
          },
        ],
        outcome:
          "End-to-end ML pipeline from volatility forecasting to allocation decisions.",
        tech: [
          "Python",
          "XGBoost",
          "EGARCH",
          "Monte Carlo Simulation",
          "Streamlit",
        ],
        github: "https://github.com/dexunn/nusfintech-portfolio-optimiser",
      },
      {
        title: "Reddit Toxicity Monitoring Bot",
        meta: "Personal Project",
        type: "NLP · BACKEND API",
        sectors: [
          {
            label: "S1 · NLP",
            text: "Implemented a transformer-based toxicity classifier using Hugging Face and PyTorch.",
          },
          {
            label: "S2 · API",
            text: "Exposed model predictions via a FastAPI REST API and containerised the service.",
          },
          {
            label: "S3 · INGESTION",
            text: "Ingested live Reddit comments in real time using PRAW.",
          },
        ],
        outcome:
          "Enabled real-time detection of toxic content via a deployable NLP API.",
        tech: [
          "Python",
          "FastAPI",
          "Transformers",
          "PyTorch",
          "Docker",
        ],
        github: "https://github.com/dexunn/reddit-bot",
      },
    ];
  
    return (
      <section
        id="projects"
        style={{ padding: "6rem 0", borderTop: "1px solid #1f2933" }}
      >
        <style>{`
          .projectsGrid {
            display: grid;
            gap: 3.2rem;
          }
  
          .projectCard {
            padding: 2.4rem;
            border-radius: 16px;
            border: 1px solid #1f2933;
            background: rgba(255,255,255,0.02);
            transition: transform 200ms ease, box-shadow 200ms ease;
          }
  
          .projectCard:hover {
            transform: translateY(-4px);
            box-shadow: 0 18px 45px rgba(0,0,0,0.35);
          }
  
          .telemetry {
            font-family: monospace;
            font-size: 0.68rem;
            letter-spacing: 0.14em;
            color: #00d2be;
            margin-bottom: 0.8rem;
          }
  
          .sector {
            margin: 1.8rem 0;
          }
  
          .sectorLabel {
            font-family: monospace;
            font-size: 0.68rem;
            letter-spacing: 0.14em;
            color: #7b8794;
            margin-bottom: 0.5rem;
          }
  
          .sectorBar {
            height: 2px;
            width: 100%;
            background: linear-gradient(
              to right,
              #00d2be,
              rgba(0,210,190,0.25)
            );
            border-radius: 2px;
            margin-bottom: 0.8rem;
            opacity: 0.75;
          }
  
          .sectorText {
            color: #cfd6dd;
            line-height: 1.6;
            font-size: 0.95rem;
          }
  
          .techPill {
            padding: 0.4rem 0.75rem;
            border-radius: 999px;
            font-size: 0.72rem;
            border: 1px solid #1f2933;
            color: #9aa4af;
            background: rgba(255,255,255,0.02);
          }
  
          .outcome {
            margin-top: 2.8rem;
            padding-top: 1.4rem;
            border-top: 1px dashed rgba(255,255,255,0.1);
            color: #9ae6b4;
            font-size: 0.9rem;
          }
  
          .sourceLink {
            font-size: 0.85rem;
            color: #00d2be;
            text-decoration: none;
            letter-spacing: 0.08em;
          }
  
          .sourceLink:hover {
            text-decoration: underline;
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
          LAP 04 · DEVELOPMENT STINTS
        </p>
  
        {/* Title */}
        <h2 style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>
          Projects
        </h2>
  
        {/* Timing line */}
        <div
          style={{
            height: "2px",
            width: "72px",
            background: "linear-gradient(to right, #00d2be, transparent)",
            borderRadius: "2px",
            marginBottom: "3rem",
          }}
        />
  
        <div className="projectsGrid">
          {projects.map((p, i) => (
            <div className="projectCard" key={i}>
              <div className="telemetry">PROJECT · {p.type}</div>
  
              <h3 style={{ fontSize: "1.35rem" }}>{p.title}</h3>
              <p style={{ color: "#6b7280", fontSize: "0.8rem" }}>{p.meta}</p>
  
              {p.sectors.map((s, j) => (
                <div className="sector" key={j}>
                  <div className="sectorLabel">{s.label}</div>
                  <div className="sectorBar" />
                  <div className="sectorText">{s.text}</div>
                </div>
              ))}
  
              <div className="outcome">
                <strong>Δ Outcome:</strong> {p.outcome}
              </div>
  
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  margin: "1.4rem 0",
                }}
              >
                {p.tech.map((t, k) => (
                  <span className="techPill" key={k}>
                    {t}
                  </span>
                ))}
              </div>
  
              <a
                className="sourceLink"
                href={p.github}
                target="_blank"
                rel="noreferrer"
              >
                View source →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
  