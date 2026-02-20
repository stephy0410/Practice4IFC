import { useEffect, useState } from "react";

export function Welcome({ message: _ }: { message: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const skills = [
    { name: "Java", level: 85, desc: "Orientado a objetos, estructuras de datos" },
    { name: "Python", level: 78, desc: "Scripting, análisis de datos" },
    { name: "SQL", level: 80, desc: "Diseño de bases de datos relacionales" },
    { name: "React", level: 65, desc: "Interfaces modernas con TypeScript" },
    { name: "TypeScript", level: 60, desc: "Tipado estático en proyectos web" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Lato:wght@300;400;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .sb-root {
          --ink: #1a1917;
          --paper: #f9f8f5;
          --muted: #7c7870;
          --accent: #2a5c8f;
          --line: #e4e2dc;
          font-family: 'Lato', sans-serif;
          background: var(--paper);
          color: var(--ink);
          min-height: 100svh;
        }

        @keyframes sb-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sb-animate { opacity: 0; }
        .sb-in { animation: sb-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .sb-d1 { animation-delay: 0ms; }
        .sb-d2 { animation-delay: 100ms; }
        .sb-d3 { animation-delay: 200ms; }
        .sb-d4 { animation-delay: 300ms; }
        .sb-d5 { animation-delay: 400ms; }
        .sb-d6 { animation-delay: 500ms; }

        .sb-wrap {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .sb-header {
          padding: 36px 0 32px;
          border-bottom: 1px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sb-initials {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--accent);
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          letter-spacing: 0.04em;
        }

        .sb-nav-link {
          font-size: 13px;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.15s;
        }
        .sb-nav-link:hover { color: var(--accent); }

        .sb-hero {
          padding: 80px 0 72px;
          border-bottom: 1px solid var(--line);
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 48px;
          align-items: end;
        }

        .sb-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 24px;
        }

        .sb-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(44px, 5.5vw, 68px);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 28px;
        }

        .sb-bio {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--muted);
          max-width: 460px;
        }

        .sb-bio strong {
          color: var(--ink);
          font-weight: 400;
        }

        .sb-card {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sb-card-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sb-card-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .sb-card-value {
          font-size: 14px;
          color: var(--ink);
        }

        .sb-divider {
          height: 1px;
          background: var(--line);
        }

        .sb-linkedin {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--accent);
          text-decoration: none;
          padding: 6px 0;
          transition: opacity 0.15s;
        }
        .sb-linkedin:hover { opacity: 0.7; }

        .sb-linkedin-icon {
          width: 18px;
          height: 18px;
          background: var(--accent);
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sb-section {
          padding: 64px 0;
          border-bottom: 1px solid var(--line);
        }

        .sb-section-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 500;
          margin-bottom: 8px;
          color: var(--ink);
        }

        .sb-section-sub {
          font-size: 14px;
          font-weight: 300;
          color: var(--muted);
          margin-bottom: 44px;
        }

        .sb-skills {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .sb-skill {
          display: grid;
          grid-template-columns: 130px 1fr auto;
          align-items: center;
          gap: 24px;
        }

        .sb-skill-name {
          font-size: 14px;
          font-weight: 700;
          color: var(--ink);
        }

        .sb-skill-track {
          height: 3px;
          background: var(--line);
          border-radius: 2px;
          overflow: hidden;
        }

        .sb-skill-fill {
          height: 100%;
          background: var(--accent);
          border-radius: 2px;
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sb-skill-fill.sb-bar-in {
          transform: scaleX(1);
        }

        .sb-skill-desc {
          font-size: 12px;
          font-weight: 300;
          color: var(--muted);
          white-space: nowrap;
        }

        .sb-footer {
          padding: 28px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sb-footer-text {
          font-size: 12px;
          color: var(--muted);
          font-weight: 300;
          letter-spacing: 0.04em;
        }

        .sb-footer-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.4;
        }

        @media (max-width: 720px) {
          .sb-wrap { padding: 0 24px; }
          .sb-hero {
            grid-template-columns: 1fr;
            padding: 56px 0 48px;
            gap: 36px;
          }
          .sb-skill {
            grid-template-columns: 110px 1fr;
          }
          .sb-skill-desc { display: none; }
        }
      `}</style>

      <div className="sb-root">
        <div className="sb-wrap">

          {/* Header */}
          <header className={`sb-header sb-animate sb-d1 ${visible ? "sb-in" : ""}`}>
            <div className="sb-initials">SB</div>
            <a
              href="https://www.linkedin.com/in/stephanie-borrego-arroyo/"
              target="_blank"
              rel="noreferrer"
              className="sb-nav-link"
            >
              LinkedIn ↗
            </a>
          </header>

          {/* Hero */}
          <section className="sb-hero">
            <div>
              <span className={`sb-tag sb-animate sb-d2 ${visible ? "sb-in" : ""}`}>
                Ingeniería en Sistemas Computacionales
              </span>
              <h1 className={`sb-name sb-animate sb-d3 ${visible ? "sb-in" : ""}`}>
                Stephanie<br />Borrego.
              </h1>
              <p className={`sb-bio sb-animate sb-d4 ${visible ? "sb-in" : ""}`}>
                Estudiante en <strong>ITESO, Guadalajara</strong> — construyendo
                sistemas con precisión y criterio. Apasionada por entender
                cómo funcionan las cosas desde adentro, desde la lógica
                hasta la interfaz.
              </p>
            </div>

            <div className={`sb-card sb-animate sb-d4 ${visible ? "sb-in" : ""}`}>
              <div className="sb-card-row">
                <span className="sb-card-label">Universidad</span>
                <span className="sb-card-value">ITESO</span>
              </div>
              <div className="sb-divider" />
              <div className="sb-card-row">
                <span className="sb-card-label">Carrera</span>
                <span className="sb-card-value">Ing. en Sistemas Computacionales</span>
              </div>
              <div className="sb-divider" />
              <div className="sb-card-row">
                <span className="sb-card-label">Ubicación</span>
                <span className="sb-card-value">Guadalajara, México</span>
              </div>
              <div className="sb-divider" />
              <a
                href="https://www.linkedin.com/in/stephanie-borrego-arroyo/"
                target="_blank"
                rel="noreferrer"
                className="sb-linkedin"
              >
                <span className="sb-linkedin-icon">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2" fill="white"/>
                  </svg>
                </span>
                stephanie-borrego-arroyo
              </a>
            </div>
          </section>

          {/* Skills */}
          <section className={`sb-section sb-animate sb-d5 ${visible ? "sb-in" : ""}`}>
            <h2 className="sb-section-title">Habilidades técnicas</h2>
            <p className="sb-section-sub">Lenguajes y tecnologías que manejo en mis proyectos</p>
            <div className="sb-skills">
              {skills.map(({ name, level, desc }) => (
                <SkillBar key={name} name={name} level={level} desc={desc} visible={visible} />
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className={`sb-footer sb-animate sb-d6 ${visible ? "sb-in" : ""}`}>
            <span className="sb-footer-text">Stephanie Borrego · 2025</span>
            <span className="sb-footer-dot" />
            <span className="sb-footer-text">ITESO · Guadalajara</span>
          </footer>

        </div>
      </div>
    </>
  );
}

function SkillBar({
  name,
  level,
  desc,
  visible,
}: {
  name: string;
  level: number;
  desc: string;
  visible: boolean;
}) {
  const [barIn, setBarIn] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setBarIn(true), 600);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="sb-skill">
      <span className="sb-skill-name">{name}</span>
      <div className="sb-skill-track">
        <div
          className={`sb-skill-fill ${barIn ? "sb-bar-in" : ""}`}
          style={{ width: `${level}%` }}
        />
      </div>
      <span className="sb-skill-desc">{desc}</span>
    </div>
  );
}