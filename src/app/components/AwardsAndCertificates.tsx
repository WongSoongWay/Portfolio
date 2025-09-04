import React from 'react';

const AwardsAndCertificates = () => {
  const achievements = [
    {
      title: "Your Certificate/Award Name",
      issuer: "Issuing Organization",
      date: "Month YYYY",
      description: "Brief description of the achievement or certification",
      link: "https://certification-link.com" // Optional
    },
    // Add more certificates/awards here
  ];

  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Awards & Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.issuer}</p>
              <p className="text-gray-500 text-sm">{achievement.date}</p>
              <p className="mt-2 text-gray-700">{achievement.description}</p>
              {achievement.link && (
                <a 
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-blue-600 hover:text-blue-800"
                >
                  View Certificate →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAndCertificates;
