import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <Link
              href="/"
              className="text-white text-2xl font-bold hover:text-indigo-400 transition-colors duration-300"
            >
              Logo
            </Link>
            <p className="mt-4 text-sm text-gray-400 max-w-md">
              The easiest way to create professional product mockups for your
              business or clients.
            </p>
            <div className="flex space-x-4 mt-6 text-xl">
              <Link
                href="/"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                <FaFacebook />
              </Link>
              <Link
                href="/"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter />
              </Link>
              <Link
                href="/"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram />
              </Link>
              <Link
                href="/"
                className="hover:text-red-600 transition-colors duration-300"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {["Company", "Products", "Resources"].map((sectionTitle, index) => (
              <div key={index}>
                <h4 className="font-semibold text-white mb-3">
                  {sectionTitle}
                </h4>
                {["Home", "Mockups", "Design", "Logos"].map((item, i) => (
                  <Link
                    href="/"
                    key={i}
                    className="block mt-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
