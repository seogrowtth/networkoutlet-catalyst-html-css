import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-secondary">Network Outlet</h1>
          
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>

          <ul className="hidden md:flex space-x-8 text-foreground">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
            <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-3 text-foreground">
            <li><a href="#home" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#products" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Products</a></li>
            <li><a href="#features" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a></li>
            <li><a href="#about" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
            <li><a href="#contact" className="block hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
