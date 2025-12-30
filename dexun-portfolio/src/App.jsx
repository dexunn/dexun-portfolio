import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
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
      </div>
    </main>
  );
}

export default App;


