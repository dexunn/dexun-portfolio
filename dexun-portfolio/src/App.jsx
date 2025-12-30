import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
          padding: "6rem 2rem",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Dexun Han
        </h1>
        <p style={{ color: "#9aa4af", fontSize: "1.2rem" }}>
          Data Scientist
        </p>
      </div>
    </main>
  );
}

export default App;

