import React from "react";
import { phonicsWords, threeLetterWords, twoLetterWords } from "./wordConfig"; // Assuming `twoLetterWords` is defined in this file

const PracticeSet = () => {
  // Function to handle text-to-speech
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = "en-IN"; // Indian English
    speech.rate = 0.8; // Adjusting speed (default is 1.0; less than 1 is slower)
    speech.pitch = 1; // Normal pitch (default is 1)

    // Select a female voice
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(
      (voice) =>
        voice.name.includes("Female") ||
        voice.name.includes("Karen") ||
        voice.name.includes("Zira")
    ); // Example voice names
    if (femaleVoice) {
      speech.voice = femaleVoice;
    }

    window.speechSynthesis.speak(speech);
  };

  return (
    <>
      <div className="m-5">
        <h1 className="text-4xl font-extrabold mb-4">Phonics Words</h1>
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(phonicsWords).map(([key, value], index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-md text-center bg-blue-50 hover:bg-blue-100"
            >
              <p className="text-lg font-semibold">{key}</p>
              <p className="text-2xl text-blue-700 font-bold">{value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="m-3 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Let's Learn 2 letters words
        </h1>
        {twoLetterWords.map((item, index) => (
          <button
            type="button"
            onClick={() => speak(item)}
            key={index}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {item} <ion-icon name="musical-notes-outline"></ion-icon>
          </button>
        ))}
      </div>
      <div className="m-3 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Let's Learn 3 letters words
        </h1>
        {threeLetterWords.map((item, index) => (
          <button
            type="button"
            onClick={() => speak(item)}
            key={index}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {item} <ion-icon name="musical-notes-outline"></ion-icon>
          </button>
        ))}
      </div>
    </>
  );
};

export default PracticeSet;
