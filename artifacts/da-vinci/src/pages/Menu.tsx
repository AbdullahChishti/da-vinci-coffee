import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";

const EASE_LUXE = [0.22, 0.1, 0.22, 1] as const;

function useMotionVariants() {
  const reduce = useReducedMotion();

  const fadeUpVariant = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
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
            staggerChildren: 0.1,
            delayChildren: 0.08,
          },
    },
  };

  return { fadeUpVariant, staggerContainer };
}

interface MenuItemProps {
  name: string;
  price: string;
  description: string;
  origin?: string;
}

function MenuItem({ name, price, description, origin }: MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group py-6 border-b border-crema/[0.06] last:border-b-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="font-display text-xl md:text-[1.375rem] text-crema font-light group-hover:text-crema/90 transition-colors duration-300">
          {name}
        </h3>
        <motion.span
          className="font-sans text-[0.9375rem] text-amber-glow/70"
          animate={{ x: isHovered ? -4 : 0 }}
          transition={{ duration: 0.3, ease: EASE_LUXE }}
        >
          {price}
        </motion.span>
      </div>
      <p className="font-sans text-sm text-steam/50 group-hover:text-steam/65 transition-colors duration-300 leading-relaxed">
        {description}
      </p>
      {origin && (
        <p className="font-sans text-xs text-amber-glow/40 mt-2 tracking-wide">
          {origin}
        </p>
      )}
    </div>
  );
}

interface MenuSectionProps {
  title: string;
  subtitle?: string;
  items: MenuItemProps[];
  bgClass: string;
  alignment?: "left" | "center" | "right";
}

