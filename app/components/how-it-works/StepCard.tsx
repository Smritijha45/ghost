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
    <div className="text-center">
      <h4 className="font-medium text-black">
        {step}. {title}
      </h4>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}