import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type BaseProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const primaryClasses =
  'group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent2 bg-[length:200%_auto] px-6 py-3 text-sm font-semibold text-[#03130a] shadow-glow transition-all duration-500 hover:bg-right hover:-translate-y-0.5 hover:shadow-glow-lg';
const secondaryClasses =
  'group inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-ink backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/[0.08]';

export function PrimaryButton({ children, className = '', ...props }: ButtonProps) {
  return (
    <button className={`${primaryClasses} ${className}`.trim()} {...props}>
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-glass-sheen transition-transform duration-700 group-hover:translate-x-full" />
    </button>
  );
}

export function SecondaryButton({ children, className = '', ...props }: AnchorProps) {
  return (
    <a className={`${secondaryClasses} ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
