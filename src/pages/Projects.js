import React, { useState } from "react";
// STEP 1: Import the Link component from react-router-dom
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaMapMarkedAlt, FaCloud } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Smart Irrigation System",
      shortDesc: "IoT-based automated irrigation for water conservation",
      fullDesc: "An intelligent irrigation system that uses soil moisture sensors, weather data, and machine learning to optimize water usage for agriculture. The system automatically waters plants based on real-time conditions, saving water and improving crop health.",
      icon: <GiWaterDrop />,
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      bgPattern: "bg-blue-50 dark:bg-blue-900/20",
      image: "https://via.placeholder.com/600x400/3b82f6/ffffff?text=Smart+Irrigation",
      technologies: [
        "Arduino/ESP32",
        "Soil Moisture Sensors",
        "Cloud Integration",
        "Python Backend",
        "MQTT Protocol",
        "Mobile Dashboard"
      ],
      features: [
        "Real-time soil moisture monitoring",
        "Automated watering schedule",
        "Weather API integration",
        "Remote control via mobile app",
        "Water usage analytics",
        "Multiple zone management"
      ],
      github: "https://github.com/KrishnaBitthariyaCollege",
      demo: null,
      status: "In Progress",
      year: "2024"
    },
    {
      id: 2,
      title: "CubeSat Satellite Project",
      shortDesc: "Educational miniature satellite system",
      fullDesc: "Designed and developed a CubeSat miniature satellite for educational purposes. The project includes data collection, telemetry systems, and ground station communication. Aims to provide hands-on experience with space technology and satellite systems.",
      icon: <div className="text-4xl"><IoIosRocket /></div>,
      color: "purple",
      gradient: "from-purple-500 to-pink-600",
      bgPattern: "bg-purple-50 dark:bg-purple-900/20",
      image: "https://via.placeholder.com/600x400/a855f7/ffffff?text=CubeSat",
      technologies: [
        "Arduino",
        "Satellite Systems",
        "C/C++",
        "Data Analysis",
        "Radio Communication",
        "Python"
      ],
      features: [
        "Data collection sensors",
        "Telemetry and tracking",
        "Ground station interface",
        "Power management system",
        "Orbital mechanics simulation",
        "Real-time data visualization"
      ],
      github: "https://github.com/KrishnaBitthariyaCollege",
      demo: null,
      status: "In Development",
      year: "2025"
    }
  ];

  const ProjectCard = ({ project }) => (
    <div
      onClick={() => setSelectedProject(project)}
      className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-gray-800/90 text-${project.color}-600`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white mb-4 text-2xl`}>
          {project.icon}
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {project.shortDesc}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className={`px-2 py-1 text-xs font-medium rounded-lg ${project.bgPattern} text-${project.color}-700 dark:text-${project.color}-300`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium text-gray-500">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
          <button className="text-teal-600 dark:text-teal-400 font-semibold text-sm group-hover:text-orange-500 transition-colors">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <div 
          className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full shadow-2xl my-8 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`relative h-64 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all"
            >
              ×
            </button>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">{project.icon}</div>
              <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
              <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium">
                {project.status} • {project.year}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 max-h-96 overflow-y-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                About the Project
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.fullDesc}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 rounded-xl ${project.bgPattern} text-${project.color}-700 dark:text-${project.color}-300 font-medium`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className={`text-${project.color}-500 mr-2 mt-1`}>✓</span>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-900 dark:hover:bg-gray-600 transition-all font-semibold"
                >
                  <FaGithub /> View on GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-xl hover:from-teal-600 hover:to-orange-600 transition-all font-semibold"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-20 min-h-screen" id="projects">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my journey through code, innovation, and problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-teal-500/10 to-orange-500/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new ideas and collaborate on interesting projects.
              Let's build something amazing together!
            </p>
            {/* STEP 2: Change the <a> tag to a <Link> tag and href to "to" */}
            <Link
              to="/about#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-orange-500 text-white font-bold rounded-xl hover:from-teal-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}