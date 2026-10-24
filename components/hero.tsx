"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffffff20] to-[#ffffff05] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link
              href="https://github.com/Panda-0x01/neoNet"
              className="inline-flex space-x-6"
            >
              <span className="rounded-full bg-white/5 px-3 py-1 text-sm font-medium leading-6 text-white ring-1 ring-inset ring-white/10">
                Open source
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-zinc-400">
                <span>v1.0 now available</span>
                <ChevronRight className="h-5 w-5 text-zinc-500" aria-hidden="true" />
              </span>
            </Link>
          </div>
          <h1 className="mt-10 text-4xl font-medium tracking-tight text-gradient sm:text-6xl">
            Network reconnaissance made simple
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A blazing fast, zero-dependency CLI toolkit for network discovery, port scanning, DNS enumeration, and security analysis. Built for developers and security professionals.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="#cli">
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link href="https://github.com/Panda-0x01/neoNet">
                View on GitHub <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-1">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-white/5 p-2 ring-1 ring-inset ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="rounded-md bg-black shadow-2xl ring-1 ring-white/10">
                <div className="flex items-center gap-x-4 border-b border-white/5 px-6 py-4">
                  <div className="flex gap-x-2">
                    <div className="h-3 w-3 rounded-full bg-white/10" />
                    <div className="h-3 w-3 rounded-full bg-white/10" />
                    <div className="h-3 w-3 rounded-full bg-white/10" />
                  </div>
                  <div className="flex text-xs text-zinc-500">
                    <span className="font-mono">neonet — bash</span>
                  </div>
                </div>
                <div className="px-6 py-8 font-mono text-sm leading-6">
                  <div className="flex">
                    <span className="text-zinc-500">~</span>
                    <span className="ml-2 text-white">$</span>
                    <span className="ml-2 text-zinc-300">neonet scan 192.168.1.1</span>
                  </div>
                  <div className="mt-4 space-y-1 text-zinc-400">
                    <div>[INFO] Starting port scan...</div>
                    <div>[INFO] Scanning top 1000 ports</div>
                    <div className="text-emerald-400">[SUCCESS] 22/tcp   open  ssh</div>
                    <div className="text-emerald-400">[SUCCESS] 80/tcp   open  http</div>
                    <div className="text-emerald-400">[SUCCESS] 443/tcp  open  https</div>
                    <div className="mt-4">[INFO] Scan completed in 1.42s</div>
                  </div>
                  <div className="mt-6 flex">
                    <span className="text-zinc-500">~</span>
                    <span className="ml-2 text-white">$</span>
                    <span className="ml-2 h-4 w-2 bg-white/80 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ffffff15] to-[#ffffff05] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
}
