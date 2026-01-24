const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Figma', 'UI/UX Design', 'Motion Design'
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 line-accent">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a creative developer based in San Francisco with over 5 years of experience 
                building digital products. I specialize in creating intuitive, engaging user 
                experiences that solve real problems.
              </p>
              <p>
                My approach combines clean code with thoughtful design, ensuring every project 
                I work on is both technically sound and visually compelling.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing 
                to open-source projects, or enjoying a good cup of coffee.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 text-foreground">Skills & Technologies</h3>
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
            
            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-3xl font-heading font-semibold text-gradient">5+</p>
                  <p className="text-sm text-muted-foreground mt-1">Years Exp.</p>
                </div>
                <div>
                  <p className="text-3xl font-heading font-semibold text-gradient">50+</p>
                  <p className="text-sm text-muted-foreground mt-1">Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-heading font-semibold text-gradient">30+</p>
                  <p className="text-sm text-muted-foreground mt-1">Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
