import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Lumina Dashboard',
    category: 'Web Application',
    description: 'A comprehensive analytics dashboard for SaaS businesses with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Artisan E-Commerce',
    category: 'E-Commerce',
    description: 'Premium online store for handcrafted goods with seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Mindful App',
    category: 'Mobile App',
    description: 'Meditation and wellness app helping users build healthy daily habits.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-32 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 line-accent">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-lg">
            A collection of projects that showcase my expertise in design and development.
          </p>
        </div>
        
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <article 
              key={project.id}
              className="project-card group grid md:grid-cols-2 gap-0"
            >
              <div className="relative overflow-hidden aspect-video md:aspect-auto">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent md:bg-gradient-to-r" />
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center relative z-10">
                <span className="text-primary text-sm tracking-wider uppercase mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
