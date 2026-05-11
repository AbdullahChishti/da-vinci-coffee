import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";

const EASE_LUXE = [0.22, 0.1, 0.22, 1] as const;

function useMotionVariants() {
  const reduce = useReducedMotion();

  const fadeUpVariant = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 1.2, ease: EASE_LUXE },
    },
  };

  const fadeInVariant = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: reduce ? 0 : 1.5, ease: EASE_LUXE },
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
            delayChildren: 0.1,
          },
    },
  };

  const scaleVariant = {
    hidden: reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: reduce ? 0 : 1.2, ease: EASE_LUXE },
    },
  };

  return { fadeUpVariant, fadeInVariant, staggerContainer, scaleVariant };
}

// Letter mark component for visual rhythm
function LetterMark({ letter }: { letter: string }) {
  return (
    <span className="font-display text-6xl md:text-7xl text-amber-glow/20 font-light">
      {letter}
    </span>
  );
}

export default function Philosophy() {
  const { fadeUpVariant, fadeInVariant, staggerContainer, scaleVariant } = useMotionVariants();

  // Parallax for imagery
  const storyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const storyY = useTransform(storyProgress, [0, 1], [50, -50]);

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-espresso">
      {/* ============================================================
          HERO SECTION - The Weight of Intention
          ============================================================ */}
      <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with subtle warmth */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/80 to-espresso" />
        </div>

        {/* Warm vignette */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(13, 10, 8, 0.6) 100%)",
          }}
        />

        <motion.div
          className="relative z-20 flex flex-col items-center text-center section-x max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUpVariant} className="text-label mb-8">
            Our Philosophy
          </motion.p>

          <motion.h1
            variants={fadeUpVariant}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-crema font-light mb-8 leading-tight"
          >
            Coffee is not
            <br />
            <span className="text-crema/60">a transaction.</span>
          </motion.h1>

          <motion.div variants={fadeUpVariant} className="section-divider mb-8">
            <span className="line" />
            <span className="point" />
            <span className="line" />
          </motion.div>

          <motion.p variants={fadeUpVariant} className="text-poetry max-w-md">
            It is a moment of presence in a world that rushes.
          </motion.p>
        </motion.div>
      </section>

      {/* ============================================================
          STORY SECTION - European Coffee House Tradition
          ============================================================ */}
      <section ref={storyRef} className="relative w-full py-24 md:py-32 overflow-hidden bg-walnut">
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Warm glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.06] -translate-y-1/2 translate-x-1/4">
          <div
            className="w-full h-full rounded-full"
            style={{ background: "radial-gradient(circle, var(--amber-glow) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 section-x">
          <motion.div
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Text Content */}
            <motion.div variants={fadeUpVariant}>
              <p className="text-label mb-8">Our Story</p>

              <p className="font-display text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl text-crema font-light leading-[1.4] tracking-tight mb-8">
                In the tradition of European coffee houses, we craft moments of pause in a fast world.
              </p>

              <p className="font-sans text-base text-steam/60 leading-relaxed mb-6">
                Every cup is an invitation to slow down, to breathe, to be present. We believe that the best
                conversations happen in the spaces between words, and that a well-made coffee can be a
                meditation in itself.
              </p>

              <p className="font-sans text-base text-steam/60 leading-relaxed">
                da vinci is named not for the genius of invention, but for the patience of craft—the
                understanding that mastery is a lifelong pursuit, and that each day offers a new canvas.
              </p>
            </motion.div>

            {/* Image with Parallax */}
            <motion.div variants={scaleVariant} className="relative">
              <motion.div
                className="relative aspect-[4/5] overflow-hidden"
                style={{ y: storyY }}
              >
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80"
                  alt="da vinci interior"
                  className="object-cover w-full h-full opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-walnut/50 via-transparent to-transparent" />
              </motion.div>

              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-crema/[0.08] pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          FOUNDING BELIEF - The Quote
          ============================================================ */}
      <section className="relative w-full py-32 md:py-40 bg-espresso flex items-center justify-center">
        {/* Atmospheric mist */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.05]"
            style={{ background: "radial-gradient(ellipse, var(--amber-glow) 0%, transparent 70%)" }}
          />
        </div>

        <motion.div
          className="relative z-10 section-x max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant} className="mb-8">
            <LetterMark letter="&ldquo;" />
          </motion.div>

          <motion.p
            variants={fadeUpVariant}
            className="font-display text-2xl sm:text-3xl md:text-4xl text-crema font-light leading-[1.4] mb-8 italic"
          >
            The best coffee is the one that makes you pause.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="section-divider">
            <span className="line" />
            <span className="point" />
            <span className="line" />
          </motion.div>

          <motion.p variants={fadeUpVariant} className="text-label mt-8">
            — our founding belief
          </motion.p>
        </motion.div>
      </section>

      {/* ============================================================
          THREE PILLARS - Visual Poetry
          ============================================================ */}
      <section className="relative w-full py-24 md:py-32 bg-espresso border-t border-crema/[0.06]">
        <div className="relative z-10 section-x">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUpVariant} className="text-label text-center mb-16">
              Three Pillars
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              {[
                {
                  letter: "C",
                  title: "Craft",
                  description: "Intentional preparation, precise technique, obsessive attention to every variable.",
                },
                {
                  letter: "S",
                  title: "Space",
                  description: "Designed for conversation and solitude, for connection and reflection.",
                },
                {
                  letter: "M",
                  title: "Moment",
                  description: "Every visit is an occasion, every cup a small celebration of presence.",
                },
              ].map((pillar) => (
                <motion.div
                  key={pillar.letter}
                  variants={fadeUpVariant}
                  className="text-center px-6 py-12 border border-crema/[0.06] hover:border-amber-glow/20 transition-colors duration-700 group"
                >
                  <LetterMark letter={pillar.letter} />
                  <h3 className="font-display text-xl text-crema font-light mb-4 mt-4">{pillar.title}</h3>
                  <p className="font-sans text-sm text-steam/50 leading-relaxed max-w-xs mx-auto">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          CRAFTSMANSHIP SECTION - Seed to Cup
          ============================================================ */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden bg-walnut">
        <div className="relative z-10 section-x">
          <motion.div
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Image */}
            <motion.div variants={scaleVariant} className="relative order-2 md:order-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
                  alt="Coffee preparation"
                  className="object-cover w-full h-full opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-walnut/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-crema/[0.06] pointer-events-none" />
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeUpVariant} className="order-1 md:order-2">
              <p className="text-label mb-8">Craftsmanship</p>

              <h2 className="font-display text-2xl sm:text-3xl text-crema font-light leading-[1.3] mb-6">
                From seed to cup, every step matters
              </h2>

              <p className="font-sans text-base text-steam/60 leading-relaxed mb-6">
                We source directly from farms that share our values—smallholders who treat coffee
                as a craft, not a commodity. We roast in small batches, carefully, intentionally.
                And we prepare each cup with the precision of a craftsperson who knows that
                coffee is both art and science.
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-crema/15" />
                <div className="w-1 h-1 rounded-full bg-amber-glow/40" />
              </div>

              <p className="font-display text-lg text-crema/70 italic">
                &ldquo;The machine is a tool. The hand is the artist.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          PROCESS SECTION - The Steps
          ============================================================ */}
      <section className="relative w-full py-24 md:py-32 bg-espresso">
        <div className="relative z-10 section-x">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUpVariant} className="text-label text-center mb-16">
              Our Process
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "01", title: "Source", desc: "Direct relationships with farms" },
                { number: "02", title: "Roast", desc: "Small batches, daily attention" },
                { number: "03", title: "Extract", desc: "Precision at every variable" },
                { number: "04", title: "Serve", desc: "The cup as an offering" },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={fadeUpVariant}
                  className="relative"
                >
                  <span className="font-display text-5xl text-amber-glow/10 font-light">{step.number}</span>
                  <h3 className="font-display text-xl text-crema font-light mt-2 mb-2">{step.title}</h3>
                  <p className="font-sans text-sm text-steam/50">{step.desc}</p>

                  {/* Connector line (hidden on last item and mobile) */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-crema/[0.06]" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION - The Invitation
          ============================================================ */}
      <section className="relative w-full py-24 md:py-32 bg-walnut border-t border-crema/[0.06]">
        {/* Warm glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05]"
            style={{ background: "radial-gradient(circle, var(--amber-glow) 0%, transparent 60%)" }}
          />
        </div>

        <motion.div
          className="relative z-10 section-x flex flex-col items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUpVariant}
            className="font-display text-2xl sm:text-3xl md:text-4xl text-crema font-light mb-10 text-center"
          >
            Experience the difference
          </motion.h2>

          <motion.div variants={fadeUpVariant}>
            <Link href="/#visit" className="btn-ritual">
              Begin the ritual
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================
          FOOTER
          ============================================================ */}
      <footer className="w-full py-12 md:py-16 section-x border-t border-crema/[0.06] bg-espresso">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display text-lg text-crema/80">
              <span className="font-light">da</span>
              <span className="italic font-light ml-2">vinci</span>
            </span>
            <span className="text-label text-crema/40">
              Via Roma 42, Milano
            </span>
          </motion.div>

          <motion.nav
            variants={fadeUpVariant}
            className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-label text-crema/40"
            aria-label="Footer"
          >
            <Link href="/" className="hover:text-crema/70 transition-colors duration-500">
              Entrance
            </Link>
            <Link href="/menu" className="hover:text-crema/70 transition-colors duration-500">
              Collection
            </Link>
            <a href="mailto:hello@drinkdavinci.com" className="hover:text-crema/70 transition-colors duration-500">
              Contact
            </a>
          </motion.nav>
        </motion.div>
      </footer>
    </main>
  );
}
