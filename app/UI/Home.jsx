import Footer from "../_components/Footers/Footer";
import Header from "../_components/Navigation/Header";
import AiFeaturesSection from "./AiFeaturesSection";
import Features from "./Features";
import HeroSection from "./HeroSection";
import HowMockupProWorks from "./HowMockupProWorks";
import MockupCategories from "./MockupCategories";
import PricingFAQSection from "./PricingFAQSection";
import PricingSection from "./PricingSection";
import Testimonials from "./Testimonials";
import TrustedBy from "./TrustedBy";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content Placeholder */}
      <main className="flex-grow">
        {/* Replace this with your actual page content */}
        <section className="py-16 text-center">
          <HeroSection />
          <TrustedBy />
          <HowMockupProWorks />
          <MockupCategories />
          {/* <Features /> */}
          <AiFeaturesSection />
          <PricingSection />
          <Testimonials />
          <PricingFAQSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
