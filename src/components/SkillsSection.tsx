
import { useEffect, useState } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'Python', level: 95, color: 'from-blue-500 to-blue-600' },
    { name: 'TensorFlow', level: 90, color: 'from-orange-500 to-orange-600' },
    { name: 'PyTorch', level: 85, color: 'from-red-500 to-red-600' },
    { name: 'Scikit-learn', level: 88, color: 'from-green-500 to-green-600' },
    { name: 'Machine Learning', level: 92, color: 'from-purple-500 to-purple-600' },
    { name: 'Deep Learning', level: 87, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Computer Vision', level: 83, color: 'from-pink-500 to-pink-600' },
    { name: 'NLP', level: 80, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Explainable AI', level: 90, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Data Analysis', level: 94, color: 'from-teal-500 to-teal-600' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="glass-card p-6 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-semibold">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                    isVisible ? 'animate-pulse' : ''
                  }`}
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Jupyter', 'Git', 'Docker', 'AWS', 'Google Cloud', 'MongoDB', 
                'PostgreSQL', 'React', 'FastAPI', 'Streamlit', 'OpenCV', 'Pandas'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-sm font-medium text-gray-300 hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
