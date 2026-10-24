"use client";

const steps = [
  {
    id: 1,
    name: "Install",
    description: "Install neoNet with pip in seconds",
    command: "$ pip install neonet",
  },
  {
    id: 2,
    name: "Scan",
    description: "Run your first network scan",
    command: "$ neonet scan example.com",
  },
  {
    id: 3,
    name: "Analyze",
    description: "Get detailed results instantly",
    command: "$ neonet dns example.com",
  },
];

export function CliShowcase() {
  return (
    <section id="cli" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-white">Get started quickly</h2>
              <p className="mt-2 text-3xl font-medium tracking-tight text-gradient sm:text-4xl">
                Up and running in minutes
              </p>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Install with pip and start scanning immediately. No complex setup, no configuration files required.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-zinc-400 lg:max-w-none">
                {steps.map((step) => (
                  <div key={step.id} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <div className="absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/10 ring-1 ring-inset ring-white/20">
                        <span className="text-xs text-white">{step.id}</span>
                      </div>
                      {step.name}
                    </dt>{" "}
                    <dd className="inline">{step.description}</dd>
                    <div className="mt-3 overflow-hidden rounded-lg bg-black ring-1 ring-white/10">
                      <div className="px-4 py-3 font-mono text-sm">
                        <code className="text-zinc-300">{step.command}</code>
                      </div>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-x-4 -top-4 -z-10 h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-xl bg-black shadow-2xl ring-1 ring-white/10">
              <div className="flex items-center gap-x-4 border-b border-white/5 px-6 py-4">
                <div className="flex gap-x-2">
                  <div className="h-3 w-3 rounded-full bg-white/10" />
                  <div className="h-3 w-3 rounded-full bg-white/10" />
                  <div className="h-3 w-3 rounded-full bg-white/10" />
                </div>
                <div className="flex text-xs text-zinc-500">
                  <span className="font-mono">demo.sh</span>
                </div>
              </div>
              <div className="px-6 py-8 font-mono text-sm leading-6">
                <div className="text-zinc-500"># Full network reconnaissance</div>
                <div className="mt-4 flex">
                  <span className="text-white">$</span>
                  <span className="ml-2 text-zinc-300">neonet full example.com</span>
                </div>
                <div className="mt-4 space-y-1 text-zinc-400">
                  <div className="text-white">[+] Starting comprehensive scan...</div>
                  <div>  → Port scanning (1,000 ports)</div>
                  <div>  → DNS enumeration</div>
                  <div>  → Subdomain discovery</div>
                  <div>  → SSL certificate analysis</div>
                  <div className="mt-2 text-emerald-400">[✓] All scans completed</div>
                  <div className="text-white">[+] Results saved to ./neonet_results/</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