function MenuSection({ title, subtitle, items, bgClass, alignment = "left" }: MenuSectionProps) {
  const { fadeUpVariant, staggerContainer } = useMotionVariants();

  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <section className={`py-20 md:py-28 section-x ${bgClass}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeUpVariant} className={`flex flex-col ${alignmentClasses[alignment]} mb-12 md:mb-16`}>
          <p className="text-label mb-3">{title}</p>
          {subtitle && (
            <p className="font-sans text-sm text-steam/50 max-w-md">
              {subtitle}
            </p>
          )}
          <div className={`flex items-center gap-4 mt-4 ${alignment === "center" ? "justify-center" : alignment === "right" ? "justify-end" : ""}`}>
            <div className="w-12 h-[1px] bg-amber-glow/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-glow/40" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
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
  { name: "Espresso", price: "€3.50", description: "Single origin, pure intensity", origin: "Rotating selection" },
  { name: "Doppio", price: "€4.50", description: "Double shot, full expression", origin: "Rotating selection" },
  { name: "Macchiato", price: "€4.00", description: "Marked with a touch of foam", origin: "Traditional" },
  { name: "Cortado", price: "€4.50", description: "Equal parts coffee and warmth", origin: "Spanish tradition" },
  { name: "Cappuccino", price: "€5.00", description: "Morning ritual perfected", origin: "1:1:1 ratio" },
  { name: "Flat White", price: "€5.50", description: "Silky microfoam embrace", origin: "Australian style" },
];

const specialtyItems: MenuItemProps[] = [
  { name: "Pour Over", price: "€6.00", description: "Hand-poured precision, single cup", origin: "V60 method" },
  { name: "Chemex", price: "€7.50", description: "Clean, bright, elegant—serves two", origin: "Hourglass extraction" },
  { name: "Cold Brew", price: "€5.50", description: "12-hour steeped smoothness", origin: "Slow extraction" },
  { name: "Nitro Cold Brew", price: "€6.50", description: "Cascading creaminess on tap", origin: "Nitrogen-infused" },
];

const pastryItems: MenuItemProps[] = [
  { name: "Butter Croissant", price: "€4.00", description: "Flaky, golden, perfect", origin: "Daily from our baker" },
  { name: "Pain au Chocolat", price: "€4.50", description: "Chocolate wrapped in butter", origin: "Daily from our baker" },
  { name: "Tartine", price: "€6.00", description: "Sourdough, seasonal toppings", origin: "Changes weekly" },
  { name: "Seasonal Cake", price: "€7.00", description: "Ask your barista for today's offering", origin: "Small batches" },
];

const alternativeItems: MenuItemProps[] = [
  { name: "Oat Milk", price: "+€0.50", description: "Barista blend, creamy texture" },
  { name: "Almond Milk", price: "+€0.50", description: "House-made, lightly sweet" },
  { name: "Matcha", price: "€5.50", description: "Ceremonial grade, whisked to order", origin: "Uji, Japan" },
  { name: "Hot Chocolate", price: "€5.00", description: "70% cacao, minimal sugar", origin: "Single origin cacao" },
];

export default function Menu() {
  const { fadeUpVariant, staggerContainer } = useMotionVariants();

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-espresso">
      {/* ============================================================
          HERO SECTION - The Collection
          ============================================================ */}
      <section className="relative w-full min-h-[60vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/85 to-espresso" />
        </div>

        {/* Warm vignette */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(13, 10, 8, 0.7) 100%)",
          }}
        />

        <motion.div
          className="relative z-20 flex flex-col items-center text-center section-x max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUpVariant} className="text-label mb-6">
            The Collection
          </motion.p>

          <motion.h1
            variants={fadeUpVariant}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-crema font-light mb-6"
          >
            What we serve
          </motion.h1>

          <motion.div variants={fadeUpVariant} className="section-divider mb-8">
            <span className="line" />
            <span className="point" />
            <span className="line" />
          </motion.div>

          <motion.p variants={fadeUpVariant} className="text-poetry max-w-md">
            Every cup is a conversation between farmer, roaster, and barista.
          </motion.p>
        </motion.div>
      </section>

      {/* ============================================================
          ESPRESSO CLASSICS
          ============================================================ */}
      <MenuSection
        title="Espresso Classics"
        subtitle="The foundation of our craft—precision-extracted, served with intention"
        items={espressoItems}
        bgClass="bg-espresso"
      />

      {/* ============================================================
          SPECIALTY BREWS
          ============================================================ */}
      <MenuSection
        title="Specialty Brews"
        subtitle="For those who want to taste the full story of the bean"
        items={specialtyItems}
        bgClass="bg-walnut"
      />

      {/* ============================================================
          PASTRY & PAIRING
          ============================================================ */}
      <MenuSection
        title="Pastry & Pairing"
        subtitle="Made daily, served warm, best enjoyed slowly"
        items={pastryItems}
        bgClass="bg-espresso"
      />

      {/* ============================================================
          ALTERNATIVES
          ============================================================ */}
      <section className="py-20 md:py-28 section-x bg-walnut border-t border-crema/[0.06]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUpVariant} className="text-center mb-12">
            <p className="text-label mb-3">Alternatives</p>
            <p className="font-sans text-sm text-steam/50">For those who prefer a different path</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {alternativeItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="p-6 border border-crema/[0.06] hover:border-amber-glow/20 transition-colors duration-500"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-lg text-crema font-light">{item.name}</h3>
                  <span className="font-sans text-sm text-amber-glow/70">{item.price}</span>
                </div>
                <p className="font-sans text-sm text-steam/50">{item.description}</p>
                {item.origin && (
                  <p className="font-sans text-xs text-amber-glow/40 mt-2">{item.origin}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ============================================================
          SEASONAL NOTE
          ============================================================ */}
      <section className="py-20 md:py-28 section-x bg-espresso border-t border-crema/[0.06]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUpVariant} className="text-center">
            <div className="section-divider mb-8">
              <span className="line" />
              <span className="point" />
              <span className="line" />
            </div>

            <p className="font-display text-xl text-crema/70 font-light italic mb-6">
              &ldquo;The menu changes with the seasons, as coffee should.&rdquo;
            </p>

            <p className="font-sans text-sm text-steam/50 leading-relaxed max-w-lg mx-auto mb-8">
              All prices inclusive of service. Alternative milks available upon request.
              Our current single origin rotates monthly—ask your barista about what&apos;s in the grinder today.
            </p>

            <div className="flex items-center justify-center gap-8 text-label text-crema/40">
              <span>Seasonal offerings</span>
              <span className="w-1 h-1 rounded-full bg-amber-glow/30" />
              <span>Ask your barista</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================
          FEATURED ORIGIN
          ============================================================ */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden bg-walnut">
        <div className="relative z-10 section-x">
          <motion.div
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Image */}
            <motion.div variants={fadeUpVariant} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80"
                  alt="Coffee origin"
                  className="object-cover w-full h-full opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-walnut/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-crema/[0.06] pointer-events-none" />
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeUpVariant}>
              <p className="text-label mb-6">Current Selection</p>

              <h2 className="font-display text-3xl md:text-4xl text-crema font-light mb-4">
                Ethiopian Yirgacheffe
              </h2>

              <p className="font-sans text-sm text-amber-glow/60 tracking-wide mb-6">
                Gedeo Zone · Washed Process · 2,000m elevation
              </p>

              <p className="font-sans text-base text-steam/60 leading-relaxed mb-6">
                This lot arrives from a small cooperative in the highlands of southern Ethiopia.
                Expect delicate florals, bright citrus, and a tea-like finish that lingers.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {["Jasmine", "Lemon", "Black tea"].map((note) => (
                  <span
                    key={note}
                    className="font-sans text-xs tracking-wide text-crema/50 px-3 py-1.5 border border-crema/[0.08]"
                  >
                    {note}
                  </span>
                ))}
              </div>

              <p className="font-display text-lg text-crema/70 italic">
                &ldquo;Available as espresso or pour over—ask for a side-by-side comparison.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <section className="py-20 md:py-28 section-x bg-espresso border-t border-crema/[0.06]">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUpVariant}
            className="font-display text-2xl sm:text-3xl text-crema font-light mb-8"
          >
            Visit us to experience the full collection
          </motion.h2>

          <motion.div variants={fadeUpVariant}>
            <Link href="/#visit" className="btn-ritual">
              Reserve your moment
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
            <span className="text-label text-crema/40">Via Roma 42, Milano</span>
          </motion.div>

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
            <a href="mailto:hello@drinkdavinci.com" className="hover:text-crema/70 transition-colors duration-500">
              Contact
            </a>
          </motion.nav>
        </motion.div>
      </footer>
    </main>
  );
}
