const Navbar = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold font-heading text-foreground">
          JD<span className="text-primary">.</span>
        </a>
        
        <div className="flex items-center gap-8">
          <button onClick={() => scrollTo('about')} className="nav-link text-sm tracking-wide">
            About
          </button>
          <button onClick={() => scrollTo('work')} className="nav-link text-sm tracking-wide">
            Work
          </button>
          <button onClick={() => scrollTo('contact')} className="nav-link text-sm tracking-wide">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
