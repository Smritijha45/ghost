export function StepCard({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      <h4 className="font-semibold text-black">
        {step}. {title}
      </h4>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}