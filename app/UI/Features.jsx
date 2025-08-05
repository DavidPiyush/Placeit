"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "AI-Powered Mockups",
    description: "Smart fitting with realistic lighting and shadows",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#8B5CF6",
  },
  {
    id: 2,
    title: "3000+ Templates",
    description: "Massive library across all categories",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#EC4899",
  },
  {
    id: 3,
    title: "Video Mockups",
    description: "Animated presentations for social media",
    image:
      "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#3B82F6",
  },
  {
    id: 4,
    title: "Apparel Designer",
    description: "Complete toolkit for custom clothing",
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#10B981",
  },
];

export default function UltraModernFeatures() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full mb-6"
          >
            Next Generation Tools
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
          >
            Interactive <br />
            Mockup Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Hover to explore our cutting-edge features
          </motion.p>
        </div>

        <div className="relative h-[600px]">
          {/* Background showcase image */}
          {hoveredId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 overflow-hidden rounded-3xl"
            >
              <img
                src={features.find((f) => f.id === hoveredId).image}
                alt=""
                className="w-full h-full object-cover opacity-20 blur-lg scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/70 to-gray-950/90"></div>
            </motion.div>
          )}

          {/* Feature items */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                onHoverStart={() => setHoveredId(feature.id)}
                onHoverEnd={() => setHoveredId(null)}
                className={`relative flex items-center p-8 rounded-2xl cursor-pointer transition-all duration-500 ${
                  hoveredId === feature.id
                    ? "bg-gray-900/80 backdrop-blur-md border border-gray-800 shadow-2xl"
                    : "bg-gray-900/40 hover:bg-gray-900/60 border border-gray-800/50"
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + feature.id * 0.1 }}
              >
                <div className="flex-1">
                  <div
                    className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center"
                    style={{ backgroundColor: feature.color }}
                  >
                    <span className="text-white text-xl">{feature.id}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <button className="flex items-center text-sm font-medium text-white group">
                    Discover more
                    <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Preview image that scales on hover */}
                {hoveredId === feature.id && (
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="hidden md:block absolute right-8 w-48 h-48 rounded-xl overflow-hidden shadow-xl border border-gray-700/50"
                  >
                    <img
                      src={feature.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="relative px-8 py-4 text-sm font-medium tracking-wide text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-2xl hover:shadow-purple-500/30 transition-all group overflow-hidden">
            <span className="relative z-10 flex items-center">
              Begin Your Creative Journey
              <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-purple-900/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl"></div>
      </div>
    </section>
  );
}
