type ProjectCardProps = {
  name: string;
  industry: string;
  tech: string;
  result: string;
  href: string;
};

export function ProjectCard({ name, industry, tech, result, href }: ProjectCardProps) {
  return (
    <article className="glass-card group rounded-[1.75rem] transition duration-500 hover:-translate-y-1.5">
      <div className="aspect-[16/11] bg-[linear-gradient(135deg,rgba(143,227,176,0.16),rgba(125,211,252,0.08))] p-4">
        <div className="flex h-full flex-col justify-between rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#03130a]">
              Preview
            </span>
            <span className="text-xs font-medium text-muted">{industry}</span>
          </div>
          <div>
            <p className="text-sm font-medium text-muted">Proyecto</p>
            <h3 className="mt-2 text-2xl font-semibold text-ink">{name}</h3>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">{tech}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Resultado</p>
          <p className="mt-2 text-sm leading-6 text-muted">{result}</p>
        </div>
        <a
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:gap-3 group-hover:text-accent"
        >
          Solicitar propuesta
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
