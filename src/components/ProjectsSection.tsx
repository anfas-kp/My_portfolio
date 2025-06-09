import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Human Scream Detection',
      description: 'This project implements a scream detection system using a 1D Convolutional Neural Network (CNN) model. It provides a Flask web application for audio file uploads and real-time scream detection with live audio visualization.',
      tags: ['Python', '1D CNN', 'Flask', 'Audio Processing'],
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop',
      github: 'https://github.com/anfas-kp/Human-Scream-Detection',
      demo: '#',
      featured: true
    },
    {
      title: 'Global Sale Prediction of Games',
      description: 'This project predicts global sales for video games using machine learning techniques. The application is deployed via a Flask web interface, allowing users to input game details and receive sales predictions.',
      tags: ['Python', 'Scikit-learn', 'Flask', 'ML Prediction'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      github: 'https://github.com/anfas-kp/Games_Global_Sales-Prediction',
      demo: '#',
      featured: true
    },
    {
      title: 'Passenger Survival Prediction',
      description: 'Machine learning model to predict passenger survival rates using various demographic and travel data features.',
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Classification'],
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Heart Disease Prediction',
      description: 'Predictive analytics system for early detection of heart disease using clinical parameters and ML algorithms.',
      tags: ['Healthcare', 'ML', 'Python', 'Data Analysis'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'COVID-19 Prediction',
      description: 'Epidemiological model for predicting COVID-19 spread patterns and risk assessment using time series analysis.',
      tags: ['Epidemiology', 'Time Series', 'Python', 'Forecasting'],
      image: 'https://images.unsplash.com/photo-1584118624012-df056829fbd0?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Tips Prediction',
      description: 'Restaurant tip prediction model analyzing customer behavior patterns and service factors to estimate gratuity amounts.',
      tags: ['Regression', 'Pandas', 'Seaborn', 'EDA'],
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <div key={project.title} className="group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.github}
                    className="p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-blue-500/30 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-purple-500/30 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <div key={project.title} className="group glass-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 flex space-x-2">
                  <a
                    href={project.github}
                    className="p-1.5 bg-black/20 backdrop-blur-sm rounded-full hover:bg-blue-500/30 transition-colors"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-1.5 bg-black/20 backdrop-blur-sm rounded-full hover:bg-purple-500/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded text-xs text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
