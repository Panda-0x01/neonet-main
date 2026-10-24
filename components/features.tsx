import { Terminal, Search, Shield, Zap, Globe, Code } from "lucide-react";

const features = [
  {
    name: "Lightning Fast Scanning",
    description: "Optimized multi-threaded scanning engine delivers results in seconds, not minutes.",
    icon: Zap,
  },
  {
    name: "Zero Dependencies",
    description: "Pure Python implementation with no external dependencies. Install once, run anywhere.",
    icon: Code,
  },
  {
    name: "Port & Service Detection",
    description: "Comprehensive port scanning with intelligent service detection and version fingerprinting.",
    icon: Search,
  },
  {
    name: "DNS & Subdomain Enumeration",
    description: "Discover subdomains, DNS records, and map your attack surface with ease.",
    icon: Globe,
  },
  {
    name: "SSL/TLS Inspection",
    description: "Analyze certificates, cipher suites, and security configurations in detail.",
    icon: Shield,
  },
  {
    name: "Intuitive CLI",
    description: "Clean, colorized output with simple commands designed for productivity.",
    icon: Terminal,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-white">Everything you need</h2>
          <p className="mt-2 text-3xl font-medium tracking-tight text-gradient sm:text-4xl">
            Powerful recon tools, minimal interface
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            All the network reconnaissance capabilities you need in one fast, reliable CLI tool.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
                    <feature.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
