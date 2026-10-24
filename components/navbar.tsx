"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-black">
              <span className="text-xs font-semibold text-white">N</span>
            </div>
            <span className="font-semibold">neoNet</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Features
            </Link>
            <Link href="#cli" className="transition-colors hover:text-foreground/80 text-foreground/60">
              CLI
            </Link>
            <Link href="https://github.com/Panda-0x01/neoNet#readme" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Docs
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com/Panda-0x01/neoNet" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="#cli">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
