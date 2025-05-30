import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import CtaSection from "@/components/CtaSection";
import SimpleFooter from "@/components/SimpleFooter";

const PortfolioPage = () => {
  return (
    <div className="bg-[#0c0e0c] text-white font-sans antialiased">
      <Navbar />
      <div className="py-16 bg-[#0d0f0d] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              My <span className="text-[#00ff4c]">Portfolio</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore my portfolio of successful projects in web development, blockchain, and SEO optimization. Each project is a testament to my expertise and commitment to delivering high-quality solutions.
            </p>
          </div>
        </div>
      </div>
      <PortfolioSection />
      <CtaSection />
      <SimpleFooter />
    </div>
  );
};

export default PortfolioPage;