import { useNavigate } from "react-router-dom";


const Success = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen my-10 text-center">
      <h1 className="text-4xl font-semibold text-green-400">Success</h1>
      <p className="text-2xl text-gray-400">Login Successful!</p>
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg mt-6 font-semibold"
      >
        Go to Home
      </button>
    </div>
  );
};
export default Success;

