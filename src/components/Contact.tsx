import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const socials = [
    { icon: Github, href: 'https://github.com/Luciomo', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lucio-macedo/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
            Vamos <span className="text-gradient">conversar</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Tem um projeto em mente ou quer trocar uma ideia sobre tecnologia? 
            Estou sempre aberto a novas oportunidades e conexões.
          </p>
          
          <a 
            href="mailto:lucio.macedo@ymail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover-lift"
          >
            <Mail className="w-5 h-5" />
            <span>lucio.macedo@ymail.com</span>
          </a>
          
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6">Me encontre em</p>
            <div className="flex justify-center gap-4">
              {socials.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
