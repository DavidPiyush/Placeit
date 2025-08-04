import {
  FaTshirt,
  FaMobileAlt,
  FaHome,
  FaMugHot,
  FaGem,
  FaBoxOpen,
  FaBook,
  FaGamepad,
  FaFilm,
  FaShoePrints,
  FaChevronRight,
} from "react-icons/fa";

const categories = [
  { icon: FaTshirt, title: "Apparel", desc: "T-shirts, hoodies, hats" },
  {
    icon: FaMobileAlt,
    title: "Tech Devices",
    desc: "Phones, tablets, laptops",
  },
  { icon: FaHome, title: "Home Decor", desc: "Art, candles, vases" },
  { icon: FaMugHot, title: "Drinkware", desc: "Mugs, bottles, glasses" },
  { icon: FaGem, title: "Jewelry", desc: "Necklaces, rings, watches" },
  { icon: FaBoxOpen, title: "Packaging", desc: "Boxes, labels, bags" },
  { icon: FaBook, title: "Stationery", desc: "Books, notebooks, cards" },
  { icon: FaGamepad, title: "Gaming", desc: "Overlays, merch, logos" },
  { icon: FaFilm, title: "Video", desc: "Mockups, intros, outros" },
  { icon: FaShoePrints, title: "Footwear", desc: "Shoes, sandals, sneakers" },
];

export default function MockupCategories() {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Explore Our{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Mockup Categories
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional templates for every product and industry
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map(({ icon: Icon, title, desc }) => (
          <a
            key={title}
            href="#"
            className="group bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform">
              <Icon className="text-white text-2xl" />
            </div>
            <h3 className="font-bold mb-1">{title}</h3>
            <p className="text-sm text-gray-500">{desc}</p>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-flex items-center text-purple-600 font-medium hover:underline"
        >
          View all categories <FaChevronRight className="ml-2 text-sm" />
        </a>
      </div>
    </section>
  );
}
