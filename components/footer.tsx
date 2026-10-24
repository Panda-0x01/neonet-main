import Link from "next/link";
import { Github } from "lucide-react";

const navigation = {
  product: [
    { name: "Features", href: "#features" },
    { name: "CLI", href: "#cli" },
    { name: "Documentation", href: "https://github.com/Panda-0x01/neoNet#readme" },
  ],
  resources: [
    { name: "GitHub", href: "https://github.com/Panda-0x01/neoNet" },
    { name: "Releases", href: "https://github.com/Panda-0x01/neoNet/releases" },
    { name: "Issues", href: "https://github.com/Panda-0x01/neoNet/issues" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                <span className="text-sm font-semibold text-black">N</span>
              </div>
              <span className="text-sm font-medium">neoNet</span>
            </div>
            <p className="text-sm leading-6 text-zinc-400">
              Fast, minimal network reconnaissance CLI for security professionals and developers.
            </p>
            <div className="flex space-x-6">
              <Link
                href="https://github.com/Panda-0x01/neoNet"
                className="text-zinc-400 hover:text-white"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-zinc-400 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm leading-6 text-zinc-400 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/5 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-zinc-500">
            &copy; {new Date().getFullYear()} neoNet. Released under the MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}
