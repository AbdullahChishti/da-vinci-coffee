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
      <section className="w-full py-32 md:py-48 px-6 md:px-12 flex items-center justify-center">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <p 
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-tight tracking-wide text-primary"
            data-testid="text-concept"
          >
            A quiet space for coffee.<br/>Measured. Observed. Balanced.
          </p>
        </motion.div>
      </section>

      {/* 3. COFFEE */}
      <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#E1D4C2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="order-2 md:order-1"
          >
            <h2 className="text-sm tracking-[0.3em] uppercase text-primary/60 mb-8" data-testid="text-coffee-subtitle">The Source</h2>
            <p className="text-2xl md:text-4xl font-serif leading-relaxed text-primary mb-12">
              Sourced with intellect.<br/>Roasted with intuition.<br/>Brewed with precision.
            </p>
            <p className="text-lg text-primary/80 leading-loose max-w-lg">
              We approach each bean as a raw material demanding understanding before transformation. No rush. No excess. Just the essential notes drawn out through careful study.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="order-1 md:order-2 w-full aspect-[3/4] relative overflow-hidden bg-primary/5"
          >
            <img 
              src="/coffee-image.png" 
              alt="Artisanal coffee preparation" 
              className="object-cover w-full h-full"
              loading="lazy"
              data-testid="img-coffee"
            />
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
      <section className="w-full py-32 md:py-48 px-6 flex flex-col items-center justify-center border-b border-primary/10">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h3 
            variants={fadeUpVariant}
            className="text-2xl md:text-4xl font-serif text-primary mb-8"
            data-testid="text-study-title"
          >
            The Study
          </motion.h3>
          <motion.p 
            variants={fadeUpVariant}
            className="text-lg md:text-xl text-primary/70 mb-12"
            data-testid="text-study-body"
          >
            Complete 7 studies. Unlock a creation.
          </motion.p>
          <motion.button 
            variants={fadeUpVariant}
            className="px-12 py-4 border border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-500 font-serif tracking-widest text-sm uppercase"
            data-testid="button-join-study"
          >
            Begin
          </motion.button>
        </motion.div>
      </section>

      {/* 6. FOOTER */}
      <footer className="w-full py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-primary">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-serif" data-testid="text-footer-brand">da vinci</span>
          <span className="text-xs tracking-[0.2em] opacity-60">dreamers are welcome</span>
        </div>
        <div className="flex gap-8 text-sm opacity-80 hover:[&>a]:opacity-100 [&>a]:transition-opacity">
          <a href="#" data-testid="link-locations">Locations</a>
          <a href="#" data-testid="link-journal">Journal</a>
          <a href="#" data-testid="link-contact">Contact</a>
        </div>
      </footer>
    </main>
  );
}
