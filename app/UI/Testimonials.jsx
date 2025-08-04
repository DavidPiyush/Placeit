import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section className="px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto pt-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Customers Say
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join 50,000+ designers, entrepreneurs, and marketers creating better
          product visuals
        </p>
      </div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="testimonial-card p-8 rounded-2xl shadow-lg border border-gray-100 relative">
          <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white">
            <FaQuoteLeft className="text-sm" />
          </div>
          <div className="flex items-center mb-4">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sarah J."
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold">Sarah J.</h4>
              <p className="text-sm text-gray-500">Etsy Shop Owner</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            "MockupPro has saved me so much time! I used to spend hours in
            Photoshop trying to make my product photos look professional. Now I
            can create stunning mockups in minutes that make my Etsy listings
            stand out."
          </p>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card p-8 rounded-2xl shadow-lg border border-gray-100 relative">
          <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white">
            <FaQuoteLeft className="text-sm" />
          </div>
          <div className="flex items-center mb-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Michael T."
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold">Michael T.</h4>
              <p className="text-sm text-gray-500">Graphic Designer</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            "The AI features are game-changing. I can generate perfect mockup
            scenes just by describing what I want. It's cut my client
            presentation time in half and the quality is consistently
            professional."
          </p>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial-card p-8 rounded-2xl shadow-lg border border-gray-100 relative">
          <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white">
            <FaQuoteLeft className="text-sm" />
          </div>
          <div className="flex items-center mb-4">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Priya K."
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold">Priya K.</h4>
              <p className="text-sm text-gray-500">Marketing Director</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            "We use MockupPro for all our product marketing now. The ability to
            batch generate mockups with consistent styling across our entire
            product line has been invaluable for our e-commerce team."
          </p>
          <div className="flex text-yellow-400">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <FaStarHalfAlt />
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center space-x-2 mb-16 mt-8">
        <button
          className="testimonial-nav w-4 h-4 rounded-full bg-purple-600"
          aria-label="Testimonial 1"
        />
        <button
          className="testimonial-nav w-4 h-4 rounded-full bg-gray-300"
          aria-label="Testimonial 2"
        />
        <button
          className="testimonial-nav w-4 h-4 rounded-full bg-gray-300"
          aria-label="Testimonial 3"
        />
      </div>
    </section>
  );
}
