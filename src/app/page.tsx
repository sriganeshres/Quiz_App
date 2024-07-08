import Quiz from "./components/quiz";
import questions from "./data/questions";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl p-6 bg-white rounded-xl shadow-md text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Sri Ganesh&apos;s Quiz</h1>
        <Quiz questions={questions} />
      </div>
    </div>
  );
};

export default Home;
