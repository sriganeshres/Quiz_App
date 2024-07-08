import { QuestionType } from "../types";

const questions: QuestionType[] = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", isCorrect: true },
      { text: "London", isCorrect: false },
      { text: "Rome", isCorrect: false },
      { text: "Berlin", isCorrect: false },
    ],
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: [
      { text: "Harper Lee", isCorrect: true },
      { text: "J.K. Rowling", isCorrect: false },
      { text: "Ernest Hemingway", isCorrect: false },
      { text: "Mark Twain", isCorrect: false },
    ],
  },
];

export default questions;
