import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Company Name",
      position: "Software Engineer",
      period: "Jan 2024 - Present",
      location: "City, Country",
      description: "Brief description of your role and responsibilities",
      achievements: [
        "Developed and maintained multiple web applications using React and Node.js",
        "Improved application performance by 40% through code optimization",
        "Led a team of 3 developers in delivering key features",
        "Implemented automated testing reducing bug reports by 30%"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS"]
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                  <p className="text-lg text-gray-600">{exp.company}</p>
                  <p className="text-gray-500">{exp.location}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
              </div>
              
              <p className="text-gray-700 mb-4">{exp.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700">{achievement}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
