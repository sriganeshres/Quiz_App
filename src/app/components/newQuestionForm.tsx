import React, { useState } from "react";
import { QuestionType } from "../types";

interface NewQuestionFormProps {
  onAddQuestion: (newQuestion: QuestionType) => void;
}

const NewQuestionForm: React.FC<NewQuestionFormProps> = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
  ]);

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index].text = value;
    setAnswers(newAnswers);
  };

  const handleCorrectChange = (index: number) => {
    const newAnswers = answers.map((answer, i) => ({
      ...answer,
      isCorrect: i === index,
    }));
    setAnswers(newAnswers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddQuestion({ question, answers });
    setQuestion("");
    setAnswers([
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
    ]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-xl shadow-md space-y-4 text-gray-700"
    >
      <h2 className="text-xl font-bold text-gray-900">Add New Question</h2>
      <div>
        <label className="block text-gray-700">Question:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      {answers.map((answer, index) => (
        <div key={index}>
          <label className="block text-gray-700">Answer {index + 1}:</label>
          <input
            type="text"
            value={answer.text}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <label className="inline-flex items-center mt-2 text-black">
            <input
              type="radio"
              checked={answer.isCorrect}
              onChange={() => handleCorrectChange(index)}
              className="form-radio"
            />
            <span className="ml-2">Correct Answer</span>
          </label>
        </div>
      ))}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add Question
      </button>
    </form>
  );
};

export default NewQuestionForm;
