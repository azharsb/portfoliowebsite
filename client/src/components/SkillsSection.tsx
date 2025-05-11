import React from "react";

const skills = [
  { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"] },
  { category: "Backend", skills: ["Node.js", "Python", "SQL/NoSQL", "AJAX"] },
  { category: "Blockchain", skills: ["DApps", "Smart Contracts"] },
  { category: "Other", skills: ["SEO Optimization", "C++", "C#"] },
];

const SkillsSection = () => {
  return (
    <section className="bg-[#0c0e0c] text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {skills.map((skillCategory, index) => (
          <div key={index} className="bg-[#181a18] p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{skillCategory.category}</h3>
            <ul className="list-disc list-inside">
              {skillCategory.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;