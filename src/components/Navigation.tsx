import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/video-editing', label: 'Video Editing' },
    { to: '/websites', label: 'Websites' },
    { to: '/subtitling-qc', label: 'Subtitling QC' },
    { to: '/contact', label: 'Contact' },
  ];

  const linkBase = 'nav-link px-3 py-2 text-sm font-medium';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold hero-text hover:glow-primary transition-all duration-300"
            >
              Jaydee Designs
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `${linkBase} ${isActive ? 'active text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-slide-in-right">
          <div className="px-2 pt-2 pb-3 space-y-1 glass-card border-t">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `block px-3 py-2 text-base font-medium w-full text-left ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;