import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleShowPassword = () => setShowPassword(!showPassword);
  console.log(user);
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200 opacity-70">
      <div className="w-full px-8 py-6 mx-auto bg-white shadow-xl md:w-1/3 rounded-xl">
        <h4 className="pb-2 text-xl font-semibold text-center capitalize">
          Log In
        </h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-3"
        >
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="">
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
                placeholder="Enter Your Name"
                className="w-full px-2 py-1 mt-1 border border-gray-400 rounded-md"
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
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  value={user.password}
                  placeholder="Enter Your Password"
                  className="w-full px-2 py-1 mt-1 border border-gray-400 rounded-md"
                  required
                />
                <button
                  type="button"
                  className="focus:outline-none"
                  onClick={handleShowPassword}
                >
                  {showPassword ? (
                    <BsFillEyeFill className="w-5 h-5" />
                  ) : (
                    <BsFillEyeSlashFill className="w-5 h-5" />
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
              log in
            </button>
          </div>
          <h4 className="text-base text-center text-black">
            Dont't have an account?&nbsp;
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
