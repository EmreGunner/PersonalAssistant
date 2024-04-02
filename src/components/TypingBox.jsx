// Hooking into the AI Teacher's context for actions and loading state
import { useAITeacher } from "@/hooks/useAITeacher";
import { useState } from "react";

export const TypingBox = () => {
  const askAI = useAITeacher((state) => state.askAI);// Function to submit a question to the AI
  const loading = useAITeacher((state) => state.loading);// Loading state indicating if the AI is processing
  const [question, setQuestion] = useState("");// Local state for managing the user's input
  const chatlog = useAITeacher((state) => state.chatlog);
  const addChatMessage = useAITeacher((state) => state.addChatMessage)
  console.log("From TypingBox " ,chatlog);
   // Function to invoke the AI response and reset the input field
  const ask = () => {
    if (question.trim() !== "") {
      // Add the user's question to the chatlog with the user as "me"
      addChatMessage({ 
        user: "me", 
        message: question 
      });

      // Then, submit the question to the AI
     
      askAI(question);
      setQuestion(""); // Reset the input field after submission
    }
  };
    // Component rendering the input box and a submit button
  return (
    <div className="z-10 max-w-[500px] flex space-y-6 flex-col bg-gradient-to-tr  from-slate-300/30 via-gray-400/30 to-slate-600-400/30 p-4  backdrop-blur-md rounded-xl border-slate-100/30 border">
      <div>
        <h2 className="text-white font-bold text-xl">
          Chat With Our Ai Sales Asistant
        </h2>
        <p className="text-white/65">
          Type a sentence you want to ask regarding your needs
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
        </div>
      ) : (
        <div className="gap-3 flex">
          <input
            className="focus:outline focus:outline-white/80 flex-grow bg-slate-800/60 p-2 px-4 rounded-full text-white placeholder:text-white/50 shadow-inner shadow-slate-900/60"
            placeholder="Need Ai for ..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                ask();
              }
            }}
          />
          <button
            className="bg-slate-100/20 p-2 px-6 rounded-full text-white"
            onClick={ask}
          >
            Ask
          </button>
        </div>
      )}
    </div>
  );
};