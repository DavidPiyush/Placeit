export default function TrustedBy() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          <p className="text-gray-400 font-medium">
            Trusted by{" "}
            <span className="text-purple-400 font-medium">50,000+</span>{" "}
            creators at:
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            {[
              {
                src: "https://via.placeholder.com/100x40?text=Shopify",
                alt: "Shopify",
              },
              {
                src: "https://via.placeholder.com/100x40?text=Etsy",
                alt: "Etsy",
              },
              {
                src: "https://via.placeholder.com/100x40?text=Amazon",
                alt: "Amazon",
              },
              {
                src: "https://via.placeholder.com/100x40?text=Adobe",
                alt: "Adobe",
              },
            ].map(({ src, alt }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
