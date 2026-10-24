import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white">
              <span className="text-xs font-bold text-black">N</span>
            </div>
            <span className="text-sm">neoNet</span>
          </div>
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} neoNet. Open source project.
          </p>
          <Link
            href="https://github.com/Panda-0x01/neoNet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
