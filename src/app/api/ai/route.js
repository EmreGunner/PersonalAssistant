// Import the OpenAI SDK to interact with the OpenAI API.
import OpenAI from "openai";

// Initialize the OpenAI API client with your API key from the environment variables.
const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"] // This is the default and can be omitted
});


// The main function that responds to GET requests with language translation and grammar breakdown.
export async function GET(req) {
  // WARNING: Do not expose your keys
  // WARNING: If you host publicly your project, add an authentication layer to limit the consumption of ChatGPT resources
  console.log("REQ WAS HERE : ",req)
  const question =  req.nextUrl.searchParams.get("question")
  console.log("QUESTION RECEIVED : ",question)
   
  // Check if the question is empty or contains only whitespace
   if (!question.trim()) {
    // Return a response indicating a blank message was received
    return Response.json({answer: "I received a blank message", intent: "other"});
  }
   // 1.1.2 Retrieve the chatlog from the request URL parameters, if available.
   const chatHistoryParam = req.nextUrl.searchParams.get("chatlog");

   console.log("Chat history received: ", chatHistoryParam);
   console.log("Chat history parameter type: ", typeof chatHistoryParam);
 
   
  // 1.1.3 Parse the chatlog JSON string into an array of messages.
  let chatHistory = [];
  try {
    chatHistory = chatHistoryParam ? JSON.parse(chatHistoryParam) : [];
  } catch (error) {
    console.log("Error parsing chat history: ", error);
  }

  //const speech = req.nextUrl.searchParams.get("speech") || "formal";
  //const speechExample = speech === "formal" ? formalExample : casualExample;
  //const serviceExample = webDevExample 
  //const service = "3d Ai Chatbot"
  //OpenAi Instructions 
  const systemInstructions = [
    {
      role: "system",
      content: `As Pelin, a virtual assistant designed specifically for Emre Gunner, you have a comprehensive understanding of Emre's professional domain, which includes web development, AI technologies, and data analysis. Your communication should reflect Emre's schedule, availability for new projects, and willingness to engage in meaningful collaborations. Your responses are expected to be concise, informative, and structured in a JSON format with keys 'answer' and 'intent'.`
    },
    {
      role: "system",
      content: `Intent classification is crucial for streamlining Emre's interactions. For general inquiries, classify these as 'other'. For requests directly related to scheduling meetings, classifying these as 'appointment' will trigger a specific workflow aimed at facilitating these meetings efficiently.`
    },
    {
      role: "system",
      content: `Example Prompt: "Can Emre review my website next week?" Expected Response: {"answer": "Emre would be delighted to review your website. Given his current project commitments, he has availability next week on Wednesday and Thursday after 2 PM. Would one of these slots work for you?", "intent": "appointment"}`
    },
    {
      role: "system",
      content: `Remember, your role extends beyond mere response generation. You are an extension of Emre, designed to facilitate his professional engagements by setting up meetings, answering technical inquiries, and showcasing his portfolio. Approach each interaction with the goal of fostering a productive dialogue that could lead to potential projects or collaborations.`
    }
  ];
  const userMessageContent = chatHistory.length > 0 
  ? `Last question ${question}\nChat history: ${JSON.stringify(chatHistory)}`
  : `Last question ${question}`;

  const chatCompletion = await openai.chat.completions.create({
    messages: systemInstructions.concat([
      {
        role: "user",
        content: userMessageContent,
      }
    ]),
    model: "gpt-3.5-turbo",
    response_format: {
      type: "json_object",
    },
  });
  
   /// Logs the AI's response for debugging purposes.
  console.log("---------------------OPENAI RESPONSE------------------------------")
  console.log(chatCompletion.choices[0].message.content);
  console.log("-------------------------------------------------------------------");
  //console.log(dummyRes.response)
  // Returns the AI's response as a JSON object to the requester.
  return Response.json(JSON.parse(chatCompletion.choices[0].message.content));
  //return Response.json(dummyRes.response);
  
}
