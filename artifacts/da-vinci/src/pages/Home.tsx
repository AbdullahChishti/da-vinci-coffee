import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { useCallback, useState, type ReactNode } from "react";
import { Link } from "wouter";

const EASE_LUXE = [0.22, 0.1, 0.22, 1] as const;

const MAIL_OPENING = "mailto:hello@drinkdavinci.com?subject=Opening%20-%20da%20vinci";
const MAIL_STUDY = "mailto:hello@drinkdavinci.com?subject=The%20Study";

function useMotionVariants() {
  const reduce = useReducedMotion();

  const fadeUpVariant = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.9, ease: EASE_LUXE },
    },
  };

  const staggerContainer = {
    hidden: { opacity: reduce ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: reduce
        ? { duration: 0 }
        : {
            staggerChildren: 0.22,
            delayChildren: 0.06,
          },
    },
  };

  return { fadeUpVariant, staggerContainer, reduce };
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="font-sans text-[0.6875rem] tracking-[0.2em] uppercase text-cream/60 hover:text-cream/90 transition-colors duration-500"
    >
      {children}
    </a>
  );
}

export default function Home() {
  const { fadeUpVariant, staggerContainer, reduce } = useMotionVariants();
  const [heroVideoOk, setHeroVideoOk] = useState(true);
  const [roomVideoOk, setRoomVideoOk] = useState(true);
  const [visitVideoOk, setVisitVideoOk] = useState(true);
  const [coffeeImgOk, setCoffeeImgOk] = useState(true);

  const onHeroVideoError = useCallback(() => setHeroVideoOk(false), []);
  const onRoomVideoError = useCallback(() => setRoomVideoOk(false), []);
  const onVisitVideoError = useCallback(() => setVisitVideoOk(false), []);
  const onCoffeeImgError = useCallback(() => setCoffeeImgOk(false), []);

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col w-full overflow-x-hidden">
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between section-x pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 md:py-5 border-b border-cream/[0.08] bg-espresso/75 backdrop-blur-md"
        style={{ paddingRight: "max(1.25rem, env(safe-area-inset-right))" }}
      >
        <Link
          href="/"
          className="font-serif text-lg md:text-xl text-cream/85 tracking-tight hover:text-cream transition-colors duration-500"
          aria-label="da vinci — home"
        >
          da vinci
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 md:gap-x-10" aria-label="Primary">
          <NavLink href="#ritual">How we work</NavLink>
          <NavLink href="#coffee">Coffee</NavLink>
          <NavLink href="#room">The Room</NavLink>
          <NavLink href="#study">Study</NavLink>
          <NavLink href="#visit">Visit</NavLink>
        </nav>
      </header>

      <section
        className="relative w-full min-h-[88svh] md:min-h-[92svh] flex items-center justify-center overflow-hidden pt-20"
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
              className="font-sans text-[0.6875rem] tracking-[0.2em] uppercase px-8 py-3.5 border border-cream/35 text-cream/88 hover:border-cream/55 hover:text-cream transition-colors duration-500"
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

      <section
        id="ritual"
        className="relative scroll-mt-24 w-full min-h-[72vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-espresso-raised"
      >
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[min(100vw,520px)] h-[min(100vw,520px)] rounded-full opacity-[0.07] pointer-events-none -translate-x-1/4 translate-y-1/4"
          style={{ background: "radial-gradient(circle, var(--amber-accent) 0%, transparent 70%)" }}
        />

        <motion.div
          className="relative z-10 max-w-2xl mx-auto text-center section-x py-24 md:py-36"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
        >
          <p className="text-[0.6875rem] tracking-[0.32em] uppercase text-cream/45 mb-8 md:mb-10 font-sans">
            How we work
          </p>
          <p
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-[1.2] text-cream tracking-display"
            data-testid="text-concept"
          >
            We light the room for the first sip.
          </p>
          <div className="flex items-center justify-center gap-4 my-8 md:my-10">
            <div className="w-10 h-px bg-amber-accent/40" />
            <div className="w-1 h-1 rounded-full bg-amber-accent/50" />
            <div className="w-10 h-px bg-amber-accent/40" />
          </div>
          <p className="text-sm md:text-base font-sans font-light text-cream/58 leading-relaxed max-w-md mx-auto">
            Low sound, human pace—the cup stays center stage.
          </p>
        </motion.div>
      </section>

      <section
        id="coffee"
        className="relative scroll-mt-24 w-full py-24 md:py-32 section-x overflow-hidden bg-espresso-panel"
        aria-label="Coffee"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-1/2 right-0 w-[min(100vw,28rem)] h-[min(100vw,28rem)] -translate-y-1/2 translate-x-1/3 rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, var(--amber-accent) 0%, transparent 68%)" }}
          aria-hidden
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 lg:gap-24 items-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="order-2 md:order-1"
          >
            <h2
              className="text-[0.6875rem] tracking-[0.32em] uppercase text-amber-accent/55 mb-8 md:mb-10 font-sans"
              data-testid="text-coffee-subtitle"
            >
              In the cup
            </h2>
            <p className="text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl font-serif leading-[1.28] md:leading-[1.32] text-cream mb-8 md:mb-10 max-w-xl tracking-display">
              Small lots, tight bar—shots that land clean and finish quiet.
            </p>
            <div className="flex items-center gap-4 mb-0 max-w-md">
              <div className="h-px flex-1 bg-cream/12" />
              <div className="w-1 h-1 rounded-full bg-amber-accent/45 shrink-0" />
              <div className="h-px w-12 bg-cream/12 shrink-0" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="order-1 md:order-2 w-full aspect-[3/4] md:aspect-[4/5] max-md:max-w-[min(100%,22.5rem)] max-md:mx-auto relative overflow-hidden bg-espresso-deep ring-1 ring-cream/[0.07]"
          >
            {coffeeImgOk ? (
              <img
                src="/coffee-image.svg"
                alt="Espresso pour at da vinci"
                className="object-cover w-full h-full"
                loading="lazy"
                data-testid="img-coffee"
                onError={onCoffeeImgError}
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center"
                role="img"
                aria-label="Coffee — visual placeholder"
              >
                <div
                  className="w-3/5 h-3/5 rounded-full opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle at 40% 40%, color-mix(in srgb, var(--cream) 14%, transparent) 0%, transparent 50%), radial-gradient(circle at 60% 55%, color-mix(in srgb, var(--amber-accent) 18%, transparent) 0%, transparent 40%)",
                  }}
                />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/28 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      <section
        id="room"
        className="relative scroll-mt-24 w-full min-h-[75svh] md:min-h-[88svh] flex flex-col items-center justify-end md:justify-center overflow-hidden bg-black pb-16 md:pb-0"
        aria-label="The room"
      >
        <div className="absolute inset-0 z-0 bg-overlay-ink" />
        {roomVideoOk ? (
          <video
            className="absolute inset-0 z-[1] w-full h-full object-cover opacity-[0.58]"
            autoPlay={!reduce}
            muted
            loop
            playsInline
            poster="/experience-poster.svg"
            onError={onRoomVideoError}
          >
            <source src="/experience-video.mp4" type="video/mp4" />
          </video>
        ) : null}
        <div
          className="absolute inset-0 z-[2] bg-gradient-to-t from-black via-black/46 to-black/24"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[3] bg-gradient-to-br from-black/14 via-transparent to-black/32 pointer-events-none"
          aria-hidden
        />

        <motion.div
          className="relative z-20 flex flex-col items-center text-center section-x max-w-3xl mx-auto md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream font-light leading-tight tracking-display"
            data-testid="text-experience"
          >
            A quieter room. Softer service.
          </h2>
          <p className="mt-5 md:mt-6 text-sm md:text-base font-sans font-light text-cream/58 max-w-md leading-relaxed">
            Warm surfaces, low chatter—the cup isn&apos;t competing for your attention.
          </p>
        </motion.div>
      </section>

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
              className="inline-flex font-sans text-[0.6875rem] tracking-[0.2em] uppercase px-10 py-3.5 border border-cream/30 text-cream/82 hover:border-cream/48 hover:text-cream transition-colors duration-500"
              data-testid="button-join-study"
            >
              Request by email
            </a>
          </motion.div>
        </motion.div>
      </section>

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
                className="inline-flex font-sans text-[0.6875rem] tracking-[0.2em] uppercase px-8 py-3.5 border border-cream/38 text-cream/90 bg-espresso/40 backdrop-blur-[2px] hover:border-cream/55 hover:text-cream transition-colors duration-500"
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
