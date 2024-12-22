import React from 'react';

const PracticeSet = () => {
  const words = ['is', 'of', 'on', 'to'];

  const speakWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-IN'; // Set language to Indian English
    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
      {words.map((word) => (
        <div key={word} onClick={() => speakWord(word)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <p>{word}</p>
          <ion-icon name="musical-notes-outline"></ion-icon>
        </div>
      ))}
    </>
  );
};

export default PracticeSet;