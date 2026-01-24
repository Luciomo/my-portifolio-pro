import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-6">
          <p className="text-primary text-sm tracking-widest uppercase animate-fade-up">
            Creative Developer
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold leading-tight animate-fade-up-delay-1">
            John Doe
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up-delay-2">
            I craft digital experiences that blend 
            <span className="text-gradient"> design</span> and 
            <span className="text-gradient"> technology</span> to create memorable products.
          </p>
          
          <div className="pt-8 animate-fade-up-delay-3">
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="tracking-wide">View my work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
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
