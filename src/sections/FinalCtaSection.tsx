import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { PrimaryButton, SecondaryButton } from '../components/Button';

const whatsappPhone = '5491162934239';

const inputClasses =
  'rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-ink outline-none transition placeholder:text-muted focus:border-accent/50 focus:bg-white/[0.09]';

export function FinalCtaSection() {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = encodeURIComponent(
      `Hola IVOOST, quiero pedir presupuesto.\n\nNombre: ${name}\nNegocio: ${business}\nMensaje: ${message}`,
    );
    window.open(`https://wa.me/${whatsappPhone}?text=${text}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="contacto" className="relative py-20 sm:py-24 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="glass-panel grid gap-10 p-6 lg:grid-cols-[1fr_0.9fr] lg:p-10"
        >
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 animate-blob rounded-full bg-accent/15 blur-[100px]" />

          <div className="relative">
            <p className="section-kicker">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              CTA final
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              La atención está en redes. Las ventas ocurren en tu web.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted md:text-lg">
              Hablemos y construyamos una landing page que convierta mejor, ordene tu propuesta y te ayude a recibir consultas reales.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton type="submit" form="contact-form">
                Enviar por WhatsApp
              </PrimaryButton>
              <SecondaryButton href="mailto:hola@ivoost.ar">Escribir por email</SecondaryButton>
            </div>
          </div>

          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="relative rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm lg:p-6"
          >
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm font-medium text-ink/80">
                Nombre
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className={inputClasses}
                  placeholder="Tu nombre"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink/80">
                Negocio
                <input
                  value={business}
                  onChange={(event) => setBusiness(event.target.value)}
                  className={inputClasses}
                  placeholder="Nombre de tu negocio"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink/80">
                Mensaje
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className={`min-h-32 ${inputClasses}`}
                  placeholder="Cuéntanos qué necesitas"
                  required
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-[#03130a] shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg"
              >
                Quiero mi propuesta
              </button>
            </div>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
