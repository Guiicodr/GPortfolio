export default function Footer() {
  return (
    <footer className="bg-black">
      <p className="border-t border-white/10 px-6 py-6 text-center font-mono text-[11px] tracking-widest text-zinc-600 sm:px-10">
        © {new Date().getFullYear()} GUILHERME.DEV — TODOS OS DIREITOS RESERVADOS
      </p>
    </footer>
  );
}
