const features = [
  {
    icon: "fas fa-robot",
    title: "AI-Powered Mockups",
    description:
      "Our AI automatically fits your designs perfectly onto any product with realistic shadows and lighting.",
    points: [
      "Smart object placement",
      "Depth correction",
      "Background removal",
    ],
  },
  {
    icon: "fas fa-boxes",
    title: "3000+ Templates",
    description:
      "Choose from our massive library of professionally designed mockup templates across all categories.",
    points: [
      "New templates added weekly",
      "Filter by industry/style",
      "Save favorites",
    ],
  },
  {
    icon: "fas fa-video",
    title: "Video Mockups",
    description:
      "Bring your products to life with animated mockups that capture attention on social media.",
    points: [
      "100+ video templates",
      "Add text and music",
      "4K resolution export",
    ],
  },
  {
    icon: "fas fa-tshirt",
    title: "Apparel Designer",
    description:
      "Full-featured design tool for creating custom t-shirts, hoodies, and other apparel.",
    points: [
      "10,000+ design elements",
      "Print-ready files",
      "Color matching system",
    ],
  },
  {
    icon: "fas fa-store",
    title: "E-commerce Ready",
    description:
      "Optimized exports for all major platforms with automatic sizing and formatting.",
    points: [
      "1-click Shopify upload",
      "Amazon listing templates",
      "Social media formats",
    ],
  },
  {
    icon: "fas fa-users",
    title: "Diverse Models",
    description:
      "Show your products on real people with our diverse range of professional models.",
    points: ["100+ model poses", "All body types", "Multiple ethnicities"],
  },
];

export default function Features() {
  return (
    <section className="py-10 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Powerful Features for{" "}
          <span className="gradient-text">Professional Results</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to create stunning product presentations that
          convert
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description, points }) => (
          <div
            key={title}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300"
          >
            <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6">
              <i className={`${icon} text-white text-2xl`}></i>
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <ul className="space-y-2">
              {points.map((point) => (
                <li key={point} className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
