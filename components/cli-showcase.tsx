"use client";

import { motion } from "framer-motion";

const commands = [
  { cmd: "neonet scan <target>", desc: "Port and service scanning" },
  { cmd: "neonet dns <domain>", desc: "DNS enumeration" },
  { cmd: "neonet subdomains <domain>", desc: "Subdomain discovery" },
  { cmd: "neonet ssl <domain>", desc: "SSL certificate inspection" },
  { cmd: "neonet whois <domain>", desc: "WHOIS lookup" },
];

export function CliShowcase() {
  return (
    <section id="cli" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Simple, powerful commands
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Get started in seconds with intuitive CLI commands.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-black shadow-card">
            <div className="border-b border-white/10 px-6 py-4">
              <p className="text-sm text-zinc-400">Installation</p>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-zinc-500">$ pip install neonet</div>
              <div className="mt-2 text-white">[✓] Installed successfully</div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-lg border border-white/10 bg-black shadow-card">
            <div className="border-b border-white/10 px-6 py-4">
              <p className="text-sm text-zinc-400">Commands</p>
            </div>
            <div className="divide-y divide-white/5">
              {commands.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between px-6 py-4"
                >
                  <code className="text-sm text-white">{item.cmd}</code>
                  <span className="text-sm text-zinc-500">{item.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
