import { Terminal, Search, Shield, Zap, Globe, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized scanning algorithms for quick results without compromising accuracy.",
  },
  {
    icon: Layers,
    title: "Zero Dependencies",
    description: "Pure Python implementation. No external dependencies required.",
  },
  {
    icon: Search,
    title: "Port Scanning",
    description: "Comprehensive port scanning with service detection and banner grabbing.",
  },
  {
    icon: Globe,
    title: "DNS & Subdomains",
    description: "DNS enumeration and subdomain discovery made effortless.",
  },
  {
    icon: Shield,
    title: "SSL Inspection",
    description: "Deep SSL/TLS certificate analysis and security assessment.",
  },
  {
    icon: Terminal,
    title: "Clean CLI",
    description: "Intuitive commands with clear, readable output for better productivity.",
  },
];

export function Features() {
  return (
    <section id="features" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need for network reconnaissance in one powerful CLI tool
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <feature.icon className="h-12 w-12" strokeWidth={1.5} />
              <div className="space-y-2">
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
