import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useCreateuser from "../utils/hooks/useCreateuser";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(100);
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    password: "",
    userAddress: "",
  });

  const createUser = useCreateuser();

  if (status == 201) Navigate("/login");
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200 opacity-70">
      <div className="w-full px-8 py-6 mx-auto bg-white shadow-xl md:w-1/3 rounded-xl">
        <h4 className="pb-2 text-xl font-semibold text-center capitalize">
          Sign Up
        </h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createUser(user, setStatus);
          }}
          className="space-y-3"
        >
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <div className="">
              <input
                type="text"
                name="userName"
                id="userName"
                value={user.userName}
                onChange={(e) => setUser({ ...user, userName: e.target.value })}
                placeholder="Enter Your Name"
                className="w-full px-2 py-1 mt-1 border border-gray-400 rounded-md"
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
                placeholder="Enter Your Email"
                value={user.userEmail}
                onChange={(e) =>
                  setUser({ ...user, userEmail: e.target.value })
                }
                className="w-full px-2 py-1 mt-1 border border-gray-400 rounded-md"
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
            <div>
              <textarea
                name="userAddress"
                id="userAddress"
                value={user.userAddress}
                onChange={(e) =>
                  setUser({ ...user, userAddress: e.target.value })
                }
                placeholder="Enter Your Address"
                className="w-full px-2 py-1 mt-1 border border-gray-400 rounded-md"
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
            <div>
              <div className="flex items-center gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  placeholder="Enter Your Password"
                  className="w-full px-2 py-1 mt-1 border border-gray-400 rounded-md"
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
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white capitalize bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              create user
            </button>
          </div>
          <h4 className="text-base text-center text-black">
            Already have an account?&nbsp;
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Signup;
