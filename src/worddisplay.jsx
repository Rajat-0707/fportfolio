

import React, { useState, useEffect } from 'react';

const WordDisplay = () => {
  const words = ['WEB-DEVELOPER', 'PROGRAMMER', 'WEB-DESIGNER', 'CODING ENTHUSIAST', 'TECHNOLOGY LOVER','MERN STACK DEVELOPER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'FULL STACK DEVELOPER', 'SOFTWARE ENGINEER'];
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (letterIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, letterIndex + 1));
        setLetterIndex(prev => prev + 1);
      }, 150); // speed of each letter

      return () => clearTimeout(timeout);
    } else {
      // wait before starting next word
      const pauseBeforeNext = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setLetterIndex(0);
        setDisplayedText('');
      }, 1000); // pause after word completes

      return () => clearTimeout(pauseBeforeNext);
    }
  }, [letterIndex, wordIndex]);
  return (
    <div style={{ fontSize: '2.4rem', fontWeight: '650', textAlign: 'center', color: 'white', height: '1000px', width: '100vw', fontFamily: "'Courier New', Courier, monospace", background: "transparent" }}>
       {displayedText}
    </div>
  );
};

export default WordDisplay;
