import { StepCard } from "./StepCard";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <h2 className="text-3xl font-semibold text-center text-black">
        How it works
      </h2>

      <div className="mt-12 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <StepCard
          step={1}
          title="Upload Resume"
          description="Drag and drop your resume PDF."
        />
        <StepCard
          step={2}
          title="Choose Company"
          description="Select your target role and company."
        />
        <StepCard
          step={3}
          title="Get Feedback"
          description="Receive actionable rejection reasons."
        />
      </div>
    </section>
  );
}