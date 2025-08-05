"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LuxuryPricing() {
  const [billing, setBilling] = useState("annual");
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: "Starter",
      tagline: "Begin your creative journey",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "10 premium mockups/month",
        "Basic template library",
        "Watermarked exports",
        "Community support",
      ],
      unavailable: [
        "Commercial licensing",
        "4K video mockups",
        "AI generation",
      ],
      gradient: "from-blue-400 to-cyan-500",
      buttonVariant: "bg-gray-900 hover:bg-gray-800",
      popular: false,
    },
    {
      name: "Professional",
      tagline: "For serious creators",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "Unlimited HD mockups",
        "Premium template collection",
        "No watermarks",
        "Commercial license",
        "Priority support",
        "Basic AI generation",
      ],
      unavailable: ["Team collaboration", "Custom integrations"],
      gradient: "from-purple-500 to-indigo-600",
      buttonVariant:
        "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700",
      popular: true,
    },
    {
      name: "Enterprise",
      tagline: "For elite studios",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Everything in Professional+",
        "Team workspace",
        "Custom API integrations",
        "Dedicated success manager",
        "8K ultra HD exports",
        "Advanced AI tools",
      ],
      unavailable: [],
      gradient: "from-amber-500 to-orange-600",
      buttonVariant:
        "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
      popular: false,
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Luxury background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-purple-100/20 blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-100/20 blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://uploads-ssl.webflow.com/5f6bc60e665f54545a1e52a5/62f9a2547f6a9c2a3cffd7b0_noise-pattern.png')] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Header with refined typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center mb-24"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-white text-gray-900 text-sm font-medium mb-6 shadow-xs border border-gray-200/50"
            whileHover={{ y: -2 }}
          >
            Transparent Pricing
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Select Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Creative Suite
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional-grade tools tailored to your ambition
          </p>

          {/* Premium toggle */}
          <motion.div
            className="mt-12 flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center bg-gray-100 rounded-full p-1 shadow-inner border border-gray-200/30">
              <button
                onClick={() => setBilling("monthly")}
                className={`px-8 py-3 rounded-full cursor-pointer font-medium transition-all duration-300 ${
                  billing === "monthly"
                    ? "text-gray-900 bg-white shadow-sm border border-gray-200/50"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("annual")}
                className={`px-8 py-3 rounded-full font-medium cursor-pointer transition-all duration-300 ${
                  billing === "annual"
                    ? "text-gray-900 bg-white shadow-sm border border-gray-200/50"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Annual{" "}
                <span className="ml-2 px-2 py-1 bg-green-100/80 text-green-800 rounded-full text-xs font-bold">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Luxury pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="relative"
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
            >
              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${plan.gradient} opacity-0 blur-xl`}
                animate={{
                  opacity: hoveredPlan === index ? 0.3 : 0,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  RECOMMENDED
                </motion.div>
              )}

              {/* Main card */}
              <motion.div
                className={`h-full bg-white rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-500 ${
                  hoveredPlan === index ? "shadow-2xl" : "shadow-md"
                }`}
                animate={{
                  y: hoveredPlan === index ? -10 : 0,
                  borderColor:
                    hoveredPlan === index
                      ? "rgba(209, 213, 219, 0.8)"
                      : "rgba(209, 213, 219, 0.5)",
                }}
              >
                {/* Gradient header */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${plan.gradient}`}
                ></div>

                <div className="p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-500 font-medium">{plan.tagline}</p>
                  </div>

                  {/* Animated price display */}
                  <motion.div
                    className="mb-10"
                    key={billing}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-end">
                      <span className="text-5xl font-extrabold text-gray-900 tracking-tight">
                        $
                        {billing === "monthly"
                          ? plan.monthlyPrice
                          : plan.annualPrice}
                      </span>
                      <span className="text-lg font-medium text-gray-500 ml-2 mb-1.5">
                        /month
                      </span>
                    </div>
                    {billing === "annual" && plan.annualPrice > 0 && (
                      <p className="text-sm text-gray-500 mt-2">
                        ${plan.annualPrice * 12} billed annually
                      </p>
                    )}
                  </motion.div>

                  {/* Features list */}
                  <ul className="space-y-3.5 mb-12">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <svg
                          className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                    {plan.unavailable.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-400">
                        <svg
                          className="h-5 w-5 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="ml-3">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <motion.button
                    className={`w-full py-4 rounded-xl font-bold text-white cursor-pointer transition-all duration-300 ${plan.buttonVariant} shadow-lg`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.name === "Starter"
                      ? "Get Started Free"
                      : plan.name === "Professional"
                      ? "Upgrade Now"
                      : "Contact Sales"}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-6">
            Need custom enterprise solutions?
          </p>
          <motion.button
            className="px-8 py-3.5 bg-white border cursor-pointer border-gray-200 rounded-xl text-gray-800 font-medium hover:bg-gray-50 transition-colors shadow-sm"
            whileHover={{ y: -2 }}
          >
            Request Custom Quote
          </motion.button>
        </motion.div> */}
        <div class="mt-20 text-center">
          <div class="inline-flex items-center px-6 py-4 bg-white rounded-xl shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <svg
              class="h-6 w-6 text-green-500 mr-3 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-gray-700 text-left">
              <span class="font-semibold">
                All plans include a 7-day free trial
              </span>{" "}
              with no credit card required. Cancel anytime during trial with no
              charges.
            </span>
          </div>

          <p class="mt-8 text-gray-600">
            Need custom solutions or enterprise pricing?
            <a
              href="#"
              class="text-primary font-semibold hover-underline inline-flex items-center"
            >
              Contact our team
              <svg
                class="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
