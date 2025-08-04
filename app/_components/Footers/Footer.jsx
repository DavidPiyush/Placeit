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
