"use client";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function UltraTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const testimonials = [
    {
      name: "Sarah J.",
      role: "E-commerce Entrepreneur",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "Our conversion rates jumped 35% after switching to MockupPro. The quality is indistinguishable from professional photoshoots.",
      rating: 5,
      result: "35% conversion boost",
      productImage:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Michael T.",
      role: "Creative Director",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "We've eliminated 80% of our photoshoot budget thanks to MockupPro's realistic AI-generated scenes.",
      rating: 4.5,
      result: "80% cost reduction",
      productImage:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Priya K.",
      role: "Marketing Lead",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      quote:
        "What used to take our team days now takes minutes. The batch processing has revolutionized our workflow.",
      rating: 5,
      result: "10x faster production",
      productImage:
        "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Auto-rotation logic
  useEffect(() => {
    if (!autoPlay || isHovering) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, isHovering, testimonials.length]);

  const navigate = (newIndex) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
    setAutoPlay(false); // Pause auto-play when manually navigating
    setTimeout(() => setAutoPlay(true), 10000); // Resume auto-play after 10s
  };

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section
      className="relative py-12 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-purple-100/20 blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-100/20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6 shadow-sm">
            Customer Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how top creatives and businesses are transforming their
            workflow
          </p>
        </motion.div>

        {/* Interactive testimonial carousel */}
        <div className="relative h-[600px]">
          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="hidden lg:flex absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-200 items-center justify-center text-gray-600 hover:text-purple-600 z-10 transition-all hover:scale-110"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextTestimonial}
            className="hidden lg:flex absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-200 items-center justify-center text-gray-600 hover:text-purple-600 z-10 transition-all hover:scale-110"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>

          {/* Testimonial cards */}
          <AnimatePresence custom={direction}>
            {testimonials.map(
              (testimonial, index) =>
                index === activeIndex && (
                  <motion.div
                    key={index}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -100 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="h-full w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
                      {/* Testimonial content */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-white rounded-3xl shadow-2xl border border-gray-100"
                      >
                        <div className="mb-8">
                          <FaQuoteLeft className="text-4xl text-purple-100 mb-4" />
                          <p className="text-2xl text-gray-800 font-medium leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                        </div>

                        <div className="mt-auto">
                          <div className="flex items-center mb-4">
                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg mr-4">
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-gray-900">
                                {testimonial.name}
                              </h4>
                              <p className="text-gray-500">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex">
                              {renderStars(testimonial.rating)}
                            </div>
                            <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">
                              {testimonial.result}
                            </span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Product showcase */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="lg:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl"
                      >
                        <img
                          src={testimonial.productImage}
                          alt="Product example"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <h3 className="text-xl font-bold mb-2">
                            Featured Work
                          </h3>
                          <p className="text-white/80">
                            Created with MockupPro
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Navigation dots with progress indicators */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => navigate(index)}
                className="relative flex flex-col cursor-pointer items-center group"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <div className="w-3 h-3 rounded-full transition-all mb-1 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 rounded-full ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-purple-600 to-blue-500"
                        : "bg-gray-300"
                    }`}
                  ></div>
                </div>
                {activeIndex === index && (
                  <motion.div
                    className="h-1 bg-gray-200 rounded-full absolute -bottom-4 left-0 right-0 overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    onAnimationComplete={() => {
                      if (activeIndex === index && autoPlay && !isHovering) {
                        nextTestimonial();
                      }
                    }}
                  >
                    <div className="h-full bg-gradient-to-r from-purple-600 to-blue-500"></div>
                  </motion.div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <p className="text-center text-gray-500 mb-10">TRUSTED BY TEAMS AT</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {["Adobe", "Shopify", "Figma", "Nike", "Airbnb", "Pinterest"].map(
              (logo) => (
                <motion.div
                  key={logo}
                  whileHover={{ y: -3 }}
                  className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors text-center"
                >
                  {logo}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
