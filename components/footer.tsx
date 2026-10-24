import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <Link href="https://github.com/Panda-0x01" className="font-medium underline underline-offset-4">
            Panda-0x01
          </Link>
          . The source code is available on{" "}
          <Link href="https://github.com/Panda-0x01/neoNet" className="font-medium underline underline-offset-4">
            GitHub
          </Link>
          .
        </p>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/Panda-0x01/neoNet" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
