"use client";

import React from "react";
import NewQuestionForm from "../components/newQuestionForm";
import { useRouter } from "next/navigation";
import { QuestionType } from "../types";

const AddQuestion: React.FC = () => {
  const router = useRouter();

  const addQuestion = async (newQuestion: QuestionType) => {
    const response = await fetch("/api/add-question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestion),
    });

    if (response.ok) {
      router.push("/");
    } else {
      console.log(response.body);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Add a New Question</h1>
        <NewQuestionForm onAddQuestion={addQuestion} />
      </div>
    </div>
  );
};

export default AddQuestion;
