import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-8 text-center text-gray-600">
      <h1 className="text-4xl font-semibold">Something went wrong!</h1>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 mt-6 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Shop now
      </button>
    </div>
  );
};

export default Error;
