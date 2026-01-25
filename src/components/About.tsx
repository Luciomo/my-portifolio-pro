import { motion } from 'framer-motion';

const About = () => {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'Java', 'PHP', 'Python', 'Bash', 'Linux', 'Git', 'GitHub', 'Docker', 'DevOps', 'Redes', 'DevSecOps'];
  const learning = ['CCNA / CCNP', 'DevOps & Cloud', 'Automação com Python', 'Cibersegurança', 'Desenvolvimento Web'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 line-accent">
              Sobre Mim
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Olá! Eu sou o Lucio Macedo, apaixonado por tecnologia e redes de computadores, 
                programação web e cibersegurança. Trabalho com Infraestrutura, redes, 
                Segurança da informação e Desenvolvimento web.
              </p>
              <p>
                Atualmente focado em Infraestrutura, DevOps e DevSecOps. Estou sempre 
                aprendendo novas tecnologias para evoluir profissionalmente.
              </p>
              <p>
                Localização: Fortaleza, Ceará 🇧🇷
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-lg font-medium mb-6 text-foreground">Tecnologias & Ferramentas</h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  className="px-4 py-2 text-sm bg-secondary border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
            
            <h3 className="text-lg font-medium mb-4 mt-8 text-foreground">🚀 Aprendendo</h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {learning.map((item) => (
                <motion.span
                  key={item}
                  variants={itemVariants}
                  className="px-4 py-2 text-sm bg-primary/10 border border-primary/30 rounded-full text-primary"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
