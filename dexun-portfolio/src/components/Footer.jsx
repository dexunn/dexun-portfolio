function Footer() {
    return (
      <footer
        style={{
          marginTop: "6rem",
          padding: "3rem 0 2rem",
          textAlign: "center",
          opacity: 0.85,
        }}
      >
        {/* divider */}
        <div
          style={{
            height: "1px",
            maxWidth: "420px",
            margin: "0 auto 1.8rem",
            background:
              "linear-gradient(to right, transparent, #00d2be, transparent)",
          }}
        />
  
        {/* lap end */}
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "#9aa4af",
          }}
        >
          END OF RACE
        </div>
  
        {/* icons */}
        <div
          style={{
            marginTop: "1.2rem",
            display: "flex",
            gap: "1.4rem",
            justifyContent: "center",
          }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/dexunn"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="footerIcon"
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.28 3.438 9.75 8.205 11.325.6.105.82-.255.82-.57 0-.285-.01-1.04-.015-2.04-3.338.72-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.235 1.84 1.235 1.07 1.835 2.807 1.305 3.495.995.11-.775.42-1.305.763-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.125-.3-.535-1.52.115-3.165 0 0 1.005-.32 3.3 1.23.96-.27 1.98-.405 3-.41 1.02.005 2.04.14 3 .41 2.28-1.55 3.285-1.23 3.285-1.23.655 1.645.245 2.865.12 3.165.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.825 1.11.825 2.235 0 1.61-.015 2.905-.015 3.3 0 .315.21.68.825.565C20.565 22.045 24 17.58 24 12.3 24 5.67 18.63 0.3 12 0.3Z"
              />
            </svg>
          </a>
  
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/dexunh/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="footerIcon"
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.85-3.037-1.85 0-2.133 1.445-2.133 2.94v5.666H9.356V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.067 2.067 0 110-4.133 2.067 2.067 0 010 4.133zM6.813 20.452H3.86V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z"
              />
            </svg>
          </a>
  
          {/* Email */}
          <a
            href="mailto:dexunhan11@gmail.com"
            aria-label="Email"
            className="footerIcon"
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
          </a>
        </div>
  
        {/* copyright */}
        <div style={{ marginTop: "1.2rem", fontSize: "0.85rem", color: "#9aa4af" }}>
          © {new Date().getFullYear()} Dexun Han
        </div>
  
        {/* hover styling */}
        <style>{`
          .footerIcon {
            color: #9aa4af;
            transition: color 160ms ease, transform 160ms ease;
          }
  
          .footerIcon:hover {
            color: #00d2be;
            transform: translateY(-2px);
          }
        `}</style>
      </footer>
    );
  }
  
  export default Footer;
  