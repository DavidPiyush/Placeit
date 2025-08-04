'use client';
import { useState } from "react";

export default function PricingFAQSection() {
  // FAQ open/close state management
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need design skills to use MockupPro?",
      answer: (
        <>
          <p>
            Not at all! MockupPro is designed to be intuitive for beginners
            while powerful enough for professionals. Our AI tools and templates
            make it easy for anyone to create professional-looking mockups
            without any design experience.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 mt-3 border border-blue-100">
            <div className="flex">
              <div className="flex-shrink-0">
                <i className="fas fa-lightbulb text-blue-500 mt-1"></i>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  Try our{" "}
                  <a
                    href="#"
                    className="font-medium underline hover:text-blue-800"
                  >
                    beginner&apos;s tutorial
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
          <p>
            We support JPG, PNG, PSD, SVG, and PDF files. For best results with
            transparent backgrounds, use PNG or PSD files. Vector files (SVG)
            will give you the sharpest results when resizing.
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {["JPG", "PNG", "PSD", "SVG", "PDF"].map((format) => (
              <span
                key={format}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
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
          <p>
            Yes! All mockups created with our Pro and Agency plans include a
            commercial license, meaning you can use them for:
          </p>
          <ul className="mt-3 space-y-2 pl-5 list-disc">
            <li>Client work and presentations</li>
            <li>E-commerce listings and product pages</li>
            <li>Marketing materials and advertisements</li>
            <li>Social media content and promotions</li>
          </ul>
          <p className="mt-3">
            The free plan includes watermarked mockups that cannot be used
            commercially.
          </p>
        </>
      ),
    },
    {
      question: "How does the free trial work?",
      answer: (
        <>
          <p>
            Our 7-day free trial gives you full access to all Pro features with
            no limitations. Here&apos;s what you should know:
          </p>
          <div className="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <i className="fas fa-info-circle text-primary"></i>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">No credit card required</span>{" "}
                  to start the trial. If you don&apos;t cancel before the trial
                  ends, your subscription will automatically continue at the Pro
                  plan rate of $19/month.
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
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <i className="fas fa-shield-alt text-green-500"></i>
            </div>
            <div className="ml-3">
              <p className="font-medium text-gray-900">
                30-Day Money-Back Guarantee
              </p>
              <p className="mt-1">
                If you&apos;re not satisfied with MockupPro for any reason, just
                contact our support team within 30 days of your purchase for a
                full refund, no questions asked.
              </p>
            </div>
          </div>
          <div className="mt-4 bg-green-50 rounded-lg p-4 border border-green-100">
            <div className="flex">
              <div className="flex-shrink-0">
                <i className="fas fa-headset text-green-500 mt-1"></i>
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
    <>
      {/* Section with floating shapes and CTA */}
      <section className="py-16 relative overflow-hidden gradient-bg">
        {/* Floating decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            <i className="fas fa-bolt mr-2 text-yellow-300"></i> No credit card
            required
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your <br />
            <span className="relative inline-block">
              <span className="relative z-10">Product Visuals</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300/30 -rotate-1 z-0"></span>
            </span>
            ?
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Join <span className="font-semibold text-white">12,500+</span>{" "}
            designers and businesses creating professional mockups in minutes,
            not hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group"
            >
              <span>Start Free 7-Day Trial</span>
              <i className="fas fa-arrow-right ml-3 transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>

            <a
              href="#"
              className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              <i className="fas fa-play-circle mr-3 text-yellow-300"></i>
              <span>Watch 1-Min Demo</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-white/80">
            {[
              "No design skills needed",
              "Commercial license included",
              "Cancel anytime",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center">
                <i className="fas fa-check-circle text-yellow-300 mr-2"></i>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <i className="fas fa-question-circle mr-2"></i> SUPPORT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about MockupPro
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map(({ question, answer }, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`group bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:border-primary/30 transition-all duration-200`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="faq-btn w-full flex justify-between items-center text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${idx}`}
                >
                  <h3
                    className={`text-lg md:text-xl font-semibold transition-colors ${
                      isOpen
                        ? "text-primary"
                        : "text-gray-900 group-hover:text-primary"
                    }`}
                  >
                    {question}
                  </h3>
                  <i
                    className={`fas fa-chevron-down text-primary transition-transform duration-300 transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                <div
                  id={`faq-content-${idx}`}
                  className={`faq-content overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 pt-4" : "max-h-0"
                  }`}
                >
                  <div className="text-gray-600">{answer}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-transparent via-gray-200 to-transparent h-px mx-auto max-w-xs mb-8"></div>
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any questions or
            issues you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-black rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center"
            >
              <i className="fas fa-envelope mr-2"></i> Email Support
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center justify-center"
            >
              <i className="fas fa-comment-dots mr-2"></i> Live Chat
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
