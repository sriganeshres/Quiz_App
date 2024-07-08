import React from "react";
import { QuestionType } from "../types";

interface QuestionProps {
  data: QuestionType;
  onAnswer: (index: number, isCorrect: boolean) => void;
  selectedAnswer: number | null;
}

const Question: React.FC<QuestionProps> = ({
  data,
  onAnswer,
  selectedAnswer,
}) => {
  return (
    <div className="mt-1 p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">{data.question}</h2>
      <div className="space-y-2">
        {data.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index, answer.isCorrect)}
            className={`w-full px-4 py-2 rounded-md focus:outline-none border border-blue-500 ${
              selectedAnswer === index
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-900 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
