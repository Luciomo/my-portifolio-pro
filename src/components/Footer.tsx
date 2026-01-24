const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lucio Macedo. Todos os direitos reservados.
        </p>
        <p className="text-sm text-muted-foreground">
          Desenvolvido com 💛 em Fortaleza, CE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
