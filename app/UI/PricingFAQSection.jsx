"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PremiumFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need design skills to use MockupPro?",
      answer: (
        <>
          <p className="text-gray-600 mb-4">
            Not at all! MockupPro is designed to be intuitive for beginners
            while powerful enough for professionals. Our AI tools and templates
            make it easy for anyone to create professional-looking mockups
            without any design experience.
          </p>
          <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 backdrop-blur-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  Try our{" "}
                  <a
                    href="#"
                    className="font-medium underline hover:text-blue-800"
                  >
                    beginner's tutorial
                  </a>{" "}
                  to get started in just 5 minutes!
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      question: "What file formats can I upload?",
      answer: (
        <>
          <p className="text-gray-600 mb-4">
            We support JPG, PNG, PSD, SVG, and PDF files. For best results with
            transparent backgrounds, use PNG or PSD files. Vector files (SVG)
            will give you the sharpest results when resizing.
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2">
            {["JPG", "PNG", "PSD", "SVG", "PDF"].map((format) => (
              <span
                key={format}
                className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium text-center"
              >
                {format}
              </span>
            ))}
          </div>
        </>
      ),
    },
    {
      question: "Can I use the mockups commercially?",
      answer: (
        <>
          <p className="text-gray-600 mb-4">
            Yes! All mockups created with our Pro and Agency plans include a
            commercial license, meaning you can use them for:
          </p>
          <ul className="space-y-3 mb-4 pl-5">
            {[
              "Client work and presentations",
              "E-commerce listings",
              "Marketing materials",
              "Social media content",
            ].map((item) => (
              <li
                key={item}
                className="relative text-gray-600 before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-500"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="bg-purple-50/50 rounded-xl p-4 border border-purple-100">
            <p className="text-sm text-purple-700">
              The free plan includes watermarked mockups that cannot be used
              commercially.
            </p>
          </div>
        </>
      ),
    },
    {
      question: "How does the free trial work?",
      answer: (
        <>
          <p className="text-gray-600 mb-4">
            Our 7-day free trial gives you full access to all Pro features with
            no limitations. Here's what you should know:
          </p>
          <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-200 backdrop-blur-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">No credit card required</span>{" "}
                  to start the trial. If you don't cancel before the trial ends,
                  your subscription will automatically continue at the Pro plan
                  rate.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      question: "What's your refund policy?",
      answer: (
        <>
          <div className="flex items-start mb-4">
            <div className="flex-shrink-0">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="font-medium text-gray-900">
                30-Day Money-Back Guarantee
              </p>
              <p className="mt-1 text-gray-600">
                If you're not satisfied with MockupPro for any reason, just
                contact our support team within 30 days for a full refund.
              </p>
            </div>
          </div>
          <div className="bg-green-50/50 rounded-xl p-4 border border-green-100 backdrop-blur-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">
                  Our support team typically responds within 2 hours during
                  business hours.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  function toggleFAQ(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="bg-white">
      {/* Hero CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-800">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 shadow-sm border border-white/20"
          >
            <svg
              className="w-4 h-4 mr-2 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            No credit card required
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Elevate Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Product Visuals</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-300/30 -rotate-1 z-0"></span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-10 max-w-3xl mx-auto"
          >
            Join <span className="font-semibold text-white">12,500+</span>{" "}
            designers creating professional mockups in minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            >
              <span>Start Free 7-Day Trial</span>
              <svg
                className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-3 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              <span>Watch Demo</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-white/80"
          >
            {[
              "No design skills needed",
              "Commercial license included",
              "Cancel anytime",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4 shadow-sm">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            SUPPORT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about MockupPro
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map(({ question, answer }, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                className={`group bg-white rounded-xl shadow-sm hover:shadow-md border transition-all duration-200 ${
                  isOpen
                    ? "border-purple-300"
                    : "border-gray-200 hover:border-purple-200"
                }`}
                whileHover={{ y: -2 }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between cursor-pointer items-center text-left p-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${idx}`}
                >
                  <h3
                    className={`text-lg md:text-xl font-semibold transition-colors ${
                      isOpen
                        ? "text-purple-600"
                        : "text-gray-900 group-hover:text-purple-600"
                    }`}
                  >
                    {question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <svg
                      className="w-5 h-5 text-purple-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${idx}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="text-gray-600">{answer}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-transparent via-gray-200 to-transparent h-px mx-auto max-w-xs mb-8"></div>
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any questions or
            issues you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email Support
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg font-medium hover:bg-gray-50 transition-all flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clipRule="evenodd"
                />
              </svg>
              Live Chat
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
