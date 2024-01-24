import { Link, Navigate, useLocation } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useState } from "react";
import axios from "axios";
const SignUp = () => {
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const role = form.userRole.value;
    const password = form.password.value;
    const number = form.number.value;
    const image = form.image.value;

    const user = { name, email, password, image, role, number };

    const passwordValidation = validatePassword(password);

    if (passwordValidation) {
      setPasswordError(passwordValidation);
      setLoading(false);
      return;
    }
    const userData = { email: email, password: password };
    try {
      const res = await axios.put(
        "https://server-indol-sigma.vercel.app/users",
        user
      );
      const user = await axios.post(
        "https://server-indol-sigma.vercel.app/login",
        userData
      );
      if (res.data.acknowledged) {
        setLoading(false);
      }
      if (res.data.success) {
        const resPons = await axios.post(
          "https://server-indol-sigma.vercel.app/login",
          userData
        );
        localStorage.setItem("token", resPons.data.token);
        localStorage.setItem("userInfo", JSON.stringify(resPons.data.userInfo));
        setLoading(false);
        toast.success("User created successfully");
        Navigate("/dashboard");
      }
      if (res.data.message) {
        setLoading(false);
        toast.error("Already exist");
      }
    } catch (error) {
      console.error("Error creating user:", error.message);
      setLoading(false);
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one capital letter.";
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must contain at least one special character.";
    }

    return ""; // No errors
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div className="flex flex-col md:min-w-[500px] max-w-lg p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl text-[#1c4456] font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to House Hunter</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1c4456] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Role
              </label>
              <select
                name="userRole"
                className="w-full bg-gray-200 rounded-md  h-10"
                id=""
              >
                <option value="">Select a Role</option>
                <option value="owner">Owner</option>
                <option value="ranter">Ranter</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Number
              </label>
              <input
                type="number"
                name="number"
                id="number"
                required
                placeholder="Number"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1c4456] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Image
              </label>
              <input
                type="text"
                name="image"
                id="image"
                required
                placeholder="Image url"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1c4456] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1c4456] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1c4456] bg-gray-200 text-gray-900"
                />
                <span
                  className="absolute top-[14px] right-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              {passwordError && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.8rem",
                    marginTop: "0.5rem",
                  }}
                >
                  {passwordError}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#1c4456] w-full rounded-md transform font-semibold duration-100 hover:bg-[#316178] py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>

        <p className="px-6 mt-3 text-sm text-center text-gray-400">
          Have an account?
          <Link
            to="/login"
            className="hover:underline hover:text-[#1c4456] text-gray-600"
          >
            Log In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
