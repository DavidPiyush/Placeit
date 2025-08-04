import {
  FaBolt,
  FaArrowRight,
  FaPlayCircle,
  FaCheckCircle,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="pt-20 pb-20 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <FaBolt className="mr-2" />
            AI-Powered Mockups
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="block">Design Stunning</span>
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Product Mockups
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Create professional, photorealistic mockups in seconds. Perfect for
            e-commerce, social media, and presentations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition flex items-center justify-center"
            >
              Start Creating Free <FaArrowRight className="ml-3" />
            </a>
            <a
              href="#"
              className="px-8 py-4 border border-gray-300 text-gray-800 rounded-xl font-bold hover:bg-gray-100 transition flex items-center justify-center"
            >
              <FaPlayCircle className="mr-3" /> Watch Demo
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-gray-600">
            {[
              "No credit card required",
              "7-day free trial",
              "Commercial license",
            ].map((text) => (
              <div key={text} className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right content - Floating mockups */}
        <div className="relative hidden lg:block">
          <div className="relative z-10 w-full max-w-lg mx-auto">
            <div
              className="absolute -top-10 -left-10 w-64 h-64 bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-6 animate-float"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80"
                alt="T-Shirt Mockup"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute top-20 right-0 w-56 h-56 bg-white rounded-2xl shadow-2xl overflow-hidden transform -rotate-3 animate-float"
              style={{ animationDelay: "0.4s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
                alt="Phone Mockup"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute bottom-0 left-1/4 w-60 h-60 bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-12 animate-float"
              style={{ animationDelay: "0.6s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1099&q=80"
                alt="Watch Mockup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
