export default function BackgroundGlow() {
  return (
    <>
      {/* Left Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[450px] w-[450px] rounded-full bg-white/8 blur-[140px]" />

      {/* Right Glow */}
      <div className="pointer-events-none absolute right-[-220px] top-1/3 h-[500px] w-[500px] rounded-full bg-zinc-500/10 blur-[180px]" />

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/5 blur-[180px]" />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          [background-size:50px_50px]
        "
      />
    </>
  );
}