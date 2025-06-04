import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Human Scream Detection',
      description: 'A comprehensive framework for interpreting machine learning models with SHAP, LIME, and custom visualization tools.',
      tags: ['Python', 'CNN', 'Flask', 'TensorFlow'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Global Sale Prediction of Games',
      description: 'Real-time object detection and classification system using YOLOv8 and OpenCV for robotics applications.',
      tags: ['PyTorch', 'OpenCV', 'YOLO', 'Robotics'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'NLP Sentiment Analyzer',
      description: 'Advanced sentiment analysis tool with transformer models and real-time processing capabilities.',
      tags: ['NLP', 'BERT', 'Transformers', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'ML Model Interpretability',
      description: 'Interactive dashboard for understanding black-box machine learning models with various interpretation techniques.',
      tags: ['Interpretability', 'Dashboard', 'React', 'Python'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Robotic Control System',
      description: 'AI-powered robotic arm control system with computer vision feedback and machine learning optimization.',
      tags: ['Robotics', 'Control Systems', 'AI', 'IoT'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Data Visualization Suite',
      description: 'Comprehensive data visualization and analysis platform with interactive charts and ML insights.',
      tags: ['Data Viz', 'D3.js', 'Python', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
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
