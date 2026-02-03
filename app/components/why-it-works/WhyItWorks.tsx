import { FeatureCard } from "./FeatureCard";

export default function WhyItWorks() {
  return (
    <section id="why-it-works" className="py-24 bg-gray-50 px-6">
      <h2 className="text-3xl font-semibold text-center text-black">
        Why it works
      </h2>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FeatureCard
          title="ATS Score Analysis"
          description="Identify keyword and formatting issues before a human sees your resume."
        />
        <FeatureCard
          title="Recruiter-Style Feedback"
          description="Brutal, honest feedback on clarity, impact, and tone."
        />
        <FeatureCard
          title="Company-Specific Reasons"
          description="Tailored feedback based on company hiring preferences."
        />
      </div>
    </section>
  );
}