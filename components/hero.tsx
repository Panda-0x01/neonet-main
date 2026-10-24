"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>
      
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 py-8 md:py-12 md:pb-8 lg:py-32 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm"
        >
          <Sparkles className="h-4 w-4" />
          <span>Lightning fast network reconnaissance</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-7xl lg:leading-[1.1]"
        >
          Scan. Discover. Analyze.
          <br />
          <span className="bg-gradient-to-r from-black via-gray-600 to-black bg-clip-text text-transparent">
            All in one CLI
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl"
        >
          neoNet is a powerful, zero-dependency CLI toolkit for network reconnaissance. 
          Port scanning, DNS enumeration, subdomain discovery, SSL inspection and more.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row w-full items-center justify-center gap-4 py-4 md:pb-10"
        >
          <Button size="lg" className="group" asChild>
            <Link href="#cli">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="https://github.com/Panda-0x01/neoNet" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative mx-auto max-w-[1000px]"
      >
        <div className="gradient-border rounded-lg">
          <div className="rounded-lg overflow-hidden">
            <div className="flex items-center border-b px-4 py-2 bg-gray-50/50">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="ml-4 text-xs text-muted-foreground">terminal</div>
            </div>
            <div className="overflow-x-auto p-6 bg-white">
              <pre className="text-sm">
                <code className="font-mono">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <span className="text-gray-500">$</span> <span className="font-semibold">neonet scan 192.168.1.0/24</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="mt-2 text-gray-600"
                  >
                    [INFO] Initializing scanner...
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-blue-600"
                  >
                    [SCAN] Scanning 256 hosts...
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="text-green-600"
                  >
                    [SUCCESS] 12 hosts up, 45 open ports found
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="mt-2"
                  >
                    <span className="text-gray-500">$</span> <span className="animate-pulse">_</span>
                  </motion.div>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
