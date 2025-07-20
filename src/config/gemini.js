import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBXfIcBZ2j_jYJJu1NlpDXd3DJDbyhIT04"); 

async function runChat(prompt) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash", 
    });

    const chat = model.startChat({
      history: [],
      generationConfig: {
        temperature: 0.9,
        maxOutputTokens: 2048,
      },
    });

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    return response.text();
    
  } catch (error) {
    console.error("API Error Details:", {
      message: error.message,
      status: error.status,
      fullError: error
    });
    
    return "Our AI service is temporarily unavailable. Please try again shortly.";
  }
}

export default runChat;