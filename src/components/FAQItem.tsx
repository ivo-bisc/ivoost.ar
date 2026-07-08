import { useState } from 'react';

type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((value) => !value)}
      className="glass-card w-full rounded-[1.5rem] p-5 text-left hover:border-accent/30"
      aria-expanded={open}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base font-semibold text-ink md:text-lg">{question}</h3>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-lg text-ink transition-all duration-300 ${open ? 'rotate-45 border-accent/40 bg-accent/10 text-accent' : ''}`}
        >
          +
        </span>
      </div>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <p className="overflow-hidden pt-3 text-sm leading-6 text-white md:text-base">{answer}</p>
      </div>
    </button>
  );
}
