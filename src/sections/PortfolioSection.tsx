import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioProjects } from '../data/site';

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          kicker="Trabajos realizados"
          title="Portfolio pensado para mostrar claridad, confianza y resultados"
          copy="Cada proyecto se presenta como una historia simple: qué hace el negocio, qué tecnología lo potencia y qué impacto genera."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
