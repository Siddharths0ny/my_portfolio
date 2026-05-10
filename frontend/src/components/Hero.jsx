import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, roles } from '../data/portfolio';

// Typewriter hook
function useTypewriter(words, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
      setText(currentWord.substring(0, text.length + 1));
      if (text.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setText(currentWord.substring(0, text.length - 1));
      if (text.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [text, wordIndex, isDeleting, words, pauseDuration]);

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return text;
}

// Floating particles
function Particles() {
  const { theme } = useTheme();
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            theme === 'dark' ? 'bg-primary-500/10' : 'bg-primary-500/5'
          }`}
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 60 - 30],
            y: [0, Math.random() * 60 - 30],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 6 + 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const typedText = useTypewriter(roles);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center overflow-hidden ${
        theme === 'dark' ? 'bg-surface-950' : 'bg-white'
      }`}
    >
      <Particles />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/15 rounded-full blur-[128px] pointer-events-none" />

      <div className="section-container relative z-10 py-20 md:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 min-h-screen justify-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-2xl text-center lg:text-left order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <div className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide flex items-center gap-2 ${
                theme === 'dark'
                  ? 'bg-primary-500/10 border border-primary-500/20 text-primary-300'
                  : 'bg-primary-50 border border-primary-200 text-primary-600'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-soft" />
                Available for opportunities
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className={`text-lg md:text-xl font-medium mb-3 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              Hey there, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className={`text-5xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {personalInfo.firstName}
              <span className="gradient-text-static"> Sony</span>
              <span className="text-primary-500">.</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={itemVariants} className="h-10 flex items-center justify-center lg:justify-start mb-6">
              <span className={`text-xl md:text-2xl font-light ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {typedText}
              </span>
              <span className="w-[2px] h-7 bg-gradient-to-b from-primary-400 to-accent-500 ml-1 animate-blink" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className={`text-base md:text-lg leading-relaxed max-w-xl mb-8 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              } mx-auto lg:mx-0`}
            >
              I craft scalable web applications and AI-powered solutions,
              turning complex ideas into seamless digital experiences — from
              pixel-perfect frontends to robust backend architectures.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <ScrollLink
                to="projects"
                smooth={true}
                duration={600}
                offset={-80}
                className="group cursor-pointer"
              >
                <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5 transition-all duration-300">
                  View My Work
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </span>
              </ScrollLink>

              <a
                href={personalInfo.resumeUrl}
                download
                className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${
                  theme === 'dark'
                    ? 'border-white/10 text-gray-300 hover:bg-white/[0.06] hover:border-white/20'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                <FiDownload size={16} />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {[
                { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
                { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                    theme === 'dark'
                      ? 'text-gray-500 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.12]'
                      : 'text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
              
              {/* Animated ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" 
                   style={{ borderRadius: '50%' }} />
              
              {/* Image */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-surface-950">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>

              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-30">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary-400" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className={`text-xs tracking-widest uppercase ${
          theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
        }`}>
          Scroll
        </span>
        <div className={`w-5 h-8 rounded-full border-2 flex items-start justify-center p-1 ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
        }`}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
