import React from 'react';

const Education = () => {
  const education = [
    {
      school: "Your University Name",
      degree: "Bachelor of Computer Science",
      year: "2020 - 2024",
      description: "Relevant coursework included Data Structures, Algorithms, Web Development, and Software Engineering.",
      achievements: [
        "Graduated with First Class Honours",
        "Dean's List for all semesters",
        "Led multiple group projects in software development"
      ]
    },
    // Add more education entries as needed
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{edu.school}</h3>
                  <p className="text-lg text-gray-600">{edu.degree}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">{edu.year}</span>
              </div>
              <p className="text-gray-700 mb-4">{edu.description}</p>
              {edu.achievements && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-700">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
