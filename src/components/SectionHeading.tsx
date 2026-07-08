import { motion } from 'framer-motion';

type SectionHeadingProps = {
  kicker: string;
  title: string;
  copy: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ kicker, title, copy, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${alignment} max-w-3xl`}
    >
      <p className="section-kicker mb-4">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        {kicker}
      </p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy mt-4">{copy}</p>
    </motion.div>
  );
}
