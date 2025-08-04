'use client';
import React, { useState } from "react";

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="py-2 mb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 shadow-sm">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                clipRule="evenodd"
              ></path>
            </svg>
            Flexible Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight relative inline-block">
            Transparent, Fair{" "}
            <span className="gradient-text pro-theme relative">
              Pricing
              <svg
                className="absolute -bottom-5 left-0 w-full"
                viewBox="0 0 200 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10 C 20 15, 40 15, 50 10 S 80 5, 100 10 S 140 15, 150 10 S 180 5, 200 10"
                  stroke="url(#pricing-underline)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="pricing-underline"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="var(--pro-primary)" />
                    <stop offset="100%" stopColor="var(--pro-dark)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional plans for every stage of your creative journey
          </p>

          {/* Toggle switch */}
          <div className="mt-10 flex items-center justify-center">
            <div className="flex items-center bg-gray-100 rounded-full p-1 shadow-inner">
              <button
                onClick={() => setBilling("monthly")}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  billing === "monthly"
                    ? "text-gray-700 bg-white shadow"
                    : "text-gray-500"
                }`}
                id="monthly-toggle"
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("annual")}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  billing === "annual"
                    ? "text-black bg-white shadow"
                    : "text-gray-500"
                }`}
                id="annual-toggle"
              >
                Annual{" "}
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="relative group starter-theme">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-200 to-blue-100 rounded-3xl opacity-50 blur-md group-hover:opacity-70 transition-all duration-300"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 h-full flex flex-col pricing-card">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Starter
                </h3>
                <div className="flex justify-center items-baseline">
                  <span className="text-5xl font-extrabold text-gray-900 monthly-price">
                    $0
                  </span>
                  <span
                    className={`text-5xl font-extrabold text-gray-900 annual-price ${
                      billing === "annual" ? "block" : "hidden"
                    }`}
                  >
                    $0
                  </span>
                  <span className="ml-2 text-lg font-medium text-gray-500">
                    /month
                  </span>
                </div>
                <p className="mt-3 text-gray-500 font-medium">
                  Perfect for trying out the platform
                </p>
              </div>
              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {[
                    "10 mockups per month",
                    "Basic templates library",
                    "Watermarked downloads",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="h-5 w-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {["Commercial license", "Video mockups"].map(
                    (feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-400">
                        <div className="flex-shrink-0 mt-1">
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <span className="ml-3">{feature}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <button
                type="button"
                className="w-full py-3 rounded-xl bg-primary text-white font-semibold text-lg shadow-md hover:bg-primary-dark transition-colors"
              >
                Start Free
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="relative group pro-theme">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl opacity-50 blur-md group-hover:opacity-70 transition-all duration-300"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 h-full flex flex-col pricing-card">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Pro</h3>
                <div className="flex justify-center items-baseline">
                  <span
                    className={`text-5xl font-extrabold text-gray-900 ${
                      billing === "monthly" ? "block" : "hidden"
                    }`}
                  >
                    $49
                  </span>
                  <span
                    className={`text-5xl font-extrabold text-gray-900 ${
                      billing === "annual" ? "block" : "hidden"
                    }`}
                  >
                    $39
                  </span>
                  <span className="ml-2 text-lg font-medium text-gray-500">
                    /month
                  </span>
                </div>
                <p className="mt-3 text-gray-500 font-medium">
                  For freelancers and professionals
                </p>
              </div>
              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {[
                    "Unlimited mockups",
                    "Pro templates library",
                    "No watermarks",
                    "Priority support",
                    "Commercial license",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="h-5 w-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="w-full py-3 rounded-xl bg-primary text-white font-semibold text-lg shadow-md hover:bg-primary-dark transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Business Plan */}
          <div className="relative group business-theme">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-400 to-red-400 rounded-3xl opacity-50 blur-md group-hover:opacity-70 transition-all duration-300"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 h-full flex flex-col pricing-card">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Business
                </h3>
                <div className="flex justify-center items-baseline">
                  <span
                    className={`text-5xl font-extrabold text-gray-900 ${
                      billing === "monthly" ? "block" : "hidden"
                    }`}
                  >
                    $99
                  </span>
                  <span
                    className={`text-5xl font-extrabold text-gray-900 ${
                      billing === "annual" ? "block" : "hidden"
                    }`}
                  >
                    $79
                  </span>
                  <span className="ml-2 text-lg font-medium text-gray-500">
                    /month
                  </span>
                </div>
                <p className="mt-3 text-gray-500 font-medium">
                  Best for businesses and teams
                </p>
              </div>
              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {[
                    "Unlimited mockups",
                    "All Pro features",
                    "Team collaboration",
                    "Dedicated support",
                    "Custom integrations",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="h-5 w-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="w-full py-3 rounded-xl bg-primary text-white font-semibold text-lg shadow-md hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
