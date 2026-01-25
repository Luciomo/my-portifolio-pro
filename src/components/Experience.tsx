import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'Analista de Suporte / DevOps',
    company: 'Frelancer',
    period: '2024 - Presente',
    description: 'Atuação com suporte técnico especializado, administração de servidores Linux e Windows. Implementação de pipelines CI/CD básicos e automação de tarefas administrativas com Python e Bash.',
    skills: ['Linux', 'Docker', 'Python', 'AWS'],
  },
  {
    id: 2,
    role: 'Técnico em Redes',
    company: 'Terceirização',
    period: '2020 - 2024',
    description: 'Configuração e manutenção de redes cabeadas e sem fio. Suporte a equipamentos Cisco (Switches e Roteadores), monitoramento de infraestrutura e atendimento a chamados.',
    skills: ['Cisco CCNA', 'TCP/IP', 'Firewall', 'Hardware'],
  },
  {
    id: 3,
    role: 'Desenvolvedor Jr',
    company: 'Terceirização',
    period: '2011 - 2013',
    description: 'Desenvolvimento e suporte a sistemas do orgão, utilizando as linguagens de programação Java, PHP e PL/SQL',
    skills: ['Eclipse', 'Oracle', 'JBoss', 'iReport'],
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 line-accent">
            Experiência Profissional
          </h2>
          <p className="text-muted-foreground max-w-lg">
            Minha trajetória profissional e as competências desenvolvidas ao longo da carreira.
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover-lift"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-primary text-xs tracking-wider uppercase font-semibold">
                      {exp.company}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;