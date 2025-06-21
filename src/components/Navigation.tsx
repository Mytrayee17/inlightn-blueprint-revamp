import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showProgramsMenu, setShowProgramsMenu] = useState(false);
  const location = useLocation();

  // Handle scroll behavior for sticky nav with hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for styling
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show navigation based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Dark mode toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Programs', 
      href: '/programs',
      hasSubmenu: true,
      submenu: [
        { name: 'Business Analyst', href: '/programs/business-analyst' },
        { name: 'Front-End Development', href: '/programs/frontend' },
        { name: 'Ethical Hacking', href: '/programs/ethical-hacking' },
        { name: 'Full-Stack Development', href: '/programs/fullstack' },
        { name: 'AI & Machine Learning', href: '/programs/ai-ml' },
        { name: 'Data Analyst', href: '/programs/data-analyst' },
        { name: 'Offensive Cybersecurity', href: '/programs/offensive-cybersecurity' },
        { name: 'Data Science', href: '/programs/data-science' },
        { name: 'Web Development', href: '/programs/web-development' },
      ]
    },
    { name: 'Verify Certificate', href: '/verify' },
    { name: 'What\'s Special', href: '/special' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-r from-inlighn-primary to-inlighn-dark'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" aria-label="Inlighn Home">
              <div className={`text-2xl font-bold transition-colors duration-200 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-inlighn-primary to-inlighn-secondary bg-clip-text text-transparent' 
                  : 'text-white'
              }`}>
                Inlighn
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasSubmenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setShowProgramsMenu(true)}
                      onMouseLeave={() => setShowProgramsMenu(false)}
                    >
                      <button
                        className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-200 group ${
                          isScrolled
                            ? 'text-slate-700 dark:text-slate-200 hover:text-inlighn-accent'
                            : 'text-white hover:text-inlighn-accent'
                        }`}
                        aria-expanded={showProgramsMenu}
                        aria-haspopup="true"
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          showProgramsMenu ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Mega Menu */}
                      {showProgramsMenu && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                          <div className="p-4">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Program Domains</h3>
                            {item.submenu?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-inlighn-accent hover:text-white rounded-md transition-colors duration-200"
                                role="menuitem"
                                onClick={() => setShowProgramsMenu(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 group ${
                        isScrolled
                          ? 'text-slate-700 dark:text-slate-200 hover:text-inlighn-accent'
                          : 'text-white hover:text-inlighn-accent'
                      } ${location.pathname === item.href ? 'text-inlighn-accent' : ''}`}
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-inlighn-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isScrolled
                  ? 'text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Login Button */}
            <div className="hidden md:block">
              <Link to="/login" className="bg-inlighn-accent hover:bg-yellow-500 text-inlighn-dark font-semibold px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-inlighn-accent/50">
                Login
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                  isScrolled
                    ? 'text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-expanded={isOpen}
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasSubmenu ? (
                  <div>
                    <button className="block w-full text-left px-3 py-2 text-slate-700 dark:text-slate-200 hover:text-inlighn-accent hover:bg-slate-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200">
                      {item.name}
                    </button>
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-inlighn-accent hover:bg-slate-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-slate-700 dark:text-slate-200 hover:text-inlighn-accent hover:bg-slate-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/login" className="w-full mt-4 bg-inlighn-accent hover:bg-yellow-500 text-inlighn-dark font-semibold px-6 py-2 rounded-lg transition-all duration-200 text-center block focus:outline-none focus:ring-2 focus:ring-inlighn-accent/50">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
