import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { useLenis } from "@/hooks/use-lenis";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Philosophy from "@/pages/Philosophy";
import NotFound from "@/pages/not-found";

const EASE_LUXE = [0.22, 0.1, 0.22, 1] as const;

const queryClient = new QueryClient();

// Navigation Link Component with cinematic hover
function NavLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  if (external) {
    return (
      <a
        href={href}
        className="relative font-label text-[0.6875rem] tracking-[0.25em] uppercase text-crema/50 hover:text-crema/90 transition-colors duration-500 py-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative z-10">{children}</span>
        <motion.span
          className="absolute bottom-0 left-0 h-[1px] bg-amber-glow/60"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.4, ease: EASE_LUXE }}
        />
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="relative font-label text-[0.6875rem] tracking-[0.25em] uppercase text-crema/50 hover:text-crema/90 transition-colors duration-500 py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 h-[1px] bg-amber-glow/60"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: EASE_LUXE }}
      />
    </Link>
  );
}

// Main Navigation - Cinematic, Minimal
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Show/hide based on scroll direction after hero section
      if (currentScrollY > viewportHeight * 0.8) {
        setScrolled(true);
        if (currentScrollY > lastScrollY && currentScrollY > viewportHeight) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      } else {
        setScrolled(false);
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
        className="fixed top-0 left-0 right-0 z-50 section-x pt-5 md:pt-6"
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: reduce ? 0 : 0.6, ease: EASE_LUXE }}
    >
      <div
        className={`flex items-center justify-between transition-all duration-700 ${
          scrolled ? "glass py-4 px-6 mx-auto max-w-6xl rounded-sm" : "py-5 md:py-6"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl md:text-2xl text-crema/90 tracking-tight hover:text-crema transition-colors duration-500"
          aria-label="da vinci — return home"
        >
          <span className="font-light">da</span>
          <span className="italic font-light ml-2">vinci</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          <NavLink href="/">Entrance</NavLink>
          <NavLink href="/philosophy">Philosophy</NavLink>
          <NavLink href="/menu">Collection</NavLink>
          <NavLink href="/#visit" external>Visit</NavLink>
        </nav>

        {/* Mobile Menu Trigger */}
        <MobileMenu />
      </div>
    </motion.header>
  );
}

// Mobile Menu - Full-screen immersive
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const reduce = useReducedMotion();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuItems = [
    { href: "/", label: "Entrance", sublabel: "Where coffee becomes contemplation" },
    { href: "/philosophy", label: "Philosophy", sublabel: "The ritual redesigned" },
    { href: "/menu", label: "Collection", sublabel: "Our offerings" },
    { href: "/#visit", label: "Visit", sublabel: "Reserve your moment" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <motion.span
          className="w-5 h-[1px] bg-crema/70 origin-center"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 3.5 : 0,
          }}
          transition={{ duration: 0.3, ease: EASE_LUXE }}
        />
        <motion.span
          className="w-5 h-[1px] bg-crema/70 origin-center"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -3.5 : 0,
          }}
          transition={{ duration: 0.3, ease: EASE_LUXE }}
        />
      </button>

      {/* Full-screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-espresso/98 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.5 }}
          >
            {/* Atmospheric Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
                style={{ background: "radial-gradient(circle, var(--amber-glow) 0%, transparent 60%)" }}
              />
            </div>

            {/* Menu Content */}
            <nav className="relative z-10 h-full flex flex-col items-center justify-center gap-8 section-x">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: reduce ? 0 : 0.6,
                    delay: reduce ? 0 : index * 0.1,
                    ease: EASE_LUXE,
                  }}
                  className="text-center"
                >
                  <Link
                    href={item.href}
                    className="block font-display text-4xl sm:text-5xl text-crema/90 hover:text-crema transition-colors duration-300 tracking-tight"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <p className="font-sans text-xs text-steam/60 mt-2 tracking-wide">
                    {item.sublabel}
                  </p>
                </motion.div>
              ))}

              {/* Closing Note */}
              <motion.p
                className="absolute bottom-12 left-0 right-0 text-center font-sans text-xs text-crema/30 tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Return when you need silence
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Page Transition Wrapper
function PageTransition({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.8, ease: EASE_LUXE }}
    >
      {children}
    </motion.div>
  );
}

// Router with page transitions
function Router() {
  const [location] = useLocation();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <Switch key={location}>
        <Route path="/">
          <PageTransition>
            <Home />
          </PageTransition>
        </Route>
        <Route path="/menu">
          <PageTransition>
            <Menu />
          </PageTransition>
        </Route>
        <Route path="/philosophy">
          <PageTransition>
            <Philosophy />
          </PageTransition>
        </Route>
        <Route>
          <PageTransition>
            <NotFound />
          </PageTransition>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

// App Component with Lenis initialization
function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="min-h-screen bg-espresso text-crema flex flex-col w-full overflow-x-hidden">
            <Navigation />
            <main className="relative z-0">
              <Router />
            </main>
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
