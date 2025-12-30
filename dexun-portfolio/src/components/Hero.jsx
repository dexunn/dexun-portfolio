import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/profile.png";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      {/* Left: Text */}
      <div className="heroText">
        {/* F1 vertical telemetry bar */}
        <div className="telemetryBar" />

        <h1 className="heroTitle">Dexun Han</h1>

        <h2 className="heroSubtitle">Aspiring Data Scientist</h2>

        {/* Icons */}
        <div className="heroIcons">
          <a href="https://github.com/dexunn" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dexunh/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:dexun@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="heroAvatar">
        <div className="avatarRing">
          <img src={profileImg} alt="Dexun Han" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
