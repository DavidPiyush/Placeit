import { FaChevronRight } from "react-icons/fa";

const categories = [
  {
    title: "Apparel",
    desc: "T-shirts, hoodies, hats",
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tech Devices",
    desc: "Phones, tablets, laptops",
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Home Decor",
    desc: "Art, candles, vases",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Drinkware",
    desc: "Mugs, bottles, glasses",
    image:
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Jewelry",
    desc: "Necklaces, rings, watches",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Packaging",
    desc: "Boxes, labels, bags",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Stationery",
    desc: "Books, notebooks, cards",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Gaming",
    desc: "Overlays, merch, logos",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Video",
    desc: "Mockups, intros, outros",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Footwear",
    desc: "Shoes, sandals, sneakers",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
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
        {categories.map(({ image, title, desc }) => (
          <a
            key={title}
            href="#"
            className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-100"
          >
            {/* Mockup Image */}
            <div className="h-40 relative overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
            </div>

            {/* Content */}
            <div className="p-4 relative z-10">
              <h3 className="font-bold mb-1 text-gray-800 group-hover:text-purple-700 transition-colors">
                {title}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                {desc}
              </p>
            </div>

            {/* Hover indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors group"
        >
          View all categories
          <FaChevronRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
