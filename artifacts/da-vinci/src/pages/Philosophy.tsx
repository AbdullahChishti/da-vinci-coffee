import { motion, useReducedMotion } from "framer-motion";

const EASE_LUXE = [0.22, 0.1, 0.22, 1] as const;

function useMotionVariants() {
  const reduce = useReducedMotion();

  const fadeUpVariant = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 1, ease: EASE_LUXE },
    },
  };

  const staggerContainer = {
    hidden: { opacity: reduce ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: reduce
        ? { duration: 0 }
        : {
            staggerChildren: 0.15,
            delayChildren: 0.08,
          },
    },
  };

  return { fadeUpVariant, staggerContainer };
}

interface PillarProps {
  letter: string;
  title: string;
  description: string;
}

function Pillar({ letter, title, description }: PillarProps) {
  const { fadeUpVariant } = useMotionVariants();

  return (
    <motion.div variants={fadeUpVariant} className="flex flex-col items-center text-center">
      <span className="font-serif text-5xl md:text-6xl text-amber-accent/80 mb-3">{letter}</span>
      <h3 className="font-sans text-[0.75rem] tracking-[0.32em] uppercase text-cream mb-3">{title}</h3>
      <p className="font-sans text-sm text-cream/50 max-w-[200px] leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function Philosophy() {
  const { fadeUpVariant, staggerContainer } = useMotionVariants();

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-espresso">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1080&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

        <motion.div
          className="relative z-20 flex flex-col items-center text-center section-x max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUpVariant}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-cream font-light mb-5"
          >
            The Art of Coffee
          </motion.h1>
          <motion.p
            variants={fadeUpVariant}
            className="text-base md:text-lg font-sans text-cream/60 tracking-wide mb-8"
          >
            Where every detail is intentional
          </motion.p>
          <motion.div variants={fadeUpVariant}>
            <span className="text-2xl text-amber-accent/60">↓</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="relative w-full py-24 md:py-32 section-x bg-espresso-raised overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[min(50vw,400px)] h-[min(50vw,400px)] rounded-full opacity-[0.05] pointer-events-none -translate-y-1/2 translate-x-1/4"
          style={{ background: "radial-gradient(circle, var(--amber-accent) 0%, transparent 70%)" }}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          <motion.div variants={fadeUpVariant}>
            <p className="text-[0.6875rem] tracking-[0.32em] uppercase text-amber-accent/70 mb-6 font-sans">
              Our Story
            </p>
            <p className="font-serif text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl text-cream font-light leading-[1.3] tracking-display">
              In the tradition of European coffee houses, we craft moments of pause in a fast world. Every cup is an
              invitation to slow down, to breathe, to be present.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            className="relative aspect-[4/3] overflow-hidden bg-espresso-deep"
          >
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80"
              alt="da vinci interior"
              className="object-cover w-full h-full opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Ritual Quote Section */}
      <section className="relative w-full py-24 md:py-32 section-x bg-espresso flex items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUpVariant}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-cream font-light leading-[1.3] mb-6"
          >
            &ldquo;Coffee is not a drink. It&apos;s a moment of presence.&rdquo;
          </motion.p>
          <motion.p variants={fadeUpVariant} className="font-sans text-sm text-cream/50 italic">
            — our founding belief
          </motion.p>
        </motion.div>
      </section>

      {/* Pillars Section */}
      <section className="relative w-full py-20 md:py-28 section-x bg-espresso-deep border-t border-cream/[0.06]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <Pillar
              letter="C"
              title="Craft"
              description="Intentional preparation, precise technique, obsessive attention to detail"
            />
            <Pillar
              letter="S"
              title="Space"
              description="Designed for conversation and solitude, for connection and reflection"
            />
            <Pillar
              letter="M"
              title="Moment"
              description="Every visit is an occasion, every cup a small celebration"
            />
          </div>
        </motion.div>
      </section>

      {/* Craftsmanship Section */}
      <section className="relative w-full py-24 md:py-32 section-x bg-espresso-panel overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          <motion.div
            variants={fadeUpVariant}
            className="relative aspect-[4/3] overflow-hidden bg-espresso-deep order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80"
              alt="Coffee preparation"
              className="object-cover w-full h-full opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          <motion.div variants={fadeUpVariant} className="order-1 md:order-2">
            <p className="text-[0.6875rem] tracking-[0.32em] uppercase text-amber-accent/70 mb-6 font-sans">
              Craftsmanship
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-cream font-light leading-[1.3] mb-6">
              From seed to cup, every step matters
            </h2>
            <p className="font-sans text-base text-cream/55 leading-relaxed mb-6">
              We source directly from farms that share our values. We roast in small batches, carefully, intentionally.
              And we prepare each cup with the precision of a craftsperson who knows that coffee is both art and science.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-cream/15" />
              <div className="w-1 h-1 rounded-full bg-amber-accent/40" />
            </div>
            <p className="font-serif text-lg text-cream/70 italic">
              &ldquo;The best coffee is the one that makes you pause.&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 md:py-28 section-x bg-espresso-raised flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={fadeUpVariant}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-cream font-light mb-8"
          >
            Experience the difference
          </motion.h2>
          <motion.div variants={fadeUpVariant}>
            <a
              href="/#visit"
              className="inline-flex font-sans text-[0.6875rem] tracking-[0.2em] uppercase px-10 py-3.5 border border-cream/35 text-cream/85 hover:border-cream/55 hover:text-cream hover:bg-cream/5 transition-all duration-500"
            >
              Plan your visit
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 md:py-14 section-x flex flex-col md:flex-row items-center justify-between gap-8 border-t border-cream/[0.08] bg-espresso-deep">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-serif text-cream/82">da vinci</span>
          <span className="text-[0.6875rem] tracking-[0.16em] text-cream/48 font-sans uppercase">
            Via Roma 42, Milano
          </span>
        </div>
        <nav
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[0.6875rem] tracking-[0.16em] uppercase font-sans text-cream/50"
          aria-label="Footer"
        >
          <a href="/" className="hover:text-cream/80 transition-colors duration-500">
            Home
          </a>
          <a href="/menu" className="hover:text-cream/80 transition-colors duration-500">
            Menu
          </a>
          <a href="mailto:hello@drinkdavinci.com" className="hover:text-cream/80 transition-colors duration-500">
            Contact
          </a>
        </nav>
      </footer>
    </main>
  );
}
