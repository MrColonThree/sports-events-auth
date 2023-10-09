import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { BsEyeSlashFill, BsEyeFill, BsGithub, BsGoogle } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const authInfo = useContext(AuthContext);
  const { signInUser, googleSignIn, githubSignIn } = authInfo;
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(() => {
        e.target.reset();
        navigate(location?.state ? location.state : "/");
        return Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User logged in successfully!",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        let errorMessage = "An error occurred during login.";

        if (error.code === "auth/invalid-email") {
          errorMessage = "Invalid email address.";
        } else if (error.code === "auth/user-not-found") {
          errorMessage = "User not found. Please check your credentials.";
        } else if (error.code === "auth/wrong-password") {
          errorMessage = "Incorrect password.";
        }
        setError(errorMessage);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        return Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User logged in successfully!",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch(() => {
        let errorMessage =
          "An error occurred while login using this Google account.";
        return setError(errorMessage);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        return Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User logged in successfully!",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch(() => {
        let errorMessage =
          "An error occurred while login using this Github account.";
        return setError(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center max-w-5xl mx-auto min-h-[85vh] my-10">
      <form
        onSubmit={handleLogIn}
        className="w-3/4 md:w-4/6 lg:w-1/2 mx-20 border-2 rounded-2xl py-12 px-10 md:px-20 shadow-xl"
      >
        <img className="w-36 mx-auto" src="logo-full.png" alt="" />
        {error && (
          <div className="text-red-500 text-center  rounded-lg p-3 mb-5">
            {error}
          </div>
        )}
        <div className="mb-5">
          <label className="block mb-2 font-medium">Your email</label>
          <input
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="yourmail@example.com"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium ">
            Your password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="your password"
              required
            />
            <button
              className="text-lg absolute right-3 top-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <BsEyeSlashFill></BsEyeSlashFill>
              ) : (
                <BsEyeFill></BsEyeFill>
              )}
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              />
            </div>
            <label className="ml-2 text-sm font-medium ">Remember me</label>
          </div>
          <NavLink
            to="/resetPassword"
            className="ml-2 text-sm font-medium text-white dark:text-blue-600"
          >
            Forget password?
          </NavLink>
        </div>

        <div className="mb-5">
          <h2>
            Don't have an account?{" "}
            <NavLink className="text-blue-600 font-semibold" to="/register">
              Register
            </NavLink>
          </h2>
        </div>
        <button
          type="submit"
          className=" text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 "
        >
          Login
        </button>
        <div className="flex text-center items-center justify-center gap-2 my-5">
          <hr className="w-full border" />
          <h2 className="text-center w-64 md:w-52">Login with</h2>
          <hr className="w-full border" />
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-between ">
          <button
            onClick={handleGoogleSignIn}
            type="submit"
            className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 flex gap-2 items-center"
          >
            <BsGoogle className="text-lg"></BsGoogle>
            Google
          </button>
          <button
            onClick={handleGithubSignIn}
            type="submit"
            className="text-white   focus:ring-4 focus:outline-none f font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 flex gap-2 items-center"
          >
            <BsGithub className="text-lg"></BsGithub>
            Github
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
