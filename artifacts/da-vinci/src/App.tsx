import { Switch, Route, Router as WouterRouter, Link } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Philosophy from "@/pages/Philosophy";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between section-x pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 md:py-5 border-b border-cream/[0.08] bg-espresso/75 backdrop-blur-md">
      <Link
        href="/"
        className="font-serif text-lg md:text-xl text-cream/85 tracking-tight hover:text-cream transition-colors duration-500"
        aria-label="da vinci — home"
      >
        da vinci
      </Link>
      <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 md:gap-x-10" aria-label="Primary">
        <Link
          href="/"
          className="font-sans text-[0.6875rem] tracking-[0.2em] uppercase text-cream/60 hover:text-cream/90 transition-colors duration-500"
        >
          Home
        </Link>
        <Link
          href="/menu"
          className="font-sans text-[0.6875rem] tracking-[0.2em] uppercase text-cream/60 hover:text-cream/90 transition-colors duration-500"
        >
          Menu
        </Link>
        <Link
          href="/philosophy"
          className="font-sans text-[0.6875rem] tracking-[0.2em] uppercase text-cream/60 hover:text-cream/90 transition-colors duration-500"
        >
          Philosophy
        </Link>
        <a
          href="#visit"
          className="font-sans text-[0.6875rem] tracking-[0.2em] uppercase text-cream/60 hover:text-cream/90 transition-colors duration-500"
        >
          Visit
        </a>
      </nav>
    </header>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/philosophy" component={Philosophy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="min-h-screen bg-background text-foreground flex flex-col w-full overflow-x-hidden">
            <Navigation />
            <div className="pt-[72px]">
              <Router />
            </div>
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
