import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { Mockup } from '../components/Mockup';
import { PrimaryButton, SecondaryButton } from '../components/Button';
import { navItems } from '../data/site';

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const statVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 + index * 0.08 },
  }),
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-grid">
      <Container className="relative pb-16 pt-6 sm:pb-20 lg:pb-24 lg:pt-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="glass-panel sticky top-3 z-20 mb-14 rounded-full px-4 py-3"
        >
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="IVOOST"
                className="h-9 w-auto [filter:invert(1)_hue-rotate(180deg)]"
              />
            </a>
            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted transition hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#contacto"
              className="rounded-full bg-gradient-to-r from-accent to-accent2 px-4 py-2 text-sm font-semibold text-[#03130a] shadow-glow transition hover:-translate-y-0.5"
            >
              Pedir presupuesto
            </a>
          </div>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={heroVariants}>
            <p className="section-kicker mb-4">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Diseño web premium para vender más
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-7xl">
              Tu negocio necesita algo más que{' '}
              <span className="gradient-text animate-gradient-x">seguidores</span>. Necesita clientes.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
              Diseñamos landing pages rápidas, modernas y enfocadas en conversión para transformar visitas en consultas y consultas en ventas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton type="button" onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}>
                Quiero mi pagina
              </PrimaryButton>
              <SecondaryButton href="#portfolio">Ver trabajos</SecondaryButton>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ['24/7', 'Disponible'],
                ['SEO', 'Optimización'],
                ['UX', 'Conversión'],
                ['Mobile', 'Responsive'],
              ].map(([title, copy], index) => (
                <motion.div
                  key={title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={statVariants}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-[1.4rem] p-4"
                >
                  <p className="text-2xl font-semibold text-ink">{title}</p>
                  <p className="mt-1 text-sm text-muted">{copy}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={heroVariants}>
            <Mockup />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
