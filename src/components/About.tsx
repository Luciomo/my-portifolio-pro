const About = () => {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'Python', 'Bash', 'Linux', 'Cisco', 'Git', 'GitHub', 'Docker', 'DevOps', 'Redes'
  ];

  const learning = [
    'CCNA / CCNP', 'DevOps & Cloud', 'Automação com Python', 'Cibersegurança'
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 line-accent">
              Sobre Mim
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Olá! Eu sou o Lucio Macedo, apaixonado por tecnologia e redes de computadores, 
                programação web e cibersegurança. Trabalho com manutenção de hardware e redes.
              </p>
              <p>
                Atualmente focado em Infraestrutura, DevOps e DevSecOps. Estou sempre 
                aprendendo novas tecnologias para evoluir profissionalmente.
              </p>
              <p>
                Localização: Fortaleza, Ceará 🇧🇷
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 text-foreground">Tecnologias & Ferramentas</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 text-sm bg-secondary border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <h3 className="text-lg font-medium mb-4 mt-8 text-foreground">🚀 Aprendendo</h3>
            <div className="flex flex-wrap gap-3">
              {learning.map((item) => (
                <span 
                  key={item}
                  className="px-4 py-2 text-sm bg-primary/10 border border-primary/30 rounded-full text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
