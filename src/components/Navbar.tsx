import { Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/decapng.png" alt="Logo" className="w-10 h-10 object-contain" />
            <img src="/decacoach-PNG_words.png" alt="Posture Coach" className="h-8 object-contain" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/exercises" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Exercices
            </Link>
            <Link to="/guides" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Guides
            </Link>
            <Link to="/equipement" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Équipement
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
