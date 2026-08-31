import type { Stage } from "@/data/projects";

export default function StatusBadge({
  stage,
  className = "",
}: {
  stage: Stage;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 font-mono text-[11px] font-medium tracking-widest text-red-400 ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
      </span>
      {stage}
    </span>
  );
}
