import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ProjectDialog from "./ProjectDialog";
import seoFriendlyImg from "../blcokchainpics/seofriendly website.jpeg";
import dappImg from "../blcokchainpics/dapp.jpg";
import dynamicWebAppImg from "../blcokchainpics/dynamicwebapp.jpeg";
import localSeoImg from "../blcokchainpics/localseostargy.png";
import ecommerceImg from "../blcokchainpics/ecommerceplatforms.png";
import smartContractImg from "../blcokchainpics/smartcontract.jpeg";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  const categories = [
    { id: "all", name: "All Work" },
    { id: "web", name: "Web Development" },
    { id: "blockchain", name: "Blockchain" },
    { id: "seo", name: "SEO Optimization" },
  ];

  const projects = [
    {
      id: 1,
      title: "SEO-Friendly Website",
      category: "web",
      image: seoFriendlyImg,
      stats: "Optimized for search engines with 95% Lighthouse SEO score.",
    },
    {
      id: 2,
      title: "Blockchain DApp",
      category: "blockchain",
      image: dappImg,
      stats: "Decentralized application for secure transactions.",
    },
    {
      id: 3,
      title: "Dynamic Web App",
      category: "web",
      image: dynamicWebAppImg,
      stats: "Real-time updates with Next.js and MongoDB.",
    },
    {
      id: 4,
      title: "Local SEO Strategy",
      category: "seo",
      image: localSeoImg,
      stats: "Achieved first-page ranking for 25 keywords.",
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      category: "web",
      image: ecommerceImg,
      stats: "Increased conversions by 200% with a responsive design.",
    },
    {
      id: 6,
      title: "Smart Contract Development",
      category: "blockchain",
      image: smartContractImg,
      stats: "Secure and efficient smart contracts for DeFi.",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#0c0e0c] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <div className="text-center mb-16">
          <span className="text-[#00ff4c] text-sm uppercase tracking-wider font-medium block mb-2">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-[#00ff4c]">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Explore my portfolio of successful projects in web development, blockchain, and SEO optimization.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#00ff4c] text-[#0c0e0c]"
                    : "bg-[#181a18] text-white hover:bg-[#00ff4c]/10 hover:border-[#00ff4c]/30"
                } border ${
                  activeCategory === category.id
                    ? "border-[#00ff4c]"
                    : "border-[#2c2e2c]"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="relative group overflow-hidden rounded-lg bg-[#181a18]">
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0c] to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70" />
              </div>
              {/* Title and stats below the image */}
              <div className="p-6">
                <span className="uppercase text-[#00ff4c] text-xs tracking-wider mb-2 block font-medium">
                  {categories.find((cat) => cat.id === project.category)?.name}
                </span>
                <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-[#00ff4c] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.stats}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;