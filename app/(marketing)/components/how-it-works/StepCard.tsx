import { LucideIcon } from "lucide-react";

export function StepCard({
  step,
  icon: Icon,
  title,
  description,
}: {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        relative
        min-h-[240px]
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        rounded-2xl
        p-8
        shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]
        transition
        hover:border-red-500/40
      "
    >
      {/* Step number */}
      <span className="absolute top-6 right-6 text-sm font-semibold text-red-400">
        0{step}
      </span>

      {/* Icon */}
      <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-600/10 text-red-400">
        <Icon size={24} />
      </div>

      <h4 className="text-lg font-semibold text-white">
        {title}
      </h4>

      <p className="mt-3 text-sm leading-relaxed text-gray-400">
        {description}
      </p>
    </div>
  );
}