function About() {
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
          LAP 01
        </p>
  
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "2rem",
          }}
        >
          About
        </h2>
  
        <p
          style={{
            maxWidth: "720px",
            lineHeight: 1.7,
            color: "#cfd6dd",
            marginBottom: "1.5rem",
          }}
        >
          I’m a Data Science & Analytics undergraduate at NUS with hands-on
          experience building production-grade data pipelines, dashboards,
          and machine learning systems.
        </p>
  
        <p
          style={{
            maxWidth: "720px",
            lineHeight: 1.7,
            color: "#cfd6dd",
          }}
        >
          I care deeply about reliability, clarity, and engineering data
          systems that people can trust.
        </p>
      </section>
    );
  }
  
  export default About;
  