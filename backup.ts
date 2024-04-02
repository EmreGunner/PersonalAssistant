const { create } = require("zustand");

// Define the list of available teachers
export const teachers = ["Emel", "Ahmet"];

// Create a Zustand store for managing the AI teacher state
export const useAITeacher = create((set, get) => ({
  // Define the initial state
  messages: [],
  chatlog: [
    {
      user: "gpt",
      message: "Hi, how can I help you?",
    },
  ],
  currentMessage: null,
  teacher: teachers[0],
  classroom: "default",
  loading: false,
  furigana: true,
  english: true,
  speech: "formal",

  // Define actions for updating the state

  /**
   * Adds a new chat message to the chatlog.
   * @param {Object} newChatMessage - The new chat message to add.
   */
  addChatMessage: (newChatMessage) => {
    set((state) => ({
      chatlog: [...state.chatlog, newChatMessage],
    }));
  },

  /**
   * Sets the current teacher.
   * @param {string} teacher - The name of the teacher to set.
   */
  setTeacher: (teacher) => {
    set(() => ({
      teacher,
      messages: get().messages.map((message) => {
        message.audioPlayer = null; // New teacher, new Voice
        return message;
      }),
    }));
  },

  /**
   * Sets the current classroom.
   * @param {string} classroom - The name of the classroom to set.
   */
  setClassroom: (classroom) => {
    set(() => ({
      classroom,
    }));
  },

  /**
   * Sets the furigana display option.
   * @param {boolean} furigana - Whether to display furigana or not.
   */
  setFurigana: (furigana) => {
    set(() => ({
      furigana,
    }));
  },

  /**
   * Sets the English display option.
   * @param {boolean} english - Whether to display English or not.
   */
  setEnglish: (english) => {
    set(() => ({
      english,
    }));
  },

  /**
   * Sets the speech style.
   * @param {string} speech - The speech style to set.
   */
  setSpeech: (speech) => {
    set(() => ({
      speech,
    }));
  },

  /**
   * Asks the AI a question and processes the response.
   * @param {string} question - The question to ask the AI.
   */
  askAI: async (question) => {
    if (!question) {
      return;
    }

    let message = {
      question,
      id: get().messages.length,
    };

    set(() => ({
      loading: true,
    }));

    // Get the current chatlog from the Zustand store
    const chatLog = get().chatlog;

    // Convert the chatlog array to a JSON string and encode it for the URL
    const chatLogParam = encodeURIComponent(JSON.stringify(chatLog));

    console.log("GETTING THE CHATLOG BROTHER: ", chatLog);
    console.log("GETTING THE CHATLOG BROTHER: ", chatLogParam);

    // Send a request to the AI API with the question and chatlog
    const res = await fetch(`/api/ai?question=${question}&chatlog=${chatLogParam}`);
    const text = await res.text(); // Get the response body as text
    console.log("Raw response:", text);

    const data = JSON.parse(text); // Parse the response as JSON
    console.log("RESPONSE FROM AI: ", data);
    const answer = data.answer;

    // Add the AI's response to the chatlog as coming from "gpt"
    get().addChatMessage({
      user: "gpt",
      message: answer,
    });

    set(() => ({
      currentMessage: message,
    }));

    set(() => ({
      currentMessage: message,
    }));

    set((state) => ({
      messages: [...state.messages, message],
      loading: false,
    }));

    message = answer;
    get().playMessage(message);
  },

  /**
   * Plays the audio for a given message.
   * @param {Object} message - The message object containing the audio data.
   */
  playMessage: async (message) => {
    set(() => ({
      currentMessage: message,
    }));

    if (!message.audioPlayer) {
      set(() => ({
        loading: true,
      }));

      // Get TTS
      console.log('----------------------------------------------------------------');
      console.log(message);
      console.log('----------------------------------------------------------------');

      const audioRes = await fetch(
        `/api/tts?teacher=${get().teacher}&text=${
          Array.isArray(message)
            ? message.map((word) => word.word || "").join(" ")
            : encodeURIComponent(message)
        }`
      );
      const audio = await audioRes.blob();

      // Parse 'visemes' if available
      const visemesHeader = audioRes.headers.get("visemes");
      const visemes = visemesHeader ? JSON.parse(visemesHeader) : null;

      const audioUrl = URL.createObjectURL(audio);
      const audioPlayer = new Audio(audioUrl);

      // Update the message object with new properties
      const updatedMessage = {
        ...message,
        visemes: visemes,
        audioPlayer: audioPlayer,
      };

      audioPlayer.onended = () => {
        set(() => ({
          currentMessage: null,
        }));
      };

      // Update the specific message within the Zustand store
      set((state) => ({
        loading: false,
        messages: state.messages.map((m) => {
          if (m.id === message.id) {
            // Return a new object with updated properties
            return { ...m, visemes, audioPlayer };
          }
          return m;
        }),
      }));

      // Play the audio
      updatedMessage.audioPlayer.currentTime = 0;
      updatedMessage.audioPlayer.play();

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
  },

  /**
   * Stops the audio playback for a given message.
   * @param {Object} message - The message object containing the audio player.
   */
  stopMessage: (message) => {
    message.audioPlayer.pause();
    set(() => ({
      currentMessage: null,
    }));
  },
}));