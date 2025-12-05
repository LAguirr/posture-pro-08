import { Activity } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black text-lg tracking-tight">POSTURE</span>
              <span className="text-accent font-black text-lg">COACH</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Exercices
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Guides
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Équipement
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
