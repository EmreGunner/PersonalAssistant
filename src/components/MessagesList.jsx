import { useAITeacher } from "@/hooks/useAITeacher";
import { useEffect, useRef } from "react";


//{englishText}
  export const MessagesList = () => {
    const messages = useAITeacher((state) => state.messages);
    const playMessage = useAITeacher((state) => state.playMessage);
    const { currentMessage } = useAITeacher();
    const english = useAITeacher((state) => state.english);
    const furigana = useAITeacher((state) => state.furigana);
    const classroom = useAITeacher((state) => state.classroom);
    const chatlog = useAITeacher((state) => state.chatlog);
    console.log("From MessageList " ,chatlog);
    
    // Reference to the container for automatic scrolling
    const container = useRef();

  // Effect to scroll to the bottom of the message list whenever a new message is added
  useEffect(() => {
    container.current.scrollTo({
      top: container.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages.length]);

  

 
// Function to display a message bubble
const getMessageBubble = (message, user) => (
  <div className={`flex items-center w-full p-10 my-6 rounded-3xl shadow-2xl ${user === 'gpt' ? 'bg-blue-400' : 'bg-green-200'}`}>
    <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 break-words w-full">
      {message}
    </p>
  </div>
);
const getListenButton = (message) => {
  // Determine if the current message is the one being played
  const isCurrentMessage = currentMessage === message;
  console.log("Listen Message ", message);
  return (
    <button
      onClick={() => isCurrentMessage ? stopMessage(message) : playMessage(message)}
      className="text-white/65 self-start ml-2 mt-2" // Adjust margin and placement as needed
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        {isCurrentMessage ? (
          // SVG for stop icon
          <path d="M6 6H18V18H6V6Z" fill="currentColor" />
        ) : (
          // SVG for play icon
          <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
        )}
      </svg>
    </button>
  );
};

  // Render the messages list with UI for playing and stopping voice messages
  return (
    <div
      className={`${
        classroom === "default"
         ? "w-[1288px] h-[676px]"
          : "w-[2528px] h-[856px]"
      } p-8 overflow-y-auto flex flex-col space-y-8 bg-transparent opacity-80`}
      ref={container}
    >
      {messages.length === 0 && (
        <div className="h-full w-full grid place-content-center text-center">
    
          <h2 className="text-8xl font-bold font-tr text-red-600/90 italic">
            Emre Gunner Asistant Ai
          </h2>
        </div>
      )}
      {chatlog.map((message, i) => (
        <div key={i} className="w-full">
           <div className={`flex ${message.user === 'gpt' ? 'justify-start' : 'justify-end'} items-end gap-3`}>  
            
            <div className="" >
              <div className={`flex items-center gap-3 items-end ${message.user === 'gpt' ? 'justify-items-end' : 'y'}`}>
              <span className={`inline-block text-white/90 text-2xl font-bold uppercase px-3 py-1 ${message.speech === "formal" ? "bg-indigo-600" : "bg-teal-600"} rounded-lg`}>
                  {message.user}
                </span>
                <div key={i} className={`flex ${message.user === "GPT" ? "justify-start" : "justify-end"}`}>
                {getMessageBubble(message.message, message.user)}
                   {/* Render the listen button */}
                {getListenButton(message.message)}
                </div>
              </div>
             
            </div>
    
          </div>
        </div>
      ))
      }
    </div>
  );
};