import React from 'react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: "Project Name",
      description: "A detailed description of your project, including its purpose, features, and impact.",
      image: "/project1.jpg", // Add your project images to the public folder
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      demoLink: "https://project-demo.com",
      githubLink: "https://github.com/yourusername/project",
      highlights: [
        "Implemented real-time updates using WebSocket",
        "Designed responsive UI with Tailwind CSS",
        "Achieved 95% test coverage"
      ]
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 h-64 lg:h-auto relative bg-gray-100">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-400">Project Image</span>
                    </div>
                  )}
                </div>
                <div className="lg:w-3/5 p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-700">{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
