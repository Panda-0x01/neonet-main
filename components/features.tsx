import { Shield, Zap, Code, Terminal, Search, Lock } from "lucide-react";

const features = [
  {
    name: "Lightning fast",
    description: "Built for speed with optimized scanning algorithms and parallel execution.",
    icon: Zap,
  },
  {
    name: "Zero dependencies",
    description: "Pure Python with no external dependencies. Just install and run.",
    icon: Code,
  },
  {
    name: "Comprehensive scanning",
    description: "Port scanning, service detection, OS fingerprinting, and vulnerability checks.",
    icon: Search,
  },
  {
    name: "DNS & SSL inspection",
    description: "Deep DNS enumeration, subdomain discovery, and SSL certificate analysis.",
    icon: Shield,
  },
  {
    name: "CLI-first design",
    description: "Clean, intuitive commands designed for security professionals and developers.",
    icon: Terminal,
  },
  {
    name: "Cross-platform",
    description: "Works seamlessly on Linux, macOS, and Windows with consistent behavior.",
    icon: Lock,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Everything you need for recon
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Powerful network reconnaissance tools in a single, elegant CLI.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition-colors hover:border-white/20"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-medium">{feature.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
