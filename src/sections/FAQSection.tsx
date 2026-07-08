import { Container } from '../components/Container';
import { FAQItem } from '../components/FAQItem';
import { SectionHeading } from '../components/SectionHeading';
import { faqs } from '../data/site';

export function FAQSection() {
  return (
    <section id="faq" className="relative py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          kicker="Preguntas frecuentes"
          title="Resolvemos las dudas antes de que frenen la decisión"
          copy="Un visitante con información clara avanza más rápido. Estas respuestas están pensadas para reducir fricción y dejar todo más transparente."
          align="center"
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </Container>
    </section>
  );
}
