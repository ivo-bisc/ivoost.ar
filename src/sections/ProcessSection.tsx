import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { processSteps } from '../data/site';

export function ProcessSection() {
  return (
    <section id="proceso" className="relative py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          title="Un flujo simple para avanzar sin fricción"
          copy="Trabajamos en cuatro etapas claras para que sepas siempre qué sigue y cómo evoluciona tu proyecto."
          align="center" kicker={''}        />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-[1.5rem] p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">{step.step}</p>
              <h3 className="mt-4 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.copy}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
