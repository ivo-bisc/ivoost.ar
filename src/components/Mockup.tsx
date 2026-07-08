import { motion } from 'framer-motion';

export function Mockup() {
  return (
    <motion.div
      whileHover={{ rotateX: -2, rotateY: 2 }}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      className="glass-panel p-4"
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 animate-float rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 animate-float-slow rounded-full bg-accent2/20 blur-3xl" />

      <div className="relative space-y-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">IVOOST Studio</p>
            <p className="mt-1 text-sm font-semibold text-ink">Landing page de alto rendimiento</p>
          </div>
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-glow" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent2" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent3" />
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="glass-card rounded-[1.75rem] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Conversion focus</p>
            <h3 className="mt-4 max-w-sm text-3xl font-semibold leading-tight text-ink">
              Una web clara, rápida y pensada para convertir desde el primer scroll.
            </h3>
            <div className="mt-8 grid grid-cols-3 gap-3 text-sm text-ink/80">
              {['WhatsApp', 'Formulario', 'SEO'].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-4 text-center transition hover:border-accent/30 hover:bg-white/[0.08]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass-card rounded-[1.5rem] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Resultado</p>
              <p className="mt-3 text-3xl font-semibold gradient-text">+42%</p>
              <p className="mt-2 text-sm leading-6 text-muted">Más consultas calificadas con una landing optimizada.</p>
            </div>
            <div className="glass-card rounded-[1.5rem] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Mobile ready</p>
              <div className="mt-3 rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-3">
                <div className="h-2 w-24 rounded-full bg-white/10" />
                <div className="mt-3 h-24 rounded-2xl bg-[linear-gradient(135deg,rgba(143,227,176,0.24),rgba(125,211,252,0.12))]" />
                <div className="mt-3 flex gap-2">
                  <div className="h-9 flex-1 rounded-full bg-white/10" />
                  <div className="h-9 w-9 rounded-full bg-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
