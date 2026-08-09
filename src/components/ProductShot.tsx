const SHOT_HATCHING =
  "bg-[repeating-linear-gradient(135deg,var(--color-shot-a)_0_7px,var(--color-shot-b)_7px_14px)]";

interface ProductShotProps {
  label?: string;
}

/** PLACEHOLDER: hatched box standing in for a real screenshot. */
export function ProductShot({ label = "product shot" }: ProductShotProps) {
  return (
    <div
      className={`grid aspect-16/10 w-full place-items-center border border-line ${SHOT_HATCHING}`}
    >
      <span className="font-mono text-[10.5px] text-ghost">{label}</span>
    </div>
  );
}
