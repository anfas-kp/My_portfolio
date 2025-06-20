
import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Cyberia Kollam',
      location: 'Kollam, Kerala',
      duration: '2025 - Present',
      type: 'Full-time',
      description: 'Developing web applications using Django framework and contributing to various software development projects.',
      achievements: [
        'Building scalable web applications with Django framework',
        'Working on full-stack development projects',
        'Collaborating with team on software solutions'
      ],
      technologies: ['Django', 'Python', 'Web Development', 'Full-stack']
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                  <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="flex items-center space-x-2 text-blue-400 mb-2">
                          <Building className="w-4 h-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gradient-to-r from-gray-700/50 to-gray-800/50 border border-gray-600/30 rounded text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          {[
            { number: '1+', label: 'Years Experience' },
            { number: '6+', label: 'Projects Completed' },
            { number: '10+', label: 'Tech Stacks' },
            { number: '50+', label: 'GitHub Commits' }
          ].map((stat, index) => (
            <div key={index} className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
