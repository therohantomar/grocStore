import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200">
      <div className="max-w-sm px-8 py-6 mx-auto bg-white rounded-lg">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="userName"
                id="userName"
                className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="userEmail"
              className="block text-sm font-medium text-gray-700"
            >
              User Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="userAddress"
              className="block text-sm font-medium text-gray-700"
            >
              User Address
            </label>
            <div className="mt-1">
              <textarea
                name="userAddress"
                id="userAddress"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows={3}
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <div className="flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="w-full px-4 py-2 border-gray-300 rounded-md shadow-sm outline-none sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
                <button
                  type="button"
                  className="focus:outline-none"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <BsFillEyeFill
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      className="w-5 h-5"
                    />
                  ) : (
                    <BsFillEyeSlashFill
                      onClick={() => setShowPassword(!showPassword)}
                      className="w-5 h-5"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
