"use client";
import { useState, useRef } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaGoogle,
  FaApple,
  FaGithub,
  FaCheck,
  FaCrown,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function PremiumSignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [plan, setPlan] = useState("free"); // free | pro
  const [signupState, setSignupState] = useState("idle"); // idle | loading | success | error
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignupState("loading");

    // Simulate signup process
    setTimeout(() => {
      if (
        email.includes("@") &&
        password.length >= 6 &&
        password === confirmPassword
      ) {
        setSignupState("success");
        setTimeout(() => {
          // Redirect or handle success
        }, 1500);
      } else {
        setSignupState("error");
      }
    }, 2000);
  };

  // Button animation variants
  const buttonVariants = {
    idle: {
      background: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
      scale: 1,
    },
    hover: {
      background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
      scale: 1.02,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
    loading: {
      background: "linear-gradient(135deg, #6D28D9 0%, #4338CA 100%)",
      transition: { duration: 0.3 },
    },
    success: {
      background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
      transition: { duration: 0.3 },
    },
    error: {
      background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Left Side - Brand Showcase */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 bg-gradient-to-br from-purple-900 to-blue-800 p-12 flex flex-col justify-between relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/10 blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-400/10 blur-xl"></div>
        </div>

        <div className="relative z-10 flex items-center space-x-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg"
          >
            <svg
              className="w-6 h-6 text-purple-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
          </motion.div>
          <span className="text-2xl font-bold text-white">
            MOCKUP<span className="text-blue-300">PRO</span>
          </span>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 relative z-10"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Create Stunning Product Visuals
          </h2>
          <p className="text-xl text-blue-100 max-w-md">
            Join 50,000+ designers creating professional mockups in minutes
          </p>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
            {[
              "No design skills needed",
              "Commercial license included",
              "Cancel anytime",
              "4.9/5 stars on TrustPilot",
              "1000+ premium templates",
              "AI-powered scene generation",
            ].map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="flex items-center text-blue-100"
              >
                <FaCheck className="w-4 h-4 mr-2 text-blue-300 flex-shrink-0" />
                <span className="text-sm">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="hidden md:block relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center space-x-4"
          >
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
                  className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm"></div>
                </motion.div>
              ))}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-blue-200 text-sm"
            >
              Trusted by leading brands
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Signup Form */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center">
        <motion.div
          ref={formRef}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <motion.h1
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold text-gray-800 mb-2"
            >
              Create your account
            </motion.h1>
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600"
            >
              Start creating professional mockups in minutes
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>

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
                  placeholder="Password (min 6 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                  minLength="6"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                  minLength="6"
                />
              </div>
            </motion.div>

            {/* Plan Selection */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-medium text-gray-800">
                Choose your plan
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPlan("free")}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    plan === "free"
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 hover:border-purple-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Free</h4>
                    <div className="text-sm bg-gray-100 px-2 py-1 rounded">
                      Current
                    </div>
                  </div>
                  <p className="text-2xl font-bold mb-2">
                    $0
                    <span className="text-sm font-normal text-gray-500">
                      /month
                    </span>
                  </p>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="w-3 h-3 mr-2 text-green-500" />5
                      mockups/month
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="w-3 h-3 mr-2 text-green-500" />
                      Basic templates
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="w-3 h-3 mr-2 text-green-500" />
                      Watermarked downloads
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPlan("pro")}
                  className={`p-4 border rounded-lg cursor-pointer transition-all relative ${
                    plan === "pro"
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 hover:border-purple-300"
                  }`}
                >
                  <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-bl rounded-tr">
                    POPULAR
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Pro</h4>
                    <FaCrown className="text-yellow-500" />
                  </div>
                  <p className="text-2xl font-bold mb-2">
                    $19
                    <span className="text-sm font-normal text-gray-500">
                      /month
                    </span>
                  </p>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="w-3 h-3 mr-2 text-green-500" />
                      Unlimited mockups
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="w-3 h-3 mr-2 text-green-500" />
                      Premium templates
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="w-3 h-3 mr-2 text-green-500" />
                      No watermark + Commercial use
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="w-3 h-3 mr-2 text-green-500" />
                      Batch processing
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="w-3 h-3 mr-2 text-green-500" />
                      AI tools
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                type="submit"
                disabled={signupState === "loading"}
                variants={buttonVariants}
                initial="idle"
                animate={signupState === "idle" ? "idle" : signupState}
                whileHover={signupState === "idle" ? "hover" : {}}
                whileTap={signupState === "idle" ? "tap" : {}}
                className="w-full flex items-center justify-center px-6 py-3 text-white font-medium rounded-lg shadow-lg transition-all overflow-hidden relative"
              >
                <AnimatePresence mode="wait">
                  {signupState === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
                      {plan === "pro"
                        ? "Start 7-day free trial"
                        : "Create free account"}{" "}
                      <FaArrowRight className="ml-2" />
                    </motion.span>
                  )}
                  {signupState === "loading" && (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
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
                      Creating account...
                    </motion.span>
                  )}
                  {signupState === "success" && (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
                      <FaCheck className="mr-2" /> Account Created!
                    </motion.span>
                  )}
                  {signupState === "error" && (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
                      Error Creating Account - Try Again
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {signupState === "error" && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-2 text-sm text-red-600 text-center"
                >
                  Please check your information and try again
                </motion.p>
              )}

              <p className="mt-3 text-xs text-gray-500 text-center">
                By signing up, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </motion.div>
          </form>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8"
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all"
              >
                <FaGoogle className="h-5 w-5 text-red-500" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all"
              >
                <FaApple className="h-5 w-5 text-gray-900" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all"
              >
                <FaGithub className="h-5 w-5 text-gray-800" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center text-sm text-gray-600"
          >
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-purple-600 hover:text-purple-500 transition-colors"
            >
              Sign in
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
