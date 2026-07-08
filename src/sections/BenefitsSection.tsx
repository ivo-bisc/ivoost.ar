import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { benefits } from '../data/site';

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: index * 0.06 },
  }),
};

export function BenefitsSection() {
  return (
    <section id="beneficios" className="relative py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          kicker="Beneficios"
          title="Una landing bien hecha ordena tu oferta y mejora cada consulta"
          copy="No se trata solo de estética. Una landing page profesional concentra la atención, responde dudas y hace más fácil tomar acción."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="glass-card rounded-[1.5rem] p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
              </div>
              <p className="text-base leading-7 text-ink/90">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
