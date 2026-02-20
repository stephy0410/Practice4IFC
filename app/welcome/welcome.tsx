import { useEffect, useState } from "react";

// Importa estas fuentes en root.tsx:
// https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400&display=swap

export function Welcome({ message }: { message: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400&display=swap');

        .wl-root {
          --ink: #111110;
          --paper: #f8f7f4;
          --muted: #888582;
          --accent: #c85a2a;
          --line: #e2e0db;
          font-family: 'DM Mono', monospace;
          background: var(--paper);
          color: var(--ink);
          min-height: 100svh;
          margin: 0;
        }

        /* Fade-up keyframe */
        @keyframes wl-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .wl-animate {
          opacity: 0;
        }
        .wl-animate.wl-in {
          animation: wl-up 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .wl-d1 { animation-delay: 0ms; }
        .wl-d2 { animation-delay: 90ms; }
        .wl-d3 { animation-delay: 180ms; }
        .wl-d4 { animation-delay: 270ms; }
        .wl-d5 { animation-delay: 360ms; }

        .wl-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          min-height: 100svh;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 48px;
        }

        /* Top bar */
        .wl-topbar {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 0;
          border-bottom: 1px solid var(--line);
          margin-bottom: 0;
        }

        .wl-wordmark {
          font-family: 'DM Mono', monospace;
          font-weight: 300;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink);
          text-decoration: none;
        }

        .wl-badge {
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .wl-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          animation: wl-pulse 2.4s ease-in-out infinite;
        }

        @keyframes wl-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Hero — left column */
        .wl-hero {
          grid-column: 1;
          padding: 80px 60px 80px 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-right: 1px solid var(--line);
        }

        .wl-eyebrow {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 20px;
          font-weight: 400;
        }

        .wl-heading {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(52px, 6vw, 80px);
          line-height: 1.05;
          font-weight: 400;
          margin: 0 0 32px;
          color: var(--ink);
          letter-spacing: -0.02em;
        }

        .wl-heading em {
          font-style: italic;
          color: var(--accent);
        }

        .wl-body {
          font-size: 14px;
          line-height: 1.75;
          color: var(--muted);
          max-width: 360px;
          font-weight: 300;
        }

        /* Sidebar — right column */
        .wl-sidebar {
          grid-column: 2;
          padding: 80px 0 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }

        /* Stack list */
        .wl-stack-label {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 16px;
        }

        .wl-stack-list {
          list-style: none;
          margin: 0 0 56px;
          padding: 0;
        }

        .wl-stack-item {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid var(--line);
          font-size: 13px;
        }

        .wl-stack-item:first-child {
          border-top: 1px solid var(--line);
        }

        .wl-stack-name {
          color: var(--ink);
          font-weight: 400;
        }

        .wl-stack-ver {
          color: var(--muted);
          font-weight: 300;
          font-size: 12px;
        }

        /* Env pill */
        .wl-env {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--ink);
          color: var(--paper);
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 0.04em;
          padding: 10px 16px;
          border-radius: 4px;
          margin-bottom: 56px;
          width: fit-content;
        }

        .wl-env-key {
          color: #888;
        }

        /* Links */
        .wl-links {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .wl-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 0;
          border-bottom: 1px solid var(--line);
          text-decoration: none;
          color: var(--ink);
          font-size: 13px;
          transition: color 0.15s;
        }

        .wl-link:first-child {
          border-top: 1px solid var(--line);
        }

        .wl-link:hover {
          color: var(--accent);
        }

        .wl-link:hover .wl-arrow {
          transform: translate(3px, -3px);
        }

        .wl-arrow {
          display: inline-block;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          font-size: 14px;
          color: var(--muted);
        }

        .wl-link:hover .wl-arrow {
          color: var(--accent);
        }

        /* Bottom bar */
        .wl-footer {
          grid-column: 1 / -1;
          padding: 20px 0;
          border-top: 1px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .wl-footer-text {
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.06em;
        }

        /* Responsive */
        @media (max-width: 700px) {
          .wl-layout {
            grid-template-columns: 1fr;
            padding: 0 24px;
          }
          .wl-hero {
            grid-column: 1;
            border-right: none;
            padding: 48px 0 40px;
            border-bottom: 1px solid var(--line);
          }
          .wl-sidebar {
            grid-column: 1;
            padding: 40px 0 48px;
          }
          .wl-topbar, .wl-footer {
            grid-column: 1;
          }
        }
      `}</style>

      <div className="wl-root">
        <div className="wl-layout">

          {/* Top bar */}
          <header className={`wl-topbar wl-animate wl-d1 ${visible ? "wl-in" : ""}`}>
            <span className="wl-wordmark">practice4</span>
            <span className="wl-badge">
              <span className="wl-dot" />
              Cloudflare Workers
            </span>
          </header>

          {/* Hero */}
          <section className="wl-hero">
            <p className={`wl-eyebrow wl-animate wl-d2 ${visible ? "wl-in" : ""}`}>
              Full-stack · Edge · TypeScript
            </p>
            <h1 className={`wl-heading wl-animate wl-d3 ${visible ? "wl-in" : ""}`}>
              Construido<br />para el <em>edge.</em>
            </h1>
            <p className={`wl-body wl-animate wl-d4 ${visible ? "wl-in" : ""}`}>
              Una aplicación React con server-side rendering desplegada
              en la red global de Cloudflare. Rápida por diseño,
              tipada por defecto.
            </p>
          </section>

          {/* Sidebar */}
          <aside className={`wl-sidebar wl-animate wl-d3 ${visible ? "wl-in" : ""}`}>
            <p className="wl-stack-label">Stack</p>
            <ul className="wl-stack-list">
              {[
                ["React Router", "v7"],
                ["React", "19"],
                ["TailwindCSS", "v4"],
                ["TypeScript", "5.x"],
                ["Vite", "7"],
              ].map(([name, ver]) => (
                <li key={name} className="wl-stack-item">
                  <span className="wl-stack-name">{name}</span>
                  <span className="wl-stack-ver">{ver}</span>
                </li>
              ))}
            </ul>

            {message && (
              <div className="wl-env">
                <span className="wl-env-key">env</span>
                <span>{message}</span>
              </div>
            )}

            <div className="wl-links">
              {[
                { label: "Documentación React Router", href: "https://reactrouter.com/docs" },
                { label: "Cloudflare Workers", href: "https://developers.cloudflare.com/workers/" },
                { label: "Discord de la comunidad", href: "https://rmx.as/discord" },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="wl-link"
                >
                  {label}
                  <span className="wl-arrow">↗</span>
                </a>
              ))}
            </div>
          </aside>

          {/* Footer */}
          <footer className={`wl-footer wl-animate wl-d5 ${visible ? "wl-in" : ""}`}>
            <span className="wl-footer-text">Modificado con IA · paso 10</span>
            <span className="wl-footer-text">ISC · 2025</span>
          </footer>

        </div>
      </div>
    </>
  );
}