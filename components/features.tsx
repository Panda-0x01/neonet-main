"use client";

import { motion } from "framer-motion";
import { Terminal, Search, Shield, Zap, Globe, Cpu } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "Multi-threaded scanning engine delivers results in seconds with optimized algorithms.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Cpu,
    title: "Zero Dependencies",
    description: "Pure Python implementation. Works out of the box with no external packages needed.",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Search,
    title: "Smart Port Scanning",
    description: "Intelligent port detection with service identification and version detection.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Globe,
    title: "DNS & Subdomains",
    description: "Comprehensive DNS enumeration and subdomain discovery capabilities.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Shield,
    title: "SSL/TLS Analysis",
    description: "Deep certificate inspection, cipher analysis, and security vulnerability checks.",
    gradient: "from-red-400 to-rose-500",
  },
  {
    icon: Terminal,
    title: "Developer Friendly",
    description: "Clean CLI interface with colorful output, JSON export, and scriptable workflows.",
    gradient: "from-gray-400 to-gray-600",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section id="features" className="container py-8 md:py-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
      >
        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
          Features
        </div>
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Everything you need for
          <br />
          <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            network reconnaissance
          </span>
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Powerful tools packed into a simple, fast CLI
        </p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-12"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl border bg-background p-1"
          >
            <div className="relative h-full rounded-lg p-6">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="relative space-y-4">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.gradient}`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
