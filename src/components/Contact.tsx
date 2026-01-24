import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const socials = [
    { icon: Github, href: 'https://github.com/Luciomo', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lucio-macedo/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-heading font-semibold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Vamos <span className="text-gradient">conversar</span>
          </motion.h2>
          
          <motion.p
            className="text-muted-foreground text-lg mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Tem um projeto em mente ou quer trocar uma ideia sobre tecnologia? 
            Estou sempre aberto a novas oportunidades e conexões.
          </motion.p>
          
          <motion.a
            href="mailto:lucio.macedo@ymail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover-lift"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5" />
            <span>lucio.macedo@ymail.com</span>
          </motion.a>
          
          <motion.div
            className="mt-16 pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground mb-6">Me encontre em</p>
            <div className="flex justify-center gap-4">
              {socials.map((social, index) => (
                <motion.a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
