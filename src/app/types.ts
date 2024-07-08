export interface AnswerType {
  text: string;
  isCorrect: boolean;
}

export interface QuestionType {
  question: string;
  answers: AnswerType[];
}
