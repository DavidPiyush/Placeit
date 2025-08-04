import Header from "../_components/Navigation/Header";
import Footer from "../_components/Footers/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content Placeholder */}
      <main className="flex-grow">
        {/* Replace this with your actual page content */}
        <section className="py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to Our Site
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Build beautiful mockups, designs, and logos effortlessly.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
