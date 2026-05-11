import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";

const EASE_LUXE = [0.22, 0.1, 0.22, 1] as const;

const MAIL_OPENING = "mailto:hello@drinkdavinci.com?subject=Opening%20-%20da%20vinci";
const MAIL_STUDY = "mailto:hello@drinkdavinci.com?subject=The%20Study";

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
            staggerChildren: 0.18,
            delayChildren: 0.1,
          },
    },
  };

  return { fadeUpVariant, staggerContainer, reduce };
}

export default function Home() {
  const { fadeUpVariant, staggerContainer, reduce } = useMotionVariants();
  const [heroVideoOk, setHeroVideoOk] = useState(true);
  const [roomVideoOk, setRoomVideoOk] = useState(true);
  const [visitVideoOk, setVisitVideoOk] = useState(true);

  const onHeroVideoError = useCallback(() => setHeroVideoOk(false), []);
  const onRoomVideoError = useCallback(() => setRoomVideoOk(false), []);
  const onVisitVideoError = useCallback(() => setVisitVideoOk(false), []);

  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[88svh] md:min-h-[92svh] flex items-center justify-center overflow-hidden"
        aria-label="Hero"
      >
        <div
          className="absolute inset-0 z-0 bg-espresso-deep"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 120% 80% at 50% 100%, #2a1c14 0%, transparent 55%), radial-gradient(ellipse 80% 50% at 70% 20%, color-mix(in srgb, var(--amber-accent) 10%, transparent) 0%, transparent 45%)",
          }}
        />
        {heroVideoOk ? (
          <video
            className="absolute inset-0 z-[1] w-full h-full object-cover scale-[1.03]"
            autoPlay={!reduce}
            muted
            loop
            playsInline
            poster="/hero-poster.svg"
            onError={onHeroVideoError}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        ) : null}
        <div
          className="absolute inset-0 z-[2] bg-gradient-to-b from-black/38 via-black/24 to-black/54 pointer-events-none"
          aria-hidden
        />

        <motion.div
          className="relative z-20 flex flex-col items-center text-center section-x max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUpVariant}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-serif tracking-tight text-cream font-light mb-5 md:mb-7"
            data-testid="text-hero-title"
          >
            da vinci
          </motion.h1>
          <motion.p
            variants={fadeUpVariant}
            className="text-base sm:text-lg md:text-2xl font-serif text-cream/85 tracking-wide max-w-xl leading-snug md:leading-relaxed px-1"
            data-testid="text-hero-tagline"
          >
            Espresso with space to think—not meeting fuel.
          </motion.p>
          <motion.p
            variants={fadeUpVariant}
            className="mt-4 md:mt-5 text-sm md:text-base font-sans text-cream/58 max-w-md leading-relaxed tracking-wide font-light"
          >
            Dim light, one drink—nothing hurried at the bar.
          </motion.p>
          <motion.div
            variants={fadeUpVariant}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
          >
            <a
              href="#visit"
              className="font-sans text-[0.6875rem] tracking-[0.2em] uppercase px-8 py-3.5 border border-cream/35 text-cream/88 hover:border-cream/55 hover:text-cream hover:bg-cream/5 transition-all duration-500"
            >
              Opening
            </a>
            <a
              href="#ritual"
              className="font-sans text-[0.6875rem] tracking-[0.2em] uppercase text-cream/55 hover:text-cream/80 transition-colors duration-500 underline-offset-8 decoration-cream/25 hover:decoration-cream/40 underline"
            >
              Approach
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Ritual Section - Minimal with Psychology Hooks */}
      <section
        id="ritual"
        className="relative scroll-mt-24 w-full min-h-[85vh] md:min-h-[90vh] overflow-hidden bg-espresso-raised"
        aria-label="How we work"
      >
        {/* Atmospheric Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&q=80"
            alt="Coffee atmosphere"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso-raised via-espresso-raised/95 to-espresso-raised" />
        </div>

        {/* Single Floating Light Orb */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: EASE_LUXE }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(200, 132, 26, 0.08) 0%, transparent 60%)" }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-[85vh] md:min-h-[90vh] flex items-center justify-center">
          <motion.div
            className="text-center section-x max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Section Label */}
            <motion.p 
              variants={fadeUpVariant} 
              className="text-[0.6875rem] tracking-[0.32em] uppercase text-amber-accent/70 mb-12 md:mb-16 font-sans"
            >
              How we work
            </motion.p>

            {/* Main Headline */}
            <motion.h2 
              variants={fadeUpVariant}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] text-cream tracking-display mb-8"
            >
              We light the room
              <br />
              <span className="text-cream/70">for the first sip.</span>
            </motion.h2>

            {/* Divider */}
            <motion.div variants={fadeUpVariant} className="flex items-center justify-center gap-4 my-10 md:my-12">
              <div className="w-12 h-px bg-cream/15" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-accent/50" />
              <div className="w-12 h-px bg-cream/15" />
            </motion.div>

            {/* Three Pillars - Minimal */}
            <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12">
              <span className="font-sans text-sm text-cream/50">Warm light</span>
              <span className="font-sans text-sm text-cream/30">·</span>
              <span className="font-sans text-sm text-cream/50">Low sound</span>
              <span className="font-sans text-sm text-cream/30">·</span>
              <span className="font-sans text-sm text-cream/50">Human pace</span>
            </motion.div>

            {/* Closing Statement */}
            <motion.p 
              variants={fadeUpVariant}
              className="font-serif text-xl md:text-2xl text-cream/80 font-light tracking-display"
            >
              The cup stays center stage.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Coffee Section - REDESIGNED */}
      <section
        id="coffee"
        className="relative scroll-mt-24 w-full min-h-[90vh] md:min-h-[95vh] overflow-hidden bg-espresso-panel"
        aria-label="Coffee"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1600&q=80"
            alt="Coffee preparation"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso-panel via-espresso-panel/90 to-espresso-panel/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-panel via-transparent to-espresso-panel/30" />
        </div>

        {/* Decorative Elements */}
        <div
          className="absolute top-1/4 right-0 w-[min(60vw,500px)] h-[min(60vw,500px)] rounded-full opacity-[0.08] pointer-events-none translate-x-1/3"
          style={{ background: "radial-gradient(circle, var(--amber-accent) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 min-h-[90vh] md:min-h-[95vh] flex items-center">
          <div className="w-full section-x py-20 md:py-28">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                {/* Section Label */}
                <motion.div variants={fadeUpVariant} className="mb-8 md:mb-12">
                  <p className="text-[0.6875rem] tracking-[0.32em] uppercase text-amber-accent/70 mb-4 font-sans">
                    In the cup
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-px bg-amber-accent/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-accent/50" />
                  </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                  {/* Text Content */}
                  <motion.div variants={fadeUpVariant} className="lg:col-span-7">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-light leading-[1.15] text-cream mb-8 tracking-display">
                      Small lots, tight bar—
                      <br />
                      <span className="text-cream/80">shots that land clean</span>
                      <br />
                      <span className="text-cream/60">and finish quiet.</span>
                    </h2>

                    <div className="flex items-center gap-6 mb-8">
                      <div className="h-px flex-1 max-w-[120px] bg-cream/15" />
                      <div className="w-2 h-2 rounded-full bg-amber-accent/40" />
                      <div className="h-px w-24 bg-cream/15" />
                    </div>

                    <p className="font-sans text-base md:text-lg text-cream/55 leading-relaxed max-w-xl mb-10">
                      Single-origin beans, precision roasting, and careful extraction. 
                      We work with small farms and local roasters who share our attention to detail.
                    </p>

                    {/* Stats/Details */}
                    <div className="grid grid-cols-3 gap-6 max-w-lg">
                      <div className="border-l border-cream/10 pl-4">
                        <p className="font-serif text-2xl md:text-3xl text-cream/90 mb-1">12+</p>
                        <p className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-cream/40">Origins</p>
                      </div>
                      <div className="border-l border-cream/10 pl-4">
                        <p className="font-serif text-2xl md:text-3xl text-cream/90 mb-1">Daily</p>
                        <p className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-cream/40">Roasted</p>
                      </div>
                      <div className="border-l border-cream/10 pl-4">
                        <p className="font-serif text-2xl md:text-3xl text-cream/90 mb-1">26s</p>
                        <p className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-cream/40">Extraction</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Featured Image */}
                  <motion.div
                    variants={fadeUpVariant}
                    className="lg:col-span-5 relative"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-espresso-deep ring-1 ring-cream/[0.08]">
                      <img
                        src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80"
                        alt="Espresso pour"
                        className="object-cover w-full h-full opacity-80 hover:opacity-90 transition-opacity duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso-panel/80 via-transparent to-transparent" />
                      
                      {/* Floating Label */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="font-sans text-[0.65rem] tracking-[0.25em] uppercase text-cream/50 mb-2">
                          Featured
                        </p>
                        <p className="font-serif text-lg text-cream/90">
                          Ethiopian Single Origin
                        </p>
                        <p className="font-sans text-sm text-cream/50 mt-1">
                          Floral · Citrus · Clean finish
                        </p>
                      </div>
                    </div>

                    {/* Decorative frame */}
                    <div className="absolute -top-4 -right-4 w-full h-full border border-cream/[0.06] pointer-events-none" />
                  </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div variants={fadeUpVariant} className="mt-16 md:mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <a
                    href="/menu"
                    className="group inline-flex items-center gap-3 font-sans text-[0.6875rem] tracking-[0.2em] uppercase px-8 py-4 border border-cream/30 text-cream/80 hover:border-cream/50 hover:text-cream hover:bg-cream/5 transition-all duration-500"
                  >
                    View Full Menu
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                  <p className="font-sans text-sm text-cream/40">
                    Rotating selection of single origins and blends
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Section - Minimal & Atmospheric */}
      <section
        id="room"
        className="relative scroll-mt-24 w-full min-h-[90vh] md:min-h-[95vh] overflow-hidden bg-espresso-deep"
        aria-label="The room"
      >
        {/* Full-bleed Background with slower, cinematic feel */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1600&q=80"
            alt="Cafe interior"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep via-espresso-deep/80 to-espresso-deep/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso-deep/60 via-transparent to-espresso-deep/60" />
        </div>

        {/* Ambient Glow - Warmth visualization */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: EASE_LUXE }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
            style={{ background: "radial-gradient(ellipse at center, rgba(200, 132, 26, 0.12) 0%, transparent 70%)" }}
          />
        </div>

        {/* Content - Centered and Minimal */}
        <div className="relative z-10 min-h-[90vh] md:min-h-[95vh] flex items-center justify-center">
          <motion.div
            className="text-center section-x max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Label */}
            <motion.p 
              variants={fadeUpVariant}
              className="text-[0.6875rem] tracking-[0.32em] uppercase text-amber-accent/60 mb-10 md:mb-12 font-sans"
            >
              The room
            </motion.p>

            {/* Main Headline - Progressive reveal through opacity */}
            <motion.h2 
              variants={fadeUpVariant}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.08] text-cream tracking-display mb-6"
            >
              A quieter room.
              <br />
              <span className="text-cream/80">Softer service.</span>
            </motion.h2>

            {/* Minimal divider */}
            <motion.div variants={fadeUpVariant} className="flex items-center justify-center gap-3 my-8">
              <div className="w-8 h-px bg-cream/20" />
              <div className="w-1 h-1 rounded-full bg-cream/30" />
              <div className="w-8 h-px bg-cream/20" />
            </motion.div>

            {/* Closing line */}
            <motion.p 
              variants={fadeUpVariant}
              className="font-sans text-base md:text-lg text-cream/50 tracking-wide"
            >
              Warm surfaces, low chatter.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Study Section */}
      <section
        id="study"
        className="relative scroll-mt-24 w-full py-24 md:py-36 section-x flex flex-col items-center justify-center overflow-hidden bg-espresso-near"
      >
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]"
          aria-hidden
        >
          <div
            className="w-[min(90vw,560px)] h-[min(90vw,560px)] rounded-full"
            style={{ background: "radial-gradient(circle, var(--amber-accent) 0%, transparent 65%)" }}
          />
        </div>
        <motion.div
          className="relative z-10 max-w-xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUpVariant}
            className="text-[0.6875rem] tracking-[0.32em] uppercase text-amber-accent/55 mb-6 md:mb-8 font-sans"
          >
            Regulars
          </motion.p>
          <motion.h3
            variants={fadeUpVariant}
            className="text-3xl md:text-5xl font-serif text-cream font-light mb-5 md:mb-6 tracking-display"
            data-testid="text-study-title"
          >
            The Study
          </motion.h3>
          <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
            <div className="w-10 h-px bg-amber-accent/35" />
            <div className="w-1 h-1 rounded-full bg-amber-accent/45" />
            <div className="w-10 h-px bg-amber-accent/35" />
          </div>
          <motion.p
            variants={fadeUpVariant}
            className="text-sm md:text-base font-sans font-light text-cream/58 mb-8 md:mb-10 max-w-sm mx-auto leading-relaxed"
            data-testid="text-study-body"
          >
            After enough visits, a small cup off the board—measured to how you return.
          </motion.p>
          <motion.div variants={fadeUpVariant}>
            <a
              href={MAIL_STUDY}
              className="inline-flex font-sans text-[0.6875rem] tracking-[0.2em] uppercase px-10 py-3.5 border border-cream/30 text-cream/82 hover:border-cream/48 hover:text-cream hover:bg-cream/5 transition-all duration-500"
              data-testid="button-join-study"
            >
              Request by email
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Visit Section */}
      <section
        id="visit"
        className="relative scroll-mt-24 w-full min-h-[min(32rem,78svh)] md:min-h-[min(36rem,72svh)] overflow-hidden border-t border-cream/[0.08]"
        aria-label="Visit"
      >
        <div className="absolute inset-0 z-0 bg-espresso" />
        {visitVideoOk ? (
          <video
            className="absolute inset-0 z-[1] h-full w-full object-cover opacity-[0.44] md:opacity-[0.5]"
            autoPlay={!reduce}
            muted
            loop
            playsInline
            poster="/visit-poster.svg"
            preload="metadata"
            onError={onVisitVideoError}
          >
            <source src="/visit-video.mp4" type="video/mp4" />
          </video>
        ) : null}
        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-espresso via-espresso/92 to-espresso/68 md:from-espresso/96 md:via-espresso/84 md:to-espresso/52"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-espresso/94 via-espresso/22 to-espresso/52"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-[min(32rem,78svh)] md:min-h-[min(36rem,72svh)] items-center py-20 md:py-28 section-x">
          <div className="max-w-3xl mx-auto text-center md:text-left md:flex md:items-start md:justify-between md:gap-16 w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUpVariant}
              className="md:flex-1"
            >
              <p className="text-[0.6875rem] tracking-[0.32em] uppercase text-cream/48 mb-5 font-sans">
                Hours &amp; opening
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-light text-cream leading-tight mb-5 tracking-display drop-shadow-[0_1px_24px_rgba(0,0,0,0.45)]">
                City centre. Opening soon.
              </h2>
              <p className="text-sm md:text-base font-sans font-light text-cream/60 leading-relaxed max-w-sm mx-auto md:mx-0 mb-8 drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)]">
                Exact line on opening day—email for the note first.
              </p>
              <a
                href={MAIL_OPENING}
                className="inline-flex font-sans text-[0.6875rem] tracking-[0.2em] uppercase px-8 py-3.5 border border-cream/38 text-cream/90 bg-espresso/40 backdrop-blur-[2px] hover:border-cream/55 hover:text-cream hover:bg-cream/5 transition-all duration-500"
              >
                Email for details
              </a>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUpVariant}
              className="mt-14 md:mt-0 md:text-right md:shrink-0"
            >
              <p className="text-[0.6875rem] tracking-[0.24em] uppercase text-cream/45 font-sans mb-3">Hours</p>
              <p className="font-sans text-sm font-light text-cream/60 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
                Tue–Sun
                <br />
                8:00 — 18:00
              </p>
              <p className="text-[0.6875rem] tracking-[0.24em] uppercase text-cream/45 font-sans mt-8 mb-3">
                Location
              </p>
              <p className="font-sans text-sm font-light text-cream/60 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
                City centre
                <br />
                <span className="text-cream/48">Street line at opening.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 md:py-14 section-x flex flex-col md:flex-row items-center justify-between gap-8 border-t border-cream/[0.08] bg-espresso-deep">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-serif text-cream/82" data-testid="text-footer-brand">
            da vinci
          </span>
          <span className="text-[0.6875rem] tracking-[0.16em] text-cream/48 max-w-xs text-center md:text-left leading-relaxed font-sans uppercase">
            Room to think. One drink at a time.
          </span>
          <span className="text-[0.65rem] tracking-[0.14em] text-cream/42 font-sans mt-1">drinkdavinci.com</span>
        </div>
        <nav
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[0.6875rem] tracking-[0.16em] uppercase font-sans text-cream/50"
          aria-label="Footer"
        >
          <a href="#visit" className="hover:text-cream/80 transition-colors duration-500" data-testid="link-locations">
            Location
          </a>
          <a href="#visit" className="hover:text-cream/80 transition-colors duration-500">
            Hours
          </a>
          <a href="#ritual" className="hover:text-cream/80 transition-colors duration-500" data-testid="link-journal">
            How we work
          </a>
          <a href="mailto:hello@drinkdavinci.com" className="hover:text-cream/80 transition-colors duration-500" data-testid="link-contact">
            Contact
          </a>
        </nav>
      </footer>
    </main>
  );
}
