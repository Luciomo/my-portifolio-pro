import { ArrowDown, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-sm tracking-widest uppercase"
          >
            ANALISTA DE SUPORTE | REDES | DESENVOLVEDOR JR | DEVOPS | DEVSECOPS
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold leading-tight"
          >
            Lucio Macedo
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Apaixonado por <span className="text-gradient">tecnologia</span>, 
            <span className="text-gradient"> redes de computadores</span> e 
            <span className="text-gradient"> cibersegurança</span>. Sempre aprendendo novas tecnologias.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8 flex flex-wrap gap-4"
          >
            <a
              href="https://github.com/Luciomo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover-lift"
            >
              <Github className="w-5 h-5" />
              <span>Ver GitHub</span>
            </a>
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors px-6 py-3"
            >
              <span className="tracking-wide">Ver projetos</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 opacity-30 pointer-events-none">
        <div className="w-full h-full rounded-full bg-primary/10 blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
