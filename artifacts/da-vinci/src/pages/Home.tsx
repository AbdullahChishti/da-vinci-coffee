import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col w-full overflow-hidden">
      
      {/* 1. HERO */}
      <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105"
          autoPlay
          muted
          loop
          playsInline
          poster=""
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <motion.div 
          className="relative z-20 flex flex-col items-center text-center px-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={fadeUpVariant}
            className="text-6xl md:text-8xl lg:text-[10rem] font-serif tracking-tight text-[#E8DCCB] font-light mb-6"
            data-testid="text-hero-title"
          >
            da vinci
          </motion.h1>
          <motion.p 
            variants={fadeUpVariant}
            className="text-lg md:text-2xl font-serif text-[#E8DCCB]/80 tracking-widest"
            data-testid="text-hero-tagline"
          >
            dreamers are welcome
          </motion.p>
        </motion.div>
      </section>

      {/* 2. CONCEPT */}
      <section
        className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1e1410 0%, #2e2018 45%, #3a2a1c 100%)" }}
      >
        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px",
          }}
        />
        {/* Warm amber glow — bottom left */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #c8841a 0%, transparent 70%)" }} />

        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center px-8 md:px-16 py-36 md:py-52"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariant}
        >
          <p className="text-xs tracking-[0.45em] uppercase text-[#E8DCCB]/30 mb-12 font-sans">
            our philosophy
          </p>
          <p
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.25] text-[#E8DCCB]"
            data-testid="text-concept"
            style={{ letterSpacing: "-0.01em" }}
          >
            A quiet space<br /> for coffee.
          </p>
          <div className="flex items-center justify-center gap-4 my-12">
            <div className="w-8 h-px bg-[#c8841a]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8841a]/60" />
            <div className="w-8 h-px bg-[#c8841a]/50" />
          </div>
          <p className="text-base md:text-xl font-serif font-light text-[#E8DCCB]/55 tracking-[0.18em]">
            Measured.&ensp;Observed.&ensp;Balanced.
          </p>
        </motion.div>
      </section>

      {/* 3. COFFEE */}
      <section
        className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #241608 0%, #2e1e0e 60%, #1e1208 100%)" }}
      >
        {/* Amber glow — top right */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.07] pointer-events-none"
          style={{ background: "radial-gradient(circle, #c8841a 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="order-2 md:order-1"
          >
            <h2 className="text-xs tracking-[0.4em] uppercase text-[#c8841a]/70 mb-8 font-sans" data-testid="text-coffee-subtitle">The Source</h2>
            <p className="text-2xl md:text-4xl font-serif leading-relaxed text-[#E8DCCB] mb-12" style={{ letterSpacing: "-0.01em" }}>
              Sourced with intellect.<br/>Roasted with intuition.<br/>Brewed with precision.
            </p>
            <p className="text-base text-[#E8DCCB]/55 leading-loose max-w-lg font-serif font-light">
              We approach each bean as a raw material demanding understanding before transformation. No rush. No excess. Just the essential notes drawn out through careful study.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="order-1 md:order-2 w-full aspect-[3/4] relative overflow-hidden"
            style={{ boxShadow: "0 0 80px rgba(0,0,0,0.6)" }}
          >
            <img 
              src="/coffee-image.png" 
              alt="Artisanal coffee preparation" 
              className="object-cover w-full h-full"
              loading="lazy"
              data-testid="img-coffee"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 4. EXPERIENCE */}
      <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          loading="lazy"
        >
          <source src="/experience-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20 z-10" />
        
        <motion.div 
          className="relative z-20 flex flex-col items-center text-center px-4 mt-auto mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <h2 className="text-4xl md:text-7xl font-serif text-[#E8DCCB] font-light" data-testid="text-experience">
            Placed, not dropped.
          </h2>
        </motion.div>
      </section>

      {/* 5. THE STUDY */}
      <section
        className="relative w-full py-32 md:py-48 px-6 flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #1a1008 0%, #201408 100%)" }}
      >
        {/* Centered amber bloom */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, #c8841a 0%, transparent 65%)" }} />
        </div>
        <motion.div 
          className="relative z-10 max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUpVariant}
            className="text-xs tracking-[0.45em] uppercase text-[#c8841a]/60 mb-10 font-sans"
          >
            loyalty
          </motion.p>
          <motion.h3 
            variants={fadeUpVariant}
            className="text-3xl md:text-5xl font-serif text-[#E8DCCB] font-light mb-6"
            data-testid="text-study-title"
            style={{ letterSpacing: "-0.01em" }}
          >
            The Study
          </motion.h3>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-8 h-px bg-[#c8841a]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8841a]/50" />
            <div className="w-8 h-px bg-[#c8841a]/40" />
          </div>
          <motion.p 
            variants={fadeUpVariant}
            className="text-lg md:text-xl font-serif font-light text-[#E8DCCB]/50 mb-14 tracking-wide"
            data-testid="text-study-body"
          >
            Complete 7 studies. Unlock a creation.
          </motion.p>
          <motion.button 
            variants={fadeUpVariant}
            className="px-14 py-4 border border-[#E8DCCB]/30 text-[#E8DCCB]/70 hover:border-[#E8DCCB] hover:text-[#E8DCCB] transition-all duration-500 font-serif tracking-[0.3em] text-xs uppercase"
            data-testid="button-join-study"
          >
            Begin
          </motion.button>
        </motion.div>
      </section>

      {/* 6. FOOTER */}
      <footer
        className="w-full py-14 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8"
        style={{ background: "#120d06", borderTop: "1px solid rgba(232,220,203,0.08)" }}
      >
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-serif text-[#E8DCCB]/80" data-testid="text-footer-brand">da vinci</span>
          <span className="text-xs tracking-[0.25em] text-[#E8DCCB]/30">dreamers are welcome</span>
        </div>
        <div className="flex gap-8 text-xs tracking-[0.2em] uppercase text-[#E8DCCB]/30 hover:[&>a]:text-[#E8DCCB]/70 [&>a]:transition-colors [&>a]:duration-300">
          <a href="#" data-testid="link-locations">Locations</a>
          <a href="#" data-testid="link-journal">Journal</a>
          <a href="#" data-testid="link-contact">Contact</a>
        </div>
      </footer>
    </main>
  );
}
