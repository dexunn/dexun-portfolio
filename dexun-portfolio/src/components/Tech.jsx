function Tech() {
    const techStack = [
      {
        category: "Languages",
        items: ["Python", "SQL", "JavaScript", "R"],
      },
      {
        category: "Data & Analytics",
        items: [
          "Pandas",
          "NumPy",
          "Excel (Power Query, VBA)",
          "Power BI",
          "Tableau",
          "Grafana",
        ],
      },
      {
        category: "Machine Learning",
        items: [
          "scikit-learn",
          "XGBoost",
          "PyTorch",
          "Hugging Face",
          "Logistic Regression",
          "Decision Trees",
          "Sentiment Analysis",
        ],
      },
      {
        category: "Backend & APIs",
        items: ["Flask", "FastAPI", "Streamlit", "REST APIs"],
      },
      {
        category: "Optimisation & Modelling",
        items: ["Google OR-Tools (CP-SAT)", "Optimisation Modelling"],
      },
      {
        category: "Cloud & Deployment",
        items: [
          "Google Cloud Platform (GCP)",
          "BigQuery",
          "Cloud Run",
          "Docker",
          "GitHub Actions (basic)",
        ],
      },
    ];
  
    return (
      <section
        id="tech"
        style={{
          position: "relative",
          padding: "6rem 0",
          borderTop: "1px solid #1f2933", // ✅ divider from Experience → Tech
        }}
      >
        <style>{`
          .techGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 2rem;
          }
  
          .techCard {
            padding: 1.6rem;
            border-radius: 16px;
            border: 1px solid #1f2933;
            background: rgba(255,255,255,0.02);
            transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
          }
  
          .techCard:hover {
            transform: translateY(-6px);
            border-color: rgba(0,210,190,0.35);
            box-shadow:
              0 14px 40px rgba(0,0,0,0.35),
              0 0 24px rgba(0,210,190,0.12);
          }
  
          .techHeader {
            font-size: 0.85rem;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            margin-bottom: 1.1rem;
            color: #9aa4af;
            font-family: monospace;
          }
  
          .pill {
            padding: 0.45rem 0.8rem;
            border-radius: 999px;
            font-size: 0.72rem;
            border: 1px solid #1f2933;
            color: #9aa4af;
            background: rgba(255,255,255,0.02);
            transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, color 160ms ease;
            cursor: default;
          }
  
          .pill:hover {
            color: #00d2be;
            border-color: rgba(0,210,190,0.45);
            box-shadow: 0 0 14px rgba(0,210,190,0.35);
            transform: translateY(-2px);
          }
  
          /* timing line (matches Projects) */
          .timingLine {
            height: 3px;
            width: 64px;
            background: linear-gradient(
              to right,
              #00d2be,
              rgba(0,210,190,0.15)
            );
            border-radius: 2px;
            margin-bottom: 3rem;
          }
  
          @media (prefers-reduced-motion: reduce) {
            .techCard,
            .pill {
              transition: none !important;
              transform: none !important;
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
          LAP 03 · BOX BOX → TOOLING CHECK
        </p>
  
        <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
          Tech Stack
        </h2>
  
        {/* timing line */}
        <div className="timingLine" />
  
        <div className="techGrid">
          {techStack.map((group, idx) => (
            <div className="techCard" key={idx}>
              <div className="techHeader">{group.category}</div>
  
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                {group.items.map((item, i) => (
                  <span className="pill" key={i}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Tech;
  