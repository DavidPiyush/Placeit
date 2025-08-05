"use client";
import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaGoogle,
  FaApple,
  FaGithub,
} from "react-icons/fa";

export default function SplitLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Login logic here
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Side - Brand Showcase */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-purple-900 to-blue-800 p-12 flex flex-col justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-purple-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-white">
            MOCKUP<span className="text-blue-300">PRO</span>
          </span>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Elevate Your Product Visuals
          </h2>
          <p className="text-xl text-blue-100 max-w-md">
            Join 50,000+ designers creating professional mockups in minutes
          </p>

          <div className="mt-12 flex space-x-4">
            {[
              "No design skills needed",
              "Commercial license included",
              "Cancel anytime",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center text-blue-100">
                <svg
                  className="w-5 h-5 mr-2 text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex items-center space-x-4">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm"></div>
                </div>
              ))}
            <p className="text-blue-200 text-sm">Trusted by leading brands</p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome back
            </h1>
            <p className="text-gray-600">Sign in to continue to MockupPro</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-purple-600 hover:text-purple-500"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center cursor-pointer px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                <>
                  Continue <FaArrowRight className="ml-2" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or sign in with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <FaGoogle className="h-5 w-5 text-red-500" />
              </a>
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <FaApple className="h-5 w-5 text-gray-900" />
              </a>
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <FaGithub className="h-5 w-5 text-gray-800" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              className="font-medium text-purple-600 hover:text-purple-500"
            >
              Start your free trial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
