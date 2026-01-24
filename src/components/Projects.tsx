import { ArrowUpRight, Code, Film, Terminal } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'JS-Game',
    category: 'HTML / CSS / JavaScript',
    description: 'Repositório com exercícios e projetos em HTML, CSS e JavaScript. Aulas e exercícios práticos de desenvolvimento web.',
    link: 'https://github.com/Luciomo/js-game',
    icon: Code,
  },
  {
    id: 2,
    title: 'Filmes - Consumindo API',
    category: 'JavaScript / API',
    description: 'Projeto em HTML, CSS e JavaScript consumindo API externa para exibição de filmes e informações.',
    link: 'https://github.com/Luciomo/Filmes',
    icon: Film,
  },
  {
    id: 3,
    title: 'Scripts & Automação',
    category: 'Python / Bash / Linux',
    description: 'Scripts e estudos relacionados a redes (CCNA/CCNP), automação e administração de sistemas.',
    link: 'https://github.com/Luciomo/scripts',
    icon: Terminal,
  },
  {
    id: 4,
    title: 'Conversão de Temperatura',
    category: 'DevOps / Docker',
    description: 'Aplicação web para conversão de temperatura, containerizada com Docker.',
    link: 'https://github.com/Luciomo/conversao-temperatura',
    icon: Code,
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-32 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 line-accent">
            Projetos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-lg">
            Uma coleção de projetos que demonstram minha experiência em desenvolvimento e automação.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <project.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-primary text-xs tracking-wider uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Luciomo?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <span>Ver todos os repositórios</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
