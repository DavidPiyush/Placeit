import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12 px-6 sm:px-8 lg:px-10">
      {/* Trusted By Section */}
      {/* <div className="max-w-7xl mx-auto mb-20">
        <div className="py-8 bg-gray-800/50 rounded-xl border border-gray-700">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
            <p className="text-gray-400 font-medium text-sm uppercase tracking-wider flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Trusted by 50,000+ creators worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
              {["Shopify", "Etsy", "Amazon", "Adobe", "Figma", "Notion"].map(
                (company) => (
                  <span
                    key={company}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {company}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand & Social */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                <FaCube className="text-white text-lg" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                MOCKUP
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  PRO
                </span>
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              The easiest way to create professional product mockups for your
              business or clients.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, bg: "hover:bg-primary" },
                { icon: <FaTwitter />, bg: "hover:bg-blue-400" },
                { icon: <FaInstagram />, bg: "hover:bg-pink-600" },
                { icon: <FaYoutube />, bg: "hover:bg-red-600" },
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-gray-800 ${item.bg} flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className="text-gray-300 hover:text-white">
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Column Link Generator */}
          {[
            {
              title: "Product",
              links: [
                "Features",
                "Pricing",
                "Templates",
                "Integrations",
                "Roadmap",
              ],
            },
            {
              title: "Resources",
              links: [
                "Blog",
                "Tutorials",
                "Help Center",
                "Community",
                "Webinars",
              ],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Press", "Contact", "Partners"],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-6 pb-2 relative inline-block">
                <span>{section.title}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500/50 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="relative inline-block text-gray-400 hover:text-white transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0 text-sm">
            © 2023 MockupPro. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (text, i) => (
                <a
                  key={i}
                  href="#"
                  className="relative inline-block text-gray-500 hover:text-white transition-colors duration-200 text-sm after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {text}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
