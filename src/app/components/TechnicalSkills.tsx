import React from 'react';

const TechnicalSkills = () => {
  const skills = {
    "Languages": [
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "Java", level: "Intermediate" }
    ],
    "Frontend": [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "HTML5/CSS3", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" }
    ],
    "Backend": [
      { name: "Node.js", level: "Advanced" },
      { name: "Express", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" }
    ],
    "Tools & Technologies": [
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "AWS", level: "Intermediate" },
      { name: "CI/CD", level: "Intermediate" }
    ]
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">{category}</h3>
              <div className="space-y-4">
                {items.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-800">{skill.name}</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
