"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Menu } from "lucide-react";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "CLI", href: "#cli" },
  { name: "Documentation", href: "https://github.com/Panda-0x01/neoNet#readme" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">neoNet</span>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                <span className="text-sm font-semibold text-black">N</span>
              </div>
              <span className="text-sm font-medium">neoNet</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-400">
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm leading-6 text-zinc-400 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com/Panda-0x01/neoNet" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="#cli">Download</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
