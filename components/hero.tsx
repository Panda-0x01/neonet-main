"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container relative">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
          Open Source CLI Tool
        </div>
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Network Reconnaissance
          <br className="hidden sm:inline" />
          Made Simple
        </h1>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          A fast, minimal CLI for scanning, enumerating, and inspecting your network. 
          Port scanning, DNS, SSL, subdomains — all in one tool.
        </p>
        <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <Button asChild>
            <Link href="#cli">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://github.com/Panda-0x01/neoNet" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative mx-auto max-w-[1000px]">
        <div className="rounded-lg border bg-card shadow-sm">
          <div className="flex items-center border-b px-4 py-2">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-gray-300" />
              <div className="h-3 w-3 rounded-full bg-gray-300" />
              <div className="h-3 w-3 rounded-full bg-gray-300" />
            </div>
            <div className="ml-4 text-xs text-muted-foreground">bash</div>
          </div>
          <div className="overflow-x-auto p-4">
            <pre className="text-sm">
              <code className="font-mono">
                <span className="text-muted-foreground">$</span> <span>neonet scan 192.168.1.0/24</span>
                {"\n"}
                <span className="text-muted-foreground">[INFO]</span> Scanning network...
                {"\n"}
                <span className="text-green-600">[SUCCESS]</span> Found 12 hosts
                {"\n"}
                <span className="text-green-600">[SUCCESS]</span> Discovered open ports
                {"\n"}
                <span className="text-muted-foreground">$</span> <span className="animate-pulse">_</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
