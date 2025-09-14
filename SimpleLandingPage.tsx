import React from "react";

export default function SimpleLandingPage() {
  return (
    <div style={{ fontFamily: "Arial" }}>
      <header style={{
        background: "#2c3e50", color: "#fff", padding: "38px 50px"
      }}>
        <h1>Welcome to My Landing Page</h1>
        <p>Clean. Minimal. Responsive.</p>
      </header>
      <section style={{ padding: "34px 50px" }}>
        <h2>Features</h2>
        <ul>
          <li>Fast and responsive</li>
          <li>Modern design</li>
          <li>Easy to customize</li>
        </ul>
      </section>
      <section style={{ padding: "34px 50px" }}>
        <h2>Get Started</h2>
        <form style={{ maxWidth: 320 }}>
          <input placeholder="Your email" style={{ width: "100%", padding: 10, marginBottom: 10 }} />
          <button style={{
            width: "100%", background: "#3498db", color: "#fff", padding: 10, border: "none"
          }}>Subscribe</button>
        </form>
      </section>
      <footer style={{ background: "#222", color: "#fff", padding: 22, textAlign: "center" }}>
        &copy; 2025 My Landing Page
      </footer>
    </div>
  );
}