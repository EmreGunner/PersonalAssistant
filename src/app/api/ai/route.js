// Import the OpenAI SDK to interact with the OpenAI API.
import OpenAI from "openai";

// Initialize the OpenAI API client with your API key from the environment variables.
const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"] // This is the default and can be omitted
});

// Examples of formal and casual Japanese speech structures for teaching purposes.
const formalExample = {
  turkish: [
    { word: "Türkiye", reading: "Türkiye'de" },
    { word: "yaşıyor", reading: "yaşıyor" },
    { word: "musun", reading: "musun" },
    { word: "?", reading: "?" }
  ],
  grammarBreakdown: [
    {
      english: "Do you live in Turkey?",
      turkish: [
        { word: "Türkiye", reading: "Türkiye'de" },
        { word: "yaşıyor", reading: "yaşıyor" },
        { word: "musun", reading: "musun" },
        { word: "?", reading: "?" }
      ],
      chunks: [
        {
          turkish: [{ word: "Türkiye", reading: "Türkiye'de" }],
          meaning: "Turkey",
          grammar: "Location (in Turkey)"
        },
        {
          turkish: [{ word: "yaşıyor", reading: "yaşıyor" }],
          meaning: "live",
          grammar: "Present continuous tense"
        },
        {
          turkish: [{ word: "musun", reading: "musun" }],
          meaning: "you (formal)",
          grammar: "Question form for 'you'"
        },
        {
          turkish: [{ word: "?", reading: "?" }],
          meaning: "Question mark",
          grammar: "Indicates a question"
        }
      ]
    }
  ]
};

const casualExample = {
  turkish: [
    { word: "Türkiye'ye", reading: "Türkiye'ye" },
    { word: "hiç", reading: "hiç" },
    { word: "gittin", reading: "gittin" },
    { word: "mi", reading: "mi" },
    { word: "?", reading: "?" }
  ],
  grammarBreakdown: [
    {
      english: "Have you ever been to Turkey?",
      turkish: [
        { word: "Türkiye'ye", reading: "Türkiye'ye" },
        { word: "hiç", reading: "hiç" },
        { word: "gittin", reading: "gittin" },
        { word: "mi", reading: "mi" },
        { word: "?", reading: "?" }
      ],
      chunks: [
        {
          turkish: [{ word: "Türkiye'ye", reading: "Türkiye'ye" }],
          meaning: "to Turkey",
          grammar: "Direction (to Turkey)"
        },
        {
          turkish: [{ word: "hiç", reading: "hiç" }],
          meaning: "ever",
          grammar: "Adverb"
        },
        {
          turkish: [{ word: "gittin", reading: "gittin" }],
          meaning: "did go",
          grammar: "Past tense, 2nd person singular"
        },
        {
          turkish: [{ word: "mi", reading: "mi" }],
          meaning: "question particle",
          grammar: "Makes the sentence a question"
        },
        {
          turkish: [{ word: "?", reading: "?" }],
          meaning: "Question mark",
          grammar: "Indicates a question"
        }
      ]
    }
  ]
};


// The main function that responds to GET requests with language translation and grammar breakdown.
export async function GET(req) {
  // WARNING: Do not expose your keys
  // WARNING: If you host publicly your project, add an authentication layer to limit the consumption of ChatGPT resources

  const speech = req.nextUrl.searchParams.get("speech") || "formal";
  const speechExample = speech === "formal" ? formalExample : casualExample;

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a Turkish language teacher specializing in English Turkish. 
Your student asks how to say something from English to Turkish.
Make sure your answer is gramatically correct.
Respond with: 
- English: the original sentence e.g., "Do you live in Turkey?"
- Turkish: the Turkish translation in split words ex: ${JSON.stringify(
          speechExample.turkish
        )}
- GrammarBreakdown: an explanation of the grammar structure per sentence ex: ${JSON.stringify(
          speechExample.grammarBreakdown
        )}
`,
      },
      {
        role: "system",
        content: `You always respond with a JSON object with the following format: 
        {
          "english": "",
          "turkish": [{
            "word": "",
            "reading": ""
          }],
          "grammarBreakdown": [{
            "english": "",
            "turkish": [{
              "word": "",
              "reading": ""
            }],
            "chunks": [{
              "turkish": [{
                "word": "",
                "reading": ""
              }],
              "meaning": "",
              "grammar": ""
            }]
          }]
        }`,
      },
      {
        role: "user",
        content: `How to say ${
          req.nextUrl.searchParams.get("question") ||
          "Do you live in Turkey?"
        } in Turkish in ${speech} speech?`,
      },
    ],
    model: "gpt-3.5-turbo",
    response_format: {
      type: "json_object",
    },
  });
  // Logs the AI's response for debugging purposes.
  console.log(chatCompletion.choices[0].message.content);
  // Returns the AI's response as a JSON object to the requester.
  return Response.json(JSON.parse(chatCompletion.choices[0].message.content));
}
