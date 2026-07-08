export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base">
      <div className="absolute -left-32 -top-32 h-[32rem] w-[32rem] animate-blob rounded-full bg-accent/20 blur-[110px]" />
      <div className="absolute -right-24 top-1/4 h-[28rem] w-[28rem] animate-float-slow rounded-full bg-accent2/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] animate-float-slower rounded-full bg-accent3/15 blur-[130px]" />
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,10,0)_0%,rgba(5,6,10,0.4)_60%,rgba(5,6,10,0.9)_100%)]" />
    </div>
  );
}
