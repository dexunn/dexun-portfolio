import { useEffect, useState } from "react";

function Navbar() {
  const items = [
    { label: "ABOUT", id: "about", lap: "01" },
    { label: "EXPERIENCE", id: "experience", lap: "02" },
    { label: "TECH", id: "tech", lap: "03" },
    { label: "PROJECTS", id: "projects", lap: "04" },
  ];

  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        threshold: 0.01,
        rootMargin: "-35% 0px -60% 0px",
      }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: `
          linear-gradient(
            180deg,
            rgba(18,22,27,0.95) 0%,
            rgba(18,22,27,0.85) 55%,
            rgba(18,22,27,0.55) 85%,
            rgba(18,22,27,0.0) 100%
          )
        `,
        backdropFilter: "blur(8px)",
      }}
    >
      <style>{`
        .navLink {
          position: relative;
          color: #9aa4af;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          text-decoration: none;
          padding-bottom: 6px;
          font-family: monospace;
          opacity: 0.6;
          transition: opacity 160ms ease, color 160ms ease;
        }

        .navLink:hover {
          color: #e5e7eb;
          opacity: 1;
        }

        .navLink::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          height: 2px;
          background: #00d2be;
          transition: width 200ms ease;
        }

        .navLink.active {
          color: #e5e7eb;
          opacity: 1;
        }

        .navLink.active::after {
          width: 100%;
        }

        .navFade {
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(0,210,190,0.35),
            transparent
          );
        }
      `}</style>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "1rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.9rem",
            letterSpacing: "0.06em",
            color: "#e5e7eb",
            fontWeight: 500,
          }}
        >
          DEXUN<span style={{ color: "#00d2be" }}>.HAN</span>
        </div>

        <div style={{ display: "flex", gap: "1.75rem" }}>
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navLink ${active === item.id ? "active" : ""}`}
            >
              <span style={{ color: "#6b7280", marginRight: "0.35rem" }}>
                {item.lap}
              </span>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="navFade" />
    </nav>
  );
}

export default Navbar;
