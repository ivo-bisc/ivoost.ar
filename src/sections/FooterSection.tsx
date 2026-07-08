import { Container } from '../components/Container';

export function FooterSection() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="gradient-text text-lg font-semibold tracking-[0.24em]">IVOOST</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted">
              Landing pages premium para negocios que quieren más consultas, más claridad y mejores ventas.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-muted sm:grid-cols-3">
            <a className="transition hover:text-accent" href="https://wa.me/5491162934239" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="transition hover:text-accent" href="https://www.instagram.com/ivoost.ar/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} IVOOST. Todos los derechos reservados.</p>
          <p>Diseño minimalista, tecnológico y orientado a conversión.</p>
        </div>
      </Container>
    </footer>
  );
}
