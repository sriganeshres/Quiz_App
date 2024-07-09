"use client";

import React, { useState } from "react";
import Question from "./question";
import Result from "./result";
import { QuestionType } from "../types";

interface QuizProps {
  questions: QuestionType[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );

  const handleAnswer = (index: number, isCorrect: boolean) => {
    setSelectedAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = index;
      return newAnswers;
    });

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = (currentQuestion + 1) % questions.length;
    setCurrentQuestion(nextQuestion);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  const handleRefresh = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers(Array(questions.length).fill(null));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(false);
    setCurrentQuestion((currentQuestion + 1) % questions.length);
  };

  return (
    <div className="h-[73vh] flex flex-col items-center justify-center bg-gray-100 rounded-lg p-4 gap-6">
      <div className="w-full max-w-2xl p-6 bg-white rounded-xl shadow-md">
        {showResult ? (
          <Result score={score} total={questions.length} />
        ) : (
          <div>
            <p className="text-lg text-gray-700">
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <Question
              data={questions[currentQuestion]}
              onAnswer={(index, isCorrect) => handleAnswer(index, isCorrect)}
              selectedAnswer={selectedAnswers[currentQuestion]}
            />
          </div>
        )}
      </div>
      {!showResult ? (
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p className="text-blue-500">
            Attempted {selectedAnswers.filter((a) => a !== null).length} out of{" "}
            {questions.length}.{"\n"}
          </p>
          <div className="flex flex-row gap-6">
            <button
              onClick={handleSubmit}
              className="rounded-md p-2 border border-blue-500 bg-blue-500 text-white"
            >
              See the Results
            </button>
            <button
              onClick={handleNext}
              className="rounded-md p-2 border border-blue-500 bg-blue-500 text-white"
            >
              Next Question
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleRefresh}
          className="rounded-md p-2 border border-blue-500 bg-blue-500 text-white"
        >
          Refresh
        </button>
      )}
    </div>
  );
};

export default Quiz;
