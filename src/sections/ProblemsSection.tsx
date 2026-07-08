import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { problems } from '../data/site';

export function ProblemsSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            kicker="Problemas que resolvemos"
            title="Cuando la presencia digital no acompaña, el negocio pierde ritmo"
            copy="Una web antigua, lenta o inexistente hace que la inversión en contenido, anuncios o referencias se desperdicie. IVOOST cierra esa fuga de oportunidades."
          />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-6 md:p-8"
          >
            <div className="grid gap-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex items-start gap-4 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 transition hover:border-accent/25 hover:bg-white/[0.06]"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent2 text-sm font-bold text-[#03130a]">
                    {index + 1}
                  </span>
                  <p className="text-ink/85">{problem}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
