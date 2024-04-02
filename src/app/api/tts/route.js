import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import { PassThrough } from "stream";

 // Initialize speech SDK with keys from environment variables
export async function GET(req) {
  // WARNING: Do not expose your keys
  // WARNING: If you host publicly your project, add an authentication layer to limit the consumption of Azure resources

  const speechConfig = sdk.SpeechConfig.fromSubscription(
    process.env["SPEECH_KEY"],
    process.env["SPEECH_REGION"]
  );

    // Set the voice name based on the requested teacher, defaulting to "Nanami"
  // https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=tts
  //const teacher = req.nextUrl.searchParams.get("teacher") || "Emel";
  //speechConfig.speechSynthesisVoiceName = `ja-JP-${teacher}Neural`;
  //speechConfig.speechSynthesisVoiceName = `tr-TR-${teacher}Neural`;
  speechConfig.speechSynthesisVoiceName = `en-US-AvaNeural`;

  const speechSynthesizer = new sdk.SpeechSynthesizer(speechConfig);
  const visemes = [];
    // Create a speech synthesizer instance
      // Event listener for received visemes, logging and storing them
  speechSynthesizer.visemeReceived = function (s, e) {
     console.log(
       "(Viseme), Audio offset: " +
         e.audioOffset / 10000 +
         "ms. Viseme ID: " +
         e.visemeId
     );
    visemes.push([e.audioOffset / 10000, e.visemeId]);
  };
  // Synthesizing speech from text and creating an audio stream
  const audioStream = await new Promise((resolve, reject) => {
    speechSynthesizer.speakTextAsync(
      req.nextUrl.searchParams.get("text") ||
        "I'm excited to try text to speech",
      (result) => {
        const { audioData } = result;

        speechSynthesizer.close();

        // convert arrayBuffer to stream
        const bufferStream = new PassThrough();
        bufferStream.end(Buffer.from(audioData));
        resolve(bufferStream);
      },
      (error) => {
        console.log(error);
        speechSynthesizer.close();
        reject(error);
      }
    );
  });
   // Return the audio stream in the response with proper headers
  const response = new Response(audioStream, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Disposition": `inline; filename=tts.mp3`,
      Visemes: JSON.stringify(visemes),
    },
  });
  // audioStream.pipe(response);
  return response;
}