const { create } = require("zustand");

export const teachers = ["Emel", "Ahmet"];

export const useAITeacher = create((set, get) => ({
  messages: [],
  currentMessage: null,
  chatlog: [
    {
      user: "gpt",
      message: "Hi, how can I help you?",
    },
  ],
  /**
   * Adds a new chat message to the chatlog.
   * @param {Object} newChatMessage - The new chat message to add.
   */
  addChatMessage: (newChatMessage) => {
    set((state) => ({
      chatlog: [...state.chatlog, newChatMessage],
    }));
  },

  teacher: teachers[0],
  setTeacher: (teacher) => {
    set(() => ({
      teacher,
      messages: get().messages.map((message) => {
        message.audioPlayer = null; // New teacher, new Voice
        return message;
      }),
    }));
  },
  classroom: "default",
  setClassroom: (classroom) => {
    set(() => ({
      classroom,
    }));
  },
  loading: false,
  furigana: true,
  setFurigana: (furigana) => {
    set(() => ({
      furigana,
    }));
  },
  english: true,
  setEnglish: (english) => {
    set(() => ({
      english,
    }));
  },
  speech: "formal",
  setSpeech: (speech) => {
    set(() => ({
      speech,
    }));
  },
  askAI: async (question) => {
    if (!question) {
      return;
    }
    const message = {
      question,
      id: get().messages.length,
    };
    set(() => ({
      loading: true,
    }));

    const speech = get().speech;

    // Ask AI
    
    const res = await fetch(`/api/ai?question=${question}&speech=${speech}`);
    const data = await res.json();
    console.log("RESPONSE FROM AI AS DATA : ",data);
    message.answer = data.answer;
     get().addChatMessage({
      user: "gpt",
      message: message.answer
    });
    message.speech = speech;
    
    get().playMessage(message);
  },
  playMessage: async (message) => {
    if(message.answer) {
      if (!message.visemes || !message.audioPlayer)  {
      set(() => ({
        loading: true,
      }));
      console.log('----------------------------------------------------------------')
      console.log("JUST RECEIVED MESSAGE ",message)
      console.log('----------------------------------------------------------------')

          if (!message.audioPlayer) {
            // Get TTS
            const audioRes = await fetch(
              `/api/tts?teacher=${get().teacher}&text=${encodeURIComponent(
                message.answer
              )}`
            );
            const audio = await audioRes.blob();
            const visemes = JSON.parse(await audioRes.headers.get("visemes"));
            console.log("GOT VISEMES ", visemes);
            const audioUrl = URL.createObjectURL(audio);
            const audioPlayer = new Audio(audioUrl);
            
            
            if (typeof message === 'string') {
              message = { answer: message,visemes: visemes,audioPlayer: audioPlayer};
            }
            message.visemes = visemes;
            message.audioPlayer = audioPlayer;
            message.audioPlayer.onended = () => {
              set(() => ({
                currentMessage: null,
              }));
            };

            console.log("----------------------------------------------------------------");
            console.log(message);
            console.log("----------------------------------------------------------------");
          
            set(() => ({
              loading: false,
              messages: get().messages.map((m) => {
                if (m.id === message.id) {
                  return message;
                }
                return m;
              }),
            }));
          }
    
          set(() => ({
      currentMessage: message,
    }));
    message.audioPlayer.currentTime = 0;
    message.audioPlayer.play();
  }
  }
  else if (message){
  console.log("problem detected message, trying to fix : ", message);
  message  =  { answer: message};
  get().playMessage(message);
  } else {
    console.log("problem detected with message could not fix it " + message)
  }
  },
  stopMessage: (message) => {
    message.audioPlayer.pause();
    set(() => ({
      currentMessage: null,
    }));
  },
}));