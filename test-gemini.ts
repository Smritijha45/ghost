import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

async function test() {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
    });
    const result = await model.generateContent("Hello");
    console.log(result.response.text());
  } catch (e: any) {
    console.error("Error using gemini-2.5-flash:", e.message);
  }

  try {
    const model2 = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
    });
    const result2 = await model2.generateContent("Hello again");
    console.log(result2.response.text());
  } catch (e: any) {
    console.error("Error using gemini-1.5-flash:", e.message);
  }
}

test();
