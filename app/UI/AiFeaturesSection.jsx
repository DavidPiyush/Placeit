import {
  FaBrain,
  FaMagic,
  FaLightbulb,
  FaEraser,
  FaArrowRight,
  FaRobot,
  FaUser,
  FaSyncAlt,
} from "react-icons/fa";

export default function AiFeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <FaBrain className="mr-2" /> AI-Powered Tools
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Smart{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                AI Features
              </span>{" "}
              That Save You Time
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Our artificial intelligence helps you create better mockups faster
              with these innovative features:
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                    <FaMagic className="text-white text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">AI Scene Generator</h3>
                  <p className="text-gray-600">
                    Describe your ideal scene ("cozy coffee shop background")
                    and our AI will generate perfect mockup environments.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                    <FaLightbulb className="text-white text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Smart Suggestions</h3>
                  <p className="text-gray-600">
                    Get AI recommendations for the best backgrounds, props, and
                    colors based on your product.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                    <FaEraser className="text-white text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Brand Removal</h3>
                  <p className="text-gray-600">
                    Automatically remove existing branding/watermarks from
                    mockups and replace with your own.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition"
              >
                Try AI Features Now <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>

          {/* Right Content (Mockup Chat) */}
          <div className="relative">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-auto text-sm text-gray-500">
                  AI Mockup Generator
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-start mb-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <FaRobot className="text-indigo-500" />
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm flex-1">
                    <p className="text-sm font-medium mb-1">AI Assistant</p>
                    <p className="text-sm text-gray-600">
                      What kind of mockup are you creating today? You can say
                      things like "luxury watch on marble background" or
                      "organic skincare product in bathroom setting".
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <FaUser className="text-gray-600" />
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg flex-1 border border-primary/20">
                    <p className="text-sm font-medium mb-1">You</p>
                    <p className="text-sm">
                      "Minimalist white mug on wooden table with coffee beans
                      scattered around"
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {/* Pulsing placeholders */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 rounded-lg h-24 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>

              <div className="text-center py-3">
                <button className="text-sm text-primary font-medium hover:underline inline-flex items-center mx-auto">
                  <FaSyncAlt className="mr-1" /> Generate More Variations
                </button>
              </div>
            </div>

            {/* Floating Image */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform rotate-6 animate-float z-10">
              <img
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
                alt="AI Generated Mockup"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
