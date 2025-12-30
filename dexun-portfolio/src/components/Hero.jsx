import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/profile.png";

function Hero() {
  return (
    <section
      style={{
        padding: "8rem 0 6rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "4rem",
        position: "relative",
      }}
    >
      {/* Left: Text */}
      <div style={{ maxWidth: "600px", position: "relative" }}>
        {/* F1 vertical accent */}
        <div
          style={{
            position: "absolute",
            left: "-16px",
            top: "0.6rem",
            width: "4px",
            height: "70px",
            background: "#00d2be",
          }}
        />

        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
          Dexun Han
        </h1>

        <h2
          style={{
            color: "#9aa4af",
            fontWeight: 400,
            marginBottom: "1.5rem",
          }}
        >
          Aspiring Data Scientist
        </h2>

        {/* Icons */}
        <div style={{ display: "flex", gap: "1.25rem" }}>
          <a
            href="https://github.com/dexunn"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9aa4af", fontSize: "1.4rem" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00d2be")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9aa4af")}
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/dexun-han"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9aa4af", fontSize: "1.4rem" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00d2be")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9aa4af")}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Profile Image */}
        <div
        style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "linear-gradient(145deg, #00d2be, #008f84)",
            padding: "6px",
            boxShadow: "0 0 30px rgba(0,210,190,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
        }}
        >
        <div
            style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "#0b0f14",
            padding: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            }}
        >
            <img
            src={profileImg}
            alt="Dexun Han"
            style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                filter: "grayscale(30%) contrast(1.05)",
            }}
            />
        </div>
        </div>

    </section>
  );
}

export default Hero;
