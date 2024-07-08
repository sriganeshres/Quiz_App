interface ResultProps {
  score: number;
  total: number;
}

const Result: React.FC<ResultProps> = ({ score, total }) => {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Your Score: {score} / {total}
      </h2>
      <p className="text-lg text-gray-700">
        {score === total
          ? "Perfect score! Well done!"
          : "Better luck next time!"}
      </p>
    </div>
  );
};

export default Result;
