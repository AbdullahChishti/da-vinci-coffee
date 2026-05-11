import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center section-x bg-background">
      <p className="text-[0.6875rem] tracking-[0.32em] uppercase text-amber-accent/55 mb-6 font-sans">drinkdavinci.com</p>
      <h1 className="text-3xl md:text-5xl font-serif text-cream font-light text-center max-w-lg leading-tight tracking-display">
        This page does not exist
      </h1>
      <p className="mt-6 text-center text-cream/58 font-sans text-sm md:text-base font-light max-w-md leading-relaxed">
        The link may be old or mistyped. Hours, location, and what we serve are still on the home page.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 font-sans text-[0.6875rem] tracking-[0.2em] uppercase text-cream/80 border border-cream/28 px-6 py-3 hover:border-cream/45 hover:text-cream transition-colors duration-500"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Return home
      </Link>
    </div>
  );
}
