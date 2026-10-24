"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white">
            <span className="text-xs font-bold text-black">N</span>
          </div>
          <span className="text-sm font-medium">neoNet</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="#features" className="text-sm text-zinc-400 transition-colors hover:text-white">
            Features
          </Link>
          <Link href="#cli" className="text-sm text-zinc-400 transition-colors hover:text-white">
            CLI
          </Link>
          <Link href="#how-it-works" className="text-sm text-zinc-400 transition-colors hover:text-white">
            How it works
          </Link>
          <Link href="#faq" className="text-sm text-zinc-400 transition-colors hover:text-white">
            FAQ
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com/Panda-0x01/neoNet" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="#cli">Get started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
