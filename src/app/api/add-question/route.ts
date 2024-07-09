// app/api/questions/route.js
import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

const questionsFilePath = path.join(process.cwd(), "src\\app\\data", "questions.json");

export async function POST(request: NextRequest) {
  try {
    const newQuestion = await request.json();
    console.log(newQuestion);

    const data = await fs.promises.readFile(questionsFilePath, "utf8");
    const questions = JSON.parse(data);

    questions.push(newQuestion);

    const newQuestionsContent = JSON.stringify(questions, null, 2);

    await fs.promises.writeFile(questionsFilePath, newQuestionsContent, "utf8");
    return NextResponse.json({ message: "Question added successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, { status: 200 });
}

export async function GET(request: NextRequest) {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
