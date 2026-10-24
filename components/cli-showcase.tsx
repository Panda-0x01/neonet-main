export function CliShowcase() {
  return (
    <section id="cli" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Quick Start
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Get up and running in seconds
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-[800px]">
        <div className="rounded-lg border bg-card shadow-sm">
          <div className="border-b px-6 py-4">
            <h3 className="font-semibold">Installation</h3>
          </div>
          <div className="p-6">
            <div className="rounded-md bg-muted p-4">
              <code className="text-sm font-mono">pip install neonet</code>
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-lg border bg-card shadow-sm">
          <div className="border-b px-6 py-4">
            <h3 className="font-semibold">Usage</h3>
          </div>
          <div className="divide-y">
            <div className="flex items-center justify-between p-4">
              <code className="text-sm font-mono">neonet scan &lt;target&gt;</code>
              <span className="text-sm text-muted-foreground">Port & service scan</span>
            </div>
            <div className="flex items-center justify-between p-4">
              <code className="text-sm font-mono">neonet dns &lt;domain&gt;</code>
              <span className="text-sm text-muted-foreground">DNS enumeration</span>
            </div>
            <div className="flex items-center justify-between p-4">
              <code className="text-sm font-mono">neonet subdomains &lt;domain&gt;</code>
              <span className="text-sm text-muted-foreground">Subdomain discovery</span>
            </div>
            <div className="flex items-center justify-between p-4">
              <code className="text-sm font-mono">neonet ssl &lt;domain&gt;</code>
              <span className="text-sm text-muted-foreground">SSL inspection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
