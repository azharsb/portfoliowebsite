import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsSection from "@/components/SkillsSection";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import ServicesPage from "@/pages/Services";
import PortfolioPage from "@/pages/Portfolio";
import BlogPage from "@/pages/Blog";
import CreateBlog from "@/pages/CreateBlog"; // Import CreateBlog component
import Navbar from "@/components/Navbar";
import SimpleFooter from "@/components/SimpleFooter";
import CursorEffect from "@/components/CursorEffect";

function HomePage() {
  return (
    <div className="bg-[#0c0e0c] text-white">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <PortfolioSection />
      <SimpleFooter />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CursorEffect />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/create" component={CreateBlog} /> {/* Add route for CreateBlog */}
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </QueryClientProvider>
  );
}

export default App;