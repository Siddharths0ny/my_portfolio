import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiCpu, FiUsers, FiTerminal } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { aboutText } from '../data/portfolio';

// Interactive mini terminal
function MiniTerminal() {
  const { theme } = useTheme();
  const lines = [
    { prompt: true, text: 'cat siddharth.json' },
    { prompt: false, text: '{' },
    { prompt: false, text: '  "name": "Siddharth Sony",' },
    { prompt: false, text: '  "role": "Full Stack Developer",' },
    { prompt: false, text: '  "education": "B.Tech CSE (AI & ML)",' },
    { prompt: false, text: '  "passion": "Building impactful products",' },
    { prompt: false, text: '  "status": "Ready to create 🚀"' },
    { prompt: false, text: '}' },
  ];

  return (
    <div className={`rounded-2xl overflow-hidden font-mono text-sm ${
      theme === 'dark'
        ? 'bg-[#0d1117] border border-white/[0.06]'
        : 'bg-gray-900 border border-gray-700'
    }`}>
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-gray-500">terminal</span>
      </div>
      {/* Content */}
      <div className="p-4 space-y-1">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            viewport={{ once: true }}
          >
            {line.prompt ? (
              <span>
                <span className="text-emerald-400">➜ </span>
                <span className="text-cyan-400">~/portfolio </span>
                <span className="text-gray-300">{line.text}</span>
              </span>
            ) : (
              <span className={`${
                line.text.includes(':')
                  ? ''
                  : 'text-gray-400'
              }`}>
                {line.text.includes('"') ? (
                  <>
                    <span className="text-gray-500">{line.text.split('"')[0]}</span>
                    <span className="text-purple-400">"{line.text.split('"')[1]}"</span>
                    <span className="text-gray-500">{line.text.split('"')[2]}</span>
                    <span className="text-amber-300">{line.text.split('"')[3] ? `"${line.text.split('"')[3]}"` : ''}</span>
                    <span className="text-gray-500">{line.text.split('"')[4] || ''}</span>
                  </>
                ) : (
                  <span className="text-gray-400">{line.text}</span>
                )}
              </span>
            )}
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="pt-1"
        >
          <span className="text-emerald-400">➜ </span>
          <span className="text-cyan-400">~/portfolio </span>
          <span className="w-2 h-4 bg-gray-300 inline-block animate-blink" />
        </motion.div>
      </div>
    </div>
  );
}

export default function About() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: FiCode, label: 'Full Stack', desc: 'React, Node, MongoDB' },
    { icon: FiCpu, label: 'AI & ML', desc: 'Python, CNN, Deep Learning' },
    { icon: FiUsers, label: 'Leader', desc: 'Technovation Club, GDG' },
    { icon: FiTerminal, label: 'Builder', desc: '3+ production apps' },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`section-padding relative overflow-hidden ${
        theme === 'dark' ? 'bg-surface-950' : 'bg-gray-50/50'
      }`}
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary-400 text-sm font-mono tracking-wider mb-3 uppercase">
            // About Me
          </p>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Getting to know
            <span className="gradient-text-static"> me</span>
            <span className="text-primary-500">.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Story */}
          <div className="space-y-6">
            {[aboutText.intro, aboutText.story, aboutText.current, aboutText.passion].map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className={`text-base md:text-[17px] leading-relaxed ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                } ${i === 0 ? (theme === 'dark' ? 'text-gray-300' : 'text-gray-700') + ' font-medium' : ''}`}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Highlight cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="grid grid-cols-2 gap-3 pt-4"
            >
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <div
                  key={label}
                  className={`p-4 rounded-xl transition-all duration-300 group cursor-default ${
                    theme === 'dark'
                      ? 'bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-primary-500/20'
                      : 'bg-white border border-gray-200 hover:border-primary-300 hover:shadow-md'
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-2 ${
                    theme === 'dark' ? 'text-primary-400' : 'text-primary-500'
                  } group-hover:scale-110 transition-transform`} />
                  <p className={`text-sm font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{label}</p>
                  <p className={`text-xs mt-0.5 ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                  }`}>{desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:sticky lg:top-28"
          >
            <MiniTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
