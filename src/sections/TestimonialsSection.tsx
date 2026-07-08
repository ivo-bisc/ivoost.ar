import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { testimonials } from '../data/site';

export function TestimonialsSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          kicker="Testimonios"
          title="Prueba social para acelerar la decisión"
          copy="Estos testimonios son ejemplos ficticios preparados para que luego puedas reemplazarlos por clientes reales sin rehacer la estructura."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-[1.6rem] p-6"
            >
              <p aria-hidden="true" className="gradient-text text-4xl font-serif leading-none">“</p>
              <blockquote className="-mt-2 text-base leading-7 text-ink/90">{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-ink">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
