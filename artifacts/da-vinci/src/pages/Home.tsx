import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";

const EASE_LUXE = [0.22, 0.1, 0.22, 1] as const;

// Motion variants hook with reduced motion support
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
            staggerChildren: 0.2,
            delayChildren: 0.15,
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

  return { fadeUpVariant, fadeInVariant, staggerContainer, scaleVariant, reduce };
}

// Icon Components - Minimal, Architectural
function WarmLightIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-amber-glow/70">
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1" />
      <path d="M16 4V8M16 24V28M4 16H8M24 16H28M7 7L10 10M22 22L25 25M7 25L10 22M22 10L25 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function IntentionalPaceIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-amber-glow/70">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1" />
      <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function HumanScaleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-amber-glow/70">
      <path d="M16 6C17.5 6 19 7.5 19 9C19 10.5 17.5 12 16 12C14.5 12 13 10.5 13 9C13 7.5 14.5 6 16 6Z" stroke="currentColor" strokeWidth="1" />
      <path d="M10 26V20C10 18 11 16 16 16C21 16 22 18 22 20V26" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  const { fadeUpVariant, fadeInVariant, staggerContainer, scaleVariant, reduce } = useMotionVariants();

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-espresso">
      {/* ============================================================
          SECTION 1: THE ENTRANCE (Hero)
          Purpose: Create immediate calm + curiosity gap
          Psychology: Pattern interrupt through stillness
          ============================================================ */}
      <section
        className="relative w-full min-h-[100vh] flex flex-col justify-center overflow-hidden"
        aria-label="The Entrance"
      >
        {/* Battle of Light as full artistic background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/battle-of-light.jpg"
            alt=""
            className="w-full h-full object-cover opacity-60"
            style={{
              objectPosition: "85% 20%",
              filter: "sepia(15%) contrast(1.15) brightness(0.75)",
            }}
          />
        </div>

        {/* Refined gradient overlays */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: `
              linear-gradient(135deg, rgba(13, 10, 8, 0.92) 0%, rgba(13, 10, 8, 0.75) 35%, rgba(13, 10, 8, 0.4) 55%, rgba(13, 10, 8, 0.5) 100%),
              linear-gradient(to bottom, rgba(13, 10, 8, 0.6) 0%, transparent 25%, transparent 75%, rgba(13, 10, 8, 0.85) 100%)
            `,
          }}
        />

        {/* Warm ambient glow */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 25% 60%, rgba(196, 149, 106, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 75% 30%, rgba(61, 43, 31, 0.2) 0%, transparent 40%)
            `,
          }}
        />

        {/* Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            className="max-w-3xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Brand mark - refined */}
            <motion.div variants={fadeUpVariant} className="flex items-baseline gap-1 mb-6">
              <span
                className="font-display text-espresso px-4 py-3"
                style={{
                  fontSize: "clamp(4rem, 10vw, 8rem)",
                  fontWeight: 200,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.9,
                  backgroundColor: "#E8DCCB",
                }}
              >
                da
              </span>
              <span
                className="font-display text-espresso px-4 py-3"
                style={{
                  fontSize: "clamp(4rem, 10vw, 8rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  letterSpacing: "-0.03em",
                  lineHeight: 0.9,
                  backgroundColor: "#E8DCCB",
                }}
              >
                vinci
              </span>
            </motion.div>

            {/* Tagline with elegant spacing */}
            <motion.div variants={fadeUpVariant}>
              <span
                className="font-sans text-espresso tracking-[0.25em] uppercase px-3 py-2 inline-block"
                style={{
                  fontSize: "clamp(0.65rem, 1.1vw, 0.8rem)",
                  fontWeight: 500,
                  backgroundColor: "#C4956A",
                  letterSpacing: "0.25em",
                }}
              >
                speciality coffee
              </span>
            </motion.div>

            {/* Elegant divider */}
            <motion.div 
              variants={fadeUpVariant} 
              className="mt-8 md:mt-12 flex items-center gap-4"
            >
              <div className="w-20 h-[1px] bg-gradient-to-r from-crema/80 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-glow/60" />
            </motion.div>

            {/* Quote - elevated presentation */}
            <motion.div
              variants={fadeUpVariant}
              className="mt-10 md:mt-14 max-w-lg"
            >
              <p
                className="font-display text-xl md:text-2xl lg:text-3xl text-espresso font-light leading-relaxed italic px-4 py-3 inline-block"
                style={{
                  backgroundColor: "rgba(232, 220, 203, 0.95)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                Some spaces ask nothing of you.
              </p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={fadeUpVariant}
              className="mt-16 md:mt-24"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-start gap-2 opacity-50"
              >
                <span className="text-label text-crema/60 text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-crema/60 to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: THE PHILOSOPHY (Ritual Redesigned)
          Purpose: Establish intellectual trust + identity alignment
          Structure: Three pillars with iconography
          Psychology: Identity-based positioning
          ============================================================ */}
      <section
        id="philosophy"
        className="relative w-full min-h-[90vh] md:min-h-[100vh] overflow-hidden bg-walnut"
        aria-label="Philosophy"
      >
        {/* Background Texture */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-transparent to-espresso/50" />
        </div>

        {/* Warm Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.08] pointer-events-none">
          <div
            className="w-full h-full rounded-full"
            style={{ background: "radial-gradient(circle, var(--amber-glow) 0%, transparent 60%)" }}
          />
        </div>

        <div className="relative z-10 min-h-[90vh] md:min-h-[100vh] flex items-center">
          <div className="w-full section-x py-24 md:py-32">
            <motion.div
              className="max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Section Label */}
              <motion.div variants={fadeUpVariant} className="text-center mb-16 md:mb-24">
                <p className="text-label mb-4">Our Philosophy</p>
                <div className="section-divider">
                  <span className="line" />
                  <span className="point" />
                  <span className="line" />
                </div>
              </motion.div>

              {/* Three Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {[
                  {
                    icon: <WarmLightIcon />,
                    title: "Warm light",
                    description: "Every fixture chosen for how it falls across the rim of a cup.",
                  },
                  {
                    icon: <IntentionalPaceIcon />,
                    title: "Intentional pace",
                    description: "No timers on the bar. The extraction finishes when it finishes.",
                  },
                  {
                    icon: <HumanScaleIcon />,
                    title: "Human scale",
                    description: "Twenty seats. The same faces. Conversations that span seasons.",
                  },
                ].map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    variants={fadeUpVariant}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="mb-6 p-4 rounded-full border border-crema/10 group-hover:border-amber-glow/30 transition-colors duration-700">
                      {pillar.icon}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl text-crema font-light mb-4">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-sm text-steam/60 leading-relaxed max-w-xs">
                      {pillar.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Closing Statement */}
              <motion.div variants={fadeUpVariant} className="text-center mt-20 md:mt-28">
                <p className="font-display text-2xl md:text-3xl text-crema/70 font-light italic">
                  The cup stays center stage.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: THE CRAFT (Coffee Section)
          Purpose: Sensory craving + expertise signaling
          Design: Split-screen editorial layout
          Stats: "12 origins. 26 seconds. One intention."
          ============================================================ */}
      <section
        id="coffee"
        className="relative w-full min-h-[100vh] overflow-hidden bg-espresso"
        aria-label="The Craft"
      >
        {/* Background Image - Mona Lisa */}
        <div className="absolute inset-0 z-0">
          <img
            src="/mona-lisa.png"
            alt=""
            className="w-full h-full object-cover opacity-60"
            style={{
              objectPosition: "50% 20%",
              filter: "sepia(15%) contrast(1.1) brightness(0.8)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/60" />
        </div>

        {/* Warm Accent Glow */}
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none translate-x-1/3"
          style={{ background: "radial-gradient(circle, var(--amber-glow) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 min-h-[100vh] flex items-center">
          <div className="w-full section-x py-20 md:py-28">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <div className="max-w-2xl">
                  {/* Minimal Content to reveal Mona Lisa - left aligned */}
                  <motion.div variants={fadeUpVariant}>
                    <p className="text-label mb-6">In the cup</p>

                    <h2 className="font-display text-3xl md:text-4xl text-crema mb-6 font-light">
                      Small lots, tight bar.
                    </h2>

                    {/* Stats - compact */}
                    <div className="flex gap-8 mb-8">
                      <div>
                        <p className="font-display text-2xl text-crema/90">12</p>
                        <p className="text-label text-crema/40">Origins</p>
                      </div>
                      <div>
                        <p className="font-display text-2xl text-crema/90">26s</p>
                        <p className="text-label text-crema/40">Extraction</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.div variants={fadeUpVariant}>
                      <a
                        href="/menu"
                        className="btn-ritual inline-flex items-center gap-3 group"
                      >
                        Explore
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: THE INVITATION (Visit)
          Purpose: Low-pressure conversion + anticipation building
          Design: Leonardo sketch as artistic background
          CTA: "Reserve your moment"
          ============================================================ */}
      <section
        id="visit"
        className="relative w-full min-h-[80vh] overflow-hidden border-t border-crema/[0.06]"
        aria-label="The Invitation"
      >
        {/* Leonardo Sketch Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/sketch.webp"
            alt=""
            className="w-full h-full object-cover opacity-35"
            style={{
              objectPosition: "60% 50%",
              filter: "sepia(25%) contrast(1.15) brightness(0.65)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/70 to-espresso/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-transparent to-espresso/80" />
        </div>

        {/* Warm ambient accents */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(196, 149, 106, 0.1) 0%, transparent 40%),
              radial-gradient(ellipse at 80% 80%, rgba(61, 43, 31, 0.15) 0%, transparent 35%)
            `,
          }}
        />

        {/* Content */}
        <div className="relative z-10 min-h-[80vh] flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
            >
              {/* Section Header */}
              <motion.div variants={fadeUpVariant} className="mb-12">
                <p className="text-label mb-4">Hours & Location</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-gradient-to-r from-crema/60 to-transparent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-glow/50" />
                </div>
              </motion.div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                {/* Left: Main Invitation */}
                <motion.div variants={fadeUpVariant} className="lg:col-span-7">
                  {/* Headline with highlights */}
                  <div className="space-y-3 mb-8">
                    <span
                      className="font-display text-espresso px-4 py-3 inline-block"
                      style={{
                        fontSize: "clamp(2rem, 5vw, 3.5rem)",
                        fontWeight: 300,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2,
                        backgroundColor: "rgba(232, 220, 203, 0.95)",
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      City centre.
                    </span>
                    <br />
                    <span
                      className="font-display text-espresso px-4 py-3 inline-block italic"
                      style={{
                        fontSize: "clamp(2rem, 5vw, 3.5rem)",
                        fontWeight: 200,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2,
                        backgroundColor: "rgba(232, 220, 203, 0.9)",
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      Opening soon.
                    </span>
                  </div>

                  {/* Description */}
                  <motion.p
                    variants={fadeUpVariant}
                    className="font-sans text-lg md:text-xl text-steam/70 leading-relaxed max-w-lg mb-10"
                  >
                    Exact line on opening day—email for the note first.
                    <br />
                    <span className="italic">We&apos;ll send you the address and a small map drawn by hand.</span>
                  </motion.p>

                  {/* CTA */}
                  <motion.div variants={fadeUpVariant}>
                    <a
                      href="mailto:hello@drinkdavinci.com?subject=Opening%20-%20da%20vinci"
                      className="btn-ritual inline-flex items-center gap-3 group"
                    >
                      Reserve your moment
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  </motion.div>
                </motion.div>

                {/* Right: Details Cards */}
                <motion.div variants={fadeUpVariant} className="lg:col-span-5 lg:pt-4">
                  <div className="space-y-6">
                    {/* Hours Card */}
                    <div className="bg-walnut/40 border border-crema/[0.08] px-6 py-5">
                      <p className="text-label text-crema/60 mb-3">Hours</p>
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-2xl text-crema">Tue — Sun</span>
                      </div>
                      <p className="font-sans text-lg text-steam/70 mt-1">8:00 — 18:00</p>
                    </div>

                    {/* Location Card */}
                    <div className="bg-walnut/40 border border-crema/[0.08] px-6 py-5">
                      <p className="text-label text-crema/60 mb-3">Location</p>
                      <p className="font-display text-xl text-crema">City centre</p>
                      <p className="font-sans text-sm text-steam/50 mt-2 italic">Street line at opening.</p>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-walnut/40 border border-crema/[0.08] px-6 py-5">
                      <p className="text-label text-crema/60 mb-3">Contact</p>
                      <a
                        href="mailto:hello@drinkdavinci.com"
                        className="font-sans text-base text-crema/80 hover:text-amber-glow transition-colors duration-300"
                      >
                        hello@drinkdavinci.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8: THE FAREWELL (Footer)
          Purpose: Memory anchoring + subtle re-engagement
          Single elegant closing line: "Return when you need silence."
          ============================================================ */}
      <footer className="w-full py-16 md:py-20 section-x border-t border-crema/[0.06] bg-espresso">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Brand + Closing Line */}
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center md:items-start gap-4">
            <span className="font-display text-xl text-crema/90">
              <span className="font-light">da</span>
              <span className="italic font-light ml-2">vinci</span>
            </span>
            <p className="font-sans text-sm text-steam/50 italic">
              Return when you need silence.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            variants={fadeUpVariant}
            className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-label text-crema/40"
            aria-label="Footer"
          >
            <Link href="/" className="hover:text-crema/70 transition-colors duration-500">
              Entrance
            </Link>
            <Link href="/philosophy" className="hover:text-crema/70 transition-colors duration-500">
              Philosophy
            </Link>
            <Link href="/menu" className="hover:text-crema/70 transition-colors duration-500">
              Collection
            </Link>
            <a href="mailto:hello@drinkdavinci.com" className="hover:text-crema/70 transition-colors duration-500">
              Contact
            </a>
          </motion.nav>

          {/* Copyright */}
          <motion.p variants={fadeUpVariant} className="text-label text-crema/30">
            © 2025
          </motion.p>
        </motion.div>
      </footer>
    </main>
  );
}
