import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiSun, FiMoon, FiDownload } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { navLinks, personalInfo } from '../data/portfolio';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observers = [];
    navLinks.forEach(({ to }) => {
      const el = document.getElementById(to);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(to);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? theme === 'dark'
              ? 'bg-surface-950/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-lg shadow-black/20'
              : 'bg-white/80 backdrop-blur-2xl border-b border-gray-200/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <ScrollLink
              to="hero"
              smooth={true}
              duration={600}
              className="cursor-pointer group flex items-center gap-2"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-heading font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                SS
              </div>
              <span className={`font-heading font-semibold text-lg hidden sm:block transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Siddharth
                <span className="text-primary-500">.</span>
              </span>
            </ScrollLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ name, to }) => (
                <ScrollLink
                  key={to}
                  to={to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className={`relative px-4 py-2 text-sm font-medium cursor-pointer rounded-lg transition-all duration-300 ${
                    activeSection === to
                      ? theme === 'dark'
                        ? 'text-white'
                        : 'text-primary-600'
                      : theme === 'dark'
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {activeSection === to && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute inset-0 rounded-lg ${
                        theme === 'dark'
                          ? 'bg-white/[0.06]'
                          : 'bg-primary-50'
                      }`}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{name}</span>
                </ScrollLink>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-yellow-400 hover:bg-white/[0.06]'
                    : 'text-gray-500 hover:text-amber-500 hover:bg-gray-100'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>

              {/* Resume Button (Desktop) */}
              <a
                href={personalInfo.resumeUrl}
                download
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                <FiDownload size={14} />
                Resume
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={`md:hidden p-2.5 rounded-xl transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white hover:bg-white/[0.06]'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`fixed top-0 right-0 bottom-0 w-72 z-[95] md:hidden p-6 pt-24 ${
                theme === 'dark'
                  ? 'bg-surface-950/95 backdrop-blur-2xl border-l border-white/[0.06]'
                  : 'bg-white/95 backdrop-blur-2xl border-l border-gray-200'
              }`}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map(({ name, to }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <ScrollLink
                      to={to}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      onClick={() => setIsMobileOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium cursor-pointer transition-all duration-300 ${
                        activeSection === to
                          ? theme === 'dark'
                            ? 'text-white bg-white/[0.06]'
                            : 'text-primary-600 bg-primary-50'
                          : theme === 'dark'
                            ? 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {name}
                    </ScrollLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-4"
                >
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white"
                  >
                    <FiDownload size={14} />
                    Download Resume
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
