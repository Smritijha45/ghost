import { StepCard } from "./StepCard";
import { Upload, Target, FileSearch } from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-28 px-6 bg-black relative"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-white">
        How it works
      </h2>

      <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
        Three steps. No fluff. The system evaluates you like a recruiter would.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <StepCard
          step={1}
          icon={Upload}
          title="Upload Resume"
          description="Drag and drop your resume PDF. The system parses every line."
        />

        <StepCard
          step={2}
          icon={Target}
          title="Choose Company"
          description="Select your role and company to apply real hiring expectations."
        />

        <StepCard
          step={3}
          icon={FileSearch}
          title="Get Feedback"
          description="Receive clear, actionable rejection reasons — instantly."
        />
      </div>
    </section>
  );
}