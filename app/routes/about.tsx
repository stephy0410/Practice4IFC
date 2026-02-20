import type { Route } from "./+types/about";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sobre el proyecto · practice4" },
    { name: "description", content: "Información sobre este proyecto React Router + Cloudflare Workers" },
  ];
}

export default function About() {
  const stack = [
    { name: "React Router v7", desc: "Framework full-stack con SSR", color: "text-sky-400", border: "border-sky-500/30 bg-sky-500/5" },
    { name: "Cloudflare Workers", desc: "Edge runtime sin servidor", color: "text-orange-400", border: "border-orange-500/30 bg-orange-500/5" },
    { name: "TypeScript", desc: "Tipado estático end-to-end", color: "text-blue-400", border: "border-blue-500/30 bg-blue-500/5" },
    { name: "TailwindCSS v4", desc: "Estilos utility-first", color: "text-teal-400", border: "border-teal-500/30 bg-teal-500/5" },
    { name: "Vite 7", desc: "Build tool ultrarrápido", color: "text-yellow-400", border: "border-yellow-500/30 bg-yellow-500/5" },
    { name: "Wrangler", desc: "CLI de despliegue Cloudflare", color: "text-violet-400", border: "border-violet-500/30 bg-violet-500/5" },
  ];

  const steps = [
    "Crear repo en GitHub",
    "Clonar el repositorio",
    "Crear proyecto con Cloudflare CLI",
    "Crear cuenta en Cloudflare",
    "Ir a Workers & Pages",
    "Nueva aplicación",
    "Vincular con GitHub",
    "Desplegar la aplicación",
    "Revisar logs y visitar la app",
    "Modificar con IA y hacer push",
    "Verificar los cambios",
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-[#e2e8f0] font-mono relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-violet-400 transition-colors mb-12"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </Link>

        <h1
          className="text-4xl md:text-5xl font-bold mb-3"
          style={{
            fontFamily: "'Courier New', monospace",
            background: "linear-gradient(135deg, #c4b5fd 0%, #7c3aed 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Sobre el proyecto
        </h1>
        <p className="text-slate-500 text-sm mb-14 tracking-wide">
          practice4 · Paso 10 completado con IA
        </p>

        {/* Stack section */}
        <section className="mb-14">
          <h2 className="text-xs text-violet-400 uppercase tracking-widest mb-6">// Stack tecnológico</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {stack.map((item) => (
              <div
                key={item.name}
                className={`rounded-lg border ${item.border} p-4 flex items-start gap-3 hover:scale-[1.01] transition-transform`}
              >
                <span className={`text-lg ${item.color} select-none`}>▸</span>
                <div>
                  <p className={`font-semibold text-sm ${item.color}`}>{item.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Steps section */}
        <section>
          <h2 className="text-xs text-violet-400 uppercase tracking-widest mb-6">// Pasos del ejercicio</h2>
          <div className="space-y-2">
            {steps.map((step, i) => {
              const isDone = i < 10; // steps 1-10 done
              const isCurrent = i === 9; // step 10 is current
              return (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                    isCurrent
                      ? "border-violet-500/50 bg-violet-500/10 text-violet-200"
                      : isDone
                      ? "border-slate-700/30 bg-slate-800/20 text-slate-500"
                      : "border-slate-800/50 text-slate-600"
                  }`}
                >
                  <span
                    className={`text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold ${
                      isCurrent
                        ? "bg-violet-500 text-white"
                        : isDone
                        ? "bg-slate-700 text-slate-400"
                        : "bg-slate-800 text-slate-600"
                    }`}
                  >
                    {isDone && !isCurrent ? "✓" : i + 1}
                  </span>
                  <span className="text-sm">{step}</span>
                  {isCurrent && (
                    <span className="ml-auto text-xs text-violet-400 border border-violet-500/40 rounded-full px-2 py-0.5">
                      actual
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-600 tracking-widest uppercase">
          Ingeniería en Sistemas Computacionales · 2025
        </footer>
      </div>
    </main>
  );
}