import React, { useState } from "react";

// 搞笑谚语数据
const proverbData = [
  {
    language: "Chinese",
    original: "对牛弹琴",
    funnyTranslation: "Play the lute to a cow",
    options: [
      "To waste your time explaining something to someone who doesn’t understand",
      "To love music so much you play for animals",
      "To have a deep connection with a cow",
      "To show off your skills in the countryside",
    ],
    correctAnswer: "To waste your time explaining something to someone who doesn’t understand",
    explanation: "This proverb means to talk to someone who cannot understand or appreciate what you are saying.",
  },
  {
    language: "German",
    original: "Ich verstehe nur Bahnhof",
    funnyTranslation: "I only understand train station",
    options: [
      "I have no idea what’s going on",
      "I love trains",
      "I get confused when I’m at a station",
      "I can only speak German near trains",
    ],
    correctAnswer: "I have no idea what’s going on",
    explanation: "This funny German phrase means 'I don’t understand anything you’re saying.'",
  },
  {
    language: "Russian",
    original: "Собаку съел",
    funnyTranslation: "He ate the dog",
    options: [
      "He is very experienced in something",
      "He is very hungry",
      "He dislikes dogs",
      "He has strange eating habits",
    ],
    correctAnswer: "He is very experienced in something",
    explanation: "This phrase means 'He is very skilled or experienced in this area.'",
  },
  {
    language: "Hindi",
    original: "ऊंट के मुँह में जीरा",
    funnyTranslation: "Cumin in a camel's mouth",
    options: [
      "Something that is too little to satisfy a big need",
      "A camel that loves spices",
      "An impossible situation",
      "A waste of good cumin seeds",
    ],
    correctAnswer: "Something that is too little to satisfy a big need",
    explanation: "This proverb means that something is insufficient for the situation.",
  },
];

const GameComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // 当前谚语索引
  const [userAnswer, setUserAnswer] = useState(null);

  const currentProverb = proverbData[currentIndex];

  // 处理用户选择
  const handleAnswer = (option) => {
    setUserAnswer(option);
  };

  // 显示下一条谚语
  const loadNextProverb = () => {
    const nextIndex = (currentIndex + 1) % proverbData.length; // 循环显示
    setCurrentIndex(nextIndex);
    setUserAnswer(null); // 重置用户答案
  };

  return (
    <div className="game-container">
      <h2>Guess the Proverb's Meaning</h2>
      <p className="game-rule">
        Rule: Guess the meaning of the proverb based on its funny English translation. Select the correct option!
      </p>
      <p>
        <strong>Language:</strong> {currentProverb.language}
      </p>
      <p>
        <strong>Original Proverb:</strong> {currentProverb.original}
      </p>
      <p>
        <strong>Funny Translation:</strong> {currentProverb.funnyTranslation}
      </p>
      <div className="options-container">
        {currentProverb.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              userAnswer === option
                ? option === currentProverb.correctAnswer
                  ? "correct"
                  : "incorrect"
                : ""
            }`}
            onClick={() => handleAnswer(option)}
            disabled={userAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
      {userAnswer && (
        <div className="answer-feedback">
          {userAnswer === currentProverb.correctAnswer ? (
            <p className="correct-answer">🎉 Correct! {currentProverb.explanation}</p>
          ) : (
            <p className="wrong-answer">
              ❌ Wrong! The correct answer is: {currentProverb.correctAnswer}.<br />
              {currentProverb.explanation}
            </p>
          )}
          <button onClick={loadNextProverb} className="next-button">
            Next Proverb
          </button>
        </div>
      )}
    </div>
  );
};

export default GameComponent;
