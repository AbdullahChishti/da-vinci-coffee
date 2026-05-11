import { motion, useReducedMotion } from "framer-motion";

const EASE_LUXE = [0.22, 0.1, 0.22, 1] as const;

function useMotionVariants() {
  const reduce = useReducedMotion();

  const fadeUpVariant = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.8, ease: EASE_LUXE },
    },
  };

  const staggerContainer = {
    hidden: { opacity: reduce ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: reduce
        ? { duration: 0 }
        : {
            staggerChildren: 0.1,
            delayChildren: 0.05,
          },
    },
  };

  return { fadeUpVariant, staggerContainer };
}

interface MenuItemProps {
  name: string;
  price: string;
  description: string;
}

function MenuItem({ name, price, description }: MenuItemProps) {
  return (
    <div className="group">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="font-serif text-xl md:text-[1.375rem] text-cream group-hover:text-cream/90 transition-colors duration-300">
          {name}
        </h3>
        <span className="font-sans text-[0.9375rem] text-amber-accent/80">{price}</span>
      </div>
      <p className="font-sans text-sm text-cream/50 group-hover:text-cream/60 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
}

interface MenuSectionProps {
  title: string;
  items: MenuItemProps[];
  bgClass: string;
}

function MenuSection({ title, items, bgClass }: MenuSectionProps) {
  const { fadeUpVariant, staggerContainer } = useMotionVariants();

  return (
    <section className={`py-16 md:py-20 section-x ${bgClass}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeUpVariant} className="mb-10 md:mb-12">
          <p className="text-[0.6875rem] tracking-[0.32em] uppercase text-amber-accent/70 mb-3 font-sans">
            {title}
          </p>
          <div className="w-16 h-px bg-amber-accent/30" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {items.map((item, index) => (
            <motion.div key={index} variants={fadeUpVariant}>
              <MenuItem {...item} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const espressoItems: MenuItemProps[] = [
  { name: "Espresso", price: "€3.50", description: "Single origin, pure intensity" },
  { name: "Doppio", price: "€4.50", description: "Double shot, double pleasure" },
  { name: "Macchiato", price: "€4.00", description: "Marked with a touch of foam" },
  { name: "Cortado", price: "€4.50", description: "Equal parts coffee and warmth" },
  { name: "Cappuccino", price: "€5.00", description: "Morning ritual perfected" },
  { name: "Flat White", price: "€5.50", description: "Silky microfoam embrace" },
];

const specialtyItems: MenuItemProps[] = [
  { name: "Pour Over", price: "€6.00", description: "Hand-poured precision" },
  { name: "Chemex", price: "€7.50", description: "Clean, bright, elegant" },
  { name: "Cold Brew", price: "€5.50", description: "12-hour steeped smoothness" },
  { name: "Nitro Cold Brew", price: "€6.50", description: "Cascading creaminess" },
];

const pastryItems: MenuItemProps[] = [
  { name: "Butter Croissant", price: "€4.00", description: "Flaky, golden, perfect" },
  { name: "Pain au Chocolat", price: "€4.50", description: "Chocolate wrapped in butter" },
  { name: "Tartine", price: "€6.00", description: "Sourdough, seasonal toppings" },
  { name: "Seasonal Cake", price: "€7.00", description: "Ask your barista" },
];

export default function Menu() {
  const { fadeUpVariant, staggerContainer } = useMotionVariants();

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-espresso">
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1080&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        <motion.div
          className="relative z-20 flex flex-col items-center text-center section-x max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUpVariant}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-cream font-light mb-4"
          >
            The Collection
          </motion.h1>
          <motion.p
            variants={fadeUpVariant}
            className="text-base md:text-lg font-serif text-cream/70 tracking-wide"
          >
            Every cup tells a story
          </motion.p>
        </motion.div>
      </section>

      {/* Menu Sections */}
      <MenuSection title="Espresso Classics" items={espressoItems} bgClass="bg-espresso" />
      <MenuSection title="Specialty Brews" items={specialtyItems} bgClass="bg-espresso-deep" />
      <MenuSection title="Pastry & Pairing" items={pastryItems} bgClass="bg-espresso-panel" />

      {/* Note Section */}
      <section className="py-16 md:py-20 section-x bg-espresso-raised border-t border-cream/[0.06]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-cream/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-accent/40" />
            <div className="w-8 h-px bg-cream/20" />
          </div>
          <p className="font-sans text-sm text-cream/50 leading-relaxed">
            All prices inclusive of service. Alternative milks available upon request.
            <br />
            Seasonal offerings rotate monthly—ask your barista for details.
          </p>
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
          <a href="/philosophy" className="hover:text-cream/80 transition-colors duration-500">
            Philosophy
          </a>
          <a href="mailto:hello@drinkdavinci.com" className="hover:text-cream/80 transition-colors duration-500">
            Contact
          </a>
        </nav>
      </footer>
    </main>
  );
}
