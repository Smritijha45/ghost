import { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        relative
        min-h-[220px]
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        rounded-2xl
        p-8
        shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]
        transition
        hover:border-red-500/40
        hover:shadow-red-500/10
      "
    >
      {/* Icon */}
      <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-600/10 text-red-400">
        <Icon size={24} />
      </div>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-gray-400">
        {description}
      </p>
    </div>
  );
}