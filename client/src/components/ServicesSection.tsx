import React from "react";

const services = [
  {
    title: "Web Development",
    description: "Frontend and backend development with modern frameworks like React.js, Next.js, and Node.js.",
  },
  {
    title: "Blockchain Solutions",
    description: "Decentralized Applications (DApps) and secure blockchain solutions.",
  },
  {
    title: "SEO Optimization",
    description: "Building SEO-friendly websites to boost your online visibility.",
  },
  {
    title: "Custom Solutions",
    description: "Tailored solutions for unique client needs, including performance-critical tasks with C++ and C#.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#181a18] text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-6">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {services.map((service, index) => (
          <div key={index} className="bg-[#0c0e0c] p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;