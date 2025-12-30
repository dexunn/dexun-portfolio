import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import LapCounter from "./components/LapCounter";

function App() {
  return (
    <>
      {/* Full-width Navbar */}
      <Navbar />
      <LapCounter />

      {/* Constrained content */}
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            padding: "0 2rem",
          }}
        >
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Projects />
        </div>
      </main>
    </>
  );
}

export default App;
