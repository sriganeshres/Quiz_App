import Link from "next/link";
import Quiz from "./components/quiz"; // Adjust the path if necessary
import questions from "./data/questions.json"; // Import the JSON data

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl p-6 bg-white rounded-xl shadow-md text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Quiz App</h1>
        <Quiz questions={questions} />
        <Link href="/add-question">
          <p className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md w-[70%] mx-auto">
            Add New Question
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
