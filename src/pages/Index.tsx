
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Calendar, ExternalLink, ChevronDown } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactForm from '../components/ContactForm';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-gray-900/20 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Anfas KP
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10 px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Engineering
            </span>
            <br />
            <span className="text-white glow-text">
              Transparency
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              in AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in animation-delay-500">
            Building the Future with Data, Vision, and Logic
          </p>
          <p className="text-lg text-gray-400 mb-12 animate-fade-in animation-delay-1000">
            AI & Data Science Enthusiast • Django • Robotics • Machine Learning
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 animate-fade-in animation-delay-1500"
          >
            <span>Explore My Work</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Profile Photo */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative">
                  <img
                    src="/lovable-uploads/ddf25775-03fd-4ded-b65a-61316061dad2.png"
                    alt="Anfas KP"
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/10 shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm Anfas KP, a passionate AI & Data Science enthusiast with a deep focus on 
                  Django development, Robotics, and Machine Learning. My mission is to make 
                  artificial intelligence more transparent and trustworthy.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I believe in the power of data-driven solutions and strive to bridge the gap 
                  between complex AI systems and human understanding through innovative approaches 
                  to machine learning interpretability.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Journey Timeline</h3>
                <div className="space-y-6">
                  <div className="timeline-item border-l-2 border-blue-500 pl-6 pb-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold">2024</span>
                    </div>
                    <h4 className="font-semibold text-white">AI Research & Development</h4>
                    <p className="text-gray-400">Advancing Django and AI methodologies</p>
                  </div>
                  
                  <div className="timeline-item border-l-2 border-purple-500 pl-6 pb-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-400 font-semibold">2023</span>
                    </div>
                    <h4 className="font-semibold text-white">Machine Learning Specialization</h4>
                    <p className="text-gray-400">Deep dive into ML algorithms and applications</p>
                  </div>
                  
                  <div className="timeline-item border-l-2 border-blue-500 pl-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold">2022</span>
                    </div>
                    <h4 className="font-semibold text-white">Data Science Journey Begins</h4>
                    <p className="text-gray-400">Foundation in data analysis and visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://linkedin.com"
              className="social-icon group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://github.com"
              className="social-icon group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
            </a>
            <a href="mailto:anfas@example.com" className="social-icon group">
              <Mail className="w-6 h-6 group-hover:text-green-400 transition-colors" />
            </a>
          </div>
          <p className="text-gray-400">
            © 2024 Anfas KP. Engineering Transparency in AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
