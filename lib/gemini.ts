export async function analyzeResumeWithGemini(
  resumeText: string,
  companyType: string
) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `
You are a brutally honest tech recruiter.

Analyze this resume for a ${companyType} company.

Return:
1. Major problems
2. Missing sections
3. Bad wording
4. Recruiter red flags
5. Actionable improvements

Resume:
${resumeText}
                `,
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response.json();

  return (
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    "No feedback generated."
  );
}