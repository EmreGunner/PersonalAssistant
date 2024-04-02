// Utilize the custom hook to access and manage state related to the AI teaching environment
import { teachers, useAITeacher } from "@/hooks/useAITeacher";

export const BoardSettings = ({ setShowCalendly }) => {
    // State hooks for user preferences and settings
  const furigana = useAITeacher((state) => state.furigana);
  const setFurigana = useAITeacher((state) => state.setFurigana);

  const english = useAITeacher((state) => state.english);
  const setEnglish = useAITeacher((state) => state.setEnglish);

  const teacher = useAITeacher((state) => state.teacher);
  const setTeacher = useAITeacher((state) => state.setTeacher);

  const speech = useAITeacher((state) => state.speech);
  const setSpeech = useAITeacher((state) => state.setSpeech);

  const classroom = useAITeacher((state) => state.classroom);
  const setClassroom = useAITeacher((state) => state.setClassroom);
  const handleAppointmentClick = () => {
    setShowCalendly(true);
  };
  const handleAssistantClick = () => {
    // If the Calendly appointment view is currently shown, this will hide it
        setShowCalendly(false);
};
 


  return (
// Top UI section for selecting a teacher. Displays teacher images that can be clicked to select a teacher.
    <>
     
      <div className="absolute left-0 bottom-full flex flex-row gap-2 mb-20">
        <button
          className={` ${
            classroom === "default"
              ? "text-white bg-slate-900/40 "
              : "text-white/45 bg-slate-700/20 "
          } py-4 px-10 text-4xl rounded-full transition-colors duration-500 backdrop-blur-md`}
          onClick={() => setClassroom("default")}
        >
          Default classroom
        </button>
        <button
          className={` ${
            classroom === "alternative"
              ? "text-white bg-slate-900/40 "
              : "text-white/45 bg-slate-700/20 "
          } py-4 px-10 text-4xl rounded-full transition-colors duration-500 backdrop-blur-md`}
          onClick={() => setClassroom("alternative")}
        >
          Alternative Look
        </button>
      </div>
      <div className="absolute left-0 top-full flex flex-row gap-2 mt-20">
        <button
          className={` ${
            speech === "formal"
              ? "text-white bg-slate-900/40 "
              : "text-white/45 bg-slate-700/20 "
          } py-4 px-10 text-4xl rounded-full transition-colors duration-500 backdrop-blur-md`}
          onClick={handleAssistantClick}
        >
         Pelin Ai Asistant
        </button>
        <button
          className={` ${
            speech === "casual"
              ? "text-white bg-slate-900/40 "
              : "text-white/45 bg-slate-700/20 "
          } py-4 px-10 text-4xl rounded-full transition-colors duration-500 backdrop-blur-md`}
          onClick={handleAppointmentClick}
        >
          Appointment
        </button>
      </div>
      <div className="absolute right-0 top-full flex flex-row gap-2 mt-20">
        <button
          className={` ${
            furigana
              ? "text-white bg-slate-900/40 "
              : "text-white/45 bg-slate-700/20 "
          } py-4 px-10 text-4xl rounded-full transition-colors duration-500 backdrop-blur-md`}
          onClick={() => setFurigana(!furigana)}
        >
          Explanation
        </button>
        <button
          className={`${
            english
              ? "text-white bg-slate-900/40 "
              : "text-white/45 bg-slate-700/20 "
          } py-4 px-10 text-4xl rounded-full transition-colors duration-500 backdrop-blur-md`}
          onClick={() => setEnglish(!english)}
        >
          English
        </button>
      </div>
    </>
  );
};