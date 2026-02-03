import { FeatureCard } from "./FeatureCard";
import { ScanText, MessageSquareWarning, Building2 } from "lucide-react";

export default function WhyItWorks() {
  return (
    <section
      id="why-it-works"
      className="py-28 px-6 bg-black relative"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-white">
        Why it works
      </h2>

      <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
        Because Ghost Recruiter thinks like the systems and humans that reject you.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FeatureCard
          icon={ScanText}
          title="ATS Score Analysis"
          description="Identify keyword gaps, formatting mistakes, and silent ATS killers before a recruiter ever sees your resume."
        />

        <FeatureCard
          icon={MessageSquareWarning}
          title="Recruiter-Style Feedback"
          description="Blunt, human-like feedback on clarity, confidence, and impact — no sugarcoating."
        />

        <FeatureCard
          icon={Building2}
          title="Company-Specific Reasons"
          description="Understands hiring patterns and expectations unique to each company."
        />
      </div>
    </section>
  );
}