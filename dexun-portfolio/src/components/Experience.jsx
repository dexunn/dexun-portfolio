function Experience() {
    const experiences = [
        {
          role: "Data Analyst Intern",
          company: "Antalpha",
          industry: "Fintech / Crypto",
          period: "Oct 2025 – Jan 2026",
          logo: "/antalpha.png",
          bullets: [
            "Worked on internal quantitative analytics systems supporting portfolio monitoring, strategy evaluation, and trading workflows.",
            "Interfaced directly with backtesting logic, strategy data, and rebalancing outputs to ensure results were interpretable and reliable.",
            "Maintained and iterated on production data pipelines as new assets, assumptions, and requirements were introduced.",
          ],
        },
        {
          role: "Data & Excel Support",
          company: "NUS Business Analytics Centre",
          industry: "Education",
          period: "Aug 2025 – Dec 2025",
          logo: "/nus-bac.png",
          bullets: [
            "Built and maintained adaptive Excel and Power Query pipelines to support evolving data and reporting requirements.",
            "Automated data transformations and reporting workflows to reduce manual effort and improve consistency.",
            "Worked closely with academic and administrative stakeholders to translate requirements into usable analytical tools.",
          ],
        },
        {
          role: "Data Engineer Intern",
          company: "Advanced Medical & Dental Group",
          industry: "Healthcare",
          period: "May 2025 – Aug 2025",
          logo: "/amdg.png",
          bullets: [
            "Designed operational dashboards used by internal teams to track performance and support day-to-day decision making.",
            "Worked across SQL, automation tools, and analytics platforms to clean, integrate, and standardise business data.",
            "Acted as a bridge between technical systems and non-technical stakeholders, translating ambiguous requirements into usable solutions.",
          ],
        },
        {
          role: "Data Analyst Intern",
          company: "Epson Singapore",
          industry: "Supply Chain",
          period: "Dec 2024 – May 2025",
          logo: "/epson.png",
          bullets: [
            "Supported supply chain and inventory analysis through structured reporting and data preparation.",
            "Built and maintained Excel and Power BI reporting workflows used for ongoing operational monitoring.",
          ],
        },
      ];      
      
    return (
      <section
        style={{
          padding: "6rem 0",
          borderTop: "1px solid #1f2933",
        }}
      >
        <p
          style={{
            color: "#00d2be",
            letterSpacing: "0.12em",
            marginBottom: "0.75rem",
            fontSize: "0.85rem",
          }}
        >
          LAP 02
        </p>
  
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "3rem",
          }}
        >
          Experience
        </h2>
  
        <div
          style={{
            display: "grid",
            gap: "2.5rem",
          }}
        >
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              style={{
                padding: "2rem",
                border: "1px solid #1f2933",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src={exp.logo}
                  alt={exp.company}
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                    opacity: 0.85,
                    filter: "saturate(80%)",        
                    transition: "all 0.2s ease",
                  }}
                />
  
                <div>
                  <h3 style={{ fontSize: "1.25rem" }}>{exp.role}</h3>
                  <p style={{ color: "#9aa4af", fontSize: "0.95rem" }}>
                    {exp.company} · {exp.industry}
                  </p>
                  <p style={{ color: "#6b7280", fontSize: "0.85rem" }}>
                    {exp.period}
                  </p>
                </div>
              </div>
  
              <ul
                style={{
                  paddingLeft: "1.2rem",
                  color: "#cfd6dd",
                  lineHeight: 1.7,
                }}
              >
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Experience;
  