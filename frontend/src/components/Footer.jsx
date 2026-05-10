import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, navLinks } from '../data/portfolio';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`relative overflow-hidden ${
      theme === 'dark'
        ? 'bg-surface-950 border-t border-white/[0.04]'
        : 'bg-white border-t border-gray-100'
    }`}>
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-heading font-bold text-xs">
                SS
              </div>
              <span className={`font-heading font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Siddharth Sony
              </span>
            </div>
            <p className={`text-sm flex items-center gap-1 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}>
              Built with <FiHeart className="w-3 h-3 text-red-400" /> and a lot of coffee
            </p>
          </div>

          {/* Center: Quick links */}
          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.slice(0, 4).map(({ name, to }) => (
              <ScrollLink
                key={to}
                to={to}
                smooth={true}
                duration={600}
                offset={-80}
                className={`text-sm cursor-pointer transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-500 hover:text-gray-300'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {name}
              </ScrollLink>
            ))}
          </div>

          {/* Right: Social + Back to top */}
          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: personalInfo.github },
              { icon: FiLinkedin, href: personalInfo.linkedin },
              { icon: FiMail, href: `mailto:${personalInfo.email}` },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={i < 2 ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-500 hover:text-gray-300'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Icon size={16} />
              </a>
            ))}
            <ScrollLink
              to="hero"
              smooth={true}
              duration={800}
              className={`p-2.5 rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                theme === 'dark'
                  ? 'bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.08]'
                  : 'bg-gray-50 border border-gray-200 text-gray-400 hover:text-gray-900'
              }`}
              aria-label="Back to top"
            >
              <FiArrowUp size={16} />
            </ScrollLink>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 pt-6 text-center border-t ${
          theme === 'dark' ? 'border-white/[0.04]' : 'border-gray-100'
        }`}>
          <p className={`text-xs ${
            theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            © {new Date().getFullYear()} Siddharth Sony. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
