import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#0c0e0c] text-white py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi! I’m Muhammad Azhar Hassan
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Web Developer | Blockchain Developer | Full-Stack Developer
      </p>
      <p className="text-gray-400 mb-8">
        I specialize in creating SEO-friendly websites, dynamic web apps, and secure blockchain solutions.
      </p>
      <a
        href="/contact"
        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
      >
        Hire Me
      </a>
    </section>
  );
};

export default HeroSection;
